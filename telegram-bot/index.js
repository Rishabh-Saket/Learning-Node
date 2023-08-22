const { Telegraf } = require('telegraf');
const axios=require('axios');
/*
bot link---> https://t.me/justNameItManBot

token--> Done! Congratulations on your new bot. You will find it at t.me/justNameItManBot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
5974178417:AAEo4mAInGgvVsZJV5sVib0UukSnPoJHDOg

Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
1.
*/

let linearSearch=`function linearSearch(arr,x){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===x) return i;
    }
    return -1;
}`;

const bot=new Telegraf('5974178417:AAEo4mAInGgvVsZJV5sVib0UukSnPoJHDOg');
bot.start((ctx) => ctx.reply('Welcome to bot by hidden Naruto Uzumaki'));
bot.command('linearSearch',(ctx)=>ctx.reply(linearSearch));
bot.command('javaExample',async function (ctx){
    const response=await axios.get('https://raw.githubusercontent.com/Rishabh-Saket/Learning-Node/main/async%20await/eg1.js');
    return ctx.reply(response.data);
});
bot.on('sticker',(ctx)=> ctx.reply('😎'));
bot.launch();