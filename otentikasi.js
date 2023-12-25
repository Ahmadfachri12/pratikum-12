function LoginBerhasil() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    var correctUsername = "Ahmdfhri";
    var correctPassword = "12345678";
  
    if (username === correctUsername && password === correctPassword) {
      window.location.href = "LoginSukses.html";
      alert("Login Sukses")

    } else {
      alert("Login Gagal")
    }
  }
  