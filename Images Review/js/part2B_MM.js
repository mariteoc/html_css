window.addEventListener("load", function(){
    let target = document.getElementById("div_quality");
    
    for (let i=0; i<5;i++)
    {
        let radio = document.createElement('input');
        let label = document.createElement('label');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name','quality');
        radio.setAttribute('id', 'quality' + i);
        label.setAttribute('for','quality' + i);

        switch(i){
            case 0:
                radio.setAttribute('value','1');
                label.innerHTML = "Very Bad";
                break;
            case 1:
                radio.setAttribute('value','2');
                label.innerHTML = "Bad";
                break;
            case 2:
                radio.setAttribute('value','3');
                label.innerHTML = "Normal";
                break;
            case 3:
                radio.setAttribute('value','united-4');
                label.innerHTML = "Good";
                break;
            case 4:
                radio.setAttribute('value','5');
                label.innerHTML = "Very Good";
                break;
        }
        target.append(radio);
        target.append(label);

        
    }
    let target1 = document.getElementById("div_places");
    for (let i=0; i<4;i++)
        {
            let check = document.createElement('input');
            let lblcheck = document.createElement('label');
            check.setAttribute('type', 'checkbox');
            check.setAttribute('name','places');
            check.setAttribute('id', 'places' + i);
            lblcheck.setAttribute('for','place' + i);
    
            switch(i){
                case 0:
                    check.setAttribute('value','Place');
                    lblcheck.innerHTML = "Place";
                    break;
                case 1:
                    check.setAttribute('value','Canada');
                    lblcheck.innerHTML = "Canada";
                    break;
                case 2:
                    check.setAttribute('value','Nature');
                    lblcheck.innerHTML = "Nature";
                    break;
                case 3:
                    check.setAttribute('value','Food');
                    lblcheck.innerHTML = "Food";
                    break;
            }
            target1.append(check);
            target1.append(lblcheck);
        }

        let target2 = document.getElementById("images");
    
        let opt1 = document.createElement('option');
        opt1.setAttribute('value','image_placeholder.jpg');
        opt1.innerHTML="Image Placeholder";
        target2.appendChild(opt1);
    
        let opt2 = document.createElement('option');
        opt2.setAttribute('value','bear_salmon.jpg');
        opt2.innerHTML="Bear and Salmon";
        target2.appendChild(opt2);
    
        let opt3 = document.createElement('option');
        opt3.setAttribute('value','canada-place.jpg');
        opt3.innerHTML="Canada Place";
        target2.appendChild(opt3);

        let opt4 = document.createElement('option');
        opt4.setAttribute('value','pancake.jpg');
        opt4.innerHTML="Pancake";
        target2.appendChild(opt4);

    document.getElementById("images")
        .addEventListener("change", function(){
            changeImage();
        });

        document.getElementById("send")
        .addEventListener("click", function(){
            storeValues();
            displayResult();
        });
});


function changeImage(){
    let choice = document.getElementById("images");
    let img = document.getElementById("select_image");
    img.src="images/" + choice.value;
}

// create a class to store values
class Feedbacks{
    constructor(place, quality, name, email){
        this.places = place;
        this.quality = quality;
        this.username = name;
        this.mail = email;
    }
}

var values = [];

function storeValues(){
    var form = document.myForm;

    let feedback = new Feedbacks();
    feedback.places = form.elements["places"].value;
    feedback.quality = form.elements["quality"].value;
    feedback.username = form.elements["uname"].value;
    feedback.mail = form.elements["umail"].value;

    values.push(feedback);
}

function displayResult(){

    let target = document.getElementById("output");
    let p = document.createElement("p");
    p.id = "result";

    if(!document.getElementById("result")){
        target.append(p);
    }
    else{
       let p2 = document.getElementById("result");
       target.replaceChild(p, p2);
    }

    let txt = "";
    let count = 0;
    for(let v of values){
        count+= 1;
        let reviewCount = document.createElement("strong");

        reviewCount.textContent = "Review number " +  count;
        txt = " Image: "+ "Image tag: " + v.places + "\nRating submitted: " + v.quality + "\nUsername: " + v.username + "\nUser email: " + v.mail;
        p.append(reviewCount, txt);
        p.innerHTML+="<br>";
    }
}
