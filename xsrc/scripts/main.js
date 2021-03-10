import { getNasaAPOD } from "./data/DataManager.js";
import { Post } from "./Post.js";

const postElement = document.querySelector("main");

const showPost = () => {
    getNasaAPOD().then((allPosts) => {
        postElement.innerHTML = Post(allPosts)
    })
};

showPost();