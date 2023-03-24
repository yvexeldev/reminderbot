import { Telegraf } from "telegraf";

const bot = new Telegraf("6042837277:AAGeNy0JBAP5zOuWSS9ZpbdqTvWbvSWB98M");
const CHANEL_ID = "-1001667489032";

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
    if (currentHour == 13 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[1]);
    }
    if (currentHour == 14 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[2]);
    }
    if (currentHour == 15 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[3]);
    }
    if (currentHour == 16 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[4]);
    }
    if (currentHour == 17 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[5]);
    }
    if (currentHour == 6 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[6]);
    }
    if (currentHour == 7 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[7]);
    }
    if (currentHour == 8 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[8]);
    }
    if (currentHour == 9 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[9]);
    }

    if (currentHour == 10 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[10]);
    }

    if (currentHour == 11 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[11]);
    }

    if (currentHour == 12 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[12]);
    } else {
        console.log("EE");
    }
}, 1000);

bot.launch();
