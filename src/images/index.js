import media1 from "./media-1.png";
import media2 from "./media-2.jpeg";


export const media = [media1, media2, ];
export const mediaByIndex = index => media[index % media.length];
