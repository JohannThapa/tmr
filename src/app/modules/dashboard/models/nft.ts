export interface Nft {
  id: number;
  title: string;
  last_price?: number;
  price: number;
  creator?: string;
  avatar?: string;
  current_price?: number;
  ending_in?: string;
  image: string;
}
