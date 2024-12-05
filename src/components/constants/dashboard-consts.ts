import React from "react";
import { LiaCreditCardSolid } from "react-icons/lia";
import { SlPaypal } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";


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
  icon: React.ReactElement;
  title: string;
  date: string;
  amount: string;
}

export const transaction: Transactions[] = [
  {
    id: 1,
    icon: React.createElement(LiaCreditCardSolid),
    title: 'Deposit from card',
    date: '28 January 2024',
    amount: '-$850'
  },
  {
    id: 2,
    icon: React.createElement(SlPaypal),
    title: 'Deposit Paypal',
    date: '28 January 2024',
    amount: '+$2500'
  },
  {
    id: 3,
    icon: React.createElement(HiOutlineCurrencyDollar),
    title: 'Jemi Wilson',
    date: '28 January 2024',
    amount: '-$5,400'
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