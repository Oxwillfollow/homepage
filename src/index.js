import "./styles.css";
import imgProfilePic from "./images/profile-pic.png";
import imgGithubIcon from "./images/github.png";
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
  let myProfileImg = document.querySelector(".about-me-img");
  let myGithubIcons = document.querySelectorAll(".github-icon");
  let myProjectScreenshots = document.querySelectorAll(".project-screenshot");

  myProfileImg.src = imgProfilePic;

  myGithubIcons.forEach((icon) => {
    icon.src = imgGithubIcon;
    icon.style.width = "32px";
    icon.style.height = "32px";
  });

  myProjectScreenshots.forEach((screenshot) => {
    screenshot.src = screenshots[screenshot.id];
  });
});
