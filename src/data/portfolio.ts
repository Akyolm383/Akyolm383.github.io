/**
 * Sitedeki tüm metinler buradan gelir.
 * Kural: sadece doğrulanmış bilgi. Emin olunmayan alan boş bırakılır ve
 * arayüzde gizlenir; tahminle doldurulmaz.
 */

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SiteData {
  name: string;
  url: string;
  email: string;
  linkedin: string;
  instagram?: string;
  city: string;
  /** Discord User ID (Lanyard API için) */
  discordId?: string;
  /** Gerçek bir CV yayınlanınca doldur; boşken CV linki hiçbir yerde görünmez. */
  cvUrl?: string;
  /** GitHub kısmı şimdilik bilinçli olarak gösterilmiyor. */
  github?: string;

  home: {
    tagline: { plain: string; accent: string };
    intro: string;
    education: {
      school: string;
      schoolShort: string;
      program: string;
      year: number;
    };
    skills: SkillGroup[];
    hobbyTeaser: string;
  };

  hobby: {
    lead: string;
    community: {
      name: string;
      motto: { plain: string; accent: string };
      url: string;
      urlLabel: string;
      summary: string;
      role: string;
      roles: string[];
    };
    tools: string[];
  };
}

export const site: SiteData = {
  name: "Ramazan Akyol",
  url: "https://ramazanakyol.me",
  email: "ramazanakyol161@gmail.com",
  linkedin: "https://www.linkedin.com/in/ramazan-akyol-6b58a3302",
  instagram: "https://instagram.com/akyolm383",
  city: "İstanbul",
  discordId: "466247070395924493",
  cvUrl: undefined,
  github: undefined,

  home: {
    tagline: { plain: "Finansı okuyorum,", accent: "kodu yazıyorum." },
    intro:
      "İstanbul Nişantaşı Üniversitesi’nde Bankacılık ve Sigortacılık birinci sınıf öğrencisiyim. Okul dışında FiveM üzerinde Lua ile script yazıyor ve bir roleplay topluluğunun yönetiminde yer alıyorum.",
    education: {
      school: "İstanbul Nişantaşı Üniversitesi",
      schoolShort: "Nişantaşı Üniversitesi",
      program: "Bankacılık ve Sigortacılık",
      year: 1,
    },
    skills: [
      {
        title: "Kod & web",
        items: ["Lua", "FiveM scripting", "QBCore", "HTML", "CSS", "JavaScript", "Git"],
      },
      {
        title: "Topluluk",
        items: ["Sunucu yönetimi", "Topluluk yönetimi", "Ekip çalışması"],
      },
      {
        title: "Okul & ofis",
        items: ["Excel", "Word", "PowerPoint"],
      },
    ],
    hobbyTeaser:
      "Arkadaşlarımla birlikte geliştirdiğimiz Ducks Community adlı FiveM roleplay sunucusunda 3 kişilik çekirdek geliştirici ekibi ve 10 kişilik komite ile birlikte hem script yazıyorum hem de yönetimdeyim.",
  },

  hobby: {
    lead: "Okul dışındaki vaktimin çoğu FiveM’de geçiyor: script yazıyor, bir sunucunun yönetiminde yer alıyorum.",
    community: {
      name: "Ducks Community",
      motto: { plain: "Los Santos’ta rol yapılmaz.", accent: "Yaşanır." },
      url: "https://duckscommunity.com/",
      urlLabel: "duckscommunity.com",
      summary:
        "Los Santos’ta geçen, whitelist ile çalışan bir hard roleplay sunucusu. Kalıcı karakterler ve sonuçları olan kararlar üzerine kurulu. 3 kişilik çekirdek geliştirici ekibi ve 10 kişilik komite ekibiyle sunucunun scriptlerini, yönetimini ve topluluk operasyonunu birlikte yürütüyoruz.",
      role: "3 kişilik çekirdek geliştirici ekibi ve 10 kişilik komite; ortaya çıkan iş hepimizin.",
      roles: ["Script geliştirme", "Yönetim", "Komite & Operasyon"],
    },
    tools: ["Lua", "FiveM", "QBCore", "HTML", "CSS", "JavaScript", "Git"],
  },
};
