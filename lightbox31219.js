"use strict";
var images = ["car-tN.jpg", "cardTn.jpg", "car-tN.jpg", "cardTn.jpg"];

$(document).ready(function(){
 // $("#img1").click(function(){
 //
 //   $("#lightbox").css("width", "100%");
 //   $("#lightbox").css("height", "100%");
 //   $("#lightbox").css("background-color", "rgba(0, 0, 0, .75)");
 //   $("#lightbox").css("display", "block");
 //
 // })
 //
 // $("#click").click(function(){
 //   $("#lightbox").css("display", "none");
 //
 // })
 // $("#carrr").click(function(){
 //   $("#lightbox").css("display", "none");
 // })
   var image;

 for(let i = 0; i < images.length; i++){

   var currentImage = images[i];

   $("body").append("<img id='image" + i + "'class='gallery' src='images/" +
   currentImage + "' alt='Image'/>");

   $("#image" + i).click(function(){
     console.log("clicked" + i);
   })
 }



});
