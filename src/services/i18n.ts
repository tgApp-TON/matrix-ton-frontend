'use client';

/**
 * Matrix TON - i18n Service
 * Загрузка переводов из Supabase
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';

export type Language = 'en' | 'pl' | 'uk' | 'de' | 'es' | 'hi' | 'vi' | 'zh' | 'ar' | 'ja' | 'ko';

export interface LanguageInfo {
  code: Language;
  name: string;
  flag: string;
  isActive: boolean;
}

// Кеш переводов
const translationsCache: Map<Language, Record<string, string>> = new Map();
let cacheExpiry: number = 0;
const CACHE_TTL = 3600000; // 1 час

export async function getAvailableLanguages(
  supabase: SupabaseClient
): Promise<LanguageInfo[]> {
  const { data, error } = await supabase
    .from('Language')
    .select('code, name, flag, isActive')
    .eq('isActive', true)
    .order('code');

  if (error) {
    console.error('Failed to load languages:', error);
    return [];
  }

  return data as LanguageInfo[];
}

export async function loadTranslations(
  supabase: SupabaseClient,
  language: Language
): Promise<Record<string, string>> {
  const cached = translationsCache.get(language);
  if (cached && Date.now() < cacheExpiry) {
    return cached;
  }

  const { data, error } = await supabase.rpc('get_translations', {
    p_language_code: language,
  });

  if (error) {
    console.error(`Failed to load translations for ${language}:`, error);
    return {};
  }

  const translations: Record<string, string> = {};
  for (const row of data as { key: string; value: string }[]) {
    translations[row.key] = row.value;
  }

  translationsCache.set(language, translations);
  cacheExpiry = Date.now() + CACHE_TTL;

  return translations;
}

export function t(
  translations: Record<string, string>,
  key: string,
  fallback?: string
): string {
  return translations[key] || fallback || key;
}

export async function updateUserLanguage(
  supabase: SupabaseClient,
  userId: number,
  language: Language
): Promise<boolean> {
  const { error } = await supabase
    .from('User')
    .update({ language })
    .eq('id', userId);

  return !error;
}

export async function getUserLanguage(
  supabase: SupabaseClient,
  userId: number
): Promise<Language> {
  const { data } = await supabase
    .from('User')
    .select('language')
    .eq('id', userId)
    .single();

  return (data as { language: Language })?.language || 'en';
}

export async function getUserLanguageByTelegramId(
  supabase: SupabaseClient,
  telegramId: number
): Promise<Language> {
  const { data } = await supabase
    .from('User')
    .select('language')
    .eq('telegramId', telegramId)
    .single();

  return (data as { language: Language })?.language || 'en';
}
