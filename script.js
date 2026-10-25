const blogForm = document.getElementById("blogForm");

blogForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("blogTitle").value.trim();
    const content = document.getElementById("blogContent").value.trim();

    if (!title || !content) {
        alert("Please enter the blog title and content.");
        return;
    }

    const post = document.createElement("article");
    post.className = "post";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = content;

    post.appendChild(heading);
    post.appendChild(paragraph);

    document.getElementById("newPosts").prepend(post);

    blogForm.reset();

    alert("Your blog has been published on this page!");
});