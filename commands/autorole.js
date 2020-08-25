const AutoRole = require("discord-streaming");
 
AutoRole(bot, {
    "serverid1" : {
        "prefix" : "h!",
        "roles" : 
        {
            "australia" : "Australia",
            "austria" : "Austria"
        },
        "helpcmd" :  "location",
        "msg" : "Please use one of the following command to assign or remove the desired group:",
        "prunetimer" : "30" 
    },
    "serverid2" : {
        "prefix" : "h!",
        "roles" : 
        {
            "tomato" : "Tomato Group",
            "potato" : "potatogroupid",
        },
        "helpcmd" :  "location",
        "msg" : "Please use one of the following command to assign or remove the desired group:",
        "prunetimer" : "30" 
    }
});