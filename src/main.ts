import { Telegraf } from "telegraf";
import "dotenv/config";

let { CHANEL_ID, BOT_TOKEN } = process.env;
CHANEL_ID = String(CHANEL_ID);

const bot = new Telegraf(String(BOT_TOKEN));

bot.command("start", async (ctx) => {
    await ctx.reply("@daily_reminderuz")
    await ctx.reply("👨🏻‍💻 Developer: @abdusalomovdev")
})

const messages = [
    "say:\n <blockquote><b>Subhanallohil Aziym 🌙</b></blockquote>",
    "say:\n <blockquote><b>Bismillah ☝🏻</b></blockquote>",
    "say:\n <blockquote><b>La ilaha Ilallah ☝🏻  Muhammad ﷺ RasulAllah 🌙</b></blockquote>",
    "say:\n <blockquote><b>La havla, va la quvvata Illa Billah! 🕋☝🏻</b></blockquote>",
    "say:\n <blockquote><b>Alhamdulillah 🌙</b></blockquote>",
    "say:\n <blockquote><b>Astag'firullah ☝🏻</b></blockquote>",
    "say:\n <blockquote><b>Allahu Akbar🕋☝🏻</b></blockquote>",
    "say:\n <blockquote><b>Astag'firullohi va atubi ilayhi🌙</b></blockquote>",
    "say:\n <blockquote><b>Astag'firullah al Aziym🕋☝🏻</b></blockquote>",
    "say:\n <blockquote><b>Allohuma solli a'la say:\nyiddina Muhammad ﷺ🕋☝🏻</b></blockquote>",
    "say:\n <blockquote><b>Hasbunallohu va ne'mal vakiyl🌙</b></blockquote>",
    "say:\n <blockquote><b>SubhanAllah☝🏻</b></blockquote>",
    "say:\n <blockquote><b>Subhanallohi va Bihamdihi🌙</b></blockquote>",
];

setInterval(() => {
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const currentSeconds = new Date().getSeconds();
    if (currentHour == 0 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[0], {
            parse_mode: "HTML",
        });
    }
    if (currentHour == 13 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[1], {
            parse_mode: "HTML",
        });
    }
    if (currentHour == 14 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[2], {
            parse_mode: "HTML",
        });
    }
    if (currentHour == 15 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[3], {
            parse_mode: "HTML",
        });
    }
    if (currentHour == 16 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[4], {
            parse_mode: "HTML",
        });
    }
    if (currentHour == 17 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[5], {
            parse_mode: "HTML",
        });
    }
    if (currentHour == 6 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[6], {
            parse_mode: "HTML",
        });
    }
    if (currentHour == 7 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[7], {
            parse_mode: "HTML",
        });
    }
    if (currentHour == 8 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[8], {
            parse_mode: "HTML",
        });
    }
    if (currentHour == 9 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[9], {
            parse_mode: "HTML",
        });
    }

    if (currentHour == 10 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[10], {
            parse_mode: "HTML",
        });
    }

    if (currentHour == 11 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[11], {
            parse_mode: "HTML",
        });
    }

    if (currentHour == 12 && currentMinute == 0 && currentSeconds == 0) {
        bot.telegram.sendMessage(CHANEL_ID, messages[12], {
            parse_mode: "HTML",
        });
    } else {
        // console.log("EE");
    }
}, 1000);

bot.launch();
