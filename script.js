

/////////////////////////   DRAW   /////////////////////////
 function drawGr(){
  let newGrid = document.getElementById('myInput').value;  
    
    if (isNaN(newGrid) || newGrid < 4 || newGrid > 100 ) {
        alert("Input not valid");
      } else if (newGrid == 4 || newGrid == 9 || newGrid == 16 || newGrid == 25 
      || newGrid == 36 || newGrid == 49 || newGrid == 64 || newGrid == 81 || newGrid == 100 ) {
          removeSquares();
          let sqrtGrid = Math.sqrt(newGrid);
          draw(sqrtGrid);
          document.getElementById("myBtn").disabled = false;
          document.getElementById("myBtn1").disabled = false;
      } else { 
        alert("It is recommended to enter the numbers listed above");
      }
   }

/////////////////////  COLORISE  /////////////////////////////
function colorise(z) {
  let w = document.getElementById('myInput').value;
    z = Math.sqrt(w);
      for (let i = 0; i < z; i++) {
        for(let j = 0; j < z; j++){

  (function(i,j){  
      setTimeout(function() { 
      $(".gr"+i+j).css(rndStyle());
      }, 150 * (i + 1));  
     })(i,j);
    }
  } 
}

///////////////////////   RESET   ///////////////////////////
function resetGr(){
    removeSquares();
    document.getElementById('myInput').value = '';
    document.getElementById("myBtn").disabled = true;
    document.getElementById("myBtn1").disabled = true; 
}

function removeSquares() {
  $(".grid-square").remove();

}

//////////////////////   DRAW   ////////////////////////////
function draw(x) {  
  for (let i = 0; i < x; i++) { 	  
 	 for (let j = 0; j < x; j++) { 
    	 $(".gridContainer").append("<div class='grid-square gr" +j+i +"'></div>");
  	}	   
  }
    $(".grid-square").hide().fadeIn(1000);
    $(".grid-square").width(500/x);
    $(".grid-square").height(500/x);
    
    for (let i = 0; i < 100; i++) {
           $(".grid-square").eq(i).css(rndStyle());
        }
}

//////////////////  RANDOM COLOR   ////////////////////////////////
function rndCol() {
        return Math.ceil(Math.random() * 255);
    };

function rndStyle(){
    let r = rndCol();
    let g = rndCol();
    let b = rndCol();
    let style1 = {'background': 'rgb(' + r + ', ' + g + ', ' + b + ')'};
    return style1;
    }



