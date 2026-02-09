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
  console.error('❌ Missing required environment variables:');
  console.error('   NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✅' : '❌');
  console.error('   SUPABASE_SERVICE_ROLE_KEY:', supabaseKey ? '✅' : '❌');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupViews() {
  console.log('🚀 Setting up Supabase views...');
  
  // Read SQL file
  const sqlPath = path.join(__dirname, '../supabase/views.sql');
  const sql = fs.readFileSync(sqlPath, 'utf-8');
  
  // Split by CREATE statements
  const statements = sql
    .split(/CREATE OR REPLACE VIEW/)
    .filter(s => s.trim())
    .map(s => 'CREATE OR REPLACE VIEW' + s);
  
  console.log(`\n📋 Found ${statements.length} views to create:\n`);
  
  // Display SQL for manual execution
  console.log('='.repeat(80));
  console.log('SQL TO EXECUTE IN SUPABASE SQL EDITOR:');
  console.log('='.repeat(80));
  console.log(sql);
  console.log('='.repeat(80));
  
  console.log('\n⚠️  Note: Supabase client SDK cannot execute DDL statements directly.');
  console.log('📝 Please copy the SQL above and execute it in Supabase SQL Editor:');
  console.log('   https://supabase.com/dashboard/project/ovyukomdxoymgvqhztyv/sql/new\n');
  
  // Try to verify views exist (read-only check)
  console.log('🔍 Checking if views already exist...');
  
  try {
    // Try to query the views (this will fail if they don't exist)
    const { error: statsError } = await supabase
      .from('user_stats_view')
      .select('*')
      .limit(1);
    
    if (!statsError) {
      console.log('✅ user_stats_view exists');
    } else {
      console.log('❌ user_stats_view does not exist yet');
    }
  } catch (err) {
    console.log('❌ Views not found - need to create them manually');
  }
  
  console.log('\n✅ Setup instructions displayed above.');
  console.log('\nAfter executing SQL in Supabase, test with:');
  console.log('  SELECT * FROM user_stats_view LIMIT 5;');
  console.log('  SELECT * FROM referral_tree_view LIMIT 5;');
  console.log('  SELECT * FROM top_earners_view LIMIT 5;');
}

setupViews().catch(console.error);
