import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  post: any = null;
  relatedPosts: any[] = [];
  
  blogPosts = [
    {
      id: 1,
      slug: 'atasehirde-konforlu-konaklama-rehberi',
      title: 'Ataşehir\'de Konforlu Konaklama Rehberi',
      date: '15 Ocak 2024',
      excerpt: 'Ataşehir bölgesinde konforlu ve modern konaklama seçenekleri hakkında detaylı bilgiler ve ipuçları. Kurtköy Otel\'in merkezi konumundan Ataşehir\'e kolay ulaşım imkanları.',
      image: '/assets/images/blog/atasehir-konaklama.jpg',
      category: 'Konaklama',
      content: `
        <h2>Ataşehir Bölgesi Hakkında</h2>
        <p>Ataşehir, İstanbul'un Anadolu yakasında modern bir ilçedir. 2009 yılında ilçe statüsüne kavuşan Ataşehir, günümüzde iş merkezleri, alışveriş merkezleri ve konut projeleri ile İstanbul'un önemli bölgelerinden biri haline gelmiştir. Bölge, özellikle finans, teknoloji ve ticaret sektörlerinde öne çıkan şirketlere ev sahipliği yapmaktadır.</p>
        
        <p>Ataşehir'in gelişimi son yıllarda hızla devam etmiş ve bölge modern altyapısı, geniş caddeleri ve yeşil alanları ile dikkat çekmektedir. İlçe, hem konut hem de iş alanları açısından İstanbul'un en çekici bölgelerinden biridir. Ataşehir, aynı zamanda eğitim kurumları, sağlık merkezleri ve sosyal tesisleri ile de öne çıkmaktadır.</p>
        
        <h2>Kurtköy Otel'den Ataşehir'e Ulaşım</h2>
        <p>Kurtköy Otel olarak, Pendik'teki merkezi konumumuz sayesinde Ataşehir'e kolay ulaşım imkanı sunuyoruz. Otelimizden Ataşehir'e araç ile yaklaşık 30-40 dakika sürmektedir. Toplu taşıma kullanarak da Ataşehir'e rahatlıkla ulaşabilirsiniz.</p>
        
        <h3>Toplu Taşıma ile Ulaşım</h3>
        <p>Otelimizden en yakın metro istasyonuna 10 dakika yürüme mesafesi bulunmaktadır. Metro hatları ile Ataşehir'e ulaşım oldukça kolaydır. Ayrıca otobüs hatları da Ataşehir'e düzenli seferler yapmaktadır.</p>
        
        <h3>Özel Araç ile Ulaşım</h3>
        <p>Özel aracınızla Ataşehir'e gitmek isterseniz, TEM otoyolu üzerinden yaklaşık 30-40 dakika sürmektedir. Otelimizden çıkış yaparak TEM'e bağlanabilir ve Ataşehir'e rahatlıkla ulaşabilirsiniz.</p>
        
        <h2>Neden Kurtköy Otel?</h2>
        <p>Kurtköy Otel, Ataşehir'e seyahat eden misafirlerimiz için ideal bir konaklama seçeneğidir. Otelimizin sunduğu avantajlar:</p>
        
        <h3>Stratejik Konum</h3>
        <p>Otelimiz, İstanbul'un stratejik noktalarından birinde yer almaktadır. Ataşehir'e kolay ulaşımın yanı sıra, şehrin diğer önemli noktalarına da rahatlıkla ulaşabilirsiniz.</p>
        
        <h3>Modern ve Konforlu Odalar</h3>
        <p>Kurtköy Otel, modern tasarım anlayışı ile donatılmış konforlu odalar sunmaktadır. Tüm odalarımızda klima, Wi-Fi, TV ve modern banyo tesisleri bulunmaktadır.</p>
        
        <h3>7/24 Resepsiyon Hizmeti</h3>
        <p>Otelimiz, misafirlerimize kesintisiz hizmet sunmak için 7/24 resepsiyon hizmeti vermektedir. Herhangi bir ihtiyacınız olduğunda resepsiyon ekibimiz size yardımcı olmaya hazırdır.</p>
        
        <h3>Uygun Fiyat Seçenekleri</h3>
        <p>Kurtköy Otel, kaliteli hizmeti uygun fiyatlarla sunmaktadır. Bütçenize uygun oda seçeneklerimiz arasından seçim yapabilirsiniz.</p>
        
        <h2>Ataşehir'de Gezilecek Yerler</h2>
        <p>Ataşehir'de ziyaret edebileceğiniz önemli noktalar bulunmaktadır. Bölgenin sunduğu olanaklar:</p>
        
        <h3>Alışveriş Merkezleri</h3>
        <p>Ataşehir, modern alışveriş merkezleri ile ünlüdür. <strong>Viaport Marina Alışveriş Merkezi</strong>, bölgenin en büyük ve popüler alışveriş merkezlerinden biridir. Deniz kenarında konumlanmış bu merkez, hem alışveriş hem de eğlence imkanları sunmaktadır.</p>
        
        <p><strong>Özdilek Ataşehir</strong> ise, bölgenin bir diğer önemli alışveriş merkezidir. Geniş mağaza yelpazesi ve uygun fiyat seçenekleri ile ziyaretçilerine hizmet vermektedir.</p>
        
        <h3>İş Merkezleri</h3>
        <p>Ataşehir, İstanbul'un önemli iş merkezlerinden biridir. Bölgede birçok ulusal ve uluslararası şirket ofislerini bulundurmaktadır. İş seyahati yapan misafirlerimiz için ideal bir konumdur.</p>
        
        <h3>Restoran ve Kafeler</h3>
        <p>Ataşehir'de çeşitli restoran ve kafe seçenekleri bulunmaktadır. Hem geleneksel Türk mutfağı hem de uluslararası lezzetler için uygun mekanlar mevcuttur.</p>
        
        <h2>Kurtköy Otel ve Ataşehir Bağlantısı</h2>
        <p>Kurtköy Otel olarak, Ataşehir'e seyahat eden misafirlerimize konforlu bir konaklama deneyimi sunuyoruz. Otelimizin merkezi konumu sayesinde Ataşehir'e kolay ulaşım imkanı bulunmaktadır. İş seyahati yapan misafirlerimiz için özellikle uygun bir seçenektir.</p>
        
        <p>Rezervasyon yapmak için bizimle iletişime geçebilirsiniz. Ataşehir'e seyahat planlarınız için Kurtköy Otel'i tercih edin ve konforlu bir konaklama deneyimi yaşayın.</p>
      `
    },
    {
      id: 2,
      slug: 'istanbulda-mutlaka-gorulmesi-gereken-yerler',
      title: 'İstanbul\'da Mutlaka Görülmesi Gereken Yerler',
      date: '10 Ocak 2024',
      excerpt: 'İstanbul\'un tarihi ve kültürel zenginliklerini keşfetmek için kapsamlı rehberimiz. Ayasofya, Topkapı Sarayı, Sultanahmet ve daha fazlası hakkında bilgiler.',
      image: '/assets/images/istanbul-gezilecek-yerler.jpg',
      category: 'Gezi',
      content: `
        <h2>İstanbul'un Tarihi Zenginlikleri</h2>
        <p>İstanbul, binlerce yıllık tarihi ile dünyanın en önemli şehirlerinden biridir. Tarihi boyunca Bizans ve Osmanlı İmparatorluklarına başkentlik yapmış olan bu muhteşem şehir, günümüzde ziyaretçilerine eşsiz bir kültürel deneyim sunmaktadır. Kurtköy Otel olarak, İstanbul'un tarihi mekanlarına kolay ulaşım imkanı sunan merkezi bir konumda yer almaktayız.</p>
        
        <p>İstanbul'un tarihi yarımadası, UNESCO Dünya Mirası listesinde yer alan çok sayıda yapıya ev sahipliği yapmaktadır. Bu bölgede bulunan tarihi eserler, şehrin zengin geçmişini yansıtmaktadır. Otelimizden Sultanahmet bölgesine metro ve otobüs hatları ile yaklaşık 1 saat sürmektedir.</p>
        
        <h2>Mutlaka Görülmesi Gereken Yerler</h2>
        <p>İstanbul'da ziyaret edilmesi gereken onlarca tarihi mekan bulunmaktadır. Ancak bazı yerler, şehrin simgesi haline gelmiştir ve mutlaka görülmelidir.</p>
        
        <h3>1. Ayasofya Camii</h3>
        <p>Bizans İmparatorluğu döneminde 537 yılında inşa edilen Ayasofya, İstanbul'un en önemli tarihi yapılarından biridir. 1453 yılında Fatih Sultan Mehmet'in İstanbul'u fethinden sonra camiye dönüştürülen bu muhteşem yapı, günümüzde hem camii hem de müze olarak hizmet vermektedir.</p>
        
        <p>Ayasofya'nın iç mekanı, devasa kubbesi ve eşsiz mozaikleri ile ziyaretçileri büyülemektedir. Yapının mimarisi, döneminin en ileri tekniklerini yansıtmaktadır. Kurtköy Otel'den Sultanahmet'e metro ile yaklaşık 1 saat sürmektedir.</p>
        
        <h3>2. Topkapı Sarayı</h3>
        <p>Osmanlı İmparatorluğu'nun 400 yıl boyunca yönetim merkezi olan Topkapı Sarayı, günümüzde müze olarak ziyaret edilebilir. Saray, paha biçilmez eserler ve koleksiyonlar içermektedir. Topkapı Sarayı'nın hazine dairesinde, dünyanın en değerli elmasları ve mücevherleri sergilenmektedir.</p>
        
        <p>Sarayın geniş bahçeleri, köşkleri ve kütüphaneleri, Osmanlı mimarisinin en güzel örneklerini sunmaktadır. Özellikle Harem bölümü, sarayın en ilginç bölümlerinden biridir ve rehberli turlarla ziyaret edilebilir.</p>
        
        <h3>3. Sultanahmet Camii (Mavi Camii)</h3>
        <p>Mavi Camii olarak da bilinen Sultanahmet Camii, 1609-1616 yılları arasında I. Ahmed tarafından yaptırılmıştır. İznik çinileri ile süslenmiş iç mekanı nedeniyle "Mavi Camii" olarak anılan bu yapı, İstanbul'un en ünlü camilerinden biridir.</p>
        
        <p>Camii, altı minaresi ile dikkat çekmektedir ve Osmanlı mimarisinin en güzel örneklerinden biridir. Camii'nin içinde 20.000'den fazla İznik çinisi kullanılmıştır ve bu çinilerin mavi tonları, camiiye adını vermiştir.</p>
        
        <h3>4. Kapalıçarşı</h3>
        <p>Dünyanın en eski ve büyük kapalı çarşılarından biri olan Kapalıçarşı, 15. yüzyılda kurulmuştur. Çarşı, 60'tan fazla sokağı ve 4.000'den fazla dükkanı ile ziyaretçilerine eşsiz bir alışveriş deneyimi sunmaktadır.</p>
        
        <p>Kapalıçarşı'da altın, gümüş, halı, deri ürünler, baharat ve daha birçok ürün bulabilirsiniz. Çarşı, aynı zamanda kültürel bir deneyim sunmakta ve İstanbul'un tarihi atmosferini yaşatmak için idealdir.</p>
        
        <h3>5. Galata Kulesi</h3>
        <p>14. yüzyılda Cenevizliler tarafından inşa edilen Galata Kulesi, İstanbul'un panoramik manzarasını sunan en önemli simgelerinden biridir. Kule, 67 metre yüksekliğindedir ve şehrin 360 derecelik manzarasını sunmaktadır.</p>
        
        <p>Galata Kulesi'nin tepesine çıkarak, İstanbul Boğazı, Haliç ve şehrin genel manzarasını izleyebilirsiniz. Özellikle günbatımında kule, muhteşem bir manzara sunmaktadır.</p>
        
        <h3>6. Süleymaniye Camii</h3>
        <p>Mimar Sinan'ın başyapıtlarından biri olan Süleymaniye Camii, 1550-1557 yılları arasında inşa edilmiştir. Camii, Osmanlı mimarisinin en güzel örneklerinden biri olarak kabul edilmektedir.</p>
        
        <p>Süleymaniye Camii, sadece bir ibadethane değil, aynı zamanda külliyesi ile bir kompleks oluşturmaktadır. Külliye içinde medreseler, kütüphane, hamam ve türbeler bulunmaktadır.</p>
        
        <h2>İstanbul'u Keşfetmek İçin İpuçları</h2>
        <p>İstanbul'un tarihi mekanlarını keşfederken dikkat edilmesi gereken bazı önemli noktalar bulunmaktadır:</p>
        
        <h3>Ziyaret Saatleri</h3>
        <p>Tarihi mekanların çoğu haftanın her günü açıktır, ancak bazı mekanların haftanın belirli günlerinde kapalı olduğunu unutmamalısınız. Özellikle müzeler ve saraylar için önceden bilgi almak önemlidir.</p>
        
        <h3>Müze Kartı</h3>
        <p>İstanbul'da birçok müze ve tarihi mekana giriş için Müze Kartı kullanabilirsiniz. Bu kart, bütçe dostu bir seçenek sunmakta ve birçok müze girişinde indirim sağlamaktadır.</p>
        
        <h3>Rehberli Turlar</h3>
        <p>Tarihi mekanları daha iyi anlamak için rehberli turlar önerilir. Profesyonel rehberler, mekanların tarihini ve önemini detaylı bir şekilde anlatmaktadır.</p>
        
        <h2>Kurtköy Otel'den Ulaşım</h2>
        <p>Otelimiz, İstanbul'un tarihi mekanlarına kolay ulaşım imkanı sunan merkezi bir konumda yer almaktadır. Metro ve otobüs hatları ile şehrin her yerine rahatlıkla ulaşabilirsiniz.</p>
        
        <h3>Toplu Taşıma ile Ulaşım</h3>
        <p>Otelimizden en yakın metro istasyonuna 10 dakika yürüme mesafesi bulunmaktadır. Metro hatları ile Sultanahmet, Beyoğlu ve diğer önemli noktalara kolayca ulaşabilirsiniz.</p>
        
        <h3>Özel Transfer</h3>
        <p>Tarihi mekanları ziyaret etmek için özel transfer hizmeti de sunabilmekteyiz. Rezervasyon yaparken bu talebinizi belirtebilirsiniz.</p>
        
        <h2>Sonuç</h2>
        <p>İstanbul'u keşfetmek için Kurtköy Otel'i tercih edin. Konforlu konaklama ve kolay ulaşım imkanları ile unutulmaz bir İstanbul deneyimi yaşayın. Tarihi mekanları keşfederken, modern konforumuza geri dönebilir ve günün yorgunluğunu atabilirsiniz.</p>
        
        <p>Rezervasyon yapmak için bizimle iletişime geçin ve İstanbul'un büyülü atmosferini Kurtköy Otel ile deneyimleyin.</p>
      `
    },
    {
      id: 3,
      slug: 'istanbulun-lezzet-duraklari-nerede-ne-yenir',
      title: 'İstanbul\'un Lezzet Durakları: Nerede Ne Yenir?',
      date: '5 Ocak 2024',
      excerpt: 'İstanbul\'da mutlaka denemeniz gereken yöresel lezzetler ve en iyi restoranlar. Otelimiz çevresindeki özel mekanlar ve geleneksel Türk mutfağı hakkında bilgiler.',
      image: '/assets/images/istanbulda-ne-yenir.webp',
      category: 'Yemek',
      content: `
        <h2>İstanbul'un Lezzet Zenginliği</h2>
        <p>İstanbul, binlerce yıllık tarihi boyunca farklı kültürlerden etkilenmiş ve zengin bir mutfak kültürüne sahip olmuştur. Bizans, Osmanlı ve modern Türk mutfağının harmanlandığı bu muhteşem şehir, dünya mutfaklarından izler taşımaktadır. Kurtköy Otel çevresinde ve İstanbul genelinde mutlaka denemeniz gereken lezzetler bulunmaktadır.</p>
        
        <p>İstanbul'un mutfak kültürü, sadece restoranlar ve kafelerle sınırlı değildir. Sokak lezzetleri, tarihi çarşılar ve geleneksel pazarlar, şehrin lezzet dünyasının önemli bir parçasını oluşturmaktadır. Her mahallede farklı lezzetler ve özel mekanlar bulabilirsiniz.</p>
        
        <h2>Mutlaka Denemeniz Gereken Lezzetler</h2>
        <p>İstanbul'da denemeniz gereken lezzetler listesi oldukça uzundur. Ancak bazı lezzetler, şehrin simgesi haline gelmiştir ve mutlaka denemelisiniz.</p>
        
        <h3>1. Geleneksel Türk Kahvaltısı</h3>
        <p>İstanbul'da geleneksel Türk kahvaltısının en iyi örneklerini bulabilirsiniz. Bal, kaymak, peynir çeşitleri, zeytin, domates, salatalık, yumurta ve taze ekmek ile zengin bir kahvaltı deneyimi yaşayabilirsiniz. Özellikle Beyoğlu ve Kadıköy bölgelerinde birçok kahvaltı mekanı bulunmaktadır.</p>
        
        <p>Geleneksel Türk kahvaltısı, sadece bir öğün değil, aynı zamanda bir deneyimdir. Aileniz veya sevdiklerinizle birlikte uzun kahvaltı sofraları kurabilir ve çeşitli lezzetleri keşfedebilirsiniz.</p>
        
        <h3>2. İstanbul Balık Ekmek</h3>
        <p>Eminönü ve Karaköy'de bulunan balık ekmek büfeleri, İstanbul'un en ünlü street food'larından biridir. Taze balık, soğan, maydanoz ve limon ile hazırlanan bu lezzet, hem ekonomik hem de lezzetli bir seçenektir.</p>
        
        <p>Balık ekmek, İstanbul'un simgesi haline gelmiş bir sokak lezzetidir. Özellikle hafta sonları ve bayram günlerinde, bu büfelerin önünde uzun kuyruklar oluşmaktadır. Bu lezzeti denemeden İstanbul'dan ayrılmayın.</p>
        
        <h3>3. Döner ve Kebap</h3>
        <p>İstanbul, Türkiye'nin en iyi döner ve kebap restoranlarına ev sahipliği yapar. Geleneksel usullerle hazırlanan et yemekleri için şehrin çeşitli noktalarında mekanlar bulabilirsiniz. Özellikle Beyoğlu, Kadıköy ve Sultanahmet bölgelerinde birçok seçenek bulunmaktadır.</p>
        
        <p>Döner ve kebap, Türk mutfağının en bilinen yemeklerinden biridir. Etin özel baharatlarla marine edilmesi ve geleneksel yöntemlerle pişirilmesi, bu yemekleri özel kılmaktadır.</p>
        
        <h3>4. Lokum ve Türk Tatlıları</h3>
        <p>İstanbul'un tarihi tatlıcılarında baklava, lokum, künefe, revani ve daha birçok geleneksel Türk tatlısının en güzel örneklerini bulabilirsiniz. Özellikle Karaköy, Eminönü ve Beyoğlu bölgelerinde birçok tarihi tatlıcı bulunmaktadır.</p>
        
        <p>Baklava, ince hamur katmanları arasında ceviz veya fıstık ile hazırlanan ve şerbetle tatlandırılan bir tatlıdır. Lokum ise, çeşitli tatlar ve renklerle hazırlanan geleneksel bir Türk tatlısıdır.</p>
        
        <h3>5. Börek ve Pide</h3>
        <p>Börek ve pide, Türk mutfağının vazgeçilmez lezzetlerinden biridir. Çeşitli iç malzemelerle hazırlanan börekler ve pide çeşitleri, hem kahvaltı hem de öğle yemeği için idealdir.</p>
        
        <h3>6. Midye Dolma</h3>
        <p>İstanbul'un sokak lezzetlerinden biri olan midye dolma, özellikle sahil bölgelerinde popülerdir. Taze midyeler içine pilav doldurularak hazırlanan bu lezzet, limon suyu ile servis edilir.</p>
        
        <h2>Otelimiz Çevresindeki Restoranlar</h2>
        <p>Kurtköy Otel çevresinde çok sayıda restoran ve kafe bulunmaktadır. Hem geleneksel Türk mutfağı hem de uluslararası lezzetler için uygun seçenekler mevcuttur. Otelimizin merkezi konumu sayesinde, farklı mahallelerdeki restoranlara da kolayca ulaşabilirsiniz.</p>
        
        <h3>Yerel Restoranlar</h3>
        <p>Otelimiz çevresinde, geleneksel Türk mutfağını sunan birçok restoran bulunmaktadır. Bu restoranlarda, ev yemekleri tarzında hazırlanan yemekleri bulabilirsiniz.</p>
        
        <h3>Uluslararası Restoranlar</h3>
        <p>İstanbul, çok kültürlü yapısı sayesinde dünya mutfaklarından örnekler sunan birçok restorana ev sahipliği yapmaktadır. İtalyan, Fransız, Asya mutfağı ve daha birçok seçenek bulabilirsiniz.</p>
        
        <h2>İstanbul'da Yemek Deneyimi İpuçları</h2>
        <p>İstanbul'da yemek deneyimi yaşarken dikkat edilmesi gereken bazı önemli noktalar bulunmaktadır:</p>
        
        <h3>Sokak Lezzetleri</h3>
        <p>İstanbul'un sokak lezzetleri, şehrin en önemli gastronomik deneyimlerinden biridir. Ancak temiz ve kaliteli mekanları tercih etmek önemlidir.</p>
        
        <h3>Rezervasyon</h3>
        <p>Özellikle popüler restoranlar ve özel günler için rezervasyon yapmak önemlidir. Önceden planlama yaparak, istediğiniz restoranlarda yer bulabilirsiniz.</p>
        
        <h2>Sonuç</h2>
        <p>İstanbul'un lezzet dünyasını keşfetmek için Kurtköy Otel'i tercih edin. Otelimizin merkezi konumu sayesinde şehrin en iyi restoranlarına kolayca ulaşabilirsiniz. Hem geleneksel Türk mutfağını hem de uluslararası lezzetleri deneyimleyebilirsiniz.</p>
        
        <p>Rezervasyon yapmak için bizimle iletişime geçin ve İstanbul'un lezzet dünyasını keşfetmeye başlayın.</p>
      `
    },
    {
      id: 4,
      slug: 'istanbulda-romantik-bir-kacamak-icin-ipuclari',
      title: 'İstanbul\'da Romantik Bir Kaçamak İçin İpuçları',
      date: '28 Aralık 2023',
      excerpt: 'Sevgilinizle unutulmaz anlar yaşayabileceğiniz romantik mekanlar ve aktiviteler. Boğaz manzaralı restoranlar, özel turlar ve romantik konaklama önerileri.',
      image: '/assets/images/istanbul-romantik.jpg',
      category: 'Romantik',
      content: `
        <h2>İstanbul'da Romantik Bir Kaçamak</h2>
        <p>İstanbul, romantik bir kaçamak için ideal bir şehirdir. Boğaz manzarası, tarihi mekanlar ve özel restoranlar ile sevgilinizle unutulmaz anlar yaşayabilirsiniz.</p>
        
        <h2>Romantik Mekanlar</h2>
        <h3>1. Boğaz Turu</h3>
        <p>Boğaz turu, İstanbul'un en romantik aktivitelerinden biridir. Güneşin batışını izlerken sevgilinizle özel anlar yaşayabilirsiniz. Kurtköy Otel'den Boğaz'a kolay ulaşım imkanı bulunmaktadır.</p>
        
        <h3>2. Pierre Loti Tepesi</h3>
        <p>Pierre Loti Tepesi, İstanbul'un panoramik manzarasını sunan en romantik noktalarından biridir. Haliç manzarası eşliğinde kahve içebilir ve romantik bir atmosfer yaşayabilirsiniz.</p>
        
        <h3>3. Boğaz Köprüsü Yürüyüşü</h3>
        <p>Boğaz Köprüsü üzerinde yürüyüş yapmak, İstanbul'un en romantik aktivitelerinden biridir. Şehrin muhteşem manzarasını seyrederken sevgilinizle özel anlar yaşayabilirsiniz.</p>
        
        <h2>Romantik Restoranlar</h2>
        <p>İstanbul'da Boğaz manzaralı ve özel atmosferli birçok romantik restoran bulunmaktadır. Özel günleriniz için rezervasyon yaparak unutulmaz bir akşam yemeği yaşayabilirsiniz.</p>
        
        <h2>Kurtköy Otel Jakuzi Odası</h2>
        <p>Kurtköy Otel olarak, romantik kaçamaklar için özel jakuzi odalarımız bulunmaktadır. Özel jakuzi, modern tasarım ve konforlu atmosfer ile sevgilinizle unutulmaz bir konaklama deneyimi yaşayabilirsiniz.</p>
        
        <p>İstanbul'da romantik bir kaçamak için Kurtköy Otel'i tercih edin. Özel odalarımız ve merkezi konumumuz ile unutulmaz anlar yaşayın.</p>
      `
    },
    {
      id: 5,
      slug: 'aileler-icin-istanbul-cocuklarla-eglenceli-aktiviteler',
      title: 'Aileler İçin İstanbul: Çocuklarla Eğlenceli Aktiviteler',
      date: '20 Aralık 2023',
      excerpt: 'Çocuklarınızla birlikte İstanbul\'da keyifli vakit geçirebileceğiniz yerler ve etkinlikler. Müzeler, parklar, eğlence merkezleri ve aile dostu mekanlar.',
      image: '/assets/images/istanbulda-aileler.jpg',
      category: 'Aile',
      content: `
        <h2>Aile Dostu İstanbul</h2>
        <p>İstanbul, aileler için çok sayıda eğlenceli aktivite ve mekan sunmaktadır. Çocuklarınızla birlikte keyifli vakit geçirebileceğiniz birçok yer bulunmaktadır.</p>
        
        <h2>Aileler İçin Eğlenceli Aktiviteler</h2>
        <h3>1. Miniatürk</h3>
        <p>Miniatürk, Türkiye'nin en önemli yapılarının minyatürlerinin sergilendiği açık hava müzesidir. Çocuklar için hem eğitici hem de eğlenceli bir deneyim sunar.</p>
        
        <h3>2. İstanbul Akvaryum</h3>
        <p>Avrupa'nın en büyük tematik akvaryumlarından biri olan İstanbul Akvaryum, çocukların büyük ilgisini çeker. Deniz canlılarını yakından görebilme imkanı sunar.</p>
        
        <h3>3. Vialand Tema Parkı</h3>
        <p>Vialand, İstanbul'un en büyük tema parklarından biridir. Çocuklar ve yetişkinler için eğlenceli oyunlar ve aktiviteler sunar.</p>
        
        <h3>4. İstanbul Oyuncak Müzesi</h3>
        <p>İstanbul Oyuncak Müzesi, çocukların büyük ilgisini çeken bir müzedir. Tarihi oyuncaklar ve interaktif sergiler bulunmaktadır.</p>
        
        <h2>Kurtköy Otel Aile Odaları</h2>
        <p>Kurtköy Otel olarak, aileler için özel olarak tasarlanmış geniş aile odalarımız bulunmaktadır. 4-6 kişilik kapasiteli odalarımız ile çocuklarınızla birlikte konforlu bir konaklama yaşayabilirsiniz.</p>
        
        <p>Aileler için İstanbul'u keşfetmek istiyorsanız, Kurtköy Otel'i tercih edin. Merkezi konumumuz ve aile dostu odalarımız ile keyifli bir tatil geçirin.</p>
      `
    },
    {
      id: 6,
      slug: 'istanbulda-ulasim-rehberi-sehri-kesfetmenin-yollari',
      title: 'İstanbul\'da Ulaşım Rehberi: Şehri Keşfetmenin Yolları',
      date: '12 Aralık 2023',
      excerpt: 'İstanbul\'da toplu taşıma, taksi ve diğer ulaşım seçenekleri hakkında bilmeniz gerekenler. Metro, otobüs, feribot ve havalimanı ulaşım bilgileri.',
      image: '/assets/images/istanbulda-ulasım.jpg',
      category: 'Ulaşım',
      content: `
        <h2>İstanbul'da Ulaşım Seçenekleri</h2>
        <p>İstanbul, geniş toplu taşıma ağı ile misafirlerine kolay ulaşım imkanları sunar. Kurtköy Otel'den şehrin her yerine rahatlıkla ulaşabilirsiniz.</p>
        
        <h2>Toplu Taşıma Sistemleri</h2>
        <h3>1. Metro</h3>
        <p>İstanbul'un metro ağı, şehrin önemli noktalarını birbirine bağlar. Otelimize en yakın metro istasyonuna 10 dakika yürüme mesafesi bulunmaktadır.</p>
        
        <h3>2. Otobüs</h3>
        <p>İstanbul'da kapsamlı bir otobüs ağı bulunmaktadır. Şehir merkezine ve önemli noktalara düzenli otobüs seferleri mevcuttur.</p>
        
        <h3>3. Feribot</h3>
        <p>Boğaz hattında feribot seferleri, İstanbul'un en keyifli ulaşım yöntemlerinden biridir. Hem ulaşım hem de manzara turu için idealdir.</p>
        
        <h3>4. İstanbulkart</h3>
        <p>İstanbulkart, tüm toplu taşıma araçlarında kullanılabilen bir karttır. Metro, otobüs, tramvay ve feribotta kullanabilirsiniz.</p>
        
        <h2>Havalimanı Ulaşımı</h2>
        <p>Kurtköy Otel, İstanbul Havalimanı'na 45 dakika, Sabiha Gökçen Havalimanı'na 15 dakika mesafededir. Havalimanı transfer hizmeti için bizimle iletişime geçebilirsiniz.</p>
        
        <h2>Taksi ve Özel Transfer</h2>
        <p>İstanbul'da taksi ve özel transfer hizmetleri yaygındır. Özel transfer için rezervasyon yaparak konforlu bir ulaşım deneyimi yaşayabilirsiniz.</p>
        
        <p>İstanbul'u keşfetmek için Kurtköy Otel'i tercih edin. Merkezi konumumuz sayesinde şehrin her yerine kolay ulaşım imkanı bulacaksınız.</p>
      `
    },
    {
      id: 7,
      slug: 'kurtkoy-bolgesi-istanbulun-yukselen-semti',
      title: 'Kurtköy Bölgesi: İstanbul\'un Yükselen Semti',
      date: '5 Aralık 2023',
      excerpt: 'Kurtköy\'ün tarihi, gelişimi ve sunduğu olanaklar hakkında detaylı bilgiler. Bölgenin avantajları, alışveriş merkezleri ve yaşam kalitesi.',
      image: '/assets/images/pendikdis2.jpg',
      category: 'Bölge',
      content: `
        <h2>Kurtköy Bölgesi Hakkında</h2>
        <p>Kurtköy, İstanbul'un Pendik ilçesinde yer alan, son yıllarda hızla gelişen bir bölgedir. Modern konut projeleri, iş merkezleri ve alışveriş olanakları ile İstanbul'un önemli bölgelerinden biri haline gelmiştir.</p>
        
        <h2>Kurtköy'ün Avantajları</h2>
        <h3>1. Stratejik Konum</h3>
        <p>Kurtköy, İstanbul'un önemli noktalarına kolay ulaşım imkanı sunan stratejik bir konumda yer almaktadır. Sabiha Gökçen Havalimanı'na 15 dakika mesafededir.</p>
        
        <h3>2. Metro Erişimi</h3>
        <p>Bölgede metro istasyonlarına yakınlık, şehir içi ulaşımı kolaylaştırmaktadır. Kurtköy Otel'den en yakın metro istasyonuna 10 dakika yürüme mesafesi bulunmaktadır.</p>
        
        <h3>3. Alışveriş Olanakları</h3>
        <p>Kurtköy çevresinde çeşitli alışveriş merkezleri ve mağazalar bulunmaktadır. Günlük ihtiyaçlarınızı karşılayabileceğiniz çok sayıda mekan mevcuttur.</p>
        
        <h3>4. Yaşam Kalitesi</h3>
        <p>Kurtköy, modern yaşam alanları, parklar ve sosyal tesisler ile yüksek bir yaşam kalitesi sunmaktadır.</p>
        
        <h2>Kurtköy Otel'in Konumu</h2>
        <p>Kurtköy Otel, bölgenin merkezi noktasında yer almaktadır. Misafirlerimiz için hem ulaşım kolaylığı hem de çevresel olanaklar açısından ideal bir konum sunuyoruz.</p>
        
        <p>Kurtköy bölgesinde konaklama arıyorsanız, Kurtköy Otel'i tercih edin. Merkezi konumumuz ve modern olanaklarımız ile size en iyi hizmeti sunuyoruz.</p>
      `
    },
    {
      id: 8,
      slug: 'is-seyahati-icin-istanbul-toplanti-ve-konaklama-ipuclari',
      title: 'İş Seyahati İçin İstanbul: Toplantı ve Konaklama İpuçları',
      date: '28 Kasım 2023',
      excerpt: 'İş seyahati yapanlar için İstanbul\'da konaklama ve toplantı mekanları rehberi. İş merkezlerine yakınlık, toplantı salonları ve iş seyahati avantajları.',
      image: '/assets/images/istanbulda-ulasım.jpg',
      category: 'İş',
      content: `
        <h2>İş Seyahati İçin İstanbul</h2>
        <p>İstanbul, iş dünyasının önemli merkezlerinden biridir. İş seyahati yapan misafirlerimiz için ideal konaklama seçenekleri ve iş merkezlerine yakınlık sunuyoruz.</p>
        
        <h2>İş Seyahati Avantajları</h2>
        <h3>1. İş Merkezlerine Yakınlık</h3>
        <p>Kurtköy Otel, İstanbul'un önemli iş merkezlerine kolay ulaşım imkanı sunan bir konumda yer almaktadır. Toplantı ve iş görüşmeleriniz için ideal bir başlangıç noktasıdır.</p>
        
        <h3>2. Konforlu Çalışma Alanları</h3>
        <p>Odalarımızda çalışma masaları ve yüksek hızlı WiFi internet bağlantısı bulunmaktadır. İş seyahatleriniz için gerekli tüm olanakları sunuyoruz.</p>
        
        <h3>3. Esnek Check-in/Check-out</h3>
        <p>İş seyahatleriniz için esnek check-in ve check-out saatleri sunuyoruz. İhtiyaçlarınıza göre saatlerinizi ayarlayabilirsiniz.</p>
        
        <h2>Toplantı ve İş Görüşmeleri</h2>
        <p>İstanbul'da toplantı ve iş görüşmeleri için uygun mekanlar bulunmaktadır. Otelimiz, bu mekanlara kolay ulaşım imkanı sunmaktadır.</p>
        
        <p>İş seyahatiniz için Kurtköy Otel'i tercih edin. Konforlu odalar, esnek saatler ve merkezi konum ile iş seyahatlerinizde size yardımcı oluyoruz.</p>
      `
    },
    {
      id: 9,
      slug: 'istanbulda-alisveris-cenneti-en-iyi-alisveris-merkezleri',
      title: 'İstanbul\'da Alışveriş Cenneti: En İyi Alışveriş Merkezleri',
      date: '20 Kasım 2023',
      excerpt: 'İstanbul\'un en popüler alışveriş merkezleri ve butik mağazaları. Bağdat Caddesi, Nişantaşı ve diğer alışveriş bölgeleri hakkında bilgiler.',
      image: '/assets/images/istanbul-alisveris.jpeg',
      category: 'Alışveriş',
      content: `
        <h2>İstanbul'da Alışveriş</h2>
        <p>İstanbul, dünya markalarından geleneksel çarşılara kadar geniş bir alışveriş yelpazesi sunmaktadır. Kurtköy Otel'den şehrin en iyi alışveriş noktalarına kolay ulaşım imkanı bulunmaktadır.</p>
        
        <h2>Popüler Alışveriş Merkezleri</h2>
        <h3>1. İstanbul Cevahir</h3>
        <p>Avrupa'nın en büyük alışveriş merkezlerinden biri olan İstanbul Cevahir, yüzlerce mağaza ve restoran ile hizmet vermektedir.</p>
        
        <h3>2. Forum İstanbul</h3>
        <p>Forum İstanbul, modern mimarisi ve geniş mağaza yelpazesi ile ziyaretçilerine kapsamlı bir alışveriş deneyimi sunar.</p>
        
        <h3>3. Bağdat Caddesi</h3>
        <p>Bağdat Caddesi, İstanbul'un en ünlü alışveriş caddelerinden biridir. Butik mağazalar ve markalı dükkanlar ile doludur.</p>
        
        <h3>4. Nişantaşı</h3>
        <p>Nişantaşı, lüks markalar ve butik mağazaların bulunduğu ünlü bir alışveriş bölgesidir.</p>
        
        <h2>Geleneksel Çarşılar</h2>
        <p>Kapalıçarşı ve Mısır Çarşısı gibi tarihi çarşılar, geleneksel ürünler ve hediyelik eşyalar için idealdir.</p>
        
        <p>İstanbul'da alışveriş yapmak için Kurtköy Otel'i tercih edin. Merkezi konumumuz sayesinde şehrin en iyi alışveriş noktalarına kolayca ulaşabilirsiniz.</p>
      `
    },
    {
      id: 10,
      slug: 'istanbulun-gece-hayati-en-iyi-barlar-ve-kulupler',
      title: 'İstanbul\'un Gece Hayatı: En İyi Barlar ve Kulüpler',
      date: '15 Kasım 2023',
      excerpt: 'İstanbul\'un canlı gece hayatını keşfedin. En popüler barlar, gece kulüpleri ve eğlence mekanları. Güvenli ve eğlenceli bir gece için öneriler.',
      image: '/assets/images/istanbul-gece-hayati.webp',
      category: 'Gece Hayatı',
      content: `
        <h2>İstanbul'un Canlı Gece Hayatı</h2>
        <p>İstanbul, Avrupa'nın en canlı gece hayatına sahip şehirlerinden biridir. Çeşitli barlar, gece kulüpleri ve eğlence mekanları ile gece hayatı sevenler için ideal bir şehirdir.</p>
        
        <h2>Popüler Gece Hayatı Bölgeleri</h2>
        <h3>1. Beyoğlu ve İstiklal Caddesi</h3>
        <p>Beyoğlu, İstanbul'un en canlı gece hayatı bölgelerinden biridir. İstiklal Caddesi çevresinde çok sayıda bar, gece kulübü ve eğlence mekanı bulunmaktadır.</p>
        
        <h3>2. Kadıköy</h3>
        <p>Kadıköy, Anadolu yakasının en popüler gece hayatı merkezlerinden biridir. Genç ve dinamik atmosferi ile dikkat çeker.</p>
        
        <h3>3. Ortaköy</h3>
        <p>Ortaköy, Boğaz manzaralı barları ve restoranları ile ünlüdür. Romantik ve şık bir gece hayatı deneyimi sunar.</p>
        
        <h3>4. Bebek ve Etiler</h3>
        <p>Bebek ve Etiler bölgeleri, lüks barlar ve gece kulüpleri ile ünlüdür. Şık bir gece hayatı deneyimi arayanlar için idealdir.</p>
        
        <h2>Güvenlik ve İpuçları</h2>
        <p>İstanbul'da gece hayatı güvenlidir, ancak dikkatli olmak her zaman önemlidir. Popüler mekanları tercih edin ve güvenli ulaşım yöntemlerini kullanın.</p>
        
        <p>İstanbul'un gece hayatını keşfetmek için Kurtköy Otel'i tercih edin. Merkezi konumumuz sayesinde şehrin en iyi eğlence mekanlarına kolayca ulaşabilirsiniz.</p>
      `
    },
    {
      id: 11,
      slug: 'istanbul-havalimani-sehir-merkezine-ulasim',
      title: 'İstanbul Havalimanı\'ndan Şehir Merkezine Ulaşım',
      date: '10 Kasım 2023',
      excerpt: 'İstanbul Havalimanı ve Sabiha Gökçen Havalimanı\'ndan şehir merkezine ulaşım seçenekleri. Otobüs, metro, taksi ve özel transfer hizmetleri.',
      image: '/assets/images/istanbulda-ulasım.jpg',
      category: 'Ulaşım',
      content: `
        <h2>Havalimanı Ulaşım Seçenekleri</h2>
        <p>İstanbul, iki büyük havalimanına sahiptir: İstanbul Havalimanı ve Sabiha Gökçen Havalimanı. Kurtköy Otel, her iki havalimanına da kolay ulaşım imkanı sunmaktadır.</p>
        
        <h2>Sabiha Gökçen Havalimanı</h2>
        <p>Kurtköy Otel, Sabiha Gökçen Havalimanı'na sadece 15 dakika mesafededir. Bu yakınlık, havalimanı ulaşımınızı çok kolaylaştırır.</p>
        
        <h3>Ulaşım Seçenekleri:</h3>
        <ul>
          <li>Taksi: Yaklaşık 15 dakika</li>
          <li>Özel Transfer: Rezervasyon ile organize edilebilir</li>
          <li>Havalimanı Servisleri: Düzenli servis hatları mevcuttur</li>
        </ul>
        
        <h2>İstanbul Havalimanı</h2>
        <p>İstanbul Havalimanı'na otelimizden yaklaşık 45 dakika sürmektedir.</p>
        
        <h3>Ulaşım Seçenekleri:</h3>
        <ul>
          <li>Havalimanı Metro Hattı: Doğrudan şehir merkezine bağlantı</li>
          <li>Taksi: Yaklaşık 45 dakika</li>
          <li>Özel Transfer: Rezervasyon ile organize edilebilir</li>
          <li>Havalimanı Otobüsleri: Düzenli seferler</li>
        </ul>
        
        <h2>Kurtköy Otel Transfer Hizmeti</h2>
        <p>Otelimiz, havalimanı transfer hizmeti sunmaktadır. Rezervasyon yaparken transfer talebinizi belirtebilirsiniz.</p>
        
        <p>Havalimanı ulaşımınızı kolaylaştırmak için Kurtköy Otel'i tercih edin. Özellikle Sabiha Gökçen Havalimanı'na yakınlığımız ile size zaman kazandırıyoruz.</p>
      `
    },
    {
      id: 12,
      slug: 'istanbulda-kis-tatili-kis-aylarinda-yapilacaklar',
      title: 'İstanbul\'da Kış Tatili: Kış Aylarında Yapılacaklar',
      date: '5 Kasım 2023',
      excerpt: 'İstanbul\'da kış aylarında yapılabilecek aktiviteler ve ziyaret edilebilecek yerler. Kapalı mekanlar, müzeler ve kış etkinlikleri hakkında bilgiler.',
      image: '/assets/images/istanbul-gezilecek-yerler.jpg',
      category: 'Tatil',
      content: `
        <h2>İstanbul'da Kış Tatili</h2>
        <p>İstanbul, kış aylarında da ziyaretçilerine çok sayıda aktivite ve deneyim sunar. Müzeler, kapalı mekanlar ve özel kış etkinlikleri ile kış tatili için ideal bir şehirdir.</p>
        
        <h2>Kış Aylarında Yapılacaklar</h2>
        <h3>1. Müzeleri Ziyaret Edin</h3>
        <p>Kış aylarında müzeleri ziyaret etmek için ideal bir zamandır. Topkapı Sarayı, İstanbul Arkeoloji Müzesi ve diğer önemli müzeler sizi bekliyor.</p>
        
        <h3>2. Kapalıçarşı ve Mısır Çarşısı</h3>
        <p>Kapalıçarşı ve Mısır Çarşısı gibi kapalı mekanlar, kış aylarında alışveriş ve keşif için idealdir.</p>
        
        <h3>3. Hamam Deneyimi</h3>
        <p>Kış aylarında geleneksel Türk hamamı deneyimi yaşayabilirsiniz. Soğuk kış günlerinde sıcak ve rahatlatıcı bir deneyim sunar.</p>
        
        <h3>4. Boğaz Turu</h3>
        <p>Kış aylarında bile Boğaz turu yapabilirsiniz. Kışın özel atmosferi ile Boğaz'ın güzelliklerini keşfedebilirsiniz.</p>
        
        <h2>Kurtköy Otel Kış Konaklaması</h2>
        <p>Kurtköy Otel, kış aylarında da sıcak ve konforlu bir konaklama deneyimi sunar. Isıtmalı odalarımız ve merkezi konumumuz ile kış tatilinde size rahat bir sığınak sağlıyoruz.</p>
        
        <p>İstanbul'da kış tatili için Kurtköy Otel'i tercih edin. Konforlu odalar ve merkezi konum ile kış aylarında da keyifli bir tatil geçirin.</p>
      `
    },
    {
      id: 13,
      slug: 'istanbulun-tarihi-camileri-mimari-harikalar',
      title: 'İstanbul\'un Tarihi Camileri: Mimari Harikalar',
      date: '28 Ekim 2023',
      excerpt: 'İstanbul\'un en önemli tarihi camileri ve mimari özellikleri. Ayasofya, Sultanahmet, Süleymaniye ve diğer önemli camiler hakkında bilgiler.',
      image: '/assets/images/istanbul-gezilecek-yerler.jpg',
      category: 'Tarih',
      content: `
        <h2>İstanbul'un Tarihi Camileri</h2>
        <p>İstanbul, dünyanın en önemli İslam mimarisi örneklerine ev sahipliği yapar. Tarihi camiler, şehrin kültürel mirasının önemli bir parçasıdır.</p>
        
        <h2>Mutlaka Görülmesi Gereken Camiler</h2>
        <h3>1. Ayasofya Camii</h3>
        <p>Ayasofya, hem camii hem de müze olarak hizmet veren dünyanın en önemli yapılarından biridir. Bizans ve Osmanlı mimarisinin muhteşem bir birleşimidir.</p>
        
        <h3>2. Sultanahmet Camii (Mavi Camii)</h3>
        <p>Sultanahmet Camii, 17. yüzyılda inşa edilmiş ve İznik çinileri ile süslenmiştir. "Mavi Camii" olarak da bilinir ve İstanbul'un simgelerinden biridir.</p>
        
        <h3>3. Süleymaniye Camii</h3>
        <p>Süleymaniye Camii, Mimar Sinan'ın başyapıtlarından biridir. Osmanlı mimarisinin en güzel örneklerinden biri olarak kabul edilir.</p>
        
        <h3>4. Beyazıt Camii</h3>
        <p>Beyazıt Camii, İstanbul'un en eski camilerinden biridir. Osmanlı mimarisinin klasik örneklerinden biridir.</p>
        
        <h3>5. Fatih Camii</h3>
        <p>Fatih Camii, Fatih Sultan Mehmet tarafından yaptırılmıştır. İstanbul'un fethinden sonra inşa edilen ilk büyük camilerden biridir.</p>
        
        <h2>Ziyaret İpuçları</h2>
        <p>Camileri ziyaret ederken uygun kıyafet giymeyi unutmayın. Kadınlar için başörtüsü, erkekler için uzun pantolon tercih edilmelidir.</p>
        
        <p>İstanbul'un tarihi camilerini keşfetmek için Kurtköy Otel'i tercih edin. Merkezi konumumuz sayesinde şehrin önemli camilerine kolayca ulaşabilirsiniz.</p>
      `
    },
    {
      id: 14,
      slug: 'bogaz-turu-istanbulun-en-guzel-manzaralari',
      title: 'Boğaz Turu: İstanbul\'un En Güzel Manzaraları',
      date: '20 Ekim 2023',
      excerpt: 'Boğaz turu yaparak İstanbul\'un en güzel manzaralarını keşfedin. Tur seçenekleri, güzergahlar ve görülmesi gereken yerler hakkında bilgiler.',
      image: '/assets/images/istanbul-romantik.jpg',
      category: 'Turizm',
      content: `
        <h2>Boğaz Turu Deneyimi</h2>
        <p>Boğaz turu, İstanbul'u keşfetmenin en güzel yollarından biridir. Avrupa ve Asya kıtalarını ayıran Boğaz, muhteşem manzaralar ve tarihi yalılar sunar.</p>
        
        <h2>Boğaz Turu Seçenekleri</h2>
        <h3>1. Kısa Boğaz Turu</h3>
        <p>Kısa Boğaz turu, yaklaşık 2 saat sürer ve Boğaz'ın en önemli noktalarını ziyaret eder. Eminönü veya Kabataş'tan başlar.</p>
        
        <h3>2. Uzun Boğaz Turu</h3>
        <p>Uzun Boğaz turu, tüm Boğaz boyunca devam eder ve Anadolu Kavağı'na kadar gider. Tam gün süren bir deneyimdir.</p>
        
        <h3>3. Özel Boğaz Turu</h3>
        <p>Özel tekneler ile Boğaz turu yapabilir, kişiselleştirilmiş bir deneyim yaşayabilirsiniz.</p>
        
        <h2>Görülmesi Gereken Yerler</h2>
        <ul>
          <li>Dolmabahçe Sarayı</li>
          <li>Çırağan Sarayı</li>
          <li>Ortaköy Camii</li>
          <li>Rumeli Hisarı</li>
          <li>Anadolu Hisarı</li>
          <li>Tarihi Yalılar</li>
          <li>Boğaz Köprüleri</li>
        </ul>
        
        <h2>En İyi Zaman</h2>
        <p>Boğaz turu için en iyi zaman, güneşin batış saatleridir. Günbatımı manzarası eşliğinde unutulmaz bir deneyim yaşarsınız.</p>
        
        <p>Boğaz turu yapmak için Kurtköy Otel'i tercih edin. Otelimizden Boğaz turu kalkış noktalarına kolay ulaşım imkanı bulunmaktadır.</p>
      `
    },
    {
      id: 15,
      slug: 'istanbulda-saglik-ve-wellness-spa-ve-masaj-merkezleri',
      title: 'İstanbul\'da Sağlık ve Wellness: Spa ve Masaj Merkezleri',
      date: '15 Ekim 2023',
      excerpt: 'İstanbul\'da rahatlama ve yenilenme için en iyi spa ve wellness merkezleri. Masaj, hamam ve sağlık hizmetleri hakkında bilgiler.',
      image: '/assets/images/istanbul-romantik.jpg',
      category: 'Wellness',
      content: `
        <h2>İstanbul'da Wellness ve Spa</h2>
        <p>İstanbul, sağlık ve wellness hizmetleri konusunda geniş bir seçenek sunar. Geleneksel Türk hamamından modern spa merkezlerine kadar çeşitli seçenekler bulunmaktadır.</p>
        
        <h2>Geleneksel Türk Hamamı</h2>
        <p>Geleneksel Türk hamamı, binlerce yıllık bir geleneğe sahiptir. Sıcak buhar, köpük masajı ve geleneksel yöntemler ile derinlemesine temizlik ve rahatlama sunar.</p>
        
        <h3>Popüler Hamamlar:</h3>
        <ul>
          <li>Ayasofya Hürrem Sultan Hamamı</li>
          <li>Çemberlitaş Hamamı</li>
          <li>Kılıç Ali Paşa Hamamı</li>
          <li>Galatasaray Hamamı</li>
        </ul>
        
        <h2>Modern Spa Merkezleri</h2>
        <p>İstanbul'da lüks oteller ve özel spa merkezlerinde modern spa hizmetleri bulunmaktadır. Masaj, aromaterapi ve çeşitli wellness uygulamaları sunulmaktadır.</p>
        
        <h2>Masaj Türleri</h2>
        <ul>
          <li>Geleneksel Türk Masajı</li>
          <li>Tay Masajı</li>
          <li>Aromaterapi Masajı</li>
          <li>Sportif Masaj</li>
          <li>Ayak Masajı</li>
        </ul>
        
        <h2>Kurtköy Otel ve Rahatlama</h2>
        <p>Kurtköy Otel olarak, misafirlerimizin rahatlaması için konforlu odalar ve huzurlu bir ortam sunuyoruz. Çevremizdeki spa ve hamam merkezlerine kolay ulaşım imkanı bulunmaktadır.</p>
        
        <p>İstanbul'da wellness ve spa deneyimi için Kurtköy Otel'i tercih edin. Rahatlamak ve yenilenmek için ideal bir konaklama seçeneği sunuyoruz.</p>
      `
    },
    {
      id: 16,
      slug: 'istanbulun-muzeleri-kultur-ve-sanat-rehberi',
      title: 'İstanbul\'un Müzeleri: Kültür ve Sanat Rehberi',
      date: '10 Ekim 2023',
      excerpt: 'İstanbul\'un en önemli müzeleri ve sanat galerileri. Topkapı Sarayı, İstanbul Arkeoloji Müzesi ve çağdaş sanat müzeleri hakkında bilgiler.',
      image: '/assets/images/istanbul-gezilecek-yerler.jpg',
      category: 'Kültür',
      content: `
        <h2>İstanbul'un Müze Zenginliği</h2>
        <p>İstanbul, dünyanın en zengin müze koleksiyonlarına ev sahipliği yapar. Tarihi eserlerden çağdaş sanata kadar geniş bir yelpazede müzeler bulunmaktadır.</p>
        
        <h2>Mutlaka Ziyaret Edilmesi Gereken Müzeler</h2>
        <h3>1. Topkapı Sarayı Müzesi</h3>
        <p>Topkapı Sarayı, Osmanlı İmparatorluğu'nun yönetim merkeziydi. Günümüzde müze olarak hizmet veren saray, paha biçilmez eserler ve koleksiyonlar içerir.</p>
        
        <h3>2. İstanbul Arkeoloji Müzesi</h3>
        <p>İstanbul Arkeoloji Müzesi, dünyanın en önemli arkeoloji müzelerinden biridir. Binlerce yıllık tarihi eserler sergilenmektedir.</p>
        
        <h3>3. Ayasofya Müzesi</h3>
        <p>Ayasofya, hem camii hem de müze olarak hizmet vermektedir. Bizans ve Osmanlı dönemlerine ait eserler sergilenmektedir.</p>
        
        <h3>4. İstanbul Modern</h3>
        <p>İstanbul Modern, Türkiye'nin ilk çağdaş sanat müzesidir. Modern sanat eserleri ve sergiler sunmaktadır.</p>
        
        <h3>5. Pera Müzesi</h3>
        <p>Pera Müzesi, sanat ve kültür alanında önemli sergiler düzenlemektedir. Beyoğlu'nda bulunan müze, modern bir mimariye sahiptir.</p>
        
        <h2>Müze Kartı</h2>
        <p>İstanbul'da birçok müzeye giriş için Müze Kartı kullanabilirsiniz. Bu kart, bütçe dostu bir seçenek sunar.</p>
        
        <p>İstanbul'un müzelerini keşfetmek için Kurtköy Otel'i tercih edin. Merkezi konumumuz sayesinde şehrin en önemli müzelerine kolayca ulaşabilirsiniz.</p>
      `
    },
    {
      id: 17,
      slug: 'istanbulda-toplu-tasima-istanbulkart-kullanimi',
      title: 'İstanbul\'da Toplu Taşıma: İstanbulkart Kullanımı',
      date: '5 Ekim 2023',
      excerpt: 'İstanbul\'da toplu taşıma kullanımı ve İstanbulkart hakkında bilmeniz gerekenler. Metro, otobüs, tramvay ve feribot hatları hakkında bilgiler.',
      image: '/assets/images/istanbulda-ulasım.jpg',
      category: 'Ulaşım',
      content: `
        <h2>İstanbulkart Nedir?</h2>
        <p>İstanbulkart, İstanbul'daki tüm toplu taşıma araçlarında kullanılabilen akıllı bir karttır. Metro, otobüs, tramvay, metrobüs ve feribot hatlarında geçerlidir.</p>
        
        <h2>İstanbulkart Nasıl Alınır?</h2>
        <p>İstanbulkart, metro istasyonlarındaki bilet makinelerinden, İETT bayilerinden ve belirli noktalardan alınabilir. Kart ücreti düşüktür ve bakiye yüklenebilir.</p>
        
        <h2>İstanbulkart Kullanımı</h2>
        <h3>1. Metro</h3>
        <p>Metro istasyonlarında giriş turnikelerinde İstanbulkart'ınızı okutun. Ücret otomatik olarak hesabınızdan düşer.</p>
        
        <h3>2. Otobüs</h3>
        <p>Otobüse binerken İstanbulkart'ınızı okutun. Sürücü yanındaki cihaza kartınızı yaklaştırın.</p>
        
        <h3>3. Tramvay</h3>
        <p>Tramvayda da İstanbulkart kullanımı aynı şekilde çalışır. Duraklarda veya araç içindeki cihazlara kartınızı okutun.</p>
        
        <h3>4. Feribot</h3>
        <p>Feribot girişlerinde İstanbulkart'ınızı okutarak seyahat edebilirsiniz.</p>
        
        <h2>Bakiye Yükleme</h2>
        <p>İstanbulkart bakiyenizi metro istasyonlarındaki bilet makinelerinden, İETT bayilerinden veya mobil uygulamadan yükleyebilirsiniz.</p>
        
        <h2>Kurtköy Otel'den Ulaşım</h2>
        <p>Kurtköy Otel'den en yakın metro istasyonuna 10 dakika yürüme mesafesi bulunmaktadır. İstanbulkart alarak şehrin her yerine kolayca ulaşabilirsiniz.</p>
        
        <p>İstanbul'da toplu taşıma kullanmak için Kurtköy Otel'i tercih edin. Merkezi konumumuz sayesinde metro ve otobüs hatlarına kolay erişim sağlıyoruz.</p>
      `
    },
    {
      id: 18,
      slug: 'istanbulun-parklari-doga-ve-huzur',
      title: 'İstanbul\'un Parkları: Doğa ve Huzur',
      date: '28 Eylül 2023',
      excerpt: 'İstanbul\'un en güzel parkları ve yeşil alanları. Yürüyüş, piknik ve dinlenme için ideal mekanlar. Şehir hayatından kaçış için öneriler.',
      image: '/assets/images/istanbulda-aileler.jpg',
      category: 'Doğa',
      content: `
        <h2>İstanbul'un Yeşil Alanları</h2>
        <p>İstanbul, büyük bir metropol olmasına rağmen, şehrin içinde ve çevresinde çok sayıda park ve yeşil alan bulunmaktadır. Doğa severler için ideal mekanlardır.</p>
        
        <h2>Popüler Parklar</h2>
        <h3>1. Emirgan Korusu</h3>
        <p>Emirgan Korusu, lale bahçeleri ile ünlüdür. Özellikle bahar aylarında muhteşem bir görüntü sunar. Piknik ve yürüyüş için idealdir.</p>
        
        <h3>2. Yıldız Parkı</h3>
        <p>Yıldız Parkı, Beşiktaş'ta yer alan büyük bir parktır. Tarihi köşkler ve geniş yeşil alanlar sunar.</p>
        
        <h3>3. Belgrad Ormanı</h3>
        <p>Belgrad Ormanı, İstanbul'un kuzeyinde yer alan geniş bir ormanlık alandır. Doğa yürüyüşleri ve piknik için idealdir.</p>
        
        <h3>4. Gülhane Parkı</h3>
        <p>Gülhane Parkı, Topkapı Sarayı'nın yanında yer alan tarihi bir parktır. Boğaz manzarası eşliğinde huzurlu bir atmosfer sunar.</p>
        
        <h3>5. Maçka Parkı</h3>
        <p>Maçka Parkı, Şişli'de yer alan modern bir parktır. Spor alanları ve yürüyüş yolları bulunmaktadır.</p>
        
        <h2>Parklarda Yapılacaklar</h2>
        <ul>
          <li>Piknik yapmak</li>
          <li>Yürüyüş ve koşu</li>
          <li>Bisiklet sürmek</li>
          <li>Kitap okumak</li>
          <li>Doğa fotoğrafçılığı</li>
          <li>Aile aktiviteleri</li>
        </ul>
        
        <h2>Kurtköy Otel ve Doğa</h2>
        <p>Kurtköy Otel çevresinde de yeşil alanlar ve parklar bulunmaktadır. Şehir hayatından kısa bir kaçış için ideal bir konumda yer almaktayız.</p>
        
        <p>İstanbul'un parklarını keşfetmek için Kurtköy Otel'i tercih edin. Merkezi konumumuz sayesinde şehrin en güzel parklarına kolayca ulaşabilirsiniz.</p>
      `
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.post = this.blogPosts.find(p => p.slug === slug);
      
      if (!this.post) {
        this.router.navigate(['/blog']);
        return;
      }

      // Get related posts (same category, exclude current post)
      this.relatedPosts = this.blogPosts
        .filter(p => p.category === this.post.category && p.id !== this.post.id)
        .slice(0, 3);

      // Update SEO
      this.updateSEO();
    });
  }

  updateSEO() {
    const baseUrl = 'https://www.kurtkoyotel.com';
    const url = `${baseUrl}/blog/${this.post.slug}`;
    
    // Optimize keywords with long-tail keywords
    const keywords = `kurtköy otel, pendik otel, ${this.post.category.toLowerCase()}, ${this.post.title.toLowerCase()}, istanbul konaklama, pendik konaklama, kurtköy otel blog, pendik otel blog, istanbul rehberi, ${this.post.category.toLowerCase()} rehberi, ${this.post.title.toLowerCase()} rehberi`;
    
    // Enhanced meta description with keywords
    const metaDescription = `${this.post.excerpt} Kurtköy Otel Pendik blog yazısı. İstanbul konaklama, ${this.post.category.toLowerCase()} rehberi ve önerileri. Rezervasyon için iletişime geçin.`;
    
    this.seo.updatePageSEO({
      title: `${this.post.title} | Kurtköy Otel Pendik Blog - İstanbul Konaklama Rehberi`,
      description: metaDescription,
      keywords: keywords,
      url: url,
      image: `${baseUrl}/${this.post.image}`
    });

    // Add additional meta tags for better SEO
    this.addAdditionalMetaTags(baseUrl, url, keywords, metaDescription);

    // Add structured data for Article and Breadcrumb
    this.addStructuredData();
  }

  addAdditionalMetaTags(baseUrl: string, url: string, keywords: string, description: string) {
    // Add hreflang for Turkish
    let hreflangLink = document.querySelector('link[rel="alternate"][hreflang="tr"]');
    if (!hreflangLink) {
      hreflangLink = document.createElement('link');
      hreflangLink.setAttribute('rel', 'alternate');
      hreflangLink.setAttribute('hreflang', 'tr');
      hreflangLink.setAttribute('href', url);
      document.head.appendChild(hreflangLink);
    } else {
      hreflangLink.setAttribute('href', url);
    }

    // Add article:author meta tag
    let authorMeta = document.querySelector('meta[name="article:author"]');
    if (!authorMeta) {
      authorMeta = document.createElement('meta');
      authorMeta.setAttribute('name', 'article:author');
      authorMeta.setAttribute('content', 'Kurtköy Otel');
      document.head.appendChild(authorMeta);
    }

    // Add article:published_time meta tag
    let publishedMeta = document.querySelector('meta[property="article:published_time"]');
    if (!publishedMeta) {
      publishedMeta = document.createElement('meta');
      publishedMeta.setAttribute('property', 'article:published_time');
      publishedMeta.setAttribute('content', this.post.date);
      document.head.appendChild(publishedMeta);
    } else {
      publishedMeta.setAttribute('content', this.post.date);
    }

    // Add article:section meta tag
    let sectionMeta = document.querySelector('meta[property="article:section"]');
    if (!sectionMeta) {
      sectionMeta = document.createElement('meta');
      sectionMeta.setAttribute('property', 'article:section');
      sectionMeta.setAttribute('content', this.post.category);
      document.head.appendChild(sectionMeta);
    } else {
      sectionMeta.setAttribute('content', this.post.category);
    }

    // Add article:tag meta tag
    let tagMeta = document.querySelector('meta[property="article:tag"]');
    if (!tagMeta) {
      tagMeta = document.createElement('meta');
      tagMeta.setAttribute('property', 'article:tag');
      tagMeta.setAttribute('content', keywords);
      document.head.appendChild(tagMeta);
    } else {
      tagMeta.setAttribute('content', keywords);
    }

    // Add news_keywords for news articles
    let newsKeywordsMeta = document.querySelector('meta[name="news_keywords"]');
    if (!newsKeywordsMeta) {
      newsKeywordsMeta = document.createElement('meta');
      newsKeywordsMeta.setAttribute('name', 'news_keywords');
      newsKeywordsMeta.setAttribute('content', keywords);
      document.head.appendChild(newsKeywordsMeta);
    } else {
      newsKeywordsMeta.setAttribute('content', keywords);
    }
  }

  addStructuredData() {
    const baseUrl = 'https://www.kurtkoyotel.com';
    
    // Article Schema (BlogPosting)
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": this.post.title,
      "description": this.post.excerpt,
      "image": [
        `${baseUrl}/${this.post.image}`,
        `${baseUrl}/assets/images/kurtköy-logo.png`
      ],
      "datePublished": this.post.date,
      "dateModified": this.post.date,
      "author": {
        "@type": "Organization",
        "name": "Kurtköy Otel",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/assets/images/kurtköy-logo.png`
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Kurtköy Otel",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/assets/images/kurtköy-logo.png`,
          "width": 200,
          "height": 60
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}/blog/${this.post.slug}`
      },
      "articleSection": this.post.category,
      "keywords": `kurtköy otel, pendik otel, ${this.post.category.toLowerCase()}, ${this.post.title.toLowerCase()}, istanbul konaklama, pendik konaklama`,
      "inLanguage": "tr-TR",
      "url": `${baseUrl}/blog/${this.post.slug}`
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Anasayfa",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${baseUrl}/blog`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": this.post.title,
          "item": `${baseUrl}/blog/${this.post.slug}`
        }
      ]
    };

    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-blog-schema]');
    existingScripts.forEach(script => script.remove());

    // Add Article structured data
    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.setAttribute('data-blog-schema', 'article');
    articleScript.text = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);

    // Add Breadcrumb structured data
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.setAttribute('data-blog-schema', 'breadcrumb');
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      // Fallback resim
      img.src = '/assets/images/istanbul-gezilecek-yerler.jpg';
      img.onerror = null; // Sonsuz döngüyü önle
    }
  }
}

