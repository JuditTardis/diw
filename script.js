// 🎥 Exercici 4 – Controls personalitzats del vídeo
const video = document.getElementById("video");
document.getElementById("play").onclick = () => video.play();
document.getElementById("pause").onclick = () => video.pause();
document.getElementById("volume").onclick = () => video.muted = false;
document.getElementById("mute").onclick = () => video.muted = true;

// 🔽 Exercici 5 – Navbar amb scroll
window.onscroll = function () {
  const menu = document.querySelector(".menu-principal");
  if (window.scrollY > 100) {
    menu.style.padding = "0.3rem 1rem";
    menu.style.backgroundColor = "#111";
  } else {
    menu.style.padding = "0.5rem 2rem";
    menu.style.backgroundColor = "black";
  }
};
