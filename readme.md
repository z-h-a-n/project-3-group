##Welcome to Soar, an app that allows you to communicate and share while in the air!

Imagine that you are in the air and passing over a remote part of Venezuela. The cabin is a pressurized cell of fidgeting children and boundless boredom, and the thought strikes you that you would like to be somewhere else. In fact it has felt like you have spent the last 3 hours stationary, in the unchanging surroundings of the cabin. 
However you know that you have been travelling at over 800 kilometres per hour, over breathtaking views! So what is down there? What might you discover if you looked outside? Soar allows you to find out.

With our interactive map you can enter your flight path to find where you are going and then zoom under it to look at beautiful satellite images of the terrain that you are passing. Find a beautiful lake in a mountain range in Mongolia? You can drop a pin here and write a message for someone else that might pass, or attach a photograph of the beautiful sunrise that you saw above the clouds when you were cruising over the Pacific Ocean.

Now the journey will become just as interesting as the destination!


##Explanations of the technologies used:

We used node and express as our Javascript framework, along with mongoose for our database to create this app. We also used some templating engines such as ejs and mustache to organise our files. 
The languages we used were Javascript, jQuery, jQueryUI, AJAX, HTML and CSS.
We used several external APIs, which were Mapbox (based on Leaflet) and Twitter. Mapbox gave us maps that we could manipulate by adding our own seed data of locations based on their longitude and latitude, allowing us to use these locations to find tweets in the area. Mapbox also allowed us to show flight paths, pan and zoom around the world, change to satellite view and style our map to our liking.



##A couple paragraphs about the general approach you took:

We began by setting up our basic framework, and then splitting tasks between us. We used trello to help us with this, writing a plan of tasks and noting when they were in progress and completed. We also used a bugs board for aspects of the project that needed fixing. 
Alex worked on writing seed data, writing CRUD actions for routes and places and connecting to the twitter api to retrieve data.
Zhan worked on creating the map and styling it, writing HTML, writing javascript to use the CRUD actions, writing AJAX functions, writing the server side of the app and javascript for appending messages to places.
Daisy worked on writing models and some CRUD actions for routes, writing a modal in javascript for initialization of website using jQuery UI, writing js for map features such as flight paths, zoom and pan, writing js to animate sidebar and some basic css.

As we went along many new problems arose due to ideas changing and files conflicting when we merged together, so we worked on some of these together to resolve them. We used gitHub to archive our work and used multiple branches.



##Installation instructions for any dependencies:



##Link to your user stories – who are your users, what do they want, and why?:

Our users are air travellers who want to connect with the world more fully, even when they are in the air. We wanted to create something that would optimise the journey to wherever the traveller is going, so that it was made just as much part of the adventure as reaching their destination. 
This is relevant because people are wanting to become more connected with each other and the world around them, and at the moment this stops when you get on an aeroplane. It is exciting to reach outside the pressurized cabin.


##Link to your wireframes – sketches of major views / interfaces in your application:

We used two models that were routes and places. Routes had many places and within places there were comments/messages.

##Descriptions of any unsolved problems or major hurdles your team had to overcome:



