function getArray() {
    var allEntries = JSON.parse(localStorage.getItem('allEntries'));
    if (allEntries == undefined)
        allEntries = new Array();
    return allEntries;
}

function setArray(allEntries) {

    localStorage.setItem("allEntries", JSON.stringify(allEntries));

}

function setUser(emailaddr) {
    localStorage.setItem('username', emailaddr);
}

function getUser() {
    return localStorage.getItem('username');
}