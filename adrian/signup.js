$(document).ready(function() {
    $("#signup").on("submit", function(event) {
        event.preventDefault();
    
        const fullname = $("#fullname").val();
        const nickname = $("#nickname").val();
        const address = $("#address").val();
        const birthdate = $("#birthdate").val();
        const contact = $("#contact").val();
        const username = $("#username").val();
        const email = $("#email").val();
        const password = $("#password").val();
    
        if (fullname=="") {
            alert("Fullname empty");
            return;
        }
        if (nickname=="") {
            alert("nickname empty");
            return;
        }
        if (address=="") {
            alert("address empty");
            return;
        }
        if (birthdate=="") {
            alert("birthdate empty");
            return;
        }
        if (contact=="") {
            alert("contact empty");
            return;
        }
        else if (isNaN(contact)) {
            alert("invalid contact")
            return;
        }
        if (username=="") {
            alert("username empty");
            return;
        }
        if (email=="") {
            alert("email empty");
            return;
        }
        if (password=="") {
            alert("password empty");
            return;
        }
        
        let age;
        
        if (birthdate !== "") {
            const today = new Date();
            const birth = new Date(birthdate);
        
            age = today.getFullYear() - birth.getFullYear();
        
            const monthDiff = today.getMonth() - birth.getMonth();
        
            if (
                monthDiff < 0 ||
                (monthDiff === 0 && today.getDate() < birth.getDate())
            ) {
                age--;
            }
        }
        
        let user = [
            `Fullname: ${fullname}`,
            `Nickname: ${nickname}`,
            `Address: ${address}`,
            `Birthdate: ${birthdate}`,
            `Age: ${age}`,
            `Contact: ${contact}`,
            `Username: ${username}`,
            `Email : ${email}`,
            `Password: ${password}`
        ]
        
        let users = [];
        users.push(user);
        
        $.each(user, function(index, value) {
            console.log(`Index: ${index} : ${value}`)
        })
        
        window.location.href = "/login.html"
    })
})