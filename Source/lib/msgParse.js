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
            case "!register":
                if (msgString.substr(0,msgString.indexOf(' ')).length > 1) {

                }
                
                else {
                    message.reply("I'm sorry, I couldn't understand that! :(\n\nTo use this command, please use !register firstName lastName");
                }
                break;
        }

    }
};