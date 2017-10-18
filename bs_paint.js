
window.onload=function() {
  //the first function creates the huge grid
  wrapper = document.getElementsByClassName('wrapper')[0];

  for(let i = 0; i < 10404; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = "block";
    wrapper.appendChild(newDiv);
  }

};

palets = document.getElementsByClassName('palet'); //all the coloured divs
colours = ["white","black","red","blue","green","yellow","orange","purple","aqua","brown"]; //this si the array of colours
select = 1; //this is the variable used to represent the selected volour to draw
palets[0].onclick = function() { select = 0};
palets[1].onclick = function() { select = 1;};
palets[2].onclick = function() { select = 2;};
palets[3].onclick = function() { select = 3;};
palets[4].onclick = function() { select = 4;};
palets[5].onclick = function() { select = 5;};
palets[6].onclick = function() { select = 6;};
palets[7].onclick = function() { select = 7;};
palets[8].onclick = function() { select = 8;}; 
palets[9].onclick = function() { select = 9;};


function Draw() {
  if(isMouseDown == true) {
    this.style.backgroundColor = colours[select]; //sets the new color
  }
}

blocks = document.getElementsByClassName('block');
isMouseDown = false; //checks if the mouse is clicked down
document.onmousedown = function() { isMouseDown = true;  }; //if it is then set the mousedown to true, this enables the draw function
document.onmouseup   = function() { isMouseDown = false; }; //when the mouse is released the var is set to false
document.onmousemove = function()  { //this function checks if the mouse is clicked down and if thr mouse is moving (dragging)
  for(let j = 0; j < blocks.length; j++) {
      blocks[j].onmousemove = Draw;

  } };
/**/
