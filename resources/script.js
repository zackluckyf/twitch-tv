$(document).ready(function(){
    "use strict";
    
    var twitchChannels = ["flosd","freecodecamp", "storbeck", "beohoff", "brunofin", "comster404"];
    
    function twitch(i){
        $.getJSON('https://api.twitch.tv/kraken/streams/' + twitchChannels[i] + '?callback=?', function(data) {
            var j = i + 1;
            if(data.stream === undefined){
                $('.stream' + (j).toString()).html(twitchChannels[i]);
                $('.text' + (j).toString()).html("Account Closed");
                $('.stream' + (j).toString()).closest('li').css("background-color", "grey")
                                             .parent().css("cursor", "default");
            }
            else if(data.stream === null){
                $('.stream' + (j).toString()).html(twitchChannels[i]);
                $('.text' + (j).toString()).html("Offline");
                $('.stream' + (j).toString()).closest('li').css("background-color", "red")
                                             .parent().attr('href', "https://www.twitch.tv/" + twitchChannels[i]);
                console.log($('.stream' + (j).toString()).parent().attr('href', "https://www.twitch.tv/" + twitchChannels[i]));
            }
            else if(data.stream.channel.status){
                $('.stream' + (j).toString()).html(twitchChannels[i]);
                $('.text' + (j).toString()).html(data.stream.channel.status);
                var url = data._links.self;
                $('.stream' + (j).toString()).closest('li').css("background-color", "green")
                                             .parent().attr('href', "https://www.twitch.tv/" + twitchChannels[i]);
                console.log($('.stream' + (j).toString()).parent().attr('href', "https://www.twitch.tv/" + twitchChannels[i]));
            }
        });
    }
                  
    for(var i = 0; i < twitchChannels.length+1; i++){
        twitch(i);
    }   
    
    
});

