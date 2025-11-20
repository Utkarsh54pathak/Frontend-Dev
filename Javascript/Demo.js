function getData(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log("Email" +email + "Password" +password);
    // alert("Email" +email + "Password" +password);
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let PasswordPattern =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
;

    if(email == ""|| password==""){
        alert("Please Fill All the fields !!");
    }
    else if(!email.includes("@")){
        alert("InValid email format");
    }
    else if(!email.match(emailPattern)){
        alert("Enter valid");
    }
    else if(!password.match(PasswordPattern)){
        alert("Enter valid pass");
    }
    else{
        NavigatorLogin(email,password)
    }
}
function login(email,password){
    const xhr = new XMLHttpRequest();
    xhr.open("POST","https://localhost:3000/login");
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.onLoad = function () {
        console.log("Response" ,JSON.parser(xhr.responseText));
    };
    const body = {
        email : email,
        password : password,
    };
    xhr.send(JSON.stringify(body));
    
}