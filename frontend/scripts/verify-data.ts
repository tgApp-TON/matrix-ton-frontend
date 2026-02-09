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

async function verifyData() {
  console.log('🔍 Verifying all data...\n');

  // Count users
  const { count: userCount, error: e1 } = await supabase
    .from('User')
    .select('*', { count: 'exact', head: true });
  console.log(`👥 Users: ${userCount || 0}`);

  // Count tables
  const { count: tableCount, error: e2 } = await supabase
    .from('Table')
    .select('*', { count: 'exact', head: true });
  console.log(`📊 Tables: ${tableCount || 0}`);

  // Count positions
  const { count: posCount, error: e3 } = await supabase
    .from('TablePosition')
    .select('*', { count: 'exact', head: true });
  console.log(`🎯 Positions: ${posCount || 0}`);

  // Count transactions
  const { count: txCount, error: e4 } = await supabase
    .from('Transaction')
    .select('*', { count: 'exact', head: true });
  console.log(`💰 Transactions: ${txCount || 0}`);

  // Check MASTER user
  console.log('\n👑 Checking MASTER user...');
  const { data: master, error: e5 } = await supabase
    .from('User')
    .select('id, nickname, role')
    .eq('id', 1)
    .single();
  
  if (master) {
    console.log(`✅ MASTER exists: ${master.nickname} (role: ${master.role})`);
  } else {
    console.log('❌ MASTER not found!');
  }

  // Check MASTER tables
  const { count: masterTables, error: e6 } = await supabase
    .from('Table')
    .select('*', { count: 'exact', head: true })
    .eq('userId', 1);
  console.log(`✅ MASTER tables: ${masterTables || 0}/12`);

  // Check test users
  console.log('\n🧪 Checking test users...');
  const testUsers = ['TestPL999', 'TestUser', 'User222333'];
  
  for (const nickname of testUsers) {
    const { data, error } = await supabase
      .from('User')
      .select('id, nickname')
      .eq('nickname', nickname)
      .maybeSingle();
    
    if (data) {
      console.log(`✅ ${nickname} exists (ID: ${data.id})`);
    } else {
      console.log(`ℹ️  ${nickname} not found (may not exist)`);
    }
  }

  // Check metadata integrity
  console.log('\n📋 Checking metadata...');
  const { data: usersWithMeta, error: e7 } = await supabase
    .from('User')
    .select('id, nickname, metadata')
    .not('metadata', 'is', null);
  
  console.log(`✅ Users with metadata: ${usersWithMeta?.length || 0}`);
  
  if (usersWithMeta && usersWithMeta.length > 0) {
    console.log('\nSample metadata users:');
    usersWithMeta.slice(0, 3).forEach(user => {
      console.log(`  - ${user.nickname} (ID: ${user.id}):`, 
        user.metadata ? 'Has metadata' : 'No metadata');
    });
  }

  console.log('\n✅ Data verification complete!');
}

verifyData().catch(console.error);
