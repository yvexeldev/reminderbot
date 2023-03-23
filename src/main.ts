import { Telegraf } from "telegraf";

const bot = new Telegraf("<BOT_TOKEN>");
const CHANEL_ID = "<CHANNEL_ID>";

const messages = [
    "Say - Subhanallohil Aziym 🌙",
    "Say - Bismillah ☝🏻",
    "Say - La ilaha Ilallaj ☝🏻  Muhammad ﷺ RasulAllah 🌙",
    "Say - La havla, va la quvvata Illa Billah! 🕋☝🏻",
    "Say - Alhamdulillah 🌙",
    "Say - Astag'firullah ☝🏻",
    "Say - Allahu Akbar🕋☝🏻",
    "Say - Astag'firullohi va atubi ilayhi🌙",
    "Say - Astag'firullah al Aziym🕋☝🏻",
    "Say - Allohuma solli a'la sayyiddina Muhammad ﷺ🕋☝🏻",
    "Say - Hasbunallohu va ne'mal vakiyl🌙",
    "Say - SubhanAllah☝🏻",
    "Say - Subhanallohi va Bihamdihi🌙",
];

setInterval(() => {
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const currentSeconds = new Date().getSeconds();
    if (currentHour == 0 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[0]);
    }
    if (currentHour == 1 && currentMinute == 1 && currentSeconds == 1) {
        bot.telegram.sendMessage(CHANEL_ID, messages[1]);
    }
    if (currentHour == 2 && currentMinute == 2 && currentSeconds == 2) {
        bot.telegram.sendMessage(CHANEL_ID, messages[2]);
    }
    if (currentHour == 3 && currentMinute == 3 && currentSeconds == 3) {
        bot.telegram.sendMessage(CHANEL_ID, messages[3]);
    }
    if (currentHour == 4 && currentMinute == 4 && currentSeconds == 4) {
        bot.telegram.sendMessage(CHANEL_ID, messages[4]);
    }
    if (currentHour == 5 && currentMinute == 5 && currentSeconds == 5) {
        bot.telegram.sendMessage(CHANEL_ID, messages[5]);
    }
    if (currentHour == 6 && currentMinute == 6 && currentSeconds == 6) {
        bot.telegram.sendMessage(CHANEL_ID, messages[6]);
    }
    if (currentHour == 7 && currentMinute == 7 && currentSeconds == 7) {
        bot.telegram.sendMessage(CHANEL_ID, messages[7]);
    }
    if (currentHour == 8 && currentMinute == 8 && currentSeconds == 8) {
        bot.telegram.sendMessage(CHANEL_ID, messages[8]);
    }
    if (currentHour == 9 && currentMinute == 9 && currentSeconds == 9) {
        bot.telegram.sendMessage(CHANEL_ID, messages[9]);
    }

    if (currentHour == 10 && currentMinute == 10 && currentSeconds == 10) {
        bot.telegram.sendMessage(CHANEL_ID, messages[10]);
    }

    if (currentHour == 11 && currentMinute == 11 && currentSeconds == 11) {
        bot.telegram.sendMessage(CHANEL_ID, messages[11]);
    }

    if (currentHour == 12 && currentMinute == 12 && currentSeconds == 12) {
        bot.telegram.sendMessage(CHANEL_ID, messages[12]);
    } else {
        console.log("EE");
    }
}, 1000);

bot.launch();
