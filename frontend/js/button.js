// let container = document.getElementsByClassName("container")[0];
let container = document.querySelector(".container");
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
