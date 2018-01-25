
  	 var obj;
	var allEntries;
   function loadprofile(){
       username=localStorage.getItem('username');
       allEntries = JSON.parse(localStorage.getItem('allEntries'));
       var x = search(username, allEntries);
       obj= allEntries[x];
       //allEntries.splice(x, 1);
       localStorage.setItem("allEntries", JSON.stringify(allEntries));
       document.getElementById("PR_EMAIL").value=obj.Email;
       document.getElementById("PR_FN").value=obj.Fname;
       document.getElementById("PR_LN").value=obj.Lname;
       document.getElementById("PR_GENDER").value=obj.gender;
       document.getElementById("PR_ADDRESS").value=obj.Address;
       document.getElementById("PR_IMAGE").value=obj.imgurl;
   }
   function search(username,allEntries){
    for (x=0; x<allEntries.length; x++){
        if(username==allEntries[x].Email)

            return x;
            
       }

   }
   function makeeditable(){
  
    document.getElementById("PR_FN").readOnly=false;
    document.getElementById("PR_LN").readOnly=false;
    document.getElementById("PR_GENDER").readOnly=false;
    document.getElementById("PR_ADDRESS").readOnly=false;
    document.getElementById("PR_IMAGE").readOnly=false;
    // document.getElementById("choose").style.display=inline-block;

    var para = document.createElement("input");
    para.setAttribute("type", "file");
    para.setAttribute("style", "display: block;");
    para.setAttribute("style", "z-index: 1000;");
    var element = document.getElementById("choose");
    element.appendChild(para);
   }

   function updateinfo(){
       obj.Fname= document.getElementById("PR_FN").value;
       obj.Lname=document.getElementById("PR_LN").value;
       obj.gender= document.getElementById("PR_GENDER").value;
       obj.Address=  document.getElementById("PR_ADDRESS").value;
       obj.imgurl= document.getElementById("PR_IMAGE").value;
      // var allEntries = JSON.parse(localStorage.getItem('allEntries'));
     // allEntries.push(obj);
     localStorage.setItem("allEntries", JSON.stringify(allEntries));
       window.alert("profile updated successfully");

   }


