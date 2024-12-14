import { IconType } from "react-icons";
import { FaBriefcase, FaHandHoldingDollar, FaPiggyBank, FaStarOfLife } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { LiaCreditCardSolid } from "react-icons/lia";


export interface Services {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}


export const service: Services[] = [
  {
    id: 1,
    icon: FaStarOfLife,
    title: 'Life Insurance',
    description: 'Unlimited Protection'
  },
  {
    id: 2,
    icon: GiShoppingBag,
    title: 'Shopping',
    description: 'Buy. Think. Grow'
  },
  {
    id: 3,
    icon: AiFillSafetyCertificate,
    title: 'Safety',
    description: 'We are your allies'
  },
]

export interface ServiceList {
  id: number;
  icon: IconType;
  title: string;
}


export const serviceList: ServiceList[] = [
  {
    id: 1,
    icon: FaHandHoldingDollar,
    title: 'Business Loans',
  },
  {
    id: 2,
    icon: FaBriefcase,
    title: 'Checking Accounts',
  },
  {
    id: 3,
    icon: FaPiggyBank,
    title: 'Savings Account',
  },
  {
    id: 4,
    icon: LiaCreditCardSolid,
    title: 'Credit Cards',
  },
  {
    id: 5,
    icon: LiaCreditCardSolid,
    title: 'Debit Cards',
  },
  {
    id: 6,
    icon: FaStarOfLife,
    title: 'life Insurance',
  },
]