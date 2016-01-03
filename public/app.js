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
	  			$('.twitch-showlogo').show()
			  }
			  else {
			  	$('.twitch-loggedin').hide()
			  	$('.twitch-showlogo').hide()
			  }
	  	});

    $('.twitch-connect').click(function() {
	  Twitch.login({
	    scope: ['user_read', 'channel_read']
	  });
	})
});

		//If we are a stb, set the resolution
		if (!!navigator.setResolution) {
		  navigator.setResolution(1920, 1080);
		}

		function keyHandler(e){
			var code = e.keyCode
				, container = document.getElementById('key-down');

			//Don't for get to put a BREAK after every case OR it will
			//Fall through like it does below.
			switch(code)	{	
		        case 13: // Select / Enter
		        case 48 : // 0
		        case 49 : // 1
		        case 50 : // 2
		        case 51 : // 3
		        case 52 : // 4
		        case 53 : // 5
		        case 54 : // 6
		        case 55 : // 7
		        case 56 : // 8
		        case 57 : // 9
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