import API from './scripts/api.js';
import UI from './scripts/ui.js';

// Classı kullanmak için örneğini oluştur

const api = new API()
const ui = new UI()


//sayfanin yuklenme olayini izle
document.addEventListener('DOMContentLoaded', async () => {
    // 1)ekrana yüklenme gifi bas
    ui.renderLoader()
    // 2)api istek at
    await api.getPopular();
    // 3)gelen verileri ekrana bas
    ui.renderCards(api.songs)
})
