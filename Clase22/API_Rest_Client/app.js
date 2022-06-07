const usersContainer = document.getElementById("users");
const loginBtn = document.querySelector("button")
const form = document.getElementById("form")

//Apenas se monta la app, se lanza una petición HTTP al backend (endpoint: /users)
let data = [];
fetch("http://localhost:3030/users")
    .then((res) => res.json())
    .then((json) => {
        data = json;
        renderData(data);
    }).catch(err => console.log(err))

function renderData(data) {
    data.forEach((element) => {
        let user = document.createElement("span");
        user.textContent = element.name;
        usuarios.appendChild(user)
    });
}

//El evento submit del form lanza un fetch con el método POST al endpoint: /auth/login... En el body cargamos los campos del formulario, es decir email y password.

form.onsubmit = (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const obj = {
        email: data.get("email"),
        password: data.get("password")
    }
    fetch("http://localhost:3030/auth/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            document.cookie = `access_token=${json.Access_Token}`
            localStorage.setItem("refresh_token", json.Refresh_Token)
        })
}

//TODO try fetch with DELETE method (token required)