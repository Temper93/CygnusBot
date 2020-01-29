module.exports = {
    //FUNC: createExped, creates an expedition with a name derived from arguments
    create : function (args, client, message) {
        if (args[0] === undefined || args[0] === ' ' || args[0].length === 0) {
            message.delete(5000)
                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                .catch(console.error);

            message.channel.send('<@' + message.author.id + '>, please enter a name for joining expeds. e.g. >create testGroup')
                .then(msg => msg.delete(5000))
                .catch(console.error);
        } else {
            for (var i = 0; i < expeditions.length; i++) {
                if (expeditions[i].name === args[0]) {
                    message.delete(5000)
                        .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                        .catch(console.error);

                    message.channel.send('<@' + message.author.id + '>, an expedition group with this name currently exists. Please try a different name.')
                        .then(msg => msg.delete(5000))
                        .catch(console.error);

                    return;
                }
            }

            let expedGroup = {
                'name' : args[0],
                'createdBy' : message.author,
                'createdAt' : new Date(),
                'expedMembers' : []
            };
    
            expeditions.push(expedGroup);
            
            message.delete()
                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                .catch(console.error);
            
            message.channel.send('====== :shield: :crossed_swords: ======');
            message.channel.send('@everyone, a new expedition group has been created.');
            message.channel.send('To join, type ">join ' + args[0] + '"');
            message.channel.send('.');
            //message.channel.send('Currently there are 0/10 participants');
        }
    }
}