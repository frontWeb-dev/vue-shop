export interface bannerProps {
  image: string;
  name: string;
  title: string;
  text: string;
  type: string;
}

export interface itemsProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface toggleMenuProps {
  toggleMenu: () => void;
}

export interface piniaProps {
  text?: itemsProps[] | undefined;
}
