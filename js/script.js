function calculate_luas() {
  let alas = document.getElementById('luas-alas').value;
  let tinggi = document.getElementById('luas-tinggi').value;
  document.getElementById('luas-hasil').value = 'Luas segitiga adalah ' + (0.5 * alas * tinggi) + ' satuan luas.';
}

function calculate_keliling() {
  let v1 = document.getElementById('keliling-1').value;
  let v2 = document.getElementById('keliling-2').value;
  let v3 = document.getElementById('keliling-3').value;
  let keliling = v1 + v2 + v3;
  document.getElementById('keliling-hasil').value = 'Keliling segitiga adalah ' + keliling + ' satuan keliling.';
}