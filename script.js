let points = 0;
const doge = document.getElementById('doge');
const score = document.getElementById('score');

// Gambar awal Doge
const dogeInitial = 'assets/Doge.webp';

// List gambar Doge alternatif
const dogeImages = [
  'assets/DogeSmile.webp'
];

// URL suara gonggongan
const dogSoundURL = 'https://soundimage.org/wp-content/uploads/2023/05/Small-Dog-Single-Bark.mp3';

doge.addEventListener('click', () => {
  // Tambah poin
  points++;
  score.textContent = points;

  // Ganti gambar sementara
  const randomIndex = Math.floor(Math.random() * dogeImages.length);
  doge.src = dogeImages[randomIndex];

  // Kembalikan ke gambar awal setelah 500ms
  setTimeout(() => {
    doge.src = dogeInitial;
  }, 500);

  // Mainkan suara (bisa overlap)
  const audio = new Audio(dogSoundURL);
  audio.play();
});
const hamburger = document.getElementById('hamburger');
const navContainer = document.getElementById('nav-container');

hamburger.addEventListener('click', () => {
  navContainer.classList.toggle('active');
});

