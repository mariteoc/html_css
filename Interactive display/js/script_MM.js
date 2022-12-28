const pattern1 = [
    [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
    [1,0],[1,6],
    [2,0],[2,6],
    [3,0],[3,6],
    [4,0],[4,6],
    [5,0],[5,6],
    [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6]
];

const pattern2 = [
    [1,1],[1,2],[1,3],[1,4],[1,5],
    [2,1],[2,5],
    [3,1],[3,5],    
    [4,1],[4,5],
    [5,1],[5,2],[5,3],[5,4],[5,5],
];

const pattern3 = [
    [2,2],[2,3],[2,4],    
    [3,2],[3,4],    
    [4,2],[4,3],[4,4]
];

var interval;
var count;

window.addEventListener('load',function(){
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Interactive display";
    let target = document.getElementById("container");

    for(let i=0; i<49; i++)
    {
        let div = document.createElement("div");
        div.setAttribute("id","div" + i);
        target.append(div);
    }

    count = 0;
    interval = setInterval(changePattern, 1000);
});

function changePattern(){
    
    if(count == 0)
    {
        let result = document.querySelectorAll("div[id^='div']");
        for(let n in result)
        {
            result[n].className = ("class","ivory");
        }

        for(let i=0;i<pattern1.length; i++)
        {
            let position;
            let out = pattern1[i];
            let linePosition = out[0];
            let columnPosition = out[1];
            console.log(linePosition);
            if (linePosition == 0)
            {               
                position = linePosition + columnPosition;
                let result = document.querySelector("div[id^='div"+ position +"']");
                result.setAttribute("class","sandybrown");
            }
            else if(linePosition >=1 && linePosition <=11)
            {
                linePosition = linePosition * 7;
                position = linePosition + columnPosition;
                let square = document.querySelector("div[id^='div"+ position +"']");
                square.setAttribute("class","sandybrown");
            }
        }
        count++;
        console.log(count);
    }
    else if(count ==1){
        let result = document.querySelectorAll("div[id^='div']");
        for(let n in result)
        {
            result[n].className = ("class","ivory");
        }

        for(let i=0;i<pattern2.length; i++)
        {
            let position;
            let out = pattern2[i];
            let linePosition = out[0];
            let columnPosition = out[1];
            console.log(linePosition);
            if (linePosition == 0)
            {               
                position = linePosition + columnPosition;
                let result = document.querySelector("div[id^='div"+ position +"']");
                result.setAttribute("class","chocolate");
            }
            else if(linePosition >=1 && linePosition <=11)
            {
                linePosition = linePosition * 7;
                position = linePosition + columnPosition;
                let square = document.querySelector("div[id^='div"+ position +"']");
                square.setAttribute("class","chocolate");
            }
        }
        count++;
        console.log(count);
    }
    else if(count ==2){
        let result = document.querySelectorAll("div[id^='div']");
        for(let n in result)
        {
            result[n].className = ("class","ivory");
        }

        for(let i=0;i<pattern3.length; i++)
        {
            let position;
            let out = pattern3[i];
            let linePosition = out[0];
            let columnPosition = out[1];
            console.log(linePosition);
            if (linePosition == 0)
            {               
                position = linePosition + columnPosition;
                let result = document.querySelector("div[id^='div"+ position +"']");
                result.setAttribute("class","saddlebrown");
            }
            else if(linePosition >=1 && linePosition <=11)
            {
                linePosition = linePosition * 7;
                position = linePosition + columnPosition;
                let square = document.querySelector("div[id^='div"+ position +"']");
                square.setAttribute("class","saddlebrown");
            }
        }
        count=0;
    }
}