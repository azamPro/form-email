function sendMail(){
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

