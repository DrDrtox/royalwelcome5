const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516740978225315860");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** ~ Welcome \`2\` RoyaleGames , :wine_glass: **`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
