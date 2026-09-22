document.getElementById("studentForm")
        .addEventListener("submit", function(event) {
 
        event.preventDefault();
 
        let name =
            document.getElementById("name").value;
 
        let email =
            document.getElementById("email").value;
 
        let phone =
            document.getElementById("phone").value;
 
        let gender =
            document.getElementById("gender").value;
 
        let course =
            document.getElementById("course").value;
 
        let year =
            document.getElementById("year").value;
 
        let password =
            document.getElementById("password").value;
 
 
        if (phone.length !== 10 || isNaN(phone)) {
 
            alert(
                "Please enter a valid 10-digit phone number"
            );
 
            return;
        }
 
 
        if (password.length < 6) {
 
            alert(
                "Password must contain at least 6 characters"
            );
 
            return;
        }
 
 
        let result =
            document.getElementById("result");
 
 
        result.className = "success";
 
 
        result.innerHTML = `
 
            <h2>🎉 Registration Successful! 🎉</h2>
 
            <p>
                <b>👤 Name:</b> ${name}
            </p>
 
            <p>
                <b>📧 Email:</b> ${email}
            </p>
 
            <p>
                <b>📱 Phone:</b> ${phone}
            </p>
 
            <p>
                <b>⚧ Gender:</b> ${gender}
            </p>
 
            <p>
                <b>🎓 Course:</b> ${course}
            </p>
 
            <p>
                <b>📅 Year:</b> ${year}
            </p>
        `;
 
 
        document.getElementById("studentForm").reset();
 
    });
