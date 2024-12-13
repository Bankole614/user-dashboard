import { IconType } from "react-icons";
import { LiaCreditCardSolid } from "react-icons/lia";
import { SlPaypal } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { FaSpotify } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";


export interface Card {
  id: number;
  balance: string;
  cardholder: string;
  validity: string;
  number: string;
}







export const cards: Card[] = [
  {
    id: 1,
    balance: '$5,756',
    cardholder: 'Kate Winslet',
    validity: '06/26',
    number: '3778 **** **** 1234'
  },
  {
    id: 2,
    balance: '$2,500',
    cardholder: 'Kate Winslet',
    validity: '12/25',
    number: '3778 **** **** 1234'
  },
  {
    id: 3,
    balance: '$800',
    cardholder: 'Kate Winslet',
    validity: '08/25',
    number: '3778 **** **** 1234'
  },
  {
    id: 4,
    balance: '$3,456',
    cardholder: 'Kate Winslet',
    validity: '04/26',
    number: '3778 **** **** 1234'
  },
]

export interface Transactions {
  id: number;
  icon: IconType;
  title: string;
  date: string;
  type: string;
  status: string;
  amount: string;
  cardNo: string;
  transactionId: string;
}

export const transaction: Transactions[] = [
  {
    id: 1,
    icon: LiaCreditCardSolid,
    title: 'Withdrawal from card',
    date: '28 January 2024',
    type: 'Service',
    status: 'Completed',
    cardNo: '1234 **** **** 5678',
    amount: '-$850',
    transactionId: "#12548796",
  },
  {
    id: 2,
    icon: SlPaypal,
    title: 'Deposit Paypal',
    type: 'Transfer',
    status: 'Pending',
    date: '28 January 2024',
    cardNo: '1234 **** **** 5678',
    amount: '+$2500',
    transactionId: "#12548796",
  },
  {
    id: 3,
    icon: HiOutlineCurrencyDollar,
    title: 'Jemi Wilson',
    type: 'Transfer',
    status: 'Completed',
    date: '28 January 2024',
    cardNo: '1234 **** **** 5678',
    amount: '-$5,400',
    transactionId: "#12548796",
  },
  {
    id: 4,
    icon: FaSpotify,
    title: 'Spotify Subscription',
    type: 'Service',
    status: 'Pending',
    date: '28 January 2024',
    cardNo: '1234 **** **** 5678',
    amount: '-$100',
    transactionId: "#12548796",
  },
  {
    id: 5,
    icon: VscTools,
    title: 'Mobile Service',
    type: 'Service',
    status: 'Completed',
    date: '28 January 2024',
    cardNo: '1234 **** **** 5678',
    amount: '-$300',
    transactionId: "#12548796",
  },
  {
    id: 6,
    icon: AiOutlineUser,
    title: 'Emily Watson',
    type: 'Transfer',
    status: 'Completed',
    date: '28 January 2024',
    cardNo: '1234 **** **** 5678',
    amount: '+$780',
    transactionId: "#12548796",
  },
];



export interface Staffs {
    id: number;
    name: string;
    post: string;
    img: string;
}



export const staff: Staffs[] = [
  {
    id: 1,
    name: 'Livia Bator',
    post: 'CEO',
    img: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 2,
    name: 'Randy Press',
    post: 'Director',
    img: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 3,
    name: 'Tony Cole',
    post: 'Designer',
    img: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 4,
    name: 'Olivia Baker',
    post: 'Accountant',
    img: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    id: 5,
    name: 'Livia Bator',
    post: 'CEO',
    img: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 6,
    name: 'Randy Press',
    post: 'Director',
    img: 'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    id: 7,
    name: 'Tony Cole',
    post: 'Designer',
    img: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    id: 8,
    name: 'Olivia Baker',
    post: 'Accountant',
    img: 'https://randomuser.me/api/portraits/women/5.jpg'
  },
]