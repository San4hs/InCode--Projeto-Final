var carouselItems = document.querySelectorAll('.carousel-item');
var currentIndex = 0;
var interval;

function startCarousel() {
  interval = setInterval(changeSlide, 3000);
}

function stopCarousel() {
  clearInterval(interval);
}

function changeSlide() {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
}

startCarousel();

///// forum

let posts = [];

function addPost(content, image) {
  const post = { content, image };
  posts.push(post);
}

function displayPosts() {
  const postsList = document.getElementById("posts-list");
  postsList.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const postContent = document.createElement("p");
    postContent.classList.add("post-content");
    postContent.textContent = post.content;
    postDiv.appendChild(postContent);

    if (post.image) {
      const postImage = document.createElement("img");
      postImage.classList.add("post-image");
      postImage.src = URL.createObjectURL(post.image);
      postDiv.appendChild(postImage);
    }

    postsList.appendChild(postDiv);
  }
}

const postButton = document.getElementById("post-button");
postButton.addEventListener("click", () => {
  const postContent = document.getElementById("post-content").value;
  const postImage = document.getElementById("post-image").files[0];

  addPost(postContent, postImage);
  displayPosts();

  document.getElementById("post-content").value = "";
  document.getElementById("post-image").value = "";
});
