// please write your code to draw the smile below
let choice = document.getElementById("select");
console.log(choice);

choice.addEventListener('change', function(){
    let result = choice.value;

    if(result == "smile1"){
        
        console.log(smile1);
        let square = document.querySelectorAll("div[id^='div']");
        for(let n in square)
        {
            square[n].className = ("class","yellow");
        }
        for(let i=0;i<smile1.length; i++)
        {
            let position;
            let out = smile1[i];
            let linePosition = out[0];
            let columnPosition = out[1];
            if (linePosition == 0)
            {               
                position = linePosition + columnPosition;
                let square = document.querySelector("div[id^='div"+ position +"']");
                square.setAttribute("class","black");
            }
            else if(linePosition >=1 && linePosition <=11)
            {
                linePosition = linePosition * 12;
                position = linePosition + columnPosition;
                let square = document.querySelector("div[id^='div"+ position +"']");
                square.setAttribute("class","black");
            }
            else
            {
                let square = document.querySelectorAll("div[id^='div']");
                console.log(square.id);
            }
        }
    }
    else if(result == "smile2"){
        
        console.log(smile2);
        let square = document.querySelectorAll("div[id^='div']");
        for(let n in square)
        {
            square[n].className = ("class","white");
        }
        for(let i=0;i<smile2.length; i++)
        {
            let position;
            let out = smile2[i];
            let linePosition = out[0];
            let columnPosition = out[1];
            console.log(linePosition);
            if (linePosition == 0)
            {
                position = linePosition + columnPosition;
                console.log(position);
                let square = document.querySelector("div[id^='div"+ position +"']");
                console.log(square.id);
                square.setAttribute("class","blue");
            }
            else
            {
                linePosition = linePosition * 12;
                position = linePosition + columnPosition;
                console.log(position);
                let square = document.querySelector("div[id^='div"+ position +"']");
                console.log(square.id);
                square.setAttribute("class","blue");
            }
            
        }
    }
});
