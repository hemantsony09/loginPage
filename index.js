function subVal() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let obj = {
        "name": name,
        "email": email,
        "passeword":password
    }
    console.table(obj)

}