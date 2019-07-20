// Start of the msgParse file

module.exports = {
    
    // Parse the message to determine if it holds a command
    parseMsg: function(message) {
        var msgString = message.content
        var commandID = ""

        if (msgString.substr(0,msgString.indexOf(' ')).length > 0) {
            commandID = msgString.substr(0,msgString.indexOf(' '));
        }
        else {
            commandID = msgString
        }

        switch(commandID) {
            case "!me":
                message.reply("I'm a developmental bot!")
                break;
            case "!hello":
                    console.log("Triggered");
                    message.reply("Hi!")
                    break;
        }

    }
};