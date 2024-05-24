let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active")
}

const onMore = document.querySelector(".btns");
const gallery = document.querySelectorAll(".gallery")[1];

const onMore_ = onMore.cloneNode();

if (onMore !== null) {
    gallery.appendChild(onMore);
}


var images = ["image-17.webp", "image-18.webp", "image-19.webp", "image-20.webp", "image-21.webp", "image-22.webp", "image-23.webp", "image-24.webp", "image-25.webp", "image-26.webp"]; // resim ekleneceği zaman buraya resimini yolu ve resim dosyasının adı yazılmalı.
for (var i = 0; i < images.length; i++ ) {
    images[i] = "images/" + images[i]
}


onMore.addEventListener("click", function handleMoreClick(e) {    
    e.preventDefault();
    onMore.remove();

    var rowCount = Math.min(Math.ceil(images.length / 4), 3);

    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gallery.appendChild(row);   

        var columnCount = Math.min(images.length, 4);

        for (let j = 0; j < columnCount; j++) {
            const column = document.createElement("div");
            const img = document.createElement("img");
            img.src = images.shift();
            column.appendChild(img);
            column.classList.add("column");
            row.appendChild(column);
        }
    }
});

window.onscroll = function() {
    var sayfaYuksekligi = document.body.offsetHeight;
    var gorunenPencereYuksekligi = window.innerHeight;
    var sayfaYukariKaydirmaMiktari = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    
    if (sayfaYuksekligi - (gorunenPencereYuksekligi + sayfaYukariKaydirmaMiktari) <= 10) {
        if (onMore !== null && images.length > 0) {
            gallery.appendChild(onMore);
        }
    }
};

const popup_img = document.querySelector(".popup-image");

document.querySelectorAll(".gallery .row .column img").forEach(image => {
    image.onclick = () => {
        popup_img.style.display = "block";
        document.documentElement.style.overflow = "hidden"; // Sayfa kaydırılabilirliğini devre dışı bırakır
        document.body.style.overflow = "hidden"; // Sayfa kaydırılabilirliğini devre dışı bırakır
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
});

document.querySelector(".popup-image span").onclick = () => {
    popup_img.style.display = "none";
    document.documentElement.style.overflow = ""; // Sayfa kaydırılabilirliğini geri yükler
    document.body.style.overflow = ""; // Sayfa kaydırılabilirliğini geri yükler
}
