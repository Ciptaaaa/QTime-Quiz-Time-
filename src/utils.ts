export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

//export const shuffleArray = (array: any[]) =>
//   array
//     .slice() // buat salinan agar array asli tidak berubah
//     .sort(() => Math.random() - 0.5);
