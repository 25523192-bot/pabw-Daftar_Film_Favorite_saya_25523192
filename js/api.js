


const ALAMAT = 'https://raw.githubusercontent.com/25523192-bot/pabw-Daftar_Film_Favorite_saya_25523192/main/data/proyek.json';

export async function ambilProyek() {
    try {
        const respons = await fetch(ALAMAT);

        if (!respons.ok) {
            throw new Error('status ' + respons.status);
        }

        const data = await respons.json();
        return data;
    } catch (galat) {
        console.error('gagal memuat', galat.message);
        throw galat;
    }
}
