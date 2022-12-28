//valid radio option
function chooseImg(val) {
    var img = val;
    
   var output = document.getElementById("result");
   output.src = "./images/" + img;
  
} //end function chooseImg

/*-----------------------------------------------*/

//function to choose style for image
function selectStyle(val) {
    var opt = val;
    var stl = document.getElementById("result");

    stl.style = opt;

    console.log(stl.style);
    
    //stl.style.opt;

    //var result = "stl.style." + opt;
    //document.getElementById("result").style.opt;
    
} //end function selectStyle

/*----------------------------------------------------------*/

//function to choose background color and transfer text
function finishForm(myForm) {
    var choice = myForm.elements["color"].value;
    myForm.elements["message"].style = "background-color: " + choice;
 
    var message = myForm.elements["msg"].value;
    document.getElementById("output").innerText = message;

}