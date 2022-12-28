window.addEventListener('load', function(){
    let fieldset = document.getElementById('option');

    let div=document.createElement('div');
    div.setAttribute('id','div1');
    fieldset.append(div);
    
    let label1 = document.createElement('label');
    label1.setAttribute('for','fname');
    label1.innerHTML='Full Name';
    div.append(label1);

    let txtbox = document.createElement('input');
    txtbox.setAttribute('type', 'text');
    txtbox.setAttribute('id', 'fname');
    txtbox.setAttribute('name', 'fname');
    txtbox.setAttribute('size', '30');
    txtbox.required = "true";
    div.append(txtbox);

    let div1=document.createElement('div');
    div1.setAttribute('id','div2');
    fieldset.append(div1);
    
    let label2 = document.createElement('label');
    label2.setAttribute('for','course');
    label2.innerHTML='Course';
    div1.append(label2);

    let span = document.createElement('span');
    div1.append(span);

    let radio = document.createElement('input');
    let lblrd = document.createElement('label');
    radio.setAttribute('type','radio');
    radio.setAttribute('id', 'course');
    radio.setAttribute('name', 'course');
    radio.setAttribute('value','CSIS 1280');
    radio.required="true";
    lblrd.innerHTML="CSIS 1280<br>";
    span.append(radio);
    span.append(lblrd);

    let radio1 = document.createElement('input');
    let lblrd1 = document.createElement('label');
    radio1.setAttribute('type','radio');
    radio1.setAttribute('id', 'course1');
    radio1.setAttribute('name', 'course');
    radio1.setAttribute('value','CSIS 1175');
    lblrd1.innerHTML="CSIS 1175<br>";
    span.append(radio1);
    span.append(lblrd1);

    let radio2 = document.createElement('input');
    let lblrd2 = document.createElement('label');
    radio2.setAttribute('type','radio');
    radio2.setAttribute('id', 'course2');
    radio2.setAttribute('name', 'course');
    radio2.setAttribute('value','CSIS 2200');
    lblrd2.innerHTML="CSIS 2200<br>";
    span.append(radio2);
    span.append(lblrd2);

    let div2=document.createElement('div');
    div2.setAttribute('id','div3');
    fieldset.append(div2);
    
    let label3 = document.createElement('label');
    label3.setAttribute('for','feed');
    label3.innerHTML='Feedback';
    div2.append(label3);

    let select = document.createElement('select');
    select.setAttribute('id', 'feed');
    select.setAttribute('name', 'feed');
    select.required="true";
    div2.append(select);

    let opt1 = document.createElement('option');
    opt1.setAttribute('value','Awesome');
    opt1.innerHTML="Awesome";
    select.appendChild(opt1);

    let opt2 = document.createElement('option');
    opt2.setAttribute('value','Fun');
    opt2.innerHTML="Fun";
    select.appendChild(opt2);

    let opt3 = document.createElement('option');
    opt3.setAttribute('value','Not bad');
    opt3.innerHTML="Not bad";
    select.appendChild(opt3);

    let btn = document.createElement('input');
    btn.setAttribute('type','submit');
    btn.setAttribute('id','send');
    btn.setAttribute('value','Submit Feedback');
    fieldset.append(btn);

    document.getElementById("send")
        .addEventListener("click", function(){
            fillForm();
            storeData();
            displayData();
        });

});

