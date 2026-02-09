-- Migration: Add metadata column to User table
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/ovyukomdxoymgvqhztyv/sql

-- Add metadata column if it doesn't exist
ALTER TABLE "User" 
ADD COLUMN IF NOT EXISTS "metadata" JSONB;

-- Add comment to document the column
COMMENT ON COLUMN "User"."metadata" IS 'Stores additional user data (firstName, lastName, languageCode, phoneNumber, country, registeredAt, registeredFrom)';
