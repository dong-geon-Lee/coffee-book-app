export interface imageProps {
  open?: boolean;
  loginImg?: "string";
  src?: "string";
}

export interface openProps {
  open?: boolean;
}

export interface openBookProps {
  handleBookPage: () => void;
  openBook: boolean;
}

export interface svgProps {
  fill?: string;
  stroke?: string;
}

export interface paymentProps {
  orderUser: string;
  userId: string;
}

export interface bankProps {
  map?: any;
  id?: number;
  bankName?: string;
  accNumber?: string;
  money?: number;
}

export interface bankNameProps {
  bankName: string;
  bankOption: string;
}

export interface authProps {
  name: string;
  userId: string;
  password: string | number;
  createdDate: Object | object;
  address: string;
  bankInfo?: {
    id: number;
    bankName: string;
    accNumber: string;
    money?: number;
  }[];
}

export interface userProps {
  target: { name: string; value: string };
}

export interface inputProps {
  userId: string;
  password: string;
}

export interface onChangeProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  target: any;
}
