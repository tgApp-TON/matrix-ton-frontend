'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type Language = 'en' | 'pl' | 'uk' | 'de' | 'es' | 'hi' | 'vi' | 'zh' | 'ar' | 'ja' | 'ko';

interface LanguageInfo {
  code: Language;
  name: string;
  flag: string;
}

interface LanguageSelectorProps {
  currentLanguage?: Language;
  userId?: number;
  onLanguageChange?: (language: Language) => void;
}

export function LanguageSelector({
  currentLanguage = 'en',
  userId,
  onLanguageChange,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [languages, setLanguages] = useState<LanguageInfo[]>([]);
  const [selectedLang, setSelectedLang] = useState<Language>(currentLanguage);

  useEffect(() => {
    loadLanguages();
  }, []);

  async function loadLanguages() {
    const { data } = await supabase
      .from('Language')
      .select('code, name, flag')
      .eq('isActive', true)
      .order('code');

    if (data) {
      setLanguages(data as LanguageInfo[]);
    }
  }

  async function handleLanguageSelect(lang: Language) {
    setSelectedLang(lang);

    if (userId) {
      await supabase
        .from('User')
        .update({ language: lang })
        .eq('id', userId);
    }

    setIsOpen(false);
    onLanguageChange?.(lang);
  }

  const currentLangInfo = languages.find((l) => l.code === selectedLang);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
      >
        <span className="text-2xl">{currentLangInfo?.flag || '🌐'}</span>
        <span className="text-sm">{currentLangInfo?.name || 'Language'}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Select Language</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`relative flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                    lang.code === selectedLang
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <span className="text-3xl">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                  {lang.code === selectedLang && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function LanguageOnboarding({
  onLanguageSelect,
}: {
  onLanguageSelect: (language: Language) => void;
}) {
  const [languages, setLanguages] = useState<LanguageInfo[]>([]);

  useEffect(() => {
    loadLanguages();
  }, []);

  async function loadLanguages() {
    const { data } = await supabase
      .from('Language')
      .select('code, name, flag')
      .eq('isActive', true)
      .order('code');

    if (data) {
      setLanguages(data as LanguageInfo[]);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4" style={{ position: 'relative', zIndex: 9999 }}>
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Matrix TON</h1>
          <p className="text-gray-300">Select your language / Выберите язык</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageSelect(lang.code)}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-700 hover:border-blue-500 bg-gray-800/50 hover:bg-gray-800 transition-all"
            >
              <span className="text-5xl">{lang.flag}</span>
              <span className="text-base font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function useTranslations(language: Language) {
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  async function loadTranslations(lang: Language) {
    const { data } = await supabase.rpc('get_translations', {
      p_language_code: lang,
    });

    if (data) {
      const trans: Record<string, string> = {};
      for (const row of data as { key: string; value: string }[]) {
        trans[row.key] = row.value;
      }
      setTranslations(trans);
    }
  }

  function t(key: string, fallback?: string): string {
    return translations[key] || fallback || key;
  }

  return { t, translations };
}
