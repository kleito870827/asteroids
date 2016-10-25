import varControl from "./main.js";

function Controls (){

  document.addEventListener("keydown", (e)=> {

    if (e.keyCode === 38)
      varControl.upPressed = 1;
    if (e.keyCode == 40)
      varControl.downPressed = 1;
    if (e.keyCode == 37)
      varControl.leftPressed = 1;
    if (e.keyCode == 39)
      varControl.rightPressed = 1;
  });
  document.addEventListener("keyup", (e)=>{

    if (e.keyCode == 38)
      varControl.upPressed = 0;
    if (e.keyCode == 40)
      varControl.downPressed = 0;
    if (e.keyCode == 37)
      varControl.leftPressed = 0;
    if (e.keyCode == 39)
      varControl.rightPressed = 0;
  });
};

export default Controls;
