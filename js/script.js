// =========================
// ENTRADA DO SITE
// =========================

const enterButton = document.getElementById("enterButton");

function enterWebsite() {
    const cover = document.getElementById("cover");
    const musicScene = document.getElementById("musicScene");
    const backgroundMusic = document.getElementById("backgroundMusic");

    cover.classList.add("fade-out");

    setTimeout(() => {
        cover.style.display = "none";
        musicScene.classList.remove("hidden");

        backgroundMusic.volume = 0.7;

        backgroundMusic.play().catch(error => {
            console.error("Falha ao tocar música:", error);
        });

    }, 1000);
}

enterButton.addEventListener("click", enterWebsite);


// =========================
// LETRAS SINCRONIZADAS
// =========================

const music = document.getElementById("backgroundMusic");
const lyricsElement = document.getElementById("lyrics");

const lyricsTimeline = [

    // VERSO 1
    {
        time: 20,
        text: `Às vezes paro pra imaginar
Como seria sem você
Quantos caminhos precisei encontrar
Pra finalmente te conhecer`
    },

    {
        time: 30,
        text: `E olha que a vida não me avisou
Que aquela mensagem ia valer a pena
Um simples convite, e tudo começou…
"Oi, vem me ver?"`
    },

    // VERSO 2
    {
        time: 40,
        text: `Nem todo dia o sol vai brilhar
Nem todo caminho vai ser fácil de trilhar
Mas que nunca falte vontade de ficar.`
    },

    // VERSO 3
    {
        time: 53,
        text: `E se amanhã o céu mudar de cor
E o horizonte for perdendo a cor
Espero que a gente se dê valor.`
    },

    // REFRÃO
    {
        time: 62,
        text: `Cervejinha beira-mar
Pôr do sol indo embora
A gente só conversa
Perde a noção das horas`
    },

    {
        time: 67,
        text: `Parece que o relógio esquece de girar
Quando tá, a gente não vê o tempo passar
A noite vai chegando e a gente nem percebeu
Mas um dia bonito que Deus nos deu`
    },

    {
        time: 77,
        text: `Parece aquele filme que eu tanto critiquei
Mas olha onde eu fui parar
Sendo hipócrita dessa vez.`
    },

    // PONTE / FINAL
    {
        time: 86,
        text: `Mas se existir outro jeito de dizer
Que você virou minha inspiração
Pode crer, pode falar que eu quero saber`
    },

    {
        time: 96,
        text: `Novos caminhos pra gente percorrer
Tantos lugares que eu quero conhecer
Mil histórias pra gente escrever`
    },

    {
        time: 106,
        text: `Se o tempo passar sem me avisar
Que a gente nunca deixe de se encontrar
E mesmo que o mundo mude de lugar
Tenho certeza que Deus vai nos juntar.`
    },

    // REFRÃO FINAL
    {
        time: 128,
        text: `Cervejinha beira-mar
Pôr do sol indo embora
A gente só conversa
Perde a noção das horas`
    },

    {
        time: 132,
        text: `Parece que o relógio esquece de girar
Quando tá, a gente não vê o tempo passar
A noite vai chegando e a gente nem percebeu
Mas um dia bonito que Deus nos deu`
    },

    {
        time: 144,
        text: `Parece aquele filme que eu tanto critiquei
Mas olha onde eu fui parar
Sendo hipócrita dessa vez.`
    }

];

let currentLyricIndex = -1;

function updateLyrics() {

    const currentTime = music.currentTime;
    let newIndex = -1;

    for (let i = 0; i < lyricsTimeline.length; i++) {
        if (currentTime >= lyricsTimeline[i].time) {
            newIndex = i;
        } else {
            break;
        }
    }

    if (newIndex === currentLyricIndex) return;
    currentLyricIndex = newIndex;

    // some suavemente, troca o texto e aparece de novo
    lyricsElement.classList.remove("visible");

    setTimeout(() => {
        if (currentLyricIndex >= 0) {
            lyricsElement.textContent = lyricsTimeline[currentLyricIndex].text;
            lyricsElement.classList.add("visible");
        } else {
            lyricsElement.textContent = "";
        }
    }, 400);
}

music.addEventListener("timeupdate", updateLyrics);


// =========================
// GALERIA DE FOTOS
// =========================

const photos = [
    "foto1.jpg",
    "foto3.png",
    "foto4.png",
    "foto5.jpg",
    "foto6.png",
    "foto7.png",
    "foto8.png",
    "foto9.jpg",

    "fotor1.jpg",
    "fotor2.jpg",
    "fotor3.jpg",
    "fotor4.jpg",
    "fotor5.jpg",
    "fotor6.jpg",
    "fotor7.jpg",
    "fotor8.jpg",
    "fotor9.jpg",
    "fotor10.jpg",
    "fotor11.jpg",
    "fotor12.jpg",
    "fotor13.jpg",
    "fotor14.jpg"
];

const galleryScene = document.getElementById("galleryScene");
const musicScene = document.getElementById("musicScene");

const currentPhoto = document.getElementById("currentPhoto");
const nextPhotoButton = document.getElementById("nextPhoto");
const prevPhotoButton = document.getElementById("prevPhoto");

let currentPhotoIndex = 0;


// Mostrar foto
function showPhoto(index) {

    currentPhoto.style.opacity = 0;

    setTimeout(() => {

        currentPhoto.src = `assets/fotos/${photos[index]}`;

        currentPhoto.onload = () => {
            currentPhoto.style.opacity = 1;
        };

    }, 300);
}


// Próxima foto
function nextPhoto() {

    currentPhotoIndex++;

    if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0;
    }

    showPhoto(currentPhotoIndex);
}


// Foto anterior
function prevPhoto() {

    currentPhotoIndex--;

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photos.length - 1;
    }

    showPhoto(currentPhotoIndex);
}


// Botões da galeria
nextPhotoButton.addEventListener("click", nextPhoto);
prevPhotoButton.addEventListener("click", prevPhoto);


// ==========================
// TRANSIÇÃO MÚSICA E GALERIA
// ==========================

window.showGallery = function () {

    musicScene.classList.add("hidden");
    galleryScene.classList.remove("hidden");

    currentPhotoIndex = 0;
    showPhoto(currentPhotoIndex);

};
music.addEventListener("ended", window.showGallery);


// ==========================
// ÚLTIMA ETAPA: CARTA
// ==========================

const finalButton = document.getElementById("finalButton");
const letterScene = document.getElementById("letterScene");

// Mostra o botão quando ela chega na última foto
function checkLastPhoto() {
    if (currentPhotoIndex === photos.length - 1) {
        finalButton.classList.add("show");
    }
}

nextPhotoButton.addEventListener("click", checkLastPhoto);
prevPhotoButton.addEventListener("click", checkLastPhoto);

// Transição da galeria para a carta
finalButton.addEventListener("click", () => {

    galleryScene.classList.add("scene-out");

    setTimeout(() => {

        galleryScene.classList.add("hidden");
        letterScene.classList.remove("hidden");

        const lines = document.querySelectorAll("#letterPaper .letter-line");

        lines.forEach((line, i) => {
            line.style.animationDelay = `${1.5 + i * 1.8}s`;
            line.classList.add("reveal");
        });

    }, 1500);
});