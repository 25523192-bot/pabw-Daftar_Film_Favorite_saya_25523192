
import { daftarFilm } from "./app.js";

const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#kosong");

const formRating = document.querySelector("#form-rating");
const inputNama = document.querySelector("#nama");
const inputRating = document.querySelector("#rating");
const inputKomentar = document.querySelector("#komentar");

function buatKartu(film) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = film.judul;

  const tahun = document.createElement("p");
  tahun.textContent = `Tahun: ${film.tahun}`;

  const genre = document.createElement("p");
  genre.textContent = `Genre: ${film.genre}`;

  li.append(judul, tahun, genre);

  return li;
}

function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  daftar.forEach((film) => {
    wadah.append(buatKartu(film));
  });
}

render(daftarFilm);