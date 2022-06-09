const usersContainer = document.getElementById("users");
const postsContainer = document.getElementById("posts")
const loginBtn = document.querySelector("button")
const formLogin = document.getElementById("formLogin")
const formPosts = document.getElementById("formPosts")
const btnGetPosts = document.getElementById("btnGetPosts")
btnGetPosts.addEventListener("click", handleGetPosts)

function handleGetPosts() {
    fetch("http://localhost:3030/posts")
        .then(res => res.json())
        .then(data => renderPosts(data))
        .catch(err => console.log("Ta todo doto:", err))
}

function renderPosts(posts) {
    posts.forEach((post) => {
        const postTitle = document.createElement("h4")
        const postBody = document.createElement("p")
        postTitle.textContent = post.title
        postBody.textContent = post.body
        postsContainer.append(postTitle, postBody) //??? Can I?
    })

}
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
        let user = document.createElement("p");
        user.textContent = element.email;
        usersContainer.appendChild(user)
    });
}

//El evento submit del form lanza un fetch con el método POST al endpoint: /auth/login... En el body cargamos los campos del formulario, es decir email y password.

formLogin.onsubmit = (e) => {
    e.preventDefault()
    const data = new FormData(formLogin)
    const obj = {
        email: data.get("email"),
        password: data.get("password")
    }
    fetch("http://localhost:3030/auth/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            // document.cookie = `access_token=${json.Access_Token}`
            localStorage.setItem("access_token", json.Access_Token)
            localStorage.setItem("refresh_token", json.Refresh_Token)
        })
}

//TODO try fetch with POST method (token required)
formPosts.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formPosts)
    const obj = {
        userid: +data.get("userid"),
        title: data.get("title"),
        body: data.get("body")
    }
    fetch("http://localhost:3030/posts/", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("access_token")
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}