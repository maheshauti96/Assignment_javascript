function loadhomepage() {
    username = localStorage.getItem('username');
    if(username=='null')
    {
        window.alert('sorry session is expired!!');
        window.history.forward();
    }
    document.getElementById("username").innerHTML = username;
   loadlist();
}

function additem() {
    window.location = "./newItem.html";
}

function loadlist(){
    var allEntries = getArray();
    var x = search(username, allEntries);
    var todolist = allEntries[x].todo;
    for (i = 0; i < todolist.length; i++) {
        var arr = todolist[i];
        var oldrow = document.getElementById("customers"); //parent
        var node = document.createElement("tr");
        node.setAttribute("id", i);
        node.setAttribute("style", "text-decoration: none;");
        oldrow.appendChild(node);
        document.getElementById(i).innerHTML = " <td>" +  " <input type='checkbox' id=check" + i + " style='height:20px;width:20px' onchange=checkstate(" + i + ")> " + "</td>" +
             "<td>" + (i + 1) + "</td>" +
            "<td>" + arr.title + "</td>" +
            "<td>" + arr.category + "</td>" +
            "<td>" + arr.duedate + "</td>" +
            "<td>" + arr.reminder + "</td>" +
            "<td>" + arr.reminderdate + "</td>" +
            "<td>" + arr.visibility + "</td>" +
            "<td>" + "<button id='changestatus" + i + "' class='statusbtn' onclick='changestatus(" + i + ")'    >" +getstatusop(i)+ arr.status + "</button>" + "</td>";
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
    this.status = "pending";
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
    var list=[];
    
    for (i = 0; i < todolist.length; i++) {
        if (document.getElementById("check" + i).checked == true) {
          list.push(true);
        }
        else
            list.push(false);
    }
     
     for (i = 0; i < todolist.length; i++) {

         if(list[i]===true){
             todolist.splice(i, 1);
             list.splice(i, 1);
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
    document.getElementById("changestatus" + i).innerHTML = "<i class='large material-icons'>check</i>Done";

  
    setArray(allEntries);


}

function getstatusop(i){
  
     var allEntries = getArray();
      var x = search(username, allEntries);
      var todolist = allEntries[x].todo;
    
        var arr = todolist[i];
        // window.alert(arr.status);
          if(arr.status=='Done')
            return "<i class='large material-icons'>check</i>";
          else
            return " <i class='material-icons'>access_time</i>";
      

}
function addsearchlist(){
    document.getElementById('searchtype').style.display="inline";
}
function acceptip() {
   
    if(document.getElementById('searchtype').value=='DateR')
         {
                 document.getElementById('searchbydaterange').style.display="block";
                     document.getElementById('searchIsdone').style.display="none";
                  document.getElementById('searchCat').style.display="none";
         }
         if(document.getElementById('searchtype').value=='Cat')
         {
            document.getElementById('searchbydaterange').style.display="none";
            document.getElementById('searchCat').style.display="block";
            document.getElementById('searchIsdone').style.display="none";
            
         }
          if(document.getElementById('searchtype').value=='donestatus')
         {
            document.getElementById('searchbydaterange').style.display="none";
            document.getElementById('searchIsdone').style.display="block";
            document.getElementById('searchCat').style.display="none";
         }

}

function searchbydateR(){

         var startDate=document.getElementById('startDate').value;
                 var EndDate=document.getElementById('endDate').value;

                    

                      var oldrow = document.getElementById("customers"); //parent
                      for(i=oldrow.childElementCount;i>1;i--)
                oldrow.removeChild(oldrow.childNodes[i]);
    
                     var allEntries = getArray();
                var x = search(username, allEntries);
                var todolist = allEntries[x].todo;
                for (i = 0; i < todolist.length; i++) {
                var arr = todolist[i];
                if(arr.duedate>=startDate&&arr.duedate<=EndDate)
                {
                var oldrow = document.getElementById("customers"); //parent
                var node = document.createElement("tr");
                node.setAttribute("id", i);
                node.setAttribute("style", "text-decoration: none;");
                oldrow.appendChild(node);
                  document.getElementById(i).innerHTML = " <td>" +  " <input type='checkbox' id=check" + i + " style='height:20px;width:20px' onchange=checkstate(" + i + ")> " + "</td>" +
             "<td>" + (i + 1) + "</td>" +
            "<td>" + arr.title + "</td>" +
            "<td>" + arr.category + "</td>" +
            "<td>" + arr.duedate + "</td>" +
            "<td>" + arr.reminder + "</td>" +
            "<td>" + arr.reminderdate + "</td>" +
            "<td>" + arr.visibility + "</td>" +
                    "<td>" + "<button id='changestatus" + i + "' class='statusbtn' onclick='changestatus(" + i + ")'    >" +getstatusop(i)+ arr.status + "</button>" + "</td>";
     }
    }


}

function searchByDoneStatus(){
     var selectedstatus=document.getElementById('Islist').value;
    
              clearAllRows();
     if(selectedstatus=='itsdone')
     {
         var allEntries = getArray();
                var x = search(username, allEntries);
                var todolist = allEntries[x].todo;
                for (i = 0; i < todolist.length; i++) {
                var arr = todolist[i];
                 if(arr.status=='Done')
                {
                          var oldrow = document.getElementById("customers"); //parent
                var node = document.createElement("tr");
                node.setAttribute("id", i);
                node.setAttribute("style", "text-decoration: none;");
                oldrow.appendChild(node);
                  document.getElementById(i).innerHTML = " <td>" +  " <input type='checkbox' id=check" + i + " style='height:20px;width:20px' onchange=checkstate(" + i + ")> " + "</td>" +
             "<td>" + (i + 1) + "</td>" +
            "<td>" + arr.title + "</td>" +
            "<td>" + arr.category + "</td>" +
            "<td>" + arr.duedate + "</td>" +
            "<td>" + arr.reminder + "</td>" +
            "<td>" + arr.reminderdate + "</td>" +
            "<td>" + arr.visibility + "</td>" +
                     "<td>" + "<button id='changestatus" + i + "' class='statusbtn' onclick='changestatus(" + i + ")'    >" +getstatusop(i)+ arr.status + "</button>" + "</td>";
   
                }}

     }
    if(selectedstatus=='itsdoing')
    {
                 var allEntries = getArray();
                var x = search(username, allEntries);
                var todolist = allEntries[x].todo;
                for (i = 0; i < todolist.length; i++) {
                var arr = todolist[i];
                 if(arr.status=='pending')
                {
                          var oldrow = document.getElementById("customers"); //parent
                var node = document.createElement("tr");
                node.setAttribute("id", i);
                node.setAttribute("style", "text-decoration: none;");
                oldrow.appendChild(node);
                  document.getElementById(i).innerHTML = " <td>" +  " <input type='checkbox' id=check" + i + " style='height:20px;width:20px' onchange=checkstate(" + i + ")> " + "</td>" +
             "<td>" + (i + 1) + "</td>" +
            "<td>" + arr.title + "</td>" +
            "<td>" + arr.category + "</td>" +
            "<td>" + arr.duedate + "</td>" +
            "<td>" + arr.reminder + "</td>" +
            "<td>" + arr.reminderdate + "</td>" +
            "<td>" + arr.visibility + "</td>" +
                    "<td>" + "<button id='changestatus" + i + "' class='statusbtn' onclick='changestatus(" + i + ")'    >" +getstatusop(i)+ arr.status + "</button>" + "</td>";
   

                }}
    }
    

}
function logout(){
    setUser(null);
      window.location = '../../Index.html';
}
function clearAllRows(){
    var oldrow = document.getElementById("customers"); //parent
                      for(i=oldrow.childElementCount;i>1;i--)
                oldrow.removeChild(oldrow.childNodes[i]);
}

function searchbyCat() {
     var selectedstatus=document.getElementById('catlist').value;
    
               clearAllRows();

               if(selectedstatus=='office')
    {                  
                 var allEntries = getArray();
                var x = search(username, allEntries);
                var todolist = allEntries[x].todo;
                for (i = 0; i < todolist.length; i++) {
                var arr = todolist[i];
                 if(arr.category=='office')
                {   
                          var oldrow = document.getElementById("customers"); //parent
                var node = document.createElement("tr");
                node.setAttribute("id", i);
                node.setAttribute("style", "text-decoration: none;");
                oldrow.appendChild(node);
                document.getElementById(i).innerHTML = " <td>" +  " <input type='checkbox' id=check" + i + " style='height:20px;width:20px' onchange=checkstate(" + i + ")> " + "</td>" +
             "<td>" + (i + 1) + "</td>" +
            "<td>" + arr.title + "</td>" +
            "<td>" + arr.category + "</td>" +
            "<td>" + arr.duedate + "</td>" +
            "<td>" + arr.reminder + "</td>" +
            "<td>" + arr.reminderdate + "</td>" +
            "<td>" + arr.visibility + "</td>" +
                     "<td>" + "<button id='changestatus" + i + "' class='statusbtn' onclick='changestatus(" + i + ")'    >" +getstatusop(i)+ arr.status + "</button>" + "</td>";
   

                }}
    }

    if(selectedstatus=='Home')
    {                  
                 var allEntries = getArray();
                var x = search(username, allEntries);
                var todolist = allEntries[x].todo;
                for (i = 0; i < todolist.length; i++) {
                var arr = todolist[i];
                 if(arr.category=='home')
                {   
                          var oldrow = document.getElementById("customers"); //parent
                var node = document.createElement("tr");
                node.setAttribute("id", i);
                node.setAttribute("style", "text-decoration: none;");
                oldrow.appendChild(node);
                  document.getElementById(i).innerHTML = " <td>" +  " <input type='checkbox' id=check" + i + " style='height:20px;width:20px' onchange=checkstate(" + i + ")> " + "</td>" +
             "<td>" + (i + 1) + "</td>" +
            "<td>" + arr.title + "</td>" +
            "<td>" + arr.category + "</td>" +
            "<td>" + arr.duedate + "</td>" +
            "<td>" + arr.reminder + "</td>" +
            "<td>" + arr.reminderdate + "</td>" +
            "<td>" + arr.visibility + "</td>" +
                     "<td>" + "<button id='changestatus" + i + "' class='statusbtn' onclick='changestatus(" + i + ")'    >" +getstatusop(i)+ arr.status + "</button>" + "</td>";
   

                }}
    }

      if(selectedstatus=='Personal')
    {                  
                 var allEntries = getArray();
                var x = search(username, allEntries);
                var todolist = allEntries[x].todo;
                for (i = 0; i < todolist.length; i++) {
                var arr = todolist[i];
                 if(arr.category=='personal')
                {   
                          var oldrow = document.getElementById("customers"); //parent
                var node = document.createElement("tr");
                node.setAttribute("id", i);
                node.setAttribute("style", "text-decoration: none;");
                oldrow.appendChild(node);
                  document.getElementById(i).innerHTML = " <td>" +  " <input type='checkbox' id=check" + i + " style='height:20px;width:20px' onchange=checkstate(" + i + ")> " + "</td>" +
             "<td>" + (i + 1) + "</td>" +
            "<td>" + arr.title + "</td>" +
            "<td>" + arr.category + "</td>" +
            "<td>" + arr.duedate + "</td>" +
            "<td>" + arr.reminder + "</td>" +
            "<td>" + arr.reminderdate + "</td>" +
            "<td>" + arr.visibility + "</td>" +
                    "<td>" + "<button id='changestatus" + i + "' class='statusbtn' onclick='changestatus(" + i + ")'    >" +getstatusop(i)+ arr.status + "</button>" + "</td>";
   

                }}
    }
    




}