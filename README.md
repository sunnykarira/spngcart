# Spngcart
===========
#NodeJS

Nodejs is open source cross platform environment for creating server side and network applications. It is built on the Chrome's JavaScript Runtime and can be used to build large scale web applications to quick time. It uses non blocken I/O and even driven model to allow creation of lightweight and highly scalable web applications.

#Summary 

A E-Bookstore application replicating the features of an online bookstore. Integrated with a shopping cart which tracks the shopped items in the user cookie.

Works on KrakenJS Framework with an intense use of MongoDB database (Mongoose Script).

#Installations

krakenjs.com

    # npm install -g yo generator-kraken bower grunt-cli
    $ yo kraken

I recommend do not chose i18n support for this project!

    ? Include i18n support? Yes
    ? Front end package manager ? Bower
    ? CSS preprocessor library? LESS
    ? JavaScript library? RequireJS

    $ cd [Directory]/

    $ npm install --save mongodb
    $ npm install --save mongoose
    $ npm install --save connect-flash
    $ npm install --save express-messages

    $ npm start

    http://localhost:8000/


Foundation

http://foundation.zurb.com/


#Database Model

    $ mongo
    > use takbooks
    > db.createCollection('books');
    > db.createCollection('categories');
    > db.books.insert({title:"Professional Node.js", description:"Node.js is a powerful and popular new Framework for writing scalable network programs using JavaScript.", category:"NodeJS", author:"Pedro Teixeira", publisher: "Wiley", price:"21.56", cover:"node1.jpg"});
    > db.books.insert({title:"Node.js Blueprints", description:"A straightforward, practical guide containing ste-by-tep tutorials that will push your Node.js programming skills to the next level. If you are a web developer", category:"NodeJS", author:"Krasimir Tsonev", publisher: "Packt Publishing", price:"54.79", cover:"node2.jpg"});

#Screenshots

Client End
![Application](/img/01.bmp?raw=true)
![Application](/img/1.bmp?raw=true)

Admin End
![Application](/img/2.bmp?raw=true)
![Application](/img/3.bmp?raw=true)
![Application](/img/4.bmp?raw=true)
![Application](/img/5.bmp?raw=true)



#Features

- Dust templating (Custom Templating).
- Paypal Integration.
- MongoDB with mongoose.

# Technology Stack

NodeJS, KrakenJS, Dust templating, CSS, JS, Foundation 5

