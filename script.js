function myFunction() {
    let password = document.querySelector(".password-input");
    if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
}