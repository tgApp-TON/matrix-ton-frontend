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

async function checkSchema() {
  console.log('🔍 Checking database schema...\n');

  // Check User table
  console.log('📋 User table columns:');
  const { data: users, error: userError } = await supabase
    .from('User')
    .select('*')
    .limit(1);
  
  if (userError) {
    console.error('❌ User table error:', userError);
  } else {
    console.log('✅ User table OK');
    if (users && users[0]) {
      console.log('Columns:', Object.keys(users[0]));
    }
  }

  // Check Table table
  console.log('\n📋 Table table:');
  const { data: tables, error: tableError } = await supabase
    .from('Table')
    .select('*')
    .limit(1);
  
  if (tableError) {
    console.error('❌ Table error:', tableError);
  } else {
    console.log('✅ Table OK');
  }

  // Check TablePosition
  console.log('\n📋 TablePosition table:');
  const { data: positions, error: posError } = await supabase
    .from('TablePosition')
    .select('*')
    .limit(1);
  
  if (posError) {
    console.error('❌ TablePosition error:', posError);
  } else {
    console.log('✅ TablePosition OK');
  }

  // Check all tables exist
  console.log('\n📋 Checking all tables from schema:');
  const tables_to_check = [
    'User', 'Table', 'TablePosition', 
    'Transaction', 'ActivityLog', 'UserStats',
    'PartnerConfig', 'PendingPayout'
  ];

  for (const tableName of tables_to_check) {
    const { error } = await supabase
      .from(tableName)
      .select('id')
      .limit(1);
    
    if (error) {
      console.error(`❌ ${tableName}:`, error.message);
    } else {
      console.log(`✅ ${tableName} exists`);
    }
  }

  // Check metadata field
  console.log('\n🔍 Checking metadata field:');
  const { data: userWithMeta, error: metaError } = await supabase
    .from('User')
    .select('id, nickname, metadata')
    .eq('nickname', 'TestPL999')
    .single();
  
  if (metaError) {
    console.error('❌ Metadata check error:', metaError);
  } else if (userWithMeta) {
    console.log('✅ Metadata field exists');
    console.log('Sample metadata:', userWithMeta.metadata);
  } else {
    console.log('⚠️  TestPL999 user not found, checking any user with metadata...');
    const { data: anyUser, error: anyError } = await supabase
      .from('User')
      .select('id, nickname, metadata')
      .not('metadata', 'is', null)
      .limit(1);
    
    if (anyError) {
      console.error('❌ Error:', anyError);
    } else if (anyUser && anyUser[0]) {
      console.log('✅ Metadata field exists');
      console.log('Sample metadata:', anyUser[0].metadata);
    } else {
      console.log('⚠️  No users with metadata found');
    }
  }

  console.log('\n✅ Schema check complete!');
}

checkSchema().catch(console.error);
