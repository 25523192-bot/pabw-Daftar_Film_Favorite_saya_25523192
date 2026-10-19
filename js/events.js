
import {
  pilihFilm,
  pilihKategori,
  tambahFavorit,
  aturUlang
} from "./state.js";

export function pasangEventFilm() {
  const wadah = document.querySelector("#daftar");
  const barisFilter = document.querySelector("#filter");

    const tombolAturUlang = document.querySelector("#atur-ulang");

  tombolAturUlang?.addEventListener("click", () => {
    aturUlang();
  });

  // Memilih film
    wadah.addEventListener("click", (event) => {
    const tombolFavorit = event.target.closest(".favorit");

    if (tombolFavorit) {
      tambahFavorit(tombolFavorit.dataset.id);
      return;
    }

    const kartu = event.target.closest(".kartu");
    if (!kartu || !wadah.contains(kartu)) return;

    pilihFilm(kartu.dataset.judul);
  });

  // Dukungan keyboard
  wadah.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const kartu = event.target.closest(".kartu");
    if (!kartu || !wadah.contains(kartu)) return;

    event.preventDefault();
    kartu.click();
  });

  // Filter genre
  barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button[data-kategori]");

  if (!tombol || !barisFilter.contains(tombol)) {
    return;
  }

  pilihKategori(tombol.dataset.kategori);
});


  
  // Validasi formulir rating
  const formRating = document.querySelector("#form-rating");
  const inputNama = document.querySelector("#nama");
  const inputRating = document.querySelector("#rating");
  const inputKomentar = document.querySelector("#komentar");

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

}
