import { FaSackDollar, FaHandHoldingDollar, FaMoneyBillTransfer, FaPiggyBank, FaPlaystation } from "react-icons/fa6"
import { IconType } from "react-icons";
import { TfiApple } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";


export interface Accounts {
  id: number;
  icon: IconType;
  title: string;
  amount: string;
}


export const account: Accounts[] = [
  {
    id: 1,
    icon: FaSackDollar,
    title: 'Balance',
    amount: '$12,750'
  },
  {
    id: 2,
    icon: FaHandHoldingDollar,
    title: 'Income',
    amount: '$5,600'
  },
  {
    id: 3,
    icon: FaMoneyBillTransfer,
    title: 'Expenses',
    amount: '$3,460'
  },
  {
    id: 4,
    icon: FaPiggyBank,
    title: 'Savings',
    amount: '$7,920'
  },
]



export interface Invoices {
  id: number;
  icon: IconType;
  title: string;
  time: string;
  amount: string;
}

export const invoice: Invoices[] = [
  {
    id: 1,
    icon: TfiApple,
    title: 'Apple Store',
    time: '5h ago',
    amount: '$450'
  },
  {
    id: 2,
    icon: AiOutlineUser,
    title: 'Michael',
    time: '2 days ago',
    amount: '$160'
  },
  {
    id: 3,
    icon: FaPlaystation,
    title: 'Playstation',
    time: '5 days ago',
    amount: '$1085'
  },
  {
    id: 4,
    icon: AiOutlineUser,
    title: 'William',
    time: '10 days ago',
    amount: '$90'
  },
]