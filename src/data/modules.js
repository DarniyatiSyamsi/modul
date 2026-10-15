export const modules = [
  {
    id: 'dasar-geografi', number: '01', category: 'Pengantar Geografi', title: 'Dasar-dasar Ilmu Geografi', subtitle: 'Memahami cara pandang geografi dalam membaca gejala di permukaan bumi.', duration: '20 menit', color: 'sage',
    intro: 'Geografi membantu kita memahami hubungan antara manusia, tempat, dan lingkungan. Ilmu ini bukan sekadar menghafal nama wilayah, tetapi mempelajari pola, proses, serta keterkaitan berbagai gejala di ruang bumi.',
    sections: [
      { heading: 'Pengertian dan ruang lingkup', paragraphs: ['Istilah geografi berakar dari kata geo (bumi) dan graphein (menulis atau menggambarkan). Geografi mengkaji persamaan dan perbedaan fenomena geosfer dengan sudut pandang keruangan, kelingkungan, dan kewilayahan.', 'Objek material geografi adalah geosfer: litosfer, atmosfer, hidrosfer, biosfer, dan antroposfer. Objek formalnya adalah cara geografi menganalisis fenomena tersebut.'] },
      { heading: 'Konsep esensial geografi', bullets: ['Lokasi: letak suatu tempat, baik absolut maupun relatif.', 'Jarak dan keterjangkauan: ukuran pemisah serta kemudahan mencapai tempat.', 'Pola dan morfologi: susunan fenomena dan bentuk permukaan bumi.', 'Interaksi, diferensiasi area, dan keterkaitan keruangan: hubungan antarwilayah serta ciri khas tiap tempat.'] },
      { heading: 'Prinsip dan pendekatan', paragraphs: ['Prinsip persebaran, interelasi, deskripsi, dan korologi digunakan untuk menelaah fenomena secara teratur. Pendekatan keruangan melihat lokasi dan pola, pendekatan kelingkungan mengkaji hubungan makhluk hidup dengan lingkungannya, sedangkan pendekatan kompleks wilayah membandingkan dan menghubungkan karakter beberapa wilayah.'] },
    ], callout: 'Coba amati perjalanan dari rumah ke sekolah. Lokasi, jarak, rute, dan kondisi jalan adalah contoh konsep geografi yang dekat dengan kehidupan sehari-hari.',
    questions: [
      { prompt: 'Objek material yang dikaji dalam geografi disebut …', options: ['Biosfer saja', 'Geosfer', 'Peta tematik', 'Wilayah formal'], answer: 1, explanation: 'Geosfer mencakup lapisan bumi seperti litosfer, atmosfer, hidrosfer, biosfer, dan antroposfer.' },
      { prompt: 'Pendekatan yang mengkaji hubungan manusia dengan kondisi lingkungannya adalah …', options: ['Keruangan', 'Kelingkungan', 'Historis', 'Kronologis'], answer: 1, explanation: 'Pendekatan kelingkungan (ekologi) menelaah hubungan timbal balik makhluk hidup dengan lingkungan.' },
      { prompt: 'Letak suatu tempat berdasarkan garis lintang dan garis bujur disebut lokasi …', options: ['Relatif', 'Sosial', 'Absolut', 'Kultural'], answer: 2, explanation: 'Lokasi absolut ditentukan oleh koordinat lintang dan bujur.' },
    ],
  },
  {
    id: 'bumi-ruang-kehidupan', number: '02', category: 'Sistem Bumi', title: 'Bumi sebagai Ruang Kehidupan', subtitle: 'Mengenal litosfer, atmosfer, hidrosfer, biosfer, dan antroposfer sebagai satu sistem.', duration: '25 menit', color: 'blue',
    intro: 'Bumi adalah ruang hidup yang tersusun oleh berbagai lapisan dan sistem. Perubahan pada satu bagian dapat memengaruhi bagian lainnya, sehingga gejala bumi perlu dipahami sebagai sebuah kesatuan.',
    sections: [
      { heading: 'Sistem geosfer', paragraphs: ['Litosfer merupakan lapisan batuan terluar, atmosfer adalah lapisan gas yang menyelimuti bumi, hidrosfer meliputi seluruh air, dan biosfer menjadi ruang kehidupan organisme. Antroposfer merujuk pada manusia beserta aktivitasnya.', 'Kelima unsur itu berinteraksi. Hujan dari atmosfer mengalir melalui permukaan litosfer, mengisi hidrosfer, mendukung biosfer, dan memengaruhi kehidupan manusia.'] },
      { heading: 'Bumi dan kehidupan manusia', paragraphs: ['Bentuk muka bumi, iklim, ketersediaan air, dan sumber daya memengaruhi pola permukiman serta kegiatan penduduk. Sebaliknya, keputusan manusia seperti penggunaan lahan dan pengelolaan sampah juga mengubah kondisi lingkungan.'] },
      { heading: 'Keterampilan geografi', bullets: ['Mengamati dan mengajukan pertanyaan tentang fenomena.', 'Mengumpulkan informasi dari peta, data, wawancara, dan pengamatan lapangan.', 'Menyajikan temuan melalui peta, tabel, grafik, atau uraian.', 'Menafsirkan hubungan antargejala dan merumuskan tindakan yang bertanggung jawab.'] },
    ], callout: 'Di wilayah kepulauan seperti Halmahera Timur, hubungan daratan, laut, cuaca, ekosistem, dan kegiatan penduduk terlihat jelas dalam kehidupan sehari-hari.',
    questions: [
      { prompt: 'Lapisan gas yang menyelimuti bumi disebut …', options: ['Hidrosfer', 'Atmosfer', 'Litosfer', 'Biosfer'], answer: 1, explanation: 'Atmosfer adalah lapisan gas yang menyelimuti bumi.' },
      { prompt: 'Seluruh air yang terdapat di bumi termasuk dalam …', options: ['Antroposfer', 'Litosfer', 'Hidrosfer', 'Biosfer'], answer: 2, explanation: 'Hidrosfer mencakup air di laut, sungai, danau, air tanah, es, dan uap air.' },
      { prompt: 'Contoh interaksi antargeosfer adalah …', options: ['Hujan mengikis tanah dan memengaruhi pertanian', 'Batuan tidak mengalami perubahan', 'Peta disimpan dalam lemari', 'Garis lintang ditulis pada atlas'], answer: 0, explanation: 'Hujan melibatkan atmosfer, tanah/litosfer, dan aktivitas manusia di bidang pertanian.' },
    ],
  },
  {
    id: 'dinamika-litosfer', number: '03', category: 'Dinamika Bumi', title: 'Dinamika Litosfer', subtitle: 'Proses pembentuk muka bumi dan pengaruhnya bagi kehidupan.', duration: '25 menit', color: 'terra',
    intro: 'Permukaan bumi selalu berubah. Tenaga dari dalam bumi dan tenaga dari luar bumi bekerja membentuk relief, tanah, serta bentang alam yang kita jumpai.',
    sections: [
      { heading: 'Tenaga endogen', paragraphs: ['Tenaga endogen berasal dari dalam bumi. Tektonisme mengubah posisi dan bentuk lapisan batuan; vulkanisme berkaitan dengan pergerakan magma; dan seisme adalah getaran bumi akibat pelepasan energi.', 'Indonesia berada pada pertemuan beberapa lempeng tektonik. Kondisi ini membentuk banyak gunung api dan menjadikan mitigasi bencana penting bagi masyarakat.'] },
      { heading: 'Tenaga eksogen', paragraphs: ['Tenaga eksogen berasal dari luar bumi, seperti air, angin, perubahan suhu, dan organisme. Pelapukan menghancurkan batuan, erosi memindahkan material, sedangkan sedimentasi mengendapkannya di tempat lain.'] },
      { heading: 'Risiko dan kesiapsiagaan', bullets: ['Kenali ancaman di lingkungan dan jalur evakuasi yang tersedia.', 'Ikuti informasi resmi dari lembaga kebencanaan.', 'Siapkan perlengkapan darurat keluarga dan titik berkumpul.', 'Saat terjadi gempa, lindungi kepala dan jauhi bangunan yang berisiko.'] },
    ], callout: 'Bencana bukan hanya dipengaruhi bahaya alam. Paparan dan kerentanan masyarakat turut menentukan besar kecilnya risiko.',
    questions: [
      { prompt: 'Tenaga yang berasal dari dalam bumi disebut …', options: ['Eksogen', 'Endogen', 'Sedimentasi', 'Pelapukan'], answer: 1, explanation: 'Tenaga endogen berasal dari dalam bumi, mencakup tektonisme, vulkanisme, dan seisme.' },
      { prompt: 'Proses pengendapan material hasil erosi disebut …', options: ['Tektonisme', 'Pelapukan', 'Sedimentasi', 'Vulkanisme'], answer: 2, explanation: 'Sedimentasi adalah pengendapan material yang diangkut oleh air, angin, atau es.' },
      { prompt: 'Tindakan yang tepat ketika terjadi gempa di dalam ruangan adalah …', options: ['Menggunakan lift', 'Berlindung dan melindungi kepala', 'Berdiri dekat kaca', 'Menyalakan semua peralatan listrik'], answer: 1, explanation: 'Berlindung dan melindungi kepala mengurangi risiko tertimpa benda saat guncangan.' },
    ],
  },
  {
    id: 'dinamika-atmosfer', number: '04', category: 'Dinamika Bumi', title: 'Dinamika Atmosfer dan Iklim', subtitle: 'Unsur cuaca, pola iklim, dan kaitannya dengan aktivitas manusia.', duration: '25 menit', color: 'sky',
    intro: 'Atmosfer menyediakan udara dan mengatur banyak proses yang menentukan kondisi cuaca serta iklim. Memahami atmosfer membantu kita membaca perubahan cuaca dan merencanakan kegiatan dengan lebih baik.',
    sections: [
      { heading: 'Cuaca dan iklim', paragraphs: ['Cuaca menggambarkan keadaan atmosfer pada tempat dan waktu tertentu, sedangkan iklim merupakan pola rata-rata cuaca dalam periode panjang dan wilayah yang lebih luas.', 'Suhu udara, tekanan, kelembapan, angin, awan, dan curah hujan merupakan unsur cuaca yang dapat diamati.'] },
      { heading: 'Faktor pembentuk iklim', bullets: ['Lintang memengaruhi banyaknya energi matahari yang diterima.', 'Ketinggian tempat berhubungan dengan suhu udara.', 'Jarak dari laut dan relief memengaruhi kelembapan serta hujan.', 'Angin dan arus laut membantu memindahkan panas dan uap air.'] },
      { heading: 'Dampak perubahan iklim', paragraphs: ['Perubahan pola suhu dan curah hujan dapat memengaruhi pertanian, ketersediaan air, kesehatan, dan ekosistem pesisir. Pengamatan data cuaca dan tindakan adaptasi lokal membantu masyarakat mengurangi dampak yang mungkin terjadi.'] },
    ], callout: 'Catatan cuaca sederhana selama beberapa minggu dapat membantu mengenali pola hujan dan merencanakan kegiatan sekolah atau masyarakat.',
    questions: [
      { prompt: 'Keadaan atmosfer pada tempat dan waktu tertentu disebut …', options: ['Iklim', 'Cuaca', 'Musim geologi', 'Tekanan bumi'], answer: 1, explanation: 'Cuaca adalah kondisi atmosfer pada lokasi dan waktu tertentu.' },
      { prompt: 'Unsur berikut yang bukan unsur cuaca adalah …', options: ['Kelembapan', 'Curah hujan', 'Tekanan udara', 'Kepadatan penduduk'], answer: 3, explanation: 'Kepadatan penduduk merupakan gejala antroposfer, bukan unsur cuaca.' },
      { prompt: 'Salah satu faktor yang memengaruhi suhu suatu wilayah adalah …', options: ['Ketinggian tempat', 'Nomor rumah', 'Bahasa daerah', 'Bentuk pemerintahan'], answer: 0, explanation: 'Ketinggian tempat memengaruhi suhu; umumnya suhu menurun seiring bertambahnya ketinggian.' },
    ],
  },
];
