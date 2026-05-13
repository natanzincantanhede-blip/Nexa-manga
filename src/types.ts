export interface ScanGroup {
  id: string;
  name: string;
  logoUrl: string;
  bannerUrl?: string;
  websiteUrl: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export type Category = 'All' | 'Action/Fantasy' | 'Romance' | 'Manhwa' | 'Manga' | 'Manhua' | 'Anime' | 'Fast Releases' | 'High Quality' | '+18' | 'Comics';


