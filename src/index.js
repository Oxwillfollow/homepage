import "./styles.css";
import profilePic from "./images/profile-pic.png";
import githubIcon from "./images/github.png";
import imgBattleship from "./images/screenshots/screenshot-battleship.jpg";
import imgTodoList from "./images/screenshots/screenshot-todolist.jpg";

const screenshots = {
  imgBattleship,
  imgTodoList,
};

document.addEventListener("DOMContentLoaded", () => {
  let myProfileImg = document.querySelector(".about-me-img");
  let myGithubIcons = document.querySelectorAll(".github-icon");
  let myProjectScreenshots = document.querySelectorAll(".project-screenshot");

  myProfileImg.src = profilePic;

  myGithubIcons.forEach((icon) => {
    icon.src = githubIcon;
    icon.style.width = "32px";
    icon.style.height = "32px";
  });

  myProjectScreenshots.forEach((screenshot) => {
    screenshot.src = screenshots[screenshot.id];
  });
});
