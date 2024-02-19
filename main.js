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
// Formun gönderilme olayını izle
document.addEventListener('submit', async (e) => {
    //sayfa yenilemeyi engelle
    e.preventDefault()
    // aratılan kelimeye eriş
    const query = e.target[0].value
    // kelime boşsa uyarı göster
    if (!query.trim()) { // boş mu diye kontrol eder
        return alert("Lütfen aratılacak kelimeyi giriniz.")
    }
    // ekrana yükleniyor bas
    ui.renderLoader()
    // başlığı güncelle
    ui.changeTitle(query + ' için sonuçlar')
    //api'den şarkıları al
    await api.searchMusic(query)
    // şarkıları ekrana bas
    ui.renderCards(api.songs)
})
