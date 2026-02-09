import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables from .env.local
const envPath = path.join(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf-8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      process.env[key] = value;
    }
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing required environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testViews() {
  console.log('🧪 Testing SQL Views...\n');

  // Test 1: user_stats_view
  console.log('1️⃣ Testing user_stats_view...');
  const { data: userStats, error: error1 } = await supabase
    .from('user_stats_view')
    .select('*')
    .limit(5);

  if (error1) {
    console.error('❌ Error:', error1.message);
  } else {
    console.log('✅ Success! Found', userStats?.length, 'users');
    if (userStats && userStats.length > 0) {
      console.log('Sample:', JSON.stringify(userStats[0], null, 2));
    }
  }

  // Test 2: referral_tree_view
  console.log('\n2️⃣ Testing referral_tree_view...');
  const { data: refTree, error: error2 } = await supabase
    .from('referral_tree_view')
    .select('*')
    .eq('referrerId', 1)
    .limit(5);

  if (error2) {
    console.error('❌ Error:', error2.message);
  } else {
    console.log('✅ Success! Found', refTree?.length, 'referrals under MASTER');
    if (refTree && refTree.length > 0) {
      console.log('Sample:', JSON.stringify(refTree[0], null, 2));
    }
  }

  // Test 3: top_earners_view
  console.log('\n3️⃣ Testing top_earners_view...');
  const { data: topEarners, error: error3 } = await supabase
    .from('top_earners_view')
    .select('*')
    .limit(5);

  if (error3) {
    console.error('❌ Error:', error3.message);
  } else {
    console.log('✅ Success! Found', topEarners?.length, 'top earners');
    if (topEarners && topEarners.length > 0) {
      console.log('Top earner:', JSON.stringify(topEarners[0], null, 2));
    }
  }

  // Test 4: Specific user query
  console.log('\n4️⃣ Testing specific user (TestPL999)...');
  const { data: testUser, error: error4 } = await supabase
    .from('user_stats_view')
    .select('*')
    .eq('nickname', 'TestPL999')
    .single();

  if (error4) {
    console.error('❌ Error:', error4.message);
  } else {
    console.log('✅ Success!');
    console.log('TestPL999 stats:', JSON.stringify(testUser, null, 2));
  }

  console.log('\n✅ All tests complete!');
}

testViews().catch(console.error);
