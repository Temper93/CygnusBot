module.exports = {
    //FUNC: listExped, lists current specified exped
    list : function(args, client, message) {
        if (args[0] === undefined || args[0] === ' ' || args[0].length === 0) {
            message.delete(5000)
                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                .catch(console.error);
        
            message.channel.send('<@' + message.author.id + '>, please enter an expedition name. e.g. >list testGroup')
                .then(msg => msg.delete(5000))
                .catch(console.error);
        } else {
            for (var i = 0; i < expeditions.length; i++) {
                if (expeditions[i].name === args[0]) {
                    //exped found
                    message.delete(5000)
                        .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                        .catch(console.error);

                    let str = '';

                    for (let j = 0; j < expeditions[i].expedMembers.length; j++) {

                        //console.log(message.guild.members.get(expeditions[i].expedMembers[j].id).displayName);

                        if (str.length > 0) {
                            str = str + '\n';
                        }
                        if (j > 9) {
                            str = str + 'Backup: ';
                        }
                        str = str + ':white_check_mark: ' + message.guild.members.get(expeditions[i].expedMembers[j].id).displayName.toString();
                    }

                    if (str.length == 0) {
                        str = "Nobody currently signed up :sob:"; 
                    }

                    message.author.send('Currently signed up to ' + expeditions[i].name + ': \n>>> ' + str);

                    return;
                }
            }  

            message.delete(5000)
                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                .catch(console.error);

            message.channel.send('<@' + message.author.id + '>, an expedition group with this name does not exist. Please try a different name.')
                .then(msg => msg.delete(5000))
                .catch(console.error);
        }
    },

    listAll : function(args, client, message) {
        for (var i = 0; i < expeditions.length; i++) {
            let str = '';

            for (let j = 0; j < expeditions[i].expedMembers.length; j++) {

                //console.log(message.guild.members.get(expeditions[i].expedMembers[j].id).displayName);
                
                if (str.length > 0) {
                    str = str + '\n';
                }
                if (j > 9) {
                    str = str + 'Backup: ';
                }
                str = str + ':white_check_mark: ' + message.guild.members.get(expeditions[i].expedMembers[j].id).displayName.toString();
            }

            if (str.length == 0) {
                str = "Nobody currently signed up :sob:"; 
            }

            message.author.send('Currently signed up to ' + expeditions[i].name + ': \n>>> ' + str);
        }

        message.delete(5000)
            .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
            .catch(console.error);
    },

    //FUNC: listExped, lists current specified exped
    announce : function(args, client, message) {
        if (args[0] === undefined || args[0] === ' ' || args[0].length === 0) {
            message.delete(5000)
                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                .catch(console.error);
        
            message.channel.send('<@' + message.author.id + '>, please enter an expedition name. e.g. >list testGroup')
                .then(msg => msg.delete(5000))
                .catch(console.error);
        } else {
            for (var i = 0; i < expeditions.length; i++) {
                if (expeditions[i].name === args[0]) {
                    //exped found
                    message.delete(5000)
                        .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                        .catch(console.error);

                    let str = '';

                    for (let j = 0; j < expeditions[i].expedMembers.length; j++) {

                        //console.log(message.guild.members.get(expeditions[i].expedMembers[j].id).displayName);

                        if (str.length > 0) {
                            str = str + '\n';
                        }
                        if (j > 9) {
                            str = str + 'Backup: ';
                        }
                        str = str + '<@' + expeditions[i].expedMembers[j].id + '>';
                    }

                    message.channel.send('Partipants for this expedition: ');
                    message.channel.send('>>> ' + str );

                    return;
                }
            }  

            message.delete(5000)
                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                .catch(console.error);

            message.channel.send('<@' + message.author.id + '>, an expedition group with this name does not exist. Please try a different name.')
                .then(msg => msg.delete(5000))
                .catch(console.error);
        }
    }
}