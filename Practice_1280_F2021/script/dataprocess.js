var data = [];

function storeData(){
    var form = document.getElementById("myForm");

    // instantiate a new Student object
    let feedback = new Feedback();
    feedback.fullName = form.elements["fname"].value;
    feedback.course = form.elements["course"].value;
    feedback.feedback = form.elements["feed"].value;

    // push the new student into the array of data
    data.push(feedback);
}

function displayData(){
    // 
    let target = document.getElementById("summary");
    let ol_node = document.createElement("ol");
    ol_node.id = "list";

    // check whether tel ol_node exist or not
    if(!document.getElementById("list")){
        target.append(ol_node);
    }
    else{
       let ol_node2 = document.getElementById("list");
       target.replaceChild(ol_node, ol_node2);
    }

    // consruct the list item (li)
    // accumulate the text
    let text = "";
    for(let f of data){
        let li = document.createElement("li");
        ol_node.append(li);

        let studentName = document.createElement("strong");
        studentName.textContent = f.fullName;
        text = "says that " + f.course + "is " + f.feedback;
        li.append(studentName, text);
    }
}