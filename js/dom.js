
import { daftarFilm } from "./app.js";

const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#kosong");

const formRating = document.querySelector("#form-rating");
const inputNama = document.querySelector("#nama");
const inputRating = document.querySelector("#rating");
const inputKomentar = document.querySelector("#komentar");
const detailFilm = document.querySelector("#detail-film");


function buatKartu(film) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.tabIndex = 0;
  li.setAttribute("role", "button");
  li.setAttribute("aria-label", `Tampilkan poster ${film.judul}`);

  const pilihFilm = () => {
    renderDetail(film);
    wadah.querySelectorAll(".kartu").forEach((kartu) => {
      kartu.classList.remove("terpilih");
    });
    li.classList.add("terpilih");
  };

  li.addEventListener("click", pilihFilm);
  li.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      pilihFilm();
    }
  });

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = film.judul;

  const tahun = document.createElement("p");
  tahun.textContent = `Tahun: ${film.tahun}`;

  const genre = document.createElement("p");
  genre.textContent = `Genre: ${film.genre}`;

  li.append(judul, tahun, genre);

  if (film.deskripsi) {
    const deskripsi = document.createElement("p");
    deskripsi.className = "kartu__deskripsi";
    deskripsi.textContent = film.deskripsi;
    li.append(deskripsi);
  }

  return li;
}



function renderDetail(film) {
  detailFilm.textContent = "";

  if (!film) {
    detailFilm.hidden = true;
    return;
  }

  detailFilm.hidden = false;

  const gambar = document.createElement("img");
  gambar.src = film.gambar;
  gambar.alt = `Poster film ${film.judul}`;
  gambar.loading = "lazy";

  detailFilm.append(gambar);
}




function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    renderDetail(null);
    return;
  }

  kosong.hidden = true;

  renderDetail(daftar[0]);

  daftar.forEach((film, index) => {
    const kartu = buatKartu(film);
    if (index === 0) kartu.classList.add("terpilih");
    wadah.append(kartu);
  });
}


render(daftarFilm);


let kategoriAktif = "semua";

const tombolSemua = barisFilter.querySelector(
  'button[data-kategori="semua"]'
);

tombolSemua?.classList.add("aktif");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");

  if (!tombol || !barisFilter.contains(tombol)) {
    return;
  }

  kategoriAktif = tombol.dataset.kategori;

  barisFilter.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("aktif", button === tombol);
  });

  const hasilFilter =
    kategoriAktif === "semua"
      ? daftarFilm
      : daftarFilm.filter((film) =>
          film.genre.includes(kategoriAktif)
        );

  render(hasilFilter);
});




function tampilkanError(input, pesanId, pesan) {
  const elemenPesan = document.querySelector(`#${pesanId}`);

  elemenPesan.textContent = pesan;
  elemenPesan.hidden = false;
  input.setAttribute("aria-invalid", "true");
}

function hapusError(input, pesanId) {
  const elemenPesan = document.querySelector(`#${pesanId}`);

  elemenPesan.textContent = "";
  elemenPesan.hidden = true;
  input.removeAttribute("aria-invalid");
}

const tombolKirim = formRating.querySelector(
  'button[type="submit"]'
);

let sudahDiperiksa = false;

function periksaForm() {
  const namaSalah = inputNama.value.trim() === "";

  const nilaiRating = Number(inputRating.value);
  const ratingSalah =
    inputRating.value.trim() === "" ||
    !Number.isFinite(nilaiRating) ||
    nilaiRating < 1 ||
    nilaiRating > 10;

  if (namaSalah) {
    tampilkanError(inputNama, "nama-galat", "Nama wajib diisi.");
  } else {
    hapusError(inputNama, "nama-galat");
  }

  if (ratingSalah) {
    tampilkanError(
      inputRating,
      "rating-galat",
      "Rating wajib diisi dengan angka 1 sampai 10."
    );
  } else {
    hapusError(inputRating, "rating-galat");
  }

  const sah = !namaSalah && !ratingSalah;

  if (sudahDiperiksa) {
    tombolKirim.disabled = !sah;
  }

  return { sah, namaSalah, ratingSalah };
}

formRating.addEventListener("submit", (event) => {
  event.preventDefault();

  sudahDiperiksa = true;

  const hasil = periksaForm();
  tombolKirim.disabled = !hasil.sah;

  if (!hasil.sah) {
    if (hasil.namaSalah) {
      inputNama.focus();
    } else {
      inputRating.focus();
    }

    return;
  }

  alert("Validasi berhasil! Form siap diproses.");
});

[inputNama, inputRating, inputKomentar].forEach((input) => {
  input.addEventListener("input", () => {
    periksaForm();
  });
});

