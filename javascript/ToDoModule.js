function loadhomepage(){
username=localStorage.getItem('username');
document.getElementById("username").innerHTML=username;
var allEntries = JSON.parse(localStorage.getItem('allEntries'));
var x=search(username,allEntries);
var todolist=allEntries[x].todo;
for(i=0;i<todolist.length;i++)
{   var arr=todolist[i];
  
   var title=arr.title;
    var duedate=arr.duedate;
    var category=arr.category;
    var reminder=arr.reminder;
    var reminderdate=arr.reminderdate;
    var visibility=arr.visibility;
    var status=arr.status;
    var oldrow=document.getElementById("customers");//parent
    var node = document.createElement("tr");
    node.setAttribute("id", i);
    node.setAttribute("style", "text-decoration: none;");
    oldrow.appendChild(node);
    document.getElementById(i).innerHTML=" <td>"+(i+1)+". <input type='checkbox' id=check"+i+" style='height:20px;width:20px' onchange=makestrikethrough("+i+")> "+"</td>"+
                                                "<td>"+title+"</td>"+
                                              "<td>"+category+"</td>"+
                                              "<td>"+duedate+"</td>"+
                                              "<td>"+reminder+"</td>"+
                                              "<td>"+reminderdate+"</td>"+
                                              "<td>"+visibility+"</td>"+
                                              "<td>"+"<button id='changestatus"+i+"' onclick='changestatus("+i+")'>"+status+"</button>"+"</td>";
    
}
  if(todolist.length==0){
     var oldrow=document.getElementById("customers");//parent
    var node = document.createElement("div");
    node.setAttribute("id", "-1");
    node.setAttribute("style", "text-decoration: none;");
     node.setAttribute("style", "colspan: 8;");
    node.setAttribute("style", "text-align: center;");
    oldrow.appendChild(node);
     document.getElementById("-1").innerHTML="no contents to show";
  }


}
function additem(){
    window.location="./newItem.html";
}

function saveitem(){
    var title=document.getElementById("todoTitle").value;
    var duedate=document.getElementById("Due_date").value;
    var category=document.querySelector('input[name = "Category"]:checked').value;
    var reminder=document.getElementById("reminder").checked;
    var reminderdate=document.getElementById("Rdate").value;
    var visibility=document.querySelector('input[name = "visibility"]:checked').value;
    var item=new getitem(title,duedate,category,reminder,reminderdate,visibility);
    localStorage.getItem('username');
    var allEntries = JSON.parse(localStorage.getItem('allEntries'));
    var x=search(username,allEntries);
    if(allEntries[x].todo==undefined)
    allEntries[x].todo= new Array();
    allEntries[x].todo.push(item);
    localStorage.setItem("allEntries", JSON.stringify(allEntries));
    window.location="./homepage.html";
}

function getitem(title,duedate,category,reminder,reminderdate,visibility,item)
{
this.title=title;
this.duedate=duedate;
this.category=category;
this.reminder=reminder;
this.reminderdate=reminderdate;
this.visibility=visibility;
this.status="doing";
}
function search(username,allEntries){
    for (x=0; x<allEntries.length; x++){
        if(username==allEntries[x].Email)
            return x;
       }
   }

function addreminder(){
    document.getElementById("time").style.display="block";
}

    function Deleteitems(){

        username=localStorage.getItem('username');
        var allEntries = JSON.parse(localStorage.getItem('allEntries'));
         var x=search(username,allEntries);
         var todolist=allEntries[x].todo;
         for(i=0;i<todolist.length;i++)
         {
            var arr=todolist[i];
            if(document.getElementById("check"+i).checked == true)
            {
                todolist.splice(i, 1);
                i=-1;
               
                // window.alert("item "+i+" deleted");
            }
         }
         localStorage.setItem("allEntries", JSON.stringify(allEntries));
         location.reload();


    }

    function changestatus(i){
     
        username=localStorage.getItem('username');
        var allEntries = JSON.parse(localStorage.getItem('allEntries'));
         var x=search(username,allEntries);
         var todolist=allEntries[x].todo;
         
            var arr=todolist[i];
            arr.status="Done";
           document.getElementById("changestatus"+i).innerHTML="Done";
            
        localStorage.setItem("allEntries", JSON.stringify(allEntries));

    }
    