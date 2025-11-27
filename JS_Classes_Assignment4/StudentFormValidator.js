function validateStudentForm(data) {
    const { name, email, phone, password } = data;

    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

    let errors = {};

    if (!namePattern.test(name)) {
        errors.name = "Name must contain only alphabets.";
    }

    if (!emailPattern.test(email)) {
        errors.email = "Invalid email format.";
    }

    if (!phonePattern.test(phone)) {
        errors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!passwordPattern.test(password)) {
        errors.password =
            "Password must contain 1 uppercase, 1 number, and 1 special character.";
    }

    if (Object.keys(errors).length === 0) {
        return { success: true, message: "Validation passed!" };
    }

    return { success: false, errors };
}

const student = {
    name: "Shiv Kumar",
    email: "shiv@gmail.com",
    phone: "9876543210",
    password: "Hello@123"
};

console.log(validateStudentForm(student));
