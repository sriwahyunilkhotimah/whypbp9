const mahasiswaNim = 1102020; // Replace with the actual nim
const updatedData = {
  nama: 'Ayun',
  gender: 'P',
  prodi: 'TI',
  alamat: 'Nagrak'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
