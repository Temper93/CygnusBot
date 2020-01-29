module.exports = {
    disband : function(args, client, message) {
        if (args[0] === undefined || args[0] === ' ' || args[0].length === 0) {
            message.delete(5000)
                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                .catch(console.error);
        
            message.channel.send('<@' + message.author.id + '>, please enter an expedition to leave. e.g. >leave testGroup')
                .then(msg => msg.delete(5000))
                .catch(console.error);
        } else {
            for (var i = 0; i < expeditions.length; i++) {
                if (expeditions[i].name === args[0]) {
                    expeditions.splice(i, 1);
                            
                    message.delete()
                        .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                        .catch(console.error);

                    message.channel.send('<@' + message.author.id + '>, expedition disbanded!')
                        .then(msg => msg.delete(5000))
                        .catch(console.error);

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

    disbandAll : function(args, client, message) {
        expeditions = [];

        message.delete()
            .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
            .catch(console.error);

        message.channel.send('<@' + message.author.id + '>, all expeditions disbanded!')
            .then(msg => msg.delete(5000))
            .catch(console.error);
    }
    
}