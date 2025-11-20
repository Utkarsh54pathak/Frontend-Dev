function getData() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let country = document.getElementById('country').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let terms = document.getElementById('terms').checked;
    let namePattern = /^[A-Za-z ]{3,40}$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    let phonePattern = /^[6-9]\d{9}$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;


    if (name == "" || email == "" || phone == "" || !gender || country == "" || password == "" || confirmPassword == "") {
        alert("Please fill all the fields!");
    }
    else if (!name.match(namePattern)) {
        alert("Invalid Name! Only letters allowed, min 3 characters.");
    }
    else if (!email.includes("@")) {
        alert("Invalid Email Format!");
    }
    else if (!email.match(emailPattern)) {
        alert("Enter a valid Email!");
    }
    else if (!phone.match(phonePattern)) {
        alert("Enter a valid 10-digit Phone Number (starts with 6-9).");
    }
    else if (!password.match(passwordPattern)) {
        alert("Password must be 8–20 characters and include letters + numbers.");  
    }
    else if (password !== confirmPassword) {
        alert("Passwords do not match!");
    }
    else if (!terms) {
        alert("You must agree to the Terms & Conditions!");
    }
    else {
        alert("Registration Successful!");
        console.log("Name: " + name + 
                    " Email: " + email + 
                    " Phone: " + phone +
                    " Country: " + country);
    }
}
