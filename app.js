
//this code is being written while following along with the canvas tag tutorial on https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage//


//grabbing the DOM node the canvas tag is connected to
//var canvas = document.getElementById('tutorial');

//Once the node is had, you can get the context: CanvasRenderingContext2D object
//var ctx = canvas.getContext('2d');

//To check for support of the <canvas> tag we can bring the code above into an if else statement
//if (canvas.getContext){
//  var ctx = canvas.getContext('2d');
  //drawing code here
//}else {
  //canvas supported code here
//};


// console.log(ctx);


//The code bellow was pulled from the tutorial skeleton template.
//They wrote their code within the index.html file. I'm chosing to seperate the JS to here because that's how I was taught.
(function(){

  function draw(){
    var canvas = document.getElementById('tutorial');

    if (canvas.getContext){
      var ctx = canvas.getContext('2d');

      //this code allows us to draw two rectangles to our canvas
      // ctx.fillStyle = "rgba(200, 0, 0)";
      // ctx.fillRect (10, 10, 50, 50);
      //this one bellow has an alpha transparency
      // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      // ctx.fillRect (30, 30, 50, 50);

      //this code allows us to draw different types of rectangel
      //the code bellow draws a solid filled rectangle
      ctx.fillRect (25, 25, 100, 100);
      //the code bellow draws a clear no filled rectangle
      ctx.clearRect (45, 45, 60, 60);
      //the code bellow draws an outlined, no filled rectangle
      ctx.strokeRect (50, 50, 50, 50);

      //The following functions are used in the steps needed to draw paths
      //    beginPath()
      //    Path Methods:  https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#Paths
      //    closePath()
      //    stroke()
      //    fill()

      //Since we can only draw rectangles with the codes used above, we have to use paths to draw other shapes
      //Bellow is the code for drawing a triangel
      ctx.beginPath();
      ctx.moveTo(75,50);
      ctx.lineTo(100,70);
      ctx.lineTo(100,25);
      ctx.fill();

      //The moveTo(x,y); can be thought of like moving the pen to x and y
      //The moveTo(); can also be used to draw unconnected paths. see code bellow
      ctx.beginPath();
      ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
      ctx.moveTo(110,75);
      ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
      ctx.moveTo(65,65);
      ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
      ctx.moveTo(95,65);
      ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
      ctx.stroke();

      //The lineTo(x,y) method draws a line from it's current position to the specified x,y given as perameters.
      


    }
  }



  console.log(draw);

})






/****************************************************************************************
File End
****************************************************************************************/
