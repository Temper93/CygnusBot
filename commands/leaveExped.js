module.exports = {
    //FUNC: leaveExped, leaves an expedition if user has already joined.
    leave : function(args, client, message) {
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
                    //exped found

                    for (let j = 0; j < expeditions[i].expedMembers.length; j++) {
                        if (expeditions[i].expedMembers[j].id === message.author.id) {
                            //remove specific user from array at this element
                            expeditions[i].expedMembers.splice(j, 1);
                            
                            message.delete(5000)
                                .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                                .catch(console.error);

                            message.channel.send('<@' + message.author.id + '>, thank you for letting us know you are unavailable.')
                                .then(msg => msg.delete(5000))
                                .catch(console.error);

                            return;
                        }
                    }

                    message.delete(5000)
                        .then(msg => console.log('Deleted message from ' + msg.author.username + '#' + msg.author.discriminator))
                        .catch(console.error);

                    message.channel.send('<@' + message.author.id + '>, you are not currently signed up to this expedition.')
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
    }
}