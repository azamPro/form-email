function sendMail(){
    if(validateForm()){
        let params ={
            from_name: document.getElementById("fullName").value,
            email_id: document.getElementById("email_id").value,
            message: document.getElementById("message").value,
        }
        console.log(params);
        emailjs.send("service_code","template_code",params).then(function(res){
            alert("success" + res.status);
        })
    }
    
}


function validateForm() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email_id").value;
    let message = document.getElementById("message").value;

    // Check if inputs are empty
    if (fullName === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }

    // Validate email format
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}