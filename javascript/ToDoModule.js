function loadhomepage() {
    username = localStorage.getItem('username');
    document.getElementById("username").innerHTML = username;
    var allEntries = getArray();
    var x = search(username, allEntries);
    var todolist = allEntries[x].todo;
    for (i = 0; i < todolist.length; i++) {
        var arr = todolist[i];

        var title = arr.title;
        var duedate = arr.duedate;
        var category = arr.category;
        var reminder = arr.reminder;
        var reminderdate = arr.reminderdate;
        var visibility = arr.visibility;
        var status = arr.status;
        var oldrow = document.getElementById("customers"); //parent
        var node = document.createElement("tr");
        node.setAttribute("id", i);
        node.setAttribute("style", "text-decoration: none;");
        oldrow.appendChild(node);
        document.getElementById(i).innerHTML = " <td>" + (i + 1) + ". <input type='checkbox' id=check" + i + " style='height:20px;width:20px' onchange=checkstate(" + i + ")> " + "</td>" +
            "<td>" + title + "</td>" +
            "<td>" + category + "</td>" +
            "<td>" + duedate + "</td>" +
            "<td>" + reminder + "</td>" +
            "<td>" + reminderdate + "</td>" +
            "<td>" + visibility + "</td>" +
            "<td>" + "<button id='changestatus" + i + "' class='statusbtn' onclick='changestatus(" + i + ")'>" + status + "</button>" + "</td>";

    }
    if (todolist.length == 0) {
        var oldrow = document.getElementById("customers"); //parent
        var node = document.createElement("div");
        node.setAttribute("id", "-1");
        node.setAttribute("style", "text-decoration: none;");
        node.setAttribute("style", "colspan: 8;");
        node.setAttribute("style", "text-align: center;");
        oldrow.appendChild(node);
        document.getElementById("-1").innerHTML = "no contents to show";
    }


}

// function checkstate(i) {
//     username = getUser();
//     var allEntries = getArray();
//     var x = search(username, allEntries);
//      allEntries[x].todo[i].checkstatus="checked";


// }
function additem() {
    window.location = "./newItem.html";
}

function saveitem() {
    var title = document.getElementById("todoTitle").value;
    var duedate = document.getElementById("Due_date").value;
    var category = document.querySelector('input[name = "Category"]:checked').value;
    var reminder = document.getElementById("reminder").checked;
    var reminderdate = document.getElementById("Rdate").value;
    var visibility = document.querySelector('input[name = "visibility"]:checked').value;
    var item = new getitem(title, duedate, category, reminder, reminderdate, visibility);
    username = getUser();
    var allEntries = getArray();
    var x = search(username, allEntries);
    if (allEntries[x].todo == undefined)
        allEntries[x].todo = new Array();
    allEntries[x].todo.push(item);
    setArray(allEntries);
    window.location = "./homepage.html";
}

function getitem(title, duedate, category, reminder, reminderdate, visibility, item) {
    this.title = title;
    this.duedate = duedate;
    this.category = category;
    this.reminder = reminder;
    this.reminderdate = reminderdate;
    this.visibility = visibility;
    this.status = "doing";
}

function search(username, allEntries) {
    for (x = 0; x < allEntries.length; x++) {
        if (username == allEntries[x].Email)
            return x;
    }
}

function addreminder() {
    document.getElementById("time").style.display = "block";
}

function Deleteitems() {

    username = getUser();
    var allEntries = getArray();
    var x = search(username, allEntries);
    var todolist = allEntries[x].todo;
    for (i = 0; i < todolist.length; i++) {

        if (document.getElementById("check" + i).checked == true) {
          //  console.log('--->',todolist);
          todolist.splice(i, 1);
          //   console.log('--->',todolist);
          // // for(j=i;j<todolist.length; j++){
            //  if(document.getElementById("check" + (i+1)).checked == true)
            //     document.getElementById("check" + i).checked == true
            // else
            //     document.getElementById("check" + i).checked == false;
            // }
                     
                        i=-1;

            
        }
    }
    setArray(allEntries);
    location.reload();


}

function changestatus(i) {

    username = getUser();
    var allEntries = getArray();
    var x = search(username, allEntries);
    var todolist = allEntries[x].todo;
    var arr = todolist[i];
    arr.status = "Done";
    document.getElementById("changestatus" + i).innerHTML = "Done";

  
    setArray(allEntries);


}