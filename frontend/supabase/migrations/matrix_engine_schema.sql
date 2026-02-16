-- Matrix TON engine schema (run in Supabase SQL Editor)
-- TASK 4: Add walletBalance to User; create MatrixTable, PayoutLog, AppRevenue

-- 1. User: add walletBalance if not exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'User' AND column_name = 'walletBalance'
  ) THEN
    ALTER TABLE "User" ADD COLUMN "walletBalance" DECIMAL(20,9) NOT NULL DEFAULT 0;
  END IF;
END $$;

-- 2. MatrixTable: new table for slot-based matrix logic (1-12 tables per user)
CREATE TABLE IF NOT EXISTS "MatrixTable" (
  "id" SERIAL NOT NULL,
  "userId" INTEGER NOT NULL,
  "tableNumber" INTEGER NOT NULL,
  "slot1" INTEGER,
  "slot2" INTEGER,
  "slot3" INTEGER,
  "slot4" INTEGER,
  "frozen2Amount" DECIMAL(20,9),
  "status" TEXT NOT NULL DEFAULT 'ACTIVE',
  "cycleCount" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "MatrixTable_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "MatrixTable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "MatrixTable_userId_tableNumber_key"
  ON "MatrixTable"("userId", "tableNumber");

CREATE INDEX IF NOT EXISTS "MatrixTable_userId_idx" ON "MatrixTable"("userId");
CREATE INDEX IF NOT EXISTS "MatrixTable_tableNumber_idx" ON "MatrixTable"("tableNumber");

-- 3. PayoutLog: audit log for slot payouts
CREATE TABLE IF NOT EXISTS "PayoutLog" (
  "id" SERIAL NOT NULL,
  "fromUserId" INTEGER NOT NULL,
  "toUserId" INTEGER NOT NULL,
  "amount" DECIMAL(20,9) NOT NULL,
  "tableNumber" INTEGER NOT NULL,
  "slotNumber" INTEGER NOT NULL,
  "type" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "PayoutLog_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "PayoutLog_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "PayoutLog_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "PayoutLog_toUserId_createdAt_idx" ON "PayoutLog"("toUserId", "createdAt");

-- 4. AppRevenue: platform commission and gas
CREATE TABLE IF NOT EXISTS "AppRevenue" (
  "id" SERIAL NOT NULL,
  "amount" DECIMAL(20,9) NOT NULL,
  "type" TEXT NOT NULL,
  "sourceUserId" INTEGER NOT NULL,
  "tableNumber" INTEGER NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "AppRevenue_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "AppRevenue_sourceUserId_fkey" FOREIGN KEY ("sourceUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "AppRevenue_type_createdAt_idx" ON "AppRevenue"("type", "createdAt");
