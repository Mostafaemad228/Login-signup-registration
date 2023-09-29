
let Main = document.querySelector(".Main");
let SignupLink = document.querySelector(".SignupLink");
let login_header = document.querySelector(".login h2");

let signUpUsername = document.querySelector(".signUpUsername");
let Username = document.querySelector(".userName");
let signUpPassword = document.querySelector(".signUpPassword");
let signUpconfirmedPassword = document.querySelector(".signUpconfirmedPassword");
let SignupForm = document.querySelector(".SignupForm");

let logInUsername = document.querySelector(".logInUsername");
let logInPassword = document.querySelector(".logInPassword");
let logInForm = document.querySelector(".logInForm");







let users = JSON.parse(localStorage.getItem('users')) || [];

function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

SignupForm.onsubmit = function (e) {
    e.preventDefault();

    const username = signUpUsername.value;
    const password = signUpPassword.value;
    const confirmedPassword = signUpconfirmedPassword.value;


    if (password != confirmedPassword) {
        signUpPassword.classList.add("wrong")
        signUpconfirmedPassword.classList.add("wrong")
        console.log("password error");
    } else {
        signUpPassword.classList.remove("wrong")
        signUpconfirmedPassword.classList.remove("wrong")
    }

    const UsrExsist = users.find(user => user.username === username);

    if (UsrExsist) {
        alert('User already exists');
    } else {
        users.push({
            username: username,
            password: password
        });
        saveUsersToLocalStorage();
        Main.classList.add("active")
    }
    Username.value = ""
    signUpUsername.value = ""
    signUpPassword.value = ""
    confirmedPassword.value = ""

    console.log(users);
   
}





logInForm.onsubmit = function (e) {
    e.preventDefault();

    const username = logInUsername.value;
    const password = logInPassword.value;

    const comparing = users.find(user => user.username === username && user.password === password);

    if (comparing) {
        logInUsername.value = ""
        logInPassword.value = ""
        logInPassword.classList.remove("wrong")
        window.location.href = "test.html";
    } else {
        alert("Wrong username or password!");
        logInPassword.classList.add("wrong")

    }
}

// ///////////////////////////////////////////////////////////
// add active to open login side

login_header.addEventListener("click", function () {
    Main.classList.add("active");
    

});

SignupLink.addEventListener("click", function () {
    Main.classList.remove("active")
});


// ////////////////////////////////////////// ////////////////////////////////////////
// ////////////////////////////////////////// ////////////////////////////////////////