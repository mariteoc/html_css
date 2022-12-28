window.addEventListener('load',function(){
    let td = document.getElementById("options");
    
    for (let i=0; i<8;i++)
    {
        let radio = document.createElement('input');
        let label = document.createElement('label');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name','countries');
        radio.setAttribute('id', 'radio' + i);
        label.setAttribute('for','radio' + i);

        switch(i){
            case 0:
                radio.setAttribute('value','belgium');
                label.innerHTML = "Belgium <br>";
                break;
            case 1:
                radio.setAttribute('value','brazil');
                label.innerHTML = "Brazil <br>";
                break;
            case 2:
                radio.setAttribute('value','croatia');
                label.innerHTML = "Croatia <br>";
                break;
            case 3:
                radio.setAttribute('value','united-kingdom');
                label.innerHTML = "England <br>";
                break;
            case 4:
                radio.setAttribute('value','france');
                label.innerHTML = "France <br>";
                break;
            case 5:
                radio.setAttribute('value','russia');
                label.innerHTML = "Russia <br>";
                break;
            case 6:
                radio.setAttribute('value','sweden');
                label.innerHTML = "Sweden <br>";
                break;
            case 7:
                radio.setAttribute('value','uruguay');
                label.innerHTML = "Uruguay <br>";
                break;
        }

        td.append(radio);
        td.append(label);
    }
});

window.addEventListener('click', function(){
    var selected;
    var opt = document.querySelectorAll('input[id^="radio"]');
    for(let n in opt)
    {
        if(opt[n].checked){
            selected = opt[n].defaultValue;
        }               
    }

    let img = document.getElementById('image');
    img.src = "images/" + selected + ".png";
    console.log(img);
})