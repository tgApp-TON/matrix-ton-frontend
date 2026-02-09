-- View 1: User statistics summary
CREATE OR REPLACE VIEW user_stats_view AS
SELECT 
  u.id,
  u.nickname,
  u."telegramUsername",
  u.metadata->>'country' as country,
  u."registeredAt",
  
  -- Tables stats
  COUNT(DISTINCT t.id) as total_tables,
  COUNT(DISTINCT CASE WHEN t.status = 'ACTIVE' THEN t.id END) as active_tables,
  SUM(t."cycleNumber") as total_cycles,
  
  -- Referrals stats
  (SELECT COUNT(*) FROM "User" r WHERE r."referrerId" = u.id) as direct_referrals,
  
  -- Earnings (after 10% commission)
  COALESCE(SUM(CAST(tp."amountPaid" AS decimal) * 0.9), 0) as total_earned
  
FROM "User" u
LEFT JOIN "Table" t ON t."userId" = u.id
LEFT JOIN "TablePosition" tp ON tp."partnerUserId" = u.id AND tp.status = 'PAID_OUT'
GROUP BY u.id, u.nickname, u."telegramUsername", u.metadata, u."registeredAt";

-- View 2: Referral tree with stats
CREATE OR REPLACE VIEW referral_tree_view AS
SELECT 
  ref.id,
  ref.nickname,
  ref."telegramUsername",
  ref."referrerId",
  sponsor.nickname as sponsor_nickname,
  
  -- Referral's stats
  (SELECT COUNT(*) FROM "Table" WHERE "userId" = ref.id AND status = 'ACTIVE') as active_tables,
  (SELECT COUNT(*) FROM "User" WHERE "referrerId" = ref.id) as their_referrals,
  
  -- Earnings
  (SELECT COALESCE(SUM(CAST("amountPaid" AS decimal) * 0.9), 0) 
   FROM "TablePosition" 
   WHERE "partnerUserId" = ref.id AND status = 'PAID_OUT') as total_earned,
   
  ref."registeredAt"
  
FROM "User" ref
LEFT JOIN "User" sponsor ON sponsor.id = ref."referrerId";

-- View 3: Top earners
CREATE OR REPLACE VIEW top_earners_view AS
SELECT * FROM user_stats_view
ORDER BY total_earned DESC
LIMIT 100;
