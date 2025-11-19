export interface SimpsonsCharacter {
  id: number;
  age: number;
  birthdate: string;
  gender: string;
  name: string;
  occupation: string;
  portrait_path: string;
  phrases: string[];
  status: string;
}

export function getImageUrl(character: SimpsonsCharacter): string {
  return "https://cdn.thesimpsonsapi.com/500" + character.portrait_path;
}
