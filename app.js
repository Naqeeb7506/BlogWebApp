let title = document.getElementById("title");
let blogBody = document.getElementById("blogBlog");
let postBtn = document.getElementById("postBtn");
let cardBody = document.getElementById("cardBody");

postBtn.addEventListener("click", () => {
  if (title.value === "" || blogBody.value === "") {
    window.alert("Please enter details correctly");
  } else {
    let localBlogs = JSON.parse(localStorage.getItem("blogs"));

    if (!localBlogs) {
      localBlogs = [];
    }

    let newBlog = {
      title: title.value,
      body: blogBody.value,
    };
    localBlogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(localBlogs));
    title.value = "";
    blogBody.value = "";
    window.open("/BlogWebApp/index.html", "_self");
    printBlog();
  }
});

let printBlog = () => {
  let localBlogs = JSON.parse(localStorage.getItem("blogs"));
  let box = "";
  localBlogs.map((item, index) => {
    box += `
    <div class="card" onclick="getBlog(${item.title}, ${item.body})">
            <div class="heading">
            <h3>${item.title}</h3>
            <div onclick="deleteblog(${index})">
                <i class="fa-solid fa-trash dlt"></i>
                </div>
            </div>
            <div class="card-body">
              <p>
                ${item.body}
              </p>
            </div>
          </div>
    `;
  });
  // cardBody.innerHTML = box;
};
printBlog();

// function getBlog(title, body) {
//   let singleblog = {
//     title: title,
//     body: body,
//   };
//   localStorage.setItem("singleblog", JSON.stringify(singleblog));

//   window.open("/blog.html", "_self");
// }
