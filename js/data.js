export const profil = {
    
    nama: "Ananda Farrel Saputra",
    peran: "Mahasiswa Informatika yang memiliki daftar film favorite",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");