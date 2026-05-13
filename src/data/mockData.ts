import { ScanGroup, Category } from '../types';

export const featuredScan: ScanGroup = {
  id: 's1',
  name: 'Flame Comics',
  logoUrl: 'https://ui-avatars.com/api/?name=Flame+Comics&background=05050a&color=ef4444&size=256',
  websiteUrl: 'https://flamecomics.com/',
  description: 'Read the latest and greatest action, fantasy, and martial arts manhwa. High-quality translations and fast releases.',
  tags: ['High Quality', 'Manhwa', 'Action/Fantasy'],
  featured: true
};

export const popularScans: ScanGroup[] = [
  {
    id: 's2',
    name: 'Nexus Toons',
    logoUrl: 'https://ui-avatars.com/api/?name=Nexus+Toons&background=05050a&color=8b5cf6&size=256',
    websiteUrl: 'https://nexustoons.com/',
    description: 'Leitura de manhwas e webtoons com alta qualidade e lançamentos rápidos.',
    tags: ['Manhwa', 'Fast Releases']
  },
  {
    id: 's3',
    name: 'Lycan Toons',
    logoUrl: 'https://ui-avatars.com/api/?name=Lycan+Toons&background=05050a&color=ef4444&size=256',
    websiteUrl: 'https://lycantoons.com/',
    description: 'Especializada em obras de ação, fantasia e artes marciais.',
    tags: ['Action/Fantasy', 'Manhwa']
  },
  {
    id: 's4',
    name: 'Flower Mangas',
    logoUrl: 'https://ui-avatars.com/api/?name=Flower+Mangas&background=05050a&color=ec4899&size=256',
    websiteUrl: 'https://flowermangas.net/',
    description: 'O melhor acervo de shoujo, romance e isekai focado no público feminino.',
    tags: ['Romance', 'High Quality']
  },
  {
    id: 's5',
    name: 'Império da Britannia',
    logoUrl: 'https://ui-avatars.com/api/?name=Imperio+Britannia&background=05050a&color=eab308&size=256',
    websiteUrl: 'https://imperiodabritannia.net/',
    description: 'Scan focada em trazer mangás e manhwas de fantasia e aventura.',
    tags: ['Action/Fantasy', 'Manga']
  },
  {
    id: 's6',
    name: 'Manga Livre',
    logoUrl: 'https://ui-avatars.com/api/?name=Manga+Livre&background=05050a&color=3b82f6&size=256',
    websiteUrl: 'https://mangalivre.blog/',
    description: 'Um dos maiores agregadores de mangás em português.',
    tags: ['Manga', 'Fast Releases']
  },
  {
    id: 's7',
    name: 'MangaDex',
    logoUrl: 'https://ui-avatars.com/api/?name=Manga+Dex&background=05050a&color=f97316&size=256',
    websiteUrl: 'https://mangadex.org/',
    description: 'The largest ad-free manga aggregator with multiple languages and scanlation groups.',
    tags: ['Manga', 'High Quality', '+18']
  },
  {
    id: 's8',
    name: 'Colamanga',
    logoUrl: 'https://ui-avatars.com/api/?name=Cola+Manga&background=05050a&color=10b981&size=256',
    websiteUrl: 'https://www.colamanga.com/',
    description: 'Plataforma focada em manhuas (obras chinesas) de cultivação e artes marciais.',
    tags: ['Manhua', 'Action/Fantasy']
  },
  {
    id: 's9',
    name: 'WEBTOON',
    logoUrl: 'https://ui-avatars.com/api/?name=WEB+TOON&background=05050a&color=14b8a6&size=256',
    websiteUrl: 'https://m.webtoons.com/en/',
    description: 'The official platform for original webtoons and manhwas.',
    tags: ['Manhwa', 'High Quality']
  },
  {
    id: 's10',
    name: 'Anime Fire',
    logoUrl: 'https://ui-avatars.com/api/?name=Anime+Fire&background=05050a&color=ef4444&size=256',
    websiteUrl: 'https://animefire.io/',
    description: 'Acompanhe seus animes favoritos com a melhor qualidade e rapidez.',
    tags: ['Anime', 'Fast Releases']
  },
  {
    id: 's11',
    name: 'ComicK',
    logoUrl: 'https://ui-avatars.com/api/?name=Comic+K&background=05050a&color=3b82f6&size=256',
    websiteUrl: 'https://comick.dev/',
    description: 'A fast and beautiful manga reader with a huge library, including mature titles and manhwas.',
    tags: ['Manhwa', 'Manga', '+18']
  },
  {
    id: 's12',
    name: 'MangaFire',
    logoUrl: 'https://ui-avatars.com/api/?name=Manga+Fire&background=05050a&color=ef4444&size=256',
    websiteUrl: 'https://mangafire.to/home',
    description: 'Plataforma com vasto catálogo de mangás e manhwas, incluindo coleções de conteúdo adulto.',
    tags: ['Manhwa', 'Manga', '+18']
  },
  {
    id: 's13',
    name: 'MangaBL',
    logoUrl: 'https://ui-avatars.com/api/?name=Manga+BL&background=05050a&color=ec4899&size=256',
    websiteUrl: 'https://mangabl.net/',
    description: 'Focado em obras BL (Boys Love) e manhwas com temática madura.',
    tags: ['Romance', 'Manhwa', '+18']
  },
  {
    id: 's14',
    name: 'MangaGo',
    logoUrl: 'https://ui-avatars.com/api/?name=Manga+Go&background=05050a&color=f59e0b&size=256',
    websiteUrl: 'https://www.mangago.me/',
    description: 'Grande comunidade e acervo livre focado em diversos gêneros e manhwas com conteúdo +18.',
    tags: ['Manhwa', 'Romance', '+18']
  },
  {
    id: 's15',
    name: 'MegaYaoi',
    logoUrl: 'https://ui-avatars.com/api/?name=Mega+Yaoi&background=05050a&color=8b5cf6&size=256',
    websiteUrl: 'https://www.megayaoi.com/',
    description: 'Especializada em traduções de conteúdos BL, Yaoi e adultos para a comunidade brasileira.',
    tags: ['Manhwa', 'Romance', '+18']
  },
  {
    id: 's16',
    name: 'LerBoysLove',
    logoUrl: 'https://ui-avatars.com/api/?name=Ler+Boys+Love&background=05050a&color=d946ef&size=256',
    websiteUrl: 'https://lerboyslove.com/',
    description: 'Scan brasileira dedicada em trazer os melhores webtoons e manhwas BL maduros para o público local.',
    tags: ['Manhwa', 'Romance', '+18']
  },
  {
    id: 's17',
    name: 'Tapas',
    logoUrl: 'https://ui-avatars.com/api/?name=Tapas&background=05050a&color=f97316&size=256',
    websiteUrl: 'https://m.tapas.io/',
    description: 'Plataforma oficial de webcomics com uma vasta seleção de romances maduros e manhwas imperdíveis.',
    tags: ['Manhwa', 'High Quality', '+18']
  },
  {
    id: 's18',
    name: 'Manta',
    logoUrl: 'https://ui-avatars.com/api/?name=Manta&background=05050a&color=10b981&size=256',
    websiteUrl: 'https://manta.net/en',
    description: 'Aplicativo oficial de assinatura de manhwas, trazendo grandes títulos de romance e drama sem limites.',
    tags: ['Manhwa', 'Romance', '+18']
  },
  {
    id: 's19',
    name: 'Lezhin',
    logoUrl: 'https://ui-avatars.com/api/?name=Lezhin&background=05050a&color=ef4444&size=256',
    websiteUrl: 'https://www.lezhinus.com/en',
    description: 'A famosa plataforma oficial coreana, mundialmente conhecida pelos seus manhwas premium voltados a adultos.',
    tags: ['Manhwa', 'High Quality', '+18']
  },
  {
    id: 's20',
    name: 'Miruro',
    logoUrl: 'https://ui-avatars.com/api/?name=Miruro&background=05050a&color=a855f7&size=256',
    websiteUrl: 'https://www.miruro.tv/',
    description: 'Assista animes com alta qualidade nesta plataforma moderna.',
    tags: ['Anime', 'High Quality']
  },
  {
    id: 's21',
    name: 'AnimeHeaven',
    logoUrl: 'https://ui-avatars.com/api/?name=Anime+Heaven&background=05050a&color=eab308&size=256',
    websiteUrl: 'https://animeheaven.me/',
    description: 'Diretório e streaming de animes populares com um acervo gigantesco.',
    tags: ['Anime', 'Fast Releases']
  },
  {
    id: 's22',
    name: 'Read All Comics',
    logoUrl: 'https://ui-avatars.com/api/?name=Read+All+Comics&background=05050a&color=3b82f6&size=256',
    websiteUrl: 'https://readallcomics.com/',
    description: 'Leia gibis ocidentais, marvel, dc e quadrinhos em geral.',
    tags: ['Comics', 'Manga']
  },
  {
    id: 's23',
    name: 'GetComics',
    logoUrl: 'https://ui-avatars.com/api/?name=Get+Comics&background=05050a&color=ef4444&size=256',
    websiteUrl: 'https://getcomics.org/',
    description: 'Baixe e leia enormes coleções de Comics (gibis) ocidentais.',
    tags: ['Comics', 'High Quality']
  },
  {
    id: 's24',
    name: 'MyReadingManga',
    logoUrl: 'https://ui-avatars.com/api/?name=My+Reading+Manga&background=05050a&color=ec4899&size=256',
    websiteUrl: 'https://myreadingmanga.info/',
    description: 'A maior biblioteca de dōjinshi yaoi, comics e mangás BL (Boys Love) +18 da internet.',
    tags: ['Manga', 'Comics', '+18']
  },
  {
    id: 's25',
    name: 'Tia Manhwa',
    logoUrl: 'https://ui-avatars.com/api/?name=Tia+Manhwa&background=05050a&color=f43f5e&size=256',
    websiteUrl: 'https://tiamanhwa.com/',
    description: 'Site especializado em manhwas adultos, com ótimas recomendações e alta qualidade +18.',
    tags: ['Manhwa', 'High Quality', '+18']
  },
  {
    id: 's26',
    name: 'Manhwa18',
    logoUrl: 'https://ui-avatars.com/api/?name=Manhwa+18&background=05050a&color=dc2626&size=256',
    websiteUrl: 'https://manhwa18.com/',
    description: 'Um dos maiores portais focados em manhwas +18, com muitas opções de leitura adulta.',
    tags: ['Manhwa', 'Fast Releases', '+18']
  }
];

export const recentScans: ScanGroup[] = [];

export const allCategories: Category[] = [
  'All', 'Action/Fantasy', 'Romance', 'Manhwa', 'Manga', 'Manhua', 'Anime', 'Fast Releases', 'High Quality', '+18', 'Comics'
];
