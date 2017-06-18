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