function chooseVideo(opt){
    var option = opt;

    var target = document.getElementById("chVideo");
    target.src = "media/" + opt;

}

function chooseColor(value){
    var opt = value;
    var target = document.getElementById("second");

    target.style.backgroundColor = value;
}

function chooseFont(val){
    var opt = val;
    var target = document.getElementById("second");

    target.style.fontFamily = val;
}

function chooseStyle(value){
    var opt = value;
    var target = document.getElementById("chVideo");

    target.style = value;
}

function changeText(myForm){
    var title = myForm.elements["title"].value;
    var description = myForm.elements["descr"].value;
    var mail = myForm.elements["email"].value;
    var output = document.getElementById("usr_mail");
    var descr = document.getElementById("vd_descr");
    var target = document.getElementById("vd_title");
    var tags = document.querySelectorAll("tag");
    var tagsOut='';

    for(let checkbox of tags){
        if(checkbox.checked){
            tagsOut += checkbox.value.toUpperCase() + ", ";
        }
    }

    

    target.innerText = title;
    descr.innerText = description;
    output.innerText = mail;
    
}