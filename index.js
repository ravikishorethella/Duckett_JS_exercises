//  1

//    //creating a basic js to find the current time
//    // to find the date 
//    var today = new Date();
//    // to find the current hours
//    var hours = today.getHours();
//
//    var greetings;
//    if (hours>18){
//    greetings = 'good evening';
//    }
//    else if(hours > 12){
//    greetings = 'good afternoon';
//    }
//    else {
//    greetings = 'welcome';
//    }
//
//    console.log(hours);
//    console.log(greetings);


//  2 using a variable to store a number

//    var price;
//    var quantity;
//    var total;
//
//    price  = 5;
//    quantity = 10;
//    total = price * quantity;
//
//    var el = document.getElementById("idname");
//    el.textContent(total);


// 3 using a variable to store a string

//    var username;
//    var message;
//
//    username = 'ravi';
//    message = 'welcome';
//
//    var elname = document.getElementById("name");
//    elname.textContent = username;
//
//    var elnote = document.getElementById("note");
//    elnote.textContent = message;


// 4 using a variable to store a Boolean

//    var stocks;
//    var result;
//
//    stocks = true;
//    results = false;
//
//    var el = document.getElementById("idname");
//    el.className = stocks;


// 5 changing the value of a variable 

//    var stocks;
//    var result;
//
//    stocks = true;
//    results = false;
//
////    some modifications will be done and the values of the stocks and results will be changed.   
//
//    stocks = false;
//    results = true;
//
//    var el = document.getElementById("idname");
//    el.className = stocks;


// 6.1 creating arrays in the literal notation
 
//    var colors;
//    colors = ['white','black','blue'];
//
//    var el = document.getElementById("idname");
//    el.textContent = colors[0];


// 6.2 creating arrays in the array constructor notation 
 
//    var colors = new Array('white','black','blue');
//
//    var el = document.getElementById("idname");
//    el.textContent = colors[0];


// 7 accessing and changing values in an array

//    var colors = ['white','black','blue'];
//    // updating the third color
//    colors[2] = 'purple';
//
//    var el = document.getElementById("idname");
//    el.textContent = colors[2];


// 8 using arithmetic operations

//    var subtotal = 3(2*(4-1));
//    var shipping = 3 * 0.5(42-20);
//
//    var total = subtotal + shipping;
//
//    // the three id names are random
//    var elsubtotal = document.getElementById("subtotal");
//    elsubtotal.textContent = subtotal;
//
//    var elshipping = document.getElementById("shipping");
//    elshipping.textContent = shipping;
//
//    var eltotal = document.getElementById("total");
//    eltotal.textContent = total;


// 9 using string operators

//    var name = 'ravi';
//    var greeting = 'welcome';
//    var message = name + greeting + '!!';
//
//    var el = document.getElementById("idname");
//    el.textContent = message;
    

// chapter 3

// 10 a basic function

//    var msg = 'hello welcome';
//    function message(){
//        var el = document.getElementById("idname");
//        el.textContent = msg;
//    }
//    message();


// 11 getting a single value out of a function

//    function calculateArea(height, width){
//        var area = height * width;
//        return area;
//    }
//
//    var wallone = calculateArea(5,3);
//    var walltwo = calculateArea(4,6);


// 12 getting multiple values out of a function

//    function getsize(height, width, depth){
//        var area = height * width;
//        var volume = height * width * depth;
//        var sizes = [area, volume];
//        return sizes;
//    }
//
//    var areaonesize = getsize(3,2,3)[0];
//    var volumeonesize = getsize(3,2,5)[1];


// 13.1 named functions 

//    function area(width, height){
//        return width * height;
//    } 
//    var size = area(3,5); 


// 13.2 anonymous functions

//    var area = function(height, width){
//        return height * width;
//    }
//    var size = area(4,6);


// 13.3 immediately invoked functions

//    var area = (function(){
//        var height = 5;
//        var width = 4;
//        return height * width;
//    }());


// 14 object in literal notation

//    var hotel = {
//        name: 'clinton',
//        rooms: 50,
//        booked: 22,
//        gym: true,
//        roomtypes: ['twin', 'double', 'suite'],
//        checkavailability: function() {
//            this.rooms - this.booked;
//        }  
//    };
//
//    var elname = document.getElementById("idname");
//    elname.textContent = hotel.name;
//
//    var elfreerooms = document.getElementById("idname");
//    elfreerooms.textContent = hotel.checkavailability();


// 15 creating an object: constructor notation

