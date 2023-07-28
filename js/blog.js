const posts = document.getElementById("posts");

let postCard = document.createElement("div");
let postAuthor = document.createElement("h4");
let postBody = document.createElement("p");
let postComments = document.createElement("div");
let comment = document.createElement("p");

postAuthor.innerText = "Palmer Sola";
postBody.innerText = "This is a test post";
comment = "Wow so cool";

postComments.append(comment);

postCard.append(postAuthor, postBody, postComments);
posts.append(postCard);
