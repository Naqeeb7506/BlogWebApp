let blogTitle = document.getElementById("blogTitle");
let blogbody = document.getElementById("blogBody");

let Sblog = JSON.parse(localStorage.getItem("singleblog"));

blogTitle.innerText = `${Sblog.title}`;
blogbody.innerText = `${Sblog.body}`;
