export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface FocusArea {
  title: string;
  items: string[];
}

export interface HobbyProject {
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
  linkLabel?: string;
  badge?: string;
  teamNote?: string;
}

export interface DualPortfolioData {
  name: string;
  location: string;
  cvUrl: string;
  email: string;
  socials: {
    linkedin: string;
    github: string;
  };
  career: {
    title: string;
    badge: string;
    intro: string;
    education: EducationItem[];
    focusAreas: FocusArea[];
  };
  hobby: {
    title: string;
    badge: string;
    intro: string;
    featuredCommunity: {
      name: string;
      tagline: string;
      role: string;
      description: string;
      link: string;
      features: string[];
    };
    skills: string[];
    projects: HobbyProject[];
  };
}

export const portfolioData: DualPortfolioData = {
  name: "Ramazan Akyol",
  location: "Türkiye",
  cvUrl: "https://cv.ramazanakyol.me",
  email: "ramazanakyol161@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/ramazanakyol",
    github: "https://github.com/Akyolm383",
  },
  career: {
    title: "Bankacılık ve Sigortacılık Öğrencisi",
    badge: "Öğrenci & Kendini Geliştirmeye Odaklı",
    intro: "Bankacılık ve Sigortacılık bölümünde eğitimime devam ediyorum. Finansal okuryazarlık, bankacılık esasları ve sigortacılık mantığını öğrenme aşamasındayım. Kendimi akademik anlamda geliştirmeye, temel finansal kavramları sağlam oturtmaya ve gelecekteki staj olanaklarına hazırlanmaya odaklanıyorum.",
    education: [
      {
        school: "Üniversite Eğitimi",
        degree: "Bankacılık ve Sigortacılık",
        period: "Devam Ediyor",
        description: "Bölümüm kapsamında temel finans, para ve banka esasları, sigorta ilkeleri ve temel ekonomi dersleri alıyorum.",
        highlights: [
          "Temel Bankacılık İlkeleri",
          "Sigortacılığa Giriş & Hukuk",
          "Temel Finansal Okuryazarlık",
          "Genel Muhasebe Kavramları",
        ],
      },
    ],
    focusAreas: [
      {
        title: "Öğrendiğim Konular",
        items: [
          "Bankacılık Sektörü ve Temel İşleyişi",
          "Sigorta Sözleşmeleri ve Temel İlkeler",
          "Finansal Okuryazarlık ve Bütçe Mantığı",
          "Para & Sermaye Piyasalarına Giriş",
        ],
      },
      {
        title: "Kullandığım Araçlar",
        items: [
          "MS Excel (Temel Tablolama & Hesaplama)",
          "MS Word & PowerPoint",
          "İnternet Araştırması & Raporlama",
          "Finansal Haber ve Piyasa Takibi",
        ],
      },
      {
        title: "Kişisel Nitelikler",
        items: [
          "Öğrenmeye ve Araştırmaya Açıklık",
          "Disiplin ve Sorumluluk Bilinci",
          "Analitik Düşünme & Mantık Yürütme",
          "Dürüst ve Şeffaf İletişim",
        ],
      },
    ],
  },
  hobby: {
    title: "FiveM Script Geliştirme & Sunucu Sistemleri",
    badge: "Hobi • FiveM & Topluluk Projeleri",
    intro: "Finans eğitimimin yanında teknolojiye ve oyun sunucusu mekaniklerine meraklıyım. Boş zamanlarımda 3 arkadaş birlikte geliştirdiğimiz Ducks Community bünyesinde ve açık kaynak FiveM dünyasında Lua scriptleri, sunucu optimizasyonları ve özel arayüzler üzerine çalışıyorum.",
    featuredCommunity: {
      name: "Ducks Community",
      tagline: "Los Santos’ta rol yapılmaz. Yaşanır.",
      role: "Geliştirici Ekip (3 Kişilik Çekirdek Ekip)",
      description: "3 arkadaş ortaklaşa geliştirdiğimiz FiveM Hard Roleplay sunucusu ve topluluk portalı. Kalıcı karakterler, ağır sonuçlar ve kendi hafızası olan yaşayan bir Los Santos felsefesiyle tasarlandı.",
      link: "https://duckscommunity.com/",
      features: [
        "Hard Roleplay & Sonuç Odaklı Oyun Standardı",
        "Şehir Hafızası & Kalıcı Karakter Bağları",
        "Özel Whitelist Portalı & Başvuru Süreci",
        "Ekip Olarak Optimize Edilmiş Sunucu Altyapısı",
      ],
    },
    skills: [
      "Lua (FiveM)",
      "QBCore Framework",
      "NUI (HTML5 / CSS3 / JS)",
      "oxmysql & Veritabanı",
      "Git & GitHub",
      "Sunucu & Script Optimizasyonu",
    ],
    projects: [
      {
        title: "Ducks Community — Los Santos Hard Roleplay",
        category: "Aktif Sunucu Projesi",
        badge: "Ortak Ekip Projesi (3 Kişi)",
        teamNote: "3 arkadaş birlikte geliştirdiğimiz ortak rol yapma projesi",
        description: "Kalıcı karakterler ve ağır sonuçlar felsefesine sahip, şehir hafızası barındıran FiveM Hard Roleplay sunucusu ve web portalı.",
        tech: ["FiveM", "Hard RP", "Lua", "Ekip Çalışması"],
        link: "https://duckscommunity.com/",
        linkLabel: "duckscommunity.com",
      },
      {
        title: "akyol-bweapon (Silah Blacklist)",
        category: "Sunucu Mekaniği",
        description: "FiveM sunucularında belirlenen silahları kara listeye (blacklist) alarak yetkisiz silah kullanımını engelleyen açık kaynak Lua scripti.",
        tech: ["Lua", "FiveM Scripting"],
        github: "https://github.com/Akyolm383/akyol-bweapon",
      },
      {
        title: "FiveM Web Loading Screen",
        category: "Arayüz & Web",
        description: "Sunucuya bağlanırken oyuncuları karşılayan, müzikli, şık animasyonlu ve bilgilendirici modern web tabanlı yükleme ekranı.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/Akyolm383/LoadingScreen",
      },
      {
        title: "akyol-bpaket & akyol-kusan",
        category: "Envanter & Ekipman",
        description: "Oyuncuların hazır başlangıç paketlerini açmasını ve silah/eşya kuşanma animasyonlarını yöneten FiveM yardımcı scriptleri.",
        tech: ["Lua", "FiveM"],
        github: "https://github.com/Akyolm383/akyol-bpaket",
      },
      {
        title: "QBCore Çözümleri & Anti-Powergame",
        category: "Rol Yapma Optimizasyonu",
        description: "QBCore tabanlı sunucular için meslek düzenlemeleri ve haksız rol yapmayı engelleyen anti-powergame mekanikleri.",
        tech: ["Lua", "QBCore", "Optimizasyon"],
        github: "https://github.com/Akyolm383",
      },
    ],
  },
};
