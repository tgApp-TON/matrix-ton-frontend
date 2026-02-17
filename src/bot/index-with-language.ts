/**
 * Matrix TON Bot with Language Selection
 */

import { Bot, InlineKeyboard, Keyboard } from 'grammy';
import { createClient } from '@supabase/supabase-js';
import { loadTranslations, getUserLanguageByTelegramId, Language } from '@/services/i18n';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Bot(process.env.MAIN_BOT_TOKEN!);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Кеш переводов для каждого пользователя
const userTranslations = new Map<number, Record<string, string>>();

// Получить переводы для пользователя
async function getUserTranslations(telegramId: number) {
  if (userTranslations.has(telegramId)) {
    return userTranslations.get(telegramId)!;
  }
  
  const lang = await getUserLanguageByTelegramId(supabase, telegramId);
  const translations = await loadTranslations(supabase, lang);
  userTranslations.set(telegramId, translations);
  
  return translations;
}

function t(trans: Record<string, string>, key: string, fallback?: string): string {
  return trans[key] || fallback || key;
}

// Показать выбор языка
async function showLanguageSelection(ctx: any) {
  const { data: languages } = await supabase
    .from('Language')
    .select('code, name, flag')
    .eq('isActive', true)
    .order('name');
  
  if (!languages || languages.length === 0) {
    await ctx.reply('Error loading languages');
    return;
  }

  const keyboard = new InlineKeyboard();
  
  // Группируем по 2 в ряд
  for (let i = 0; i < languages.length; i += 2) {
    const lang1 = languages[i];
    const lang2 = languages[i + 1];
    
    keyboard.text(`${lang1.flag} ${lang1.name}`, `lang_${lang1.code}`);
    if (lang2) {
      keyboard.text(`${lang2.flag} ${lang2.name}`, `lang_${lang2.code}`);
    }
    keyboard.row();
  }
  
  await ctx.reply(
    '🌍 Select your language / Выберите язык\n' +
    'Wybierz język / 选择语言 / اختر اللغة',
    { reply_markup: keyboard }
  );
}

// Создать главное меню
function createMainMenu(trans: Record<string, string>) {
  return new Keyboard()
    .text(t(trans, 'menu_profile', '👤 Profile'))
    .text(t(trans, 'menu_tables', '📊 My Tables')).row()
    .text(t(trans, 'menu_referrals', '👥 Referrals'))
    .text(t(trans, 'menu_balance', '💰 Balance')).row()
    .text(t(trans, 'menu_faq', '📖 FAQ'))
    .text(t(trans, 'menu_settings', '⚙️ Settings'))
    .resized();
}

// Команда /start
bot.command('start', async (ctx) => {
  if (!ctx.from) return;
  
  const { data: user } = await supabase
    .from('User')
    .select('id, language')
    .eq('telegramId', ctx.from.id)
    .maybeSingle();
  
  if (!user) {
    // Новый пользователь — показываем выбор языка
    await showLanguageSelection(ctx);
  } else {
    // Существующий пользователь
    const trans = await getUserTranslations(ctx.from.id);
    
    await ctx.reply(
      t(trans, 'welcome_title', '🎉 Welcome to Matrix TON!') + '\n\n' +
      t(trans, 'welcome_description', '🚀 Automatic matrix system'),
      { reply_markup: createMainMenu(trans) }
    );
  }
});

// Обработка выбора языка
bot.on('callback_query:data', async (ctx) => {
  const data = ctx.callbackQuery.data;
  
  if (data.startsWith('lang_')) {
    const langCode = data.replace('lang_', '') as Language;
    
    // Сохраняем язык в БД
    await supabase
      .from('User')
      .update({ language: langCode })
      .eq('telegramId', ctx.from!.id);
    
    // Очищаем кеш
    userTranslations.delete(ctx.from!.id);
    
    // Загружаем переводы
    const trans = await getUserTranslations(ctx.from!.id);
    
    await ctx.answerCallbackQuery({ 
      text: t(trans, 'language_changed', 'Language changed!') 
    });
    
    await ctx.reply(
      t(trans, 'welcome_title', '🎉 Welcome!') + '\n\n' +
      t(trans, 'welcome_description', '🚀 Matrix system'),
      { reply_markup: createMainMenu(trans) }
    );
  }
  
  // Смена языка из настроек
  if (data === 'change_language') {
    await showLanguageSelection(ctx);
    await ctx.answerCallbackQuery();
  }
});

// Кнопка "⚙️ Настройки"
bot.hears(/^⚙️/, async (ctx) => {
  if (!ctx.from) return;
  
  const trans = await getUserTranslations(ctx.from.id);
  
  const keyboard = new InlineKeyboard()
    .text('🌐 ' + t(trans, 'settings_language', 'Language'), 'change_language')
    .row()
    .text('🔔 ' + t(trans, 'settings_notifications', 'Notifications'), 'settings_notif');
  
  await ctx.reply(
    t(trans, 'settings_title', '⚙️ Settings'),
    { reply_markup: keyboard }
  );
});

// Кнопка "👤 Профиль"
bot.hears(/^👤/, async (ctx) => {
  if (!ctx.from) return;
  
  const trans = await getUserTranslations(ctx.from.id);
  
  await ctx.reply(
    t(trans, 'profile_title', '👤 Your Profile') + '\n\n' +
    'ID: ' + ctx.from.id + '\n' +
    t(trans, 'menu_tables', 'Tables') + ': 0/12'
  );
});

console.log('🤖 Matrix TON Bot started with language support!');
bot.start();
