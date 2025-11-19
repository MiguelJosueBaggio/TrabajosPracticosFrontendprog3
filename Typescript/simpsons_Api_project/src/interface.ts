// Interfaz que representa un personaje de Los Simpson
export interface SimpsonCharacter {
  quote: string;              // Frase del personaje
  character: string;          // Nombre
  image: string;              // URL de la imagen
  characterDirection: string; // Dirección hacia donde mira
}

// Interfaz para la respuesta estructurada de la API
export interface IResponseApi {
  status: number;              // Código de respuesta HTTP
  ok: boolean;                 // Si la petición fue exitosa
  data: SimpsonCharacter[];    // Lista de personajes recibidos
}
