Uçuş Rezervasyon Uygulaması
Bu proje, bir Uçuş Rezervasyon Uygulaması olup, üçüncü taraf bir havalimanı API'sinden alınan uçuş verilerini kullanıcıya gösteren ve rezervasyon yapma imkanı sunan bir uygulamadır. Uygulama, kullanıcı deneyimini iyileştirmek amacıyla yükleme durumları, skeletanlar, spinner ve toast bildirimleri gibi özellikler ile zenginleştirilmiştir.

Özellikler
Uçuş Verisi Gösterimi:

Uçuş verileri, üçüncü taraf bir Havalimanı API'si üzerinden alınmaktadır.
Uçuşlar, detaylı uçuş bilgileri ile birlikte özelleştirilebilir Uçuş Kartları üzerinde kullanıcıya gösterilmektedir.
Verilerin yüklenmesi sırasında, kullanıcı deneyimini iyileştirmek amacıyla skeletan yükleyiciler kullanılmıştır.


Uçuş Rezervasyonu:

Kullanıcılar, uçuşları seçerek rezervasyon yapabilir.
Rezervasyon sırasında, loading spinner ile işlem süresince kullanıcı bilgilendirilir.
Rezervasyon işlemi başarıyla tamamlandığında, React Toastify kullanılarak bilgilendirme mesajı gösterilir.


Rezervasyonlarım Sayfası:

Kullanıcının daha önce yaptığı rezervasyonları listeleyen bir sayfa mevcuttur.
Rezervasyonlar, veritabanından dinamik olarak çekilerek listelenir.


Kullanılan Teknolojiler
React
Tailwind CSS
Havalimanı API'si
Özel API: Rezervasyon verilerini işlemek için kullanılan kendi yazdığım API.
React Toastify: Kullanıcıya toast bildirimleri sunmak için kullanılan kütüphane.
Skeletan Yükleyici: Veriler yüklenirken boş ekranları önlemek için kullanıldı.
Loading Spinner: Rezervasyon sırasında işlemin sürdüğünü göstermek için kullanıldı.

Kullanıcı Deneyimi İyileştirmeleri
Skeletan Yükleyici: Uçuş verileri yüklenirken kullanıcıya boş ekran sunmak yerine skeletan yükleyiciler ile görsel geri bildirim sağlanmıştır.
Loading Spinner: Rezervasyon sürecinde kullanıcıya işlemin sürdüğünü belirtmek amacıyla loading spinner kullanılmıştır.
Toast Bildirimleri: Rezervasyon başarıyla tamamlandığında ya da bir hata oluştuğunda kullanıcıya toast bildirimleri ile bilgi verilmektedir.


Kurulum


Bu projeyi yerel ortamda çalıştırmak için aşağıdaki adımları izleyin:

Depoyu klonlayın:
git clone https://github.com/Eness2001/appfellas-client.git

Proje dizinine gidin:
cd appfellas-client

Bağımlılıkları yükleyin:
npm install

sunucuyu başlatın:
npm start

Video Bağlantısı
[Watch the video](https://res.cloudinary.com/dv5ux68za/video/upload/v1727298996/%C4%B0simsiz_video_Clipchamp_ile_yap%C4%B1ld%C4%B1_12_ddue5g.mp4)


