# Overlay for DirecTV
Simple HTML5 app for the DirecTV Set Top Box

Utilizes common languages and tools of the Internet, such as HTML and Javascript, and DirecTV's HTML5 platform, this app enables a user to view their favorite video games and streams without disrupting their television broadcast. Other widgets are included (Sampmle videos). Overlay widgets over your normal TV program.

To RUN: navigate to the public directory and run the following:
  npm install
  node server.js
  In a browser go to localhost:4005
  
Press the following buttons that similate pressing the same buttons on the remote control of the DirecTV Set Top Box:<br>
  1: Home Page that loads the most viewed LoL stream<br>
  2: Sample Messenger Overlay<br>
  3: Sample Newsfeed Overlay<br>
  4: Sample Sports Overlay<br>
  5: None<br>
  6: Loads the most viewed LoL stream<br>
  7: Loads the most viewed Dota2 stream<br>
  8: Loads the most viewed HeartStone stream<br>
  9: Loads the most viewed Counter Strike: GO stream<br>
  
  The direct_tv_overlay_ios folder contains an ios app that is able to use DTV's REST api to make controller commands to the STB. Must have app running on DTV set top box.
