// perbaikan: hindari menggunakan 'any' karena tipe data bisa tidak jelas
// gunakan number karena fungsi sum melimbatkan number
function sum(a: number, b: number): number {
  return a + b;
}
