
    function Login() {
      var username = document.getElementById("user").value;
      var password = document.getElementById("pass").value;
      if (username === "merjohnmacalisang@gmail.com" && password === "09483166260") {
        window.location.href = "JohnHomepage.html";
      } else {
        alert("Incorrect username or password");
      }
    }

    function showpass(checkbox) {
      var password = document.getElementById("pass");
      if (checkbox.checked) {
        password.setAttribute("type", "text");
      } else {
        password.setAttribute("type", "password");
      }
    }