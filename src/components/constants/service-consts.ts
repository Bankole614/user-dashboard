import { IconType } from "react-icons";
import { FaStarOfLife } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";


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