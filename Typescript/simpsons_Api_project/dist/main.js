/* ============================================================
   5.2 VARIABLES Y CONSTANTES
============================================================ */
// URL BASE (API ORIGINAL)
const API_URL = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10";
// ELEMENTOS DEL DOM TIPADOS
const btnLoad = document.getElementById("btnLoad");
const loadingSection = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const charactersSection = document.getElementById("characters");
/* ============================================================
   5.3 FUNCIONES REQUERIDAS
============================================================ */
// Mostrar loading
function showLoading() {
    loadingSection.style.display = "block";
    errorDiv.style.display = "none";
}
// Ocultar loading
function hideLoading() {
    loadingSection.style.display = "none";
}
// Mostrar error
function showError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
    setTimeout(() => {
        errorDiv.style.display = "none";
    }, 5000);
}
// Crear una card de personaje
function createCharacterCard(character) {
    const card = document.createElement("div");
    card.classList.add("character-card");
    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.character;
    const name = document.createElement("h3");
    name.textContent = character.character;
    const quote = document.createElement("p");
    quote.textContent = `"${character.quote}"`;
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(quote);
    return card;
}
// Renderizar personajes
const renderCharacters = (characters) => {
    charactersSection.innerHTML = "";
    for (const character of characters) {
        const card = createCharacterCard(character);
        charactersSection.appendChild(card);
    }
};
// Fetch a la API
const fetchCharacters = async () => {
    try {
        showLoading();
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Error al cargar los personajes");
        }
        const data = await response.json();
        renderCharacters(data);
    }
    catch (error) {
        console.error(error);
        showError("No se pudieron cargar los personajes. Intente nuevamente.");
    }
    finally {
        hideLoading();
    }
};
/* ============================================================
   5.4 EVENT LISTENERS
============================================================ */
btnLoad.addEventListener("click", () => {
    fetchCharacters();
});
export {};
