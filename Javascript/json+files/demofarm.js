$(document).ready(function () {

    $("#regForm").submit(function (e) {
        e.preventDefault(); 
        validateForm();
    });

});

function validateForm() {

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let gender = $("input[name='gender']:checked").val();
    let country = $("#country").val();
    let password = $("#password").val();
    let cpassword = $("#cpassword").val();
    let terms = $("#terms").is(":checked");

   
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{7,15}$/;

 
    if (!name) {
        alert("Full Name is required");
        return;
    }

    if (!email) {
        alert("Email is required");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
        return;
    }

    if (!phone) {
        alert("Phone Number is required");
        return;
    }
    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits");
        return;
    }

    if (!gender) {
        alert("Please select gender");
        return;
    }

    if (!country) {
        alert("Please select a country");
        return;
    }

    if (!password) {
        alert("Password is required");
        return;
    }
    if (!passwordPattern.test(password)) {
        alert("Password must be 7–15 chars long, include 1 number & 1 special character");
        return;
    }

    if (!cpassword) {
        alert("Confirm Password is required");
        return;
    }
    if (password !== cpassword) {
        alert("Passwords do not match");
        return;
    }

    if (!terms) {
        alert("You must accept Terms & Conditions");
        return;
    }

    // If all validations pass
    sendDataToBackend({ name, email, phone, gender, country, password });
}

function sendDataToBackend(data) {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/register");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        console.log("Response:", JSON.parse(xhr.responseText));
        alert("Registration Successful!");
    };

    xhr.send(JSON.stringify(data));
}
