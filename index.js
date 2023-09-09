function subVal() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let obj = {
        "name": name,
        "email": email,
        "passeword":password
    }
    console.table(obj);
}
function singin(){
    document.getElementById("container").style.display="none";
    document.getElementById("container2").style.display="block";
}
function login(){
    document.getElementById("container2").style.display="none";
    document.getElementById("container").style.display="block";
    
}
