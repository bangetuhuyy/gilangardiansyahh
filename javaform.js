const produkVarian = {
  jaketCredifox: {
    "Credifox Windbraker": 120000,
    "CRDF Jaket Cougle": 180000,
    "Credifox Genuine Jaket": 119000,
    "Credifox Jaket Cougle Parka": 150000
  },
  jaketScreamous: {
    "Wind Braker Jaket Boman Black": 210000,
    "Bomber Canvas Jacket STENCIL FOREST GREEN": 230000,
    "Bomber Canvas JaCket STENCIL BLACK": 225000,
    "Bomber Jacket CALE BLACK": 220000
  },
  jaketDobujack: {
    "Artan Black Work Jacket": 229000,
    "Assemble Black Coach Jacket": 185000,
    "Beauty Death Black Coach Jacket": 199000,
    "Atclub Black Coach Jacket": 195000
  },
  celanaCredifox: {
    "Credifox Short Cargo": 145000,
    "Credifox IRonwood": 150000,
    "Credifox Celana Cargo": 180000,
    "Credifox Celana Trackpants": 185000
  },
  celanaScreamous: {
    "GAMESOME SweatPants LOGOTYPE OLIVE": 220000,
    "Track Pants Parachute THIMO BLACK OLIVE Loose Fit": 185000,
    "Long Pants ENIGMATIC APEX NETROS BLACK Loose Fit": 180000,
    "Track Pants Parachute DHOME BLACK Loose Fit": 149000
  },
  celanaDobujack: {
    "Hillary Green Long Cargo Pants": 100000,
    "Erving Navy Long Pants": 200000,
    "Hillary Khaki Long Cargo Pants": 135000,
    "Hillary Olive Long Cargo Pants": 120000
  }
};

function tampilkanSubProduk(id) {
  const select = document.getElementById(id);
  const subSelect = document.getElementById(id === 'produk1' ? 'subProduk1' : 'subProduk2');
  const produk = select.value;

  subSelect.innerHTML = '<option value="">-- Pilih Varian --</option>';

  if (produkVarian[produk]) {
    for (const varian in produkVarian[produk]) {
      const option = document.createElement('option');
      option.value = varian;
      option.textContent = varian;
      subSelect.appendChild(option);
    }
  }

  document.getElementById(id === 'produk1' ? 'harga1' : 'harga2').value = '';
  hitungTotal();
}

function updateHarga(id) {
  const select = document.getElementById(id);
  const subSelect = document.getElementById(id === 'produk1' ? 'subProduk1' : 'subProduk2');
  const hargaField = document.getElementById(id === 'produk1' ? 'harga1' : 'harga2');

  const produk = select.value;
  const varian = subSelect.value;

  hargaField.value = produkVarian[produk]?.[varian] || '';
  hitungTotal();
}

function hitungTotal() {
  const harga1 = parseInt(document.getElementById('harga1').value) || 0;
  const jumlah1 = parseInt(document.getElementById('jumlah1').value) || 0;
  const harga2 = parseInt(document.getElementById('harga2').value) || 0;
  const jumlah2 = parseInt(document.getElementById('jumlah2').value) || 0;

  const total = (harga1 * jumlah1) + (harga2 * jumlah2);
  document.getElementById('total').value = 'Rp ' + total.toLocaleString();
}

function submitForm() {
  document.getElementById('popupNama').textContent = document.getElementById('nama').value;
  document.getElementById('popupAlamat').textContent = document.getElementById('alamat').value;
  document.getElementById('popupProduk1').textContent = document.getElementById('subProduk1').value;
  document.getElementById('popupProduk2').textContent = document.getElementById('subProduk2').value;
  document.getElementById('popupTotal').textContent = document.getElementById('total').value.replace('Rp ', '');
  document.getElementById('popupBox').style.display = 'flex';
}

function tutupPopup() {
  document.getElementById('popupBox').style.display = 'none';
}