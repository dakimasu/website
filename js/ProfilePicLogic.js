const ProfilePicsArray = [
  "YotsubaSad.jpg",
  "YotsubaThinking.jpg",
  "OsakaAngry.jpg",
  "OsakaWTF.jpg",
  "OsakaSmoked.jpg",
  "MothInABox.png",
  "Nano.jpg",
  "SherlockHound.jpg",
  "TerryAngry.png",
  "TerryBooks.png",
  "TerryConfused.png",
  "TerryHappy.png",
  "TerryScared.png",
];
const SideTopDiv = document.getElementById("Side-Top");
const ProfilePic = document.createElement("img");

ProfilePic.id = "ProfilePic";
ProfilePic.src =
  "./images/profile/" +
  ProfilePicsArray[Math.floor(Math.random() * ProfilePicsArray.length)];
SideTopDiv.appendChild(ProfilePic);
