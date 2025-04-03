const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: process.env.MC_HOST, // Adresa serveru (Aternos)
    port: parseInt(process.env.MC_PORT), // Port serveru
    username: process.env.MC_USERNAME // Jméno bota
});

bot.on('spawn', () => {
    console.log('✅ Bot je připojen na server!');
});
