function hitungBMI() {
    const beratBadan = parseFloat(document.getElementById('bb').value);
    const tinggiBadan = parseFloat(document.getElementById('tb').value) / 100; // convert cm to m
    const imtElement = document.getElementById('imt');
    const kategoriElement = document.getElementById('kategori');
    const penjelasanElement = document.getElementById('penjelasan')
    const saran1Element = document.getElementById('saran1')
    const saran2Element = document.getElementById('saran2')
    const saran3Element = document.getElementById('saran3')
    const listpenElement =  document.getElementById('listpen')
    const pen1Element = document.getElementById('pen1')
    const pen2Element = document.getElementById('pen2')
    const pen3Element = document.getElementById('pen3')
    const rightGrid = document.getElementById('rightgrid');
    rightGrid.style.display = 'block';
    
    if (isNaN(beratBadan) || isNaN(tinggiBadan)) {
        imtElement.innerHTML = "Masukkan nilai berat dan tinggi badan yang valid.";
        kategoriElement.innerHTML = "";
        return;
    }

    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
    let kategori = '';

    if (bmi < 18.5) {
        kategori = 'Kurus';
        penjelasan = 'Hasil IMT menunjukkan bahwa anda berada dalam kategori kurus, dengan itu kami menyarankan anda untuk menerapkan hal berikut: '
        saran1 = '1. Konsumsi makanan bergizi seimbang yang kaya akan kalori dan nutrisi.'
        saran2 = '2. Tambahkan camilan sehat di antara waktu makan.'
        saran3 = '3. Konsultasikan dengan profesional kesehatan atau ahli gizi untuk rencana penambahan berat badan yang tepat.'
        listpen = 'Beberapa penyakit yang berasal dari kekurusan'
        pen1 = '1. Anemia'
        pen2 = '2. Osteoporosis'
        pen3 = '3. Sistem kekebalan tubuh yang lemah'
    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = 'Normal';
        penjelasan = 'Hasil IMT menunjukkan bahwa anda berada dalam kategori normal, dengan itu kami menyarankan anda untuk menerapkan hal berikut: '
        saran1 = '1. Pertahankan pola makan yang seimbang dan beragam.'
        saran2 = '2. Tetap aktif dengan melakukan olahraga secara teratur.'
        saran3 = '3. Lanjutkan kebiasaan hidup sehat untuk menjaga berat badan ideal.'
        listpen = ''
        pen1 = ''
        pen2 = ''
        pen3 = ''
    } else if (bmi >= 25 && bmi < 29.9) {
        kategori = 'Gemuk';
        penjelasan = 'Hasil IMT menunjukkan bahwa anda berada dalam kategori gemuk, dengan itu kami menyarankan anda untuk menerapkan hal berikut: '
        saran1 = '1. Kurangi asupan kalori dengan menghindari makanan tinggi lemak dan gula.'
        saran2 = '2. Tingkatkan aktivitas fisik melalui olahraga yang rutin.'
        saran3 = '3. Konsultasikan dengan profesional kesehatan untuk mendapatkan saran penurunan berat badan yang aman dan efektif.'
        listpen = 'Beberapa penyakit yang berasal dari kegemukan'
        pen1 = '1. Penyakit jantung'
        pen2 = '2. Hipertensi (tekanan darah tinggi)'
        pen3 = '3. Diabetes tipe 2'
    } else {
        kategori = 'Obesitas';
        penjelasan = 'Hasil IMT menunjukkan bahwa anda berada dalam kategori obesitas, dengan itu kami menyarankan anda untuk menerapkan hal berikut: '
        saran1 = '1. Ikuti program diet yang sehat dan seimbang yang disarankan oleh ahli gizi.'
        saran2 = '2. Lakukan olahraga yang disesuaikan dengan kondisi fisik Anda.'
        saran3 = '3. Carilah dukungan dari profesional kesehatan untuk mengelola berat badan dan risiko kesehatan terkait.'
        listpen = 'Beberapa penyakit yang berasal dari obesitas'
        pen1 = '1. Penyakit jantung koroner'
        pen2 = '2. Stroke'
        pen3 = '3. Osteoartritis'
    }

    imtElement.innerHTML = `${bmi.toFixed(2)}`;
    kategoriElement.innerHTML = `Kategori: ${kategori}`;
    penjelasanElement.innerHTML = `${penjelasan}`;
    saran1Element.innerHTML = `${saran1}`
    saran2Element.innerHTML = `${saran2}`
    saran3Element.innerHTML = `${saran3}`
    pen1Element.innerHTML = `${pen1}`
    pen2Element.innerHTML = `${pen2}`
    pen3Element.innerHTML = `${pen3}`
    listpenElement.innerHTML = `${listpen}`
}

function resetForm() {
    const rightGrid = document.getElementById('rightgrid');
    rightGrid.style.display = 'none';
}