//    var hotel = new Object();
//        hotel.name = 'clinton',
//        hotel.rooms = 50,
//        hotel.booked = 21,
//        hotel.checkAvailability = function(){
//        return this.rooms - this.booked;  
//    };


// 16 creating many objects: constructor notation

//    function Hotel(name, rooms, booked){
//        this.name = name;
//        this.rooms = rooms;
//        this.booked = booked;
//        this.checkavailability = function(){
//            return this.rooms - this.booked; 
//        };
//    }
//
//    var quayHotel = new Hotel('Quay',40,25);
//    var parkHotel = new Hotel('Park',90,45);
//
//    var details1 = quayHotel.name + ' rooms: ';
//    details1 += quayHotel.checkavailability();
//    // hotel1
//    var elhotel1 = document.getElementById("idname");
//    elhotel1.textContent = details1;
//
//    var details2 = parkHotel.name + ' rooms: ';
//    details2 += parkHotel.checkavailability();
//    // hotel1
//    var elhotel2 = document.getElementById("idname");
//    elhotel2.textContent = details2;


// 17 adding and removing properties

//    var hotel = {
//        name: 'park',
//        rooms: 53,
//        booked: 21
//    };
//    // adding the properties
//        hotel.gym = true;
//        hotel.pool = false;
//
//    // deleting the properties
//        delete hotel.booked; 
//
//    var elname = document.getElementById("idname");
//    elname.textContent = hotel.name;
//
//    var elpool = document.getElementById("idname");
//    elpool.className = hotel.pool;
//
//    var elgym = document.getElementById("idname");
//    elgym.className = hotel.gym; 


// 18 Browser object model

//    var msg = '<h2> Browser window <h2><p>width: '+ window.innerWidth + '</p>';
//    msg += '<p>height:'+ window.innerHeight +'</p>'; 
//    msg += '<h2>history</h2><p>items: '+ window.history.length + '</p>';
//    msg += '<h2>Screen</h2><p>width: '+ window.screen.width + '</p>';
//    msg += '<p>height: '+ window.screen.height + '</p>';
//
//    var el = document.getElementById("idname");
//    el.innerHTML = msg;


// 19 working with decimal numbers

//    var originalNumber = 10.23456;
//    var msg = '<h2>original number</h2><p> '+originalNumber+ '</p>';
//    msg += '<h3>three decimal places</h3><p> '+ originalNumber.toFixed(3)+'</p>';
//    msg += '<h3>digits</h3><p> '+ originalNumber.toPrecision(3)+'</p>';
//
//    var el = document.getElementById("idname");
//    el.innerHTML = msg;


// 20 create a date object

//    var today = new Date();
//    var year = today.getFullYear();
//
//    var el = document.getElementById("footer");
//    el.innerHTML= '<p>&copy; ' + year +' </p>';


// 21 using comparison operators

// var score = 57;
// var pass = 87;
// var hasPassed = score >= pass;
// var el = document.getElementById('answer');
// el.textContent = 'level passed:' + hasPassed;


// 22 comparing two expressions

// var score1 = 80;
// var score2 = 90;
// var highScore1 = 70;
// var highScore2 = 95;
// var comparison = (score1+score2) > (highScore1+highScore2);
// var el = document.getElementById('answer');
// el.textContent = 'new high score:' + comparison;


// 23 using if-else statements

// var score = 75;
// var pass = 50;
// var msg;
// if(score>=pass){
//	msg = 'congrstulations';
// }else{
//  msg = 'try again';
// } 	
// var el = document.getElementById('answer');
// el.textContent = msg;


// 24 using switch statements

// var msg;
// var level = 3;
// switch(value){
// case 1:
// 	msg = 'this is level 1';
// 	break;
// case 2:
// 	msg = 'this is level 2';
// 	break;
// case 3:
// 	msg = 'this is level 3';
// 	break;
// default:
// 	msg = 'Good Luck';
// 	break;	
// }
// var el = document.getElementById('answer');
// el.textContent = msg;


// 25 using for loops

// var scores = [27, 25, 28, 26];
// var roundNumber = 0;
// var msg;
// for(var i=0; i<scores.length; i++){
// 	roundNumber = i+1;
// 	msg += 'Round ' + roundNumber + ':';
// 	msg += scores[i] + '<br/>'; 	
// }	
// document.getElementById('answer').innerHTML = msg;


// 26 using while loops

// var i = 1;
// var msg = '';
// while(i<10){
// 	msg += i + ' * 5 = ' + (i * 5) + ' <br/>';
// 	i++;
// }
// document.getElementById('answer').innerHTML = msg;


// 