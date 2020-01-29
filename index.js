const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const createExped   = require('./commands/createExped.js');
const joinExped     = require('./commands/joinExped.js');
const leaveExped    = require('./commands/leaveExped.js');
const listExped     = require('./commands/listExped.js');
const disbandExped  = require('./commands/disbandExped.js');

global.expeditions = [];

client.on('message', function(message) {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    let args = message.content.substring(config.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    switch(command) {
        case 'create' :
            if (message.member.hasPermission('ADMINISTRATOR') || message.member.roles.some(role => role.name === 'Mod')) {
                createExped.create(args, client, message);
            } else {
                message.delete(5000)
                    .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                    .catch(console.error); 

                message.channel.send('Invalid Permissions!')
                    .then(msg => msg.delete(5000))
                    .catch(console.error);
            }
            break;
        case 'join' :
            joinExped.join(args, client, message);
            break;
        case 'leave' :
            leaveExped.leave(args, client, message);
            break;
        case 'disband' :
            if (message.member.hasPermission('ADMINISTRATOR') || message.member.roles.some(role => role.name === 'Mod')) {
                disbandExped.disband(args, client, message);
            } else {
                message.delete(5000)
                    .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                    .catch(console.error); 

                message.channel.send('Invalid Permissions!')
                    .then(msg => msg.delete(5000))
                    .catch(console.error);
            }
            break;  
        case 'disbandall' :
            if (message.member.hasPermission('ADMINISTRATOR') || message.member.roles.some(role => role.name === 'Mod')) {
                disbandExped.disbandAll(args, client, message);
            } else {
                message.delete(5000)
                    .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                    .catch(console.error); 

                message.channel.send('Invalid Permissions!')
                    .then(msg => msg.delete(5000))
                    .catch(console.error);
            } 
            break;
        case 'list':
            if (message.member.hasPermission('ADMINISTRATOR') || message.member.roles.some(role => role.name === 'Mod')) {
                listExped.list(args, client, message);
            } else {
                message.delete(5000)
                    .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                    .catch(console.error); 

                message.channel.send('Invalid Permissions!')
                    .then(msg => msg.delete(5000))
                    .catch(console.error);
            }
            break;
        case 'listall':
            if (message.member.hasPermission('ADMINISTRATOR') || message.member.roles.some(role => role.name === 'Mod')) {
                listExped.listAll(args, client, message);
            } else {
                message.delete(5000)
                    .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                    .catch(console.error); 

                message.channel.send('Invalid Permissions!')
                    .then(msg => msg.delete(5000))
                    .catch(console.error);
            }
            break;
        case 'announce' :
            if (message.member.hasPermission('ADMINISTRATOR') || message.member.roles.some(role => role.name === 'Mod')) {
                listExped.announce(args, client, message);
            } else {
                message.delete(5000)
                    .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                    .catch(console.error); 

                message.channel.send('Invalid Permissions!')
                    .then(msg => msg.delete(5000))
                    .catch(console.error);
            }
            break;
        case 'info' :
            message.delete(5000)
                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                .catch(console.error);

            message.channel.send('ExpedBot v1.0 created by <@129331445083668480>');

            break;
        case 'help' :
            message.delete(5000)
                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                .catch(console.error);

            message.author.send({
                embed: {
                    color: 3394611,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: 'ExpedBot >help',
                    description: 'See below a list of all the commands and example usage.',
                    fields: [{
                        name: '>create',
                        value: 'Creates a new expedition (Mod+) e.g. >create testExped'
                    },{
                        name: '>join',
                        value: 'Joins an exped group already created e.g. >join testExped'
                    },{
                        name: '>leave',
                        value: 'Leaves an exped group if already joined e.g. >leave testExped'
                    },{
                        name: '>disband',
                        value: 'Deletes a specified group (Mod+) e.g. >disband testExped'
                    },{
                        name: '>disbandall',
                        value: 'Deletes all groups (Mod+) e.g. >disbandall'
                    },{
                        name: '>list',
                        value: 'Lists participants and DM\'s the user (Mod+) e.g. >list testExped'
                    },{
                        name: '>announce',
                        value: 'Announce and tag participants (Mod+) e.g. >announce testExped'
                    },{
                        name: '>listall',
                        value: 'Lists all current groups and participants (Mod+) e.g. >listall'
                    },{
                        name: '>info',
                        value: 'Version number and bot creator info'
                    }],
                    timestamp: new Date()
                }
            }).catch(console.error);

            break;
        default:
            message.delete(5000)
                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                .catch(console.error); 

            message.channel.send('Invalid Command!')
                .then(msg => msg.delete(5000))
                .catch(console.error);

            break;
    }
});

client.login(config.token);