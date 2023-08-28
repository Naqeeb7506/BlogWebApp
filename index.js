// let cardBody = document.getElementById("cardBody");

let print = () => {
  let localBlogs = JSON.parse(localStorage.getItem("blogs"));
  let box = "";
  localBlogs.map((item, index) => {
    box += `
      <div class="card">
              <div class="heading">
                <h3 onclick="getBlog('${item.title}', '${item.body}')">${item.title}</h3>
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
  cardBody.innerHTML = box;
};

print();

function deleteblog(id) {
  let localBlogs = JSON.parse(localStorage.getItem("blogs"));

  let filtered = localBlogs.filter((item, index) => {
    return id !== index;
  });

  localStorage.setItem("blogs", JSON.stringify(filtered));
  print();
}

function getBlog(title, body) {
  let singleblog = {
    title: title,
    body: body,
  };
  localStorage.setItem("singleblog", JSON.stringify(singleblog));
  window.open("/blog.html", "_self");
}
