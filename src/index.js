import "./styles.css";
import imgProfilePic from "./images/profile-pic.png";
import imgGithubIcon from "./images/github.png";
import imgPreviewIcon from "./images/preview.png";
import imgCallMe from "./images/call-me.png";
import imgBattleship from "./images/screenshots/screenshot-battleship.jpg";
import imgTodoList from "./images/screenshots/screenshot-todolist.jpg";
import imgWeatherApp from "./images/screenshots/screenshot-weatherapp.png";
import imgCalculator from "./images/screenshots/screenshot-calculator.png";
import imgLibraryApp from "./images/screenshots/screenshot-library.png";
import imgSignupForm from "./images/screenshots/screenshot-signup.png";
import imgAdminDashboard from "./images/screenshots/screenshot-dashboard.png";
import imgRestaurantPage from "./images/screenshots/screenshot-restaurant.png";

const screenshots = {
  imgBattleship,
  imgTodoList,
  imgWeatherApp,
  imgCalculator,
  imgLibraryApp,
  imgSignupForm,
  imgAdminDashboard,
  imgRestaurantPage,
};

document.addEventListener("DOMContentLoaded", () => {
  let profileImg = document.querySelector(".img-about-me");
  let contactsImg = document.querySelector(".img-contacts");
  let githubIcons = document.querySelectorAll(".github-icon");
  let previewIcons = document.querySelectorAll(".preview-icon");
  let projectScreenshots = document.querySelectorAll(".project-screenshot");

  profileImg.src = imgProfilePic;
  contactsImg.src = imgCallMe;
  contactsImg.style.width = "250px";

  githubIcons.forEach((icon) => {
    icon.src = imgGithubIcon;
    icon.style.width = "32px";
    icon.style.height = "32px";
  });

  previewIcons.forEach((icon) => {
    icon.src = imgPreviewIcon;
    icon.style.width = "32px";
    icon.style.height = "32px";
  });

  projectScreenshots.forEach((screenshot) => {
    screenshot.src = screenshots[screenshot.id];
  });
});
