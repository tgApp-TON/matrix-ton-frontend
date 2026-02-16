const { Bot } = require('grammy');

const bot = new Bot(process.env.BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply('Welcome to Matrix TON! 🚀', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: '🎯 Open Matrix TON',
          web_app: { url: 'https://matrix-ton-app.vercel.app' }
        }
      ]]
    }
  });
});

bot.start();
console.log('Bot started!');
