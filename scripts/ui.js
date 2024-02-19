// Arayüz DOM işlemleri

export default class UI {
    constructor() {
        this.list = document.querySelector('#list')
    }
    // Liste alanına yüklenme gifi basar
    renderLoader() {
        this.list.innerHTML = `
        <div class="loader">
        <div class="circle outer"></div>
        <div class="circle inner"></div>
        </div>`;

    }

    // Ekrana kartları bas
    renderCards(songs) {
        // Loader ekrandan kaldır
        this.list.innerHTML = ''
        //dizideki her bir eleman için aşağıdaki fınk. çalıştır
        songs.forEach(() => {
            // 1) elementi oluştur
            const div = document.createElement('div')
            // 2) class ekleme
            div.className = 'card'
            // 3) innerHTML belirle
            div.innerHTML = `
            <figure>
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/19/66/36196640-1561-dc5e-c6bc-1e5f4befa583/093624856771.jpg/400x400cc.jpg"
              />
              <div id="play">
                <i id="play-btn" class="bi bi-play-fill"></i>
              </div>
            </figure>

            <h4>Teddy Swims</h4>
            <p>Lose Control</p>
            `
            // 4) kartı html'e gönder
            this.list.appendChild(div)
        });
    }
}