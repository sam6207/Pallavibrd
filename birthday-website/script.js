const birthdayDate = new Date("February 15, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = birthdayDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `🎂 ${days}d ${hours}h ${minutes}m ${seconds}s left`;
}, 1000);


function addWish() {
  const input = document.getElementById("wishInput");
  const list = document.getElementById("wishList");

  if (input.value === "") {
    alert("Please write a wish ❤️");
    return;
  }

  const li = document.createElement("li");
  li.innerText = input.value;
  list.appendChild(li);
  let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
  wishes.push(input.value);
  localStorage.setItem("wishes", JSON.stringify(wishes));

  input.value = "";

  showThankYou();

  input.value = "";
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

/* ===== GALLERY IMAGES ARRAY ===== */
const galleryImages = [
  "g1.jpg",
  "g2.jpg",
  "g3.jpg",
  "g4.jpg",
  "g5.jpg",
  "g6.jpg",
  "g7.jpg",
  "g8.jpg",
  "g9.jpg",
  "g10.jpg",
  "gulli.jpg"
];
CaretPosition.onclick = function(e){
  clearInterval(CaroAutoplay);
  console.log(e.type + ' mouse detected');
}
 hammer.on('tap', function(e){
  clearInterval(CaroAutoplay);
  console.log(e.type + ' gesture detected');
 })

/* ===== OPEN POPUP ===== */
function openPopup(index) {
  currentSlide = index;
  document.getElementById("popupImg").src = galleryImages[index];
  document.getElementById("popup").style.display = "flex";
}
document.getElementById("popupImg").addEventListener("click", () => {
  const img = document.getElementById("popupImg");
  if (img.requestFullscreen) {
    img.requestFullscreen();
  }
});


/* ===== CLOSE POPUP ===== */
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/* ===== AUTO SLIDE IN POPUP ===== */
setInterval(() => {
  const popup = document.getElementById("popup");
  if (popup.style.display === "flex") {
    currentSlide = (currentSlide + 1) % galleryImages.length;
    document.getElementById("popupImg").src =
      galleryImages[currentSlide];
  }
}, 3000);

