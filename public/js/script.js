  document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Perform login validation here
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    // Redirect to another page or perform further actions
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
