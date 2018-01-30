var obj;
var allEntries;

function loadprofile() {
    username = getUser();

    var allEntries = getArray();
    var x = search(username, allEntries);
    obj = allEntries[x];
    document.getElementById("PR_EMAIL").value = obj.Email;
    document.getElementById("PR_FN").value = obj.Fname;
    document.getElementById("PR_LN").value = obj.Lname;
    document.getElementById("PR_GENDER").value = obj.gender;
    document.getElementById("PR_ADDRESS").value = obj.Address;
    document.getElementById("PR_IMAGE").value = obj.imgurl;
}

function search(username, allEntries) {
    for (x = 0; x < allEntries.length; x++) {
        if (username == allEntries[x].Email)

            return x;

    }

}

function makeEditable() {

    document.getElementById("PR_FN").readOnly = false;
    document.getElementById("PR_LN").readOnly = false;
    document.getElementById("PR_GENDER").readOnly = false;
    document.getElementById("PR_ADDRESS").readOnly = false;
    document.getElementById("PR_IMAGE").readOnly = false;


    // var para = document.createElement("input");
    // para.setAttribute("type", "file");
    // para.setAttribute("style", "display: block;");
    // var parent = document.getElementById("choose");
    // parent.style.display = "block;"
    // parent.appendChild(para);
}

function updateInfo() {
     username = getUser();
    var allEntries = getArray();
    var x = search(username, allEntries);
    obj = allEntries[x];
    obj.Fname = document.getElementById("PR_FN").value;
    obj.Lname = document.getElementById("PR_LN").value;
    obj.gender = document.getElementById("PR_GENDER").value;
    obj.Address = document.getElementById("PR_ADDRESS").value;
    obj.imgurl = document.getElementById("PR_IMAGE").value;
    
    setArray(allEntries);

    window.alert("profile updated successfully");

}