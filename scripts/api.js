// API istegi atan fonk bu dosyada bulunacak
const options = {
    headers: {
        'X-RapidAPI-Key': 'acd257a390mshc36fbf0e17b4a24p198b66jsnf222ca17be11',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    },
}
// API işlemlerini yönetecek olan class
export default class API {
    //kurucu method
    constructor() {
        this.songs = []
    }
    // Türkiyedeki popüler müzikleri alır
    async getPopular() {
        const res = await fetch(
            'https://shazam.p.rapidapi.com/charts/track?listId=ip-country-chart-TR&locale=tr',
            options
        );
        // gelen veriyi işle
        const data = await res.json();

        // class'ta tanımlanan songs değişkenine verileri aktar
        this.songs = data.tracks
    }
    // Aratılan kelimeye uygun şarkıları al
    async searchMusic(query) {
        const res = await fetch(`
        https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`,
            options);
        //gelen cevabı işle
        const data = await res.json();

        // gelen cevabın formatını değiştir
        // [{ tracks: { veri: '' } }]  === > [{ veri: '' }]
        const formatted = data.tracks.hits.map((song) => {
            return song.track
        })
        // gelen veriyi değişkene aktar
        this.songs = formatted
    }
}