function fillForm(){
    let fieldset = document.getElementById('option');

    let div=document.createElement('div');
    div.setAttribute('id','div1');
    fieldset.append(div);
    
    let label1 = document.createElement('label');
    label1.setAttribute('for','fname');
    label1.innerHTML='Full Name';
    div.append(label1);

    let txtbox = document.createElement('input');
    txtbox.setAttribute('type', 'text');
    txtbox.setAttribute('id', 'fname');
    txtbox.setAttribute('name', 'fname');
    txtbox.setAttribute('size', '30');
    txtbox.required = "true";
    div.append(txtbox);

    let div1=document.createElement('div');
    div1.setAttribute('id','div2');
    fieldset.append(div1);
    
    let label2 = document.createElement('label');
    label2.setAttribute('for','course');
    label2.innerHTML='Course';
    div1.append(label2);

    let span = document.createElement('span');
    div1.append(span);

    let radio = document.createElement('input');
    let lblrd = document.createElement('label');
    radio.setAttribute('type','radio');
    radio.setAttribute('id', 'course');
    radio.setAttribute('name', 'course');
    radio.setAttribute('value','CSIS 1280');
    radio.required="true";
    lblrd.innerHTML="CSIS 1280<br>";
    span.append(radio);
    span.append(lblrd);

    let radio1 = document.createElement('input');
    let lblrd1 = document.createElement('label');
    radio1.setAttribute('type','radio');
    radio1.setAttribute('id', 'course1');
    radio1.setAttribute('name', 'course');
    radio1.setAttribute('value','CSIS 1175');
    lblrd1.innerHTML="CSIS 1175<br>";
    span.append(radio1);
    span.append(lblrd1);

    let radio2 = document.createElement('input');
    let lblrd2 = document.createElement('label');
    radio2.setAttribute('type','radio');
    radio2.setAttribute('id', 'course2');
    radio2.setAttribute('name', 'course');
    radio2.setAttribute('value','CSIS 2200');
    lblrd2.innerHTML="CSIS 2200<br>";
    span.append(radio2);
    span.append(lblrd2);

    let div2=document.createElement('div');
    div2.setAttribute('id','div3');
    fieldset.append(div2);
    
    let label3 = document.createElement('label');
    label3.setAttribute('for','feed');
    label3.innerHTML='Feedback';
    div2.append(label3);

    let select = document.createElement('select');
    select.setAttribute('id', 'feed');
    select.setAttribute('name', 'feed');
    select.required="true";
    div2.append(select);

    let opt1 = document.createElement('option');
    opt1.setAttribute('value','Awesome');
    opt1.innerHTML="Awesome";
    select.appendChild(opt1);

    let opt2 = document.createElement('option');
    opt2.setAttribute('value','Fun');
    opt2.innerHTML="Fun";
    select.appendChild(opt2);

    let opt3 = document.createElement('option');
    opt3.setAttribute('value','Not bad');
    opt3.innerHTML="Not bad";
    select.appendChild(opt3);

    let btn = document.createElement('input');
    btn.setAttribute('type','submit');
    btn.setAttribute('id','send');
    btn.setAttribute('value','Submit Feedback');
    fieldset.append(btn);
}
/*
let btn = document.getElementById("send");

btn.addEventListener('click', function(){
    storeData();
    displayOutput();
});



let evaluate = [];

function storeData(){
    let form = document.myform;

    let feed = new Feedback();
    feed.fullName = form.elements["fname"].value;
    feed.courses = form.elements["course"].value;
    feed.feedbacks = form.elements["feed"].value;

    evaluate.push(feed);
}

function displayOutput(){
    let target = document.getElementById("summary");
    let ol_result = document.createElement("ol");
    ol_result.id = "result";

    if(!document.getElementById("result")){
        target.append(ol_result);
    }
    else{
        let ol_result2 = document.getElementById("result");
        target.replaceChild(ol_result,ol_result2);
    }

    let txt ="";
    for(let f of evaluate)
    {
        let li = document.createElement("li");
        ol_result.append(li);

        let name = document.createElement("strong");
        name.textContent = f.fullName;
        text = " says that " + f.courses + "is " + f.feedbacks;
        li.append(name,text);
    }
}



class Feedback{
    constructor(name,course,feedback){
        this.fullName = name;
        this.courses = course;
        this.feedbacks = feedback;
    }

    feedbackEntry(){
        let target = document.getElementById("summary");
        let ol_result = document.createElement("ol");
        ol_result.id = "result";

        if(!document.getElementById("result")){
            target.append(ol_result);
        }
        else{
            let ol_result2 = document.getElementById("result");
            target.replaceChild(ol_result,ol_result2);
        }

        let txt ="";
        for(let f of evaluate)
        {
            let li = document.createElement("li");
            ol_result.append(li);

            let name = document.createElement("strong");
            name.textContent = f.fullName;
            text = " says that " + f.courses + "is " + f.feedbacks;
            li.append(name,text);
        }
    }
}


/*
function displayData(){


    // consruct the list item (li)
    // accumulate the text
    let text = "";
    for(let stu of data){
        let li = document.createElement("li");
        ol_node.append(li);

        let studentName = document.createElement("strong");
        studentName.textContent = stu.fullName();
        text = ", is from " + stu.department.toUpperCase();
        li.append(studentName, text);
    }


let send = document.getElementById('send');

send.addEventListener('click', function(myForm){
    var date = form.elements["fname"];

    if(date.validity.valueMissing){
        alert('Please enter all input correctly');
        return false;
    }
    else{
        return true;
    }


});*/