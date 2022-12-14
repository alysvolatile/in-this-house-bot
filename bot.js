const Discord = require('discord.io');
const logger = require('winston');
require('dotenv').config()
const auth_token = process.env.TOKEN

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
let bot = new Discord.Client({
    token: auth_token,
    autorun: true
});

bot.on('ready', function(event) { 
    console.log('connected!')
});

bot.on('ready', function (event) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, event) {

// Our bot needs to know if it will execute a command
// It will listen for messages that will start with `!`
console.log('event: ', event)
if (message.substring(0, 1) == '!') {
    let args = message.substring(1).split(' ');
    let cmd = args[0].toLowerCase();
    console.log("command", cmd)
    args = args.splice(1);
    args = args.join(" ")
    console.log('args: ', args)

    switch(cmd) {
        // !ping
        case 'ping':
            bot.sendMessage({
                to: channelID,
                message: `Pong!`,
                typing: true,
            });
        // !house
        case 'house':
            if (args.length === 0) {
                bot.sendMessage({
                    to: channelID,
                    message: ` ❤️
                        ┏┓ 
                        ┃┃╱╲ in 
                        ┃╱╱╲╲ this 
                        ╱╱╭╮╲╲house 
                        ▔▏┗┛▕▔ we 
                        ╱▔▔▔▔▔▔▔▔▔▔╲ 
                        love putting 
                        text here.
                        ╱╱┏┳┓╭╮┏┳┓ ╲╲ 
                        ▔▏┗┻┛┃┃┗┻┛▕▔`,
                    typing: false,
                });
            } else if (args.length > 25) {
                console.log("split up args: ", args)
                args = args.split(/[\\.!,\?]/);
                console.log("here are the split args: ", args)
                bot.sendMessage({
                    to: channelID,
                    message: ` ❤️
                        ┏┓ 
                        ┃┃╱╲ in 
                        ┃╱╱╲╲ this 
                        ╱╱╭╮╲╲house 
                        ▔▏┗┛▕▔ we 
                        ╱▔▔▔▔▔▔▔▔▔▔╲ 
                        ${args}
                        ╱╱┏┳┓╭╮┏┳┓ ╲╲ 
                        ▔▏┗┻┛┃┃┗┻┛▕▔`,
                    typing: false,
                });
            } else {
                bot.sendMessage({
                    to: channelID,
                    message: ` ❤️
                        ┏┓ 
                        ┃┃╱╲ in 
                        ┃╱╱╲╲ this 
                        ╱╱╭╮╲╲house 
                        ▔▏┗┛▕▔ we 
                        ╱▔▔▔▔▔▔▔▔▔▔╲ 
                        ${args}
                        ╱╱┏┳┓╭╮┏┳┓ ╲╲ 
                        ▔▏┗┻┛┃┃┗┻┛▕▔`,
                    typing: false,
                });
            }
        break;
     }
 }
});

