import { IconType } from "react-icons";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa6";
import { LiaCreditCardSolid } from "react-icons/lia";
import { MdOutlineLock } from "react-icons/md";
import { TfiApple } from "react-icons/tfi";



export interface CardLists {
  id: number;
  icon: IconType;
  type: string;
  name: String;
  cardNo: string;
  cardName: string;
  expiration: string;
  address: string;
  cvv: string;
  zipCode: string;
}


export const cardlist: CardLists[] = [
  {
    id: 1,
    name: 'DBL Bank',
    icon: BsCreditCard2BackFill,
    type: 'Secondary',
    cardNo: '1234 **** **** 5678',
    cardName: 'Kate Winslet',
    expiration: '12/26',
    address: 'California, USA',
    cvv: "225",
    zipCode: '74849'
  },
  {
    id: 2,
    name: 'BRC Bank',
    icon: BsCreditCard2BackFill,
    type: 'Secondary',
    cardNo: '1234 **** **** 5678',
    cardName: 'Kate Winslet',
    expiration: '08/26',
    address: 'Maine, USA',
    cvv: '324',
    zipCode: '94049'
  },
  {
    id: 3,
    name: 'ABM Bank',
    icon: BsCreditCard2BackFill,
    type: 'Primary',
    cardNo: '1234 **** **** 5678',
    cardName: 'Kate Winslet',
    expiration: '06/25',
    address: 'Ontario, Canada',
    cvv: '788',
    zipCode: '74368'
  },
  {
    id: 4,
    name: 'MCP Bank',
    icon: BsCreditCard2BackFill,
    type: 'Primary',
    cardNo: '1234 **** **** 5678',
    cardName: 'Kate Winslet',
    expiration: '01/27',
    address: 'Lagos, Nigeria',
    cvv: '109',
    zipCode: '12345'
  },
]


export interface Settings {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const setting: Settings[] = [
  {
    id: 1,
    icon: LiaCreditCardSolid,
    title: 'Block Card',
    description: 'Instantly block your card',
  },
  {
    id: 2,
    icon: MdOutlineLock,
    title: 'Change Code',
    description: 'Choose another code',
  },
  {
    id: 3,
    icon: FaGoogle,
    title: 'Add to Google pay',
    description: 'Withdraw without card',
  },
  {
    id: 4,
    icon: TfiApple,
    title: 'Add to Apple Pay',
    description: 'Withdraw without card',
  },
]