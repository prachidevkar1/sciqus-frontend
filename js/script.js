function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("show");
}
let images = [
  "https://picsum.photos/400/200?1",
  "https://picsum.photos/400/200?2",
  "https://picsum.photos/400/200?3"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 3000);
