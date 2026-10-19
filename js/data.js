export const profil = {
    
    nama: "Ananda Farrel Saputra",
    peran: "Mahasiswa Informatika yang memiliki daftar film favorite",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");


export function saring(daftar, kategori) {
  if (kategori === "semua") {
    return [...daftar];
  }

  return daftar.filter((film) =>
    film.genre
      .split(",")
      .some((genre) => genre.trim().toLowerCase() === kategori.toLowerCase())
  );
}
