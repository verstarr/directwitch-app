//Application specific code
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    Twitch.init({clientId: '7rxnfnflkejst96s9e4wz21rmc0lxll'}, function(error, status) {
	    	// the sdk is now loaded
	    	console.log("Twitch SDK is now loaded!!!");
	    	  if (error) {
			    // error encountered while loading
			    console.log(error);
			  }



			  // the sdk is now loaded
			  if (status.authenticated) {
			    // user is currently logged in
			    // Already logged in, hide button
	  			$('.twitch-connect').hide()
	  			$('.twitch-loggedin').show()
	  			$.get("https://api.twitch.tv/kraken/users/versizzle", function(data){
			    	$(".twitch-loggedin").append(data.name.toUpperCase())
			    	$(".twitch-pic").append('<img src="' + data.logo +'" style="width: 5%; height: 5%"/>')
			    });
			  }
			  else {
			  	$('.twitch-loggedin').hide()
			  }


			  $.get("https://api.twitch.tv/kraken/streams?game=League+of+Legends", function(data){
			  		console.log(data.streams[2].channel.name)
			  		var twitchURL = "http://www.twitch.tv/" + data.streams[2].channel.name + "/embed";
				  	document.getElementById('twitch-live_channel').src = twitchURL;
			  });
	  	});


    $('.twitch-connect').click(function() {
	  Twitch.login({
	    scope: ['user_read', 'channel_read']
	  });
	})
    //If we are a stb, set the resolution
		if (!!navigator.setResolution) {
		  navigator.setResolution(1920, 1080);
		}



		var player = document.getElementById('twitchSample');

		function keyHandler(e){
			var code = e.keyCode
				, container = document.getElementById('key-down');

			//Don't for get to put a BREAK after every case OR it will
			//Fall through like it does below.
			switch(code)	{	
		        case 13: // Select / Enter
		        case 48 : // 0
		        case 49 : // 1
		        	window.location.replace("index.html");
		        	break;
		        case 50 : // 2
		        	window.location.replace("messenger.html");
		        	break;
		        case 51 : // 3
		        	window.location.replace("newsfeed.html");
		        	break;
		        case 52 : // 4
		        	window.location.replace("sports.html");
		        	break;
		        case 53 : // 5
		        case 54 : // 6
		        	$.get("https://api.twitch.tv/kraken/streams?game=League+of+Legends", function(data){
				  		console.log(data.streams[2].channel.name)
				  		var twitchURL = "http://www.twitch.tv/" + data.streams[2].channel.name + "/embed";
				  		console.log(twitchURL)
				  		document.getElementById('twitch-live_channel').src = "http://www.twitch.tv/" + data.streams[2].channel.name + "/embed";
				  	});
				  	break;
		        case 55 : // 7
		        	$.get("https://api.twitch.tv/kraken/streams?game=Dota+2", function(data){
				  		console.log(data.streams[2].channel.name)
				  		//var twitchURL = "http://www.twitch.tv/" + data.streams[2].channel.name + "/embed";
				  		//console.log(twitchURL)
				  		document.getElementById('twitch-live_channel').src = "http://www.twitch.tv/" + data.streams[2].channel.name + "/embed";
				  	});
				  	break;
		        case 56 : // 8
		        	$.get("https://api.twitch.tv/kraken/streams?game=Hearthstone%3A%20Heroes%20of%20Warcraft", function(data){
				  		console.log(data.streams[2].channel.name)
				  		//var twitchURL = "http://www.twitch.tv/" + data.streams[2].channel.name + "/embed";
				  		//console.log(twitchURL)
				  		document.getElementById('twitch-live_channel').src = "http://www.twitch.tv/" + data.streams[2].channel.name + "/embed";
				  	});
				  	break;
		        case 57 : // 9
		        	$.get("https://api.twitch.tv/kraken/streams?game=Counter-Strike%3A%20Global%20Offensive", function(data){
				  		console.log(data.streams[2].channel.name)
				  		var twitchURL = "http://www.twitch.tv/" + data.streams[2].channel.name + "/embed";
				  		//console.log(twitchURL)
				  		document.getElementById('twitch-live_channel').src = "http://www.twitch.tv/" + data.streams[2].channel.name + "/embed";
				  	});
				  	break;
		        case 79 : // Info
		        case 87 : // Rewind Trick play
		        case 9 : // FF Trick play
		        case 65 : //Active
		        case 67 : // Next Trick play
		        case 72 : // red
		        case 74 : // green
		        case 75 : // yellow
		        case 76 : // blue
		        case 80: // Play Trick play
		        case 82 : // Record Trick play
		        case 83 : // Stop Trick play
		        case 85 : // Pause Trick play
		        case 46 : // Back Trick play
		        case 37: //left
		        case 33: //pageup channelUp
		        case 34: //pagedown channelDown
		        case 38: //up
		        case 39: //right
		        case 40: //down
		        case 47: //back
		        case 189 : //dash
		        default :
		        	container.innerHTML = code;
		        	break;
		    }

			// return false prevents keys from bubbling to UI
			return false;
	  	}

		window.onkeydown = keyHandler;

		window.onerror = function(errorMsg, url, lineNumber){
		   // If Webkit throws an error on the STB - the app crashes.
		   // To prevent the propagation and therefore the crash
		   // return true

		   // Look for this console.log message in the logs
		   // To access the logs use http://{STB_IP}/itv/getLogs
		   console.log(errorMsg);
		   return true;
		 };

});

		