module.exports = {
    //FUNC: joinExped, joins an expedition thats already been created from prev func.
    join : function(args, client, message) {
        if (args[0] === undefined || args[0] === ' ' || args[0].length === 0) {
            message.delete(5000)
                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                .catch(console.error);
        
            message.channel.send('Please enter an expedition to join. e.g. >join testGroup')
                .then(msg => msg.delete(5000))
                .catch(console.error);
        } else {
            for (var i = 0; i < expeditions.length; i++) {
                if (expeditions[i].name === args[0]) {
                    //exped found

                    //check if length is gte 10
                    /*if (expeditions[i].expedMembers.length >= 10) {
                        message.delete(5000)
                            .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                            .catch(console.error);

                        message.channel.send('<@' + message.author.id + '>, this group is already full! Sorry!')
                            .then(msg => msg.delete(5000))
                            .catch(console.error);

                        return;
                    }*/

                    for (let j = 0; j < expeditions[i].expedMembers.length; j++) {
                        if (expeditions[i].expedMembers[j].id === message.author.id) {
                            message.delete(5000)
                                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                                .catch(console.error);

                            message.channel.send('<@' + message.author.id + '>, you are already in this group!')
                                .then(msg => msg.delete(5000))
                                .catch(console.error);

                            return;
                        }
                    }

                    expeditions[i].expedMembers.push(message.author);

                    /*if (expeditions[i].expedMembers.length >= 10) {
                        let groupStr = '';

                        message.channel.send('The group is now full!');
                        message.channel.send('-----------------------');

                        for (let j = 0; j < expeditions[i].expedMembers.length; j++) {
                            if (groupStr.length > 0) {
                                groupStr += ', ';
                            }
                            groupStr += '<@' + expeditions[i].expedMembers[j].id + '>';
                        }

                        message.channel.send('Participants are as follows:\n' + groupStr);
                    } else {*/
                        message.delete()
                            .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                            .catch(console.error);

                        message.channel.send('<@' + message.author.id + '>, thank you for signing up.')
                            .then(msg => msg.delete(5000))
                            .catch(console.error);
                    //}

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