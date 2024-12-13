import { IconType } from "react-icons";
import { FaUser, FaBriefcase, FaTools } from "react-icons/fa";
import { TbChartArrowsVertical } from "react-icons/tb";



export interface Loans {
  id: number;
  icon: IconType;
  title: string;
  amount: string;
}


export const loan: Loans[] = [
  {
    id: 1,
    icon: FaUser,
    title: 'Personal Loans',
    amount: '$50,000'
  },
  {
    id: 2,
    icon: FaBriefcase,
    title: 'Corporate Loans',
    amount: '$100,000'
  },
  {
    id: 3,
    icon: TbChartArrowsVertical,
    title: 'Business Loans',
    amount: '$500,000'
  },
  {
    id: 4,
    icon: FaTools,
    title: 'Custom Loans',
    amount: '$5,000'
  },
]


export interface ActiveLoans {
  id: number;
  number: string;
  loan: string;
  repay: string;
  interest: string;
  duration: string;
  installment: string;
}


export const activeLoan: ActiveLoans[] = [
{
  id: 1,
  number: '01',
  loan: '$100,000',
  repay: '$40,500',
  interest: '5%',
  duration: '8 months',
  installment: '$2000',
},
{
  id: 2,
  number: '02',
  loan: '$500,000',
  repay: '$250,00',
  interest: '10%',
  duration: '10 months',
  installment: '$3000',
},
{
  id: 3,
  number: '03',
  loan: '$900,000',
  repay: '$40,500',
  interest: '3%',
  duration: '8 months',
  installment: '$5000',
},
{
  id: 4,
  number: '04',
  loan: '$50,000',
  repay: '$40,500',
  interest: '2%',
  duration: '18 months',
  installment: '$200',
},
{
  id: 5,
  number: '05',
  loan: '$50,000',
  repay: '$40,500',
  interest: '12%',
  duration: '36 months',
  installment: '$500',
},
{
  id: 6,
  number: '06',
  loan: '$100,000',
  repay: '$40,500',
  interest: '4%',
  duration: '12 months',
  installment: '$1000',
},
{
  id: 7,
  number: '07',
  loan: '$100,000',
  repay: '$40,500',
  interest: '12%',
  duration: '8 months',
  installment: '$2000',
},
]