// Arayüz DOM işlemleri

export default class UI {
    constructor() {
        this.list = document.querySelector('#list')
        this.form = document.querySelector('#search-form')
        this.title = document.querySelector('#title')
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
        songs.forEach((songs) => {
            // 1) elementi oluştur
            const div = document.createElement('div')
            // 2) class ekleme
            div.className = 'card'
            // 3) innerHTML belirle
            div.innerHTML = `
            <figure>
              <img
                src="${songs.images.coverarthq}"
              />
              <div id="play">
                <i id="play-btn" class="bi bi-play-fill"></i>
              </div>
            </figure>

            <h4>${songs.title}</h4>
            <p>${songs.subtitle}</p>`

            // 4) kartı html'e gönder
            this.list.appendChild(div)
        });
    }

    // Başlığı günceller
    changeTitle(text) {
        this.title.innerText = text
    }
}