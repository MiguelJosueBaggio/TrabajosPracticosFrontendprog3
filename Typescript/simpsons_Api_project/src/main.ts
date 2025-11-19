import { SimpsonCharacter } from "./interface.js";


/* ============================================================
   5.2 VARIABLES Y CONSTANTES
============================================================ */

// URL BASE (API ORIGINAL)
const API_URL = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10";

// ELEMENTOS DEL DOM TIPADOS
const btnLoad: HTMLButtonElement = document.getElementById("btnLoad") as HTMLButtonElement;
const loadingSection: HTMLDivElement = document.getElementById("loading") as HTMLDivElement;
const errorDiv: HTMLDivElement = document.getElementById("error") as HTMLDivElement;
const charactersSection: HTMLDivElement = document.getElementById("characters") as HTMLDivElement;

/* ============================================================
   5.3 FUNCIONES REQUERIDAS
============================================================ */

// Mostrar loading
function showLoading(): void {
    loadingSection.style.display = "block";
    errorDiv.style.display = "none";
}

// Ocultar loading
function hideLoading(): void {
    loadingSection.style.display = "none";
}

// Mostrar error
function showError(message: string): void {
    errorDiv.textContent = message;
    errorDiv.style.display = "block";

    setTimeout(() => {
        errorDiv.style.display = "none";
    }, 5000);
}

// Crear una card de personaje
function createCharacterCard(character: SimpsonCharacter): HTMLElement {
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
const renderCharacters = (characters: SimpsonCharacter[]): void => {
    charactersSection.innerHTML = "";

   for (const character of characters) {
    const card = createCharacterCard(character);
    charactersSection.appendChild(card);
}

};

// Fetch a la API
const fetchCharacters = async (): Promise<void> => {
    try {
        showLoading();

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Error al cargar los personajes");
        }

        const data: SimpsonCharacter[] = await response.json();

        renderCharacters(data);

    } catch (error) {
        console.error(error);
        showError("No se pudieron cargar los personajes. Intente nuevamente.");
    } finally {
        hideLoading();
    }
};

/* ============================================================
   5.4 EVENT LISTENERS
============================================================ */

btnLoad.addEventListener("click", () => {
    fetchCharacters();
});
 