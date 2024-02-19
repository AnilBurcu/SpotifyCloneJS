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
}