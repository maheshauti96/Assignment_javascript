function registerUser(event) {
   // event.preventDefault();
    if (validate()) {
        var newdata = getData();
        window.alert("user " + newdata.Fname + " " + newdata.Lname + " registered successfully");
        setUser(newdata.Email);
        var allEntries = getArray();
        allEntries.push(newdata);
        setArray(allEntries);
        window.location = "./Assets/htmlPages/homepage.html";
        return true;
    } else {
       
        return false;
    }
}

function User(Fname, Lname, Email, Address, imgurl, pwd, gender) {
    this.Fname = Fname;
    this.Lname = Lname;
    this.Email = Email;
    this.Address = Address;
    this.imgurl = imgurl;
    this.pwd = pwd;
    this.gender = gender;
}

function getData() {
    var Fname = document.getElementById("fname").value;
    var Lname = document.getElementById("lname").value;
    var Email = document.getElementById("emailAddr").value;
    var Address = document.getElementById("address").value;
    var imgurl = document.getElementById("img").value;
    var pwd = document.getElementById("pwd1").value;
    var gender = document.getElementById("gender").value;
    var newUserObj = new User(Fname, Lname, Email, Address, imgurl, pwd, gender);
    return newUserObj;
}