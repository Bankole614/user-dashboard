import { AiFillHome } from "react-icons/ai";
import { MdCurrencyExchange, MdSettings } from "react-icons/md";
import { FaUser, FaHandHoldingDollar, FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { BsCreditCard2BackFill } from "react-icons/bs";


export const DashboardLinks = [
	{
		key: 'dashboard',
    icon: AiFillHome,
		label: 'Dashboard',
		path: '/',
	},
	{
		key: 'transactions',
    icon: MdCurrencyExchange,
		label: 'Transactions',
		path: '/transactions',
	},
	{
		key: 'accounts',
    icon: FaUser,
		label: 'Accounts',
		path: '/accounts',
	},
  {
		key: 'investments',
    icon: FaMoneyBillTrendUp,
		label: 'Investments',
		path: '/investments',
	},
	{
		key: 'credit-cards',
    icon: BsCreditCard2BackFill,
		label: 'Credit Cards',
		path: '/credit-cards',
	},
	{
		key: 'loans',
    icon: FaHandHoldingDollar,
		label: 'Loans',
		path: '/loans',
	},
  {
		key: 'services',
    icon: FaTools,
		label: 'Services',
		path: '/services',
	},
	{
		key: 'settings',
    icon: MdSettings,
		label: 'Settings',
		path: '/settings',
	},
	
]