import { IconType } from "react-icons";
import { FaSackDollar, FaRepeat, FaApple, FaGoogle } from "react-icons/fa6";
import { MdShowChart } from "react-icons/md";
import { SiTesla } from "react-icons/si";


export interface Investments {
  id: number;
  icon: IconType;
  title: string;
  amount: string;
}


export const investment: Investments[] = [
  {
    id: 1,
    icon: FaSackDollar,
    title: 'Total Invested Amount',
    amount: '$12,750'
  },
  {
    id: 2,
    icon: MdShowChart,
    title: 'Number of Investments',
    amount: '1,250'
  },
  {
    id: 3,
    icon: FaRepeat,
    title: 'Rate of return',
    amount: '+5.80%'
  },
]



export interface MyInvestments {
  id: number;
  icon: IconType;
  title: string;
  name: String;
  amount: string;
  value: string;
}


export const myInvestment: MyInvestments[] = [
  {
    id: 1,
    name: 'Apple Store',
    icon: FaApple,
    title: 'E-commerce, Marketplace',
    amount: '$54,000',
    value: '+24%',
  },
  {
    id: 2,
    name: 'Samsung Mobile',
    icon: FaGoogle,
    title: 'E-commerce, Marketplace',
    amount: '$25,300',
    value: '-4%',
  },
  {
    id: 3,
    name: 'Tesla Motors',
    icon: SiTesla,
    title: 'Electric Vehicles',
    amount: '$8,200',
    value: '+16%',
  },
]

export interface Stocks {
    id: number;
    number: string;
    name: string;
    price: string;
    return: string;
}


export const stock: Stocks[] = [
  {
    id: 1,
    number: '01',
    name: 'Trivago',
    price: '$520',
    return: '+5%'
  },
  {
    id: 2,
    number: '02',
    name: 'Canon',
    price: '$480',
    return: '+10%'
  },
  {
    id: 3,
    number: '03',
    name: 'Uber Eats',
    price: '$350',
    return: '-3%'
  },
  {
    id: 4,
    number: '04',
    name: 'Nokia',
    price: '$940',
    return: '+2%'
  },
  {
    id: 5,
    number: '05',
    name: 'Tiktok',
    price: '$670',
    return: '-12%'
  },
]