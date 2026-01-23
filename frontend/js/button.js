let container = document.getElementById("container");
let angka = 0;

container.innerText = angka;

function tambah() {
  angka++;

  container.innerText = angka;
}

function kurang() {
  angka--;

  container.innerText = angka;
}
