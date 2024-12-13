import { Card } from "./constants/dashboard-consts";
import CardData from "./CardData";
import { CardExpenseChart } from "./DashboardCharts";
import { useState } from "react";
import { MdChecklist } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { CardListGrid, CardListList } from "./CardListData";
import AnimatedCheckmark from "./AnimatedCheckmark";
import { setting } from "./constants/creditcard-consts";

interface CardProps {
  cards: Card[];
}

interface Errors {
  name?: string;
  type?: string;
  number?: string;
  date?: string;
}

const CreditCards: React.FC<CardProps> = ({ cards }) => {

  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [isAddConfirmationModalOpen, setIsAddConfirmationModalOpen] = useState(false);
  const [newCard, setNewCard] = useState({ id: 0, name: '', type: '', number: '', date: ''});
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!newCard.name) newErrors.name = 'card name is required';
    if (!newCard.type) newErrors.type = 'Card type is required';
    if (!newCard.number) newErrors.number = 'Card number is required';
    if (!newCard.date) newErrors.date = 'Expiration date is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  
  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsAddConfirmationModalOpen(true);
    }
  };

  const confirmAddUser = () => {
    setIsAddConfirmationModalOpen(false);
    setNewCard({ id: 0, name: '', type: '', number: '', date: ''});
  };

  const colorClass = (id: number): string => {
    switch (id) {
      case 1:
        return "text-yellow-400 bg-yellow-100";
      case 2:
        return "text-blue-400 bg-blue-100";
        case 3:
        return "text-pink-400 bg-pink-100";
      default:
        return "text-green-400 bg-green-100";
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h2 className="mb-2 text-neutral-600 font-semibold">My Cards</h2>
        <div className="flex justify-between bg- overflow-x-auto no-scrollbar gap-4">
          {cards.map((card) => (
            <CardData key={card.id} card={card} />
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 items-center gap-4 grid-cols-1">
        <div>
          <CardExpenseChart />
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4">
              <h2 className="mb-2 text-neutral-600 text-lg font-semibold">Card List</h2>
              <div className="flex gap-3 mb-3">
                <button onClick={() => setViewMode('list')} className={`flex gap-1.5 items-center  px-2 py-1 transition-all duration-500 rounded-md text-sm font-medium ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-neutral-100 border border-gray-300'}`}>
                  <MdChecklist />
                  List
                </button>
                <button onClick={() => setViewMode('grid')} className={`flex gap-1.5 items-center transition-all duration-500 px-2 py-1 rounded-md font-medium text-sm ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-neutral-100 border border-gray-300'}`}>
                  <CiGrid41 />
                  Grid
                </button>
              </div>
            </div>
            
          </div>

          {viewMode === 'list' ? (
          <CardListList />
        ) : (
          <CardListGrid />
        )}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-4 grid-cols-1">
        <div className="lg:col-span-2">
          <div className="flex flex-col">
            <h2 className="mb-2 text-neutral-600 text-lg font-semibold">Add New Card</h2>
            <div className="flex flex-col justify-center bg-white min-h-64 rounded-2xl p-4">

              <form action="" className="grid sm:grid-cols-2 grid-cols-1 gap-4" onSubmit={handleAddUser}>
                <div className="flex flex-col gap-1">
                  <label>Card Type</label>
                  <input  onChange={handleInputChange} name="type" value={newCard.type} type="text" placeholder="Primary" className="text-slate-400 placeholder-slate-400 border outline-slate-400 rounded-lg text-sm p-2" />
                  {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <label>Card Name</label>
                  <input  onChange={handleInputChange} name="name" value={newCard.name} type="text" placeholder="Kate Winslet" className="text-slate-400 placeholder-slate-400 border outline-slate-400 rounded-lg text-sm p-2" />
                  {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <label>Card Number</label>
                  <input  onChange={handleInputChange} name="number" value={newCard.number} type="password" placeholder="**** **** **** ****" className="text-slate-400 placeholder-slate-400 border outline-slate-400 rounded-lg text-sm p-2" />
                  {errors.number && <p style={{ color: 'red' }}>{errors.number}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <label>Expiration Date</label>
                  <input  onChange={handleInputChange} name="date" value={newCard.date} type="text" placeholder="25 January 2026" className="text-slate-400 placeholder-slate-400 border outline-slate-400 rounded-lg text-sm p-2" />
                  {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}
                </div>
                <div>
                  <button className="w-fit bg-blue-600 px-4 py-1.5 text-white rounded-md">Add Card</button>
                </div>
              </form>

              {isAddConfirmationModalOpen && (
                <div className="fixed inset-0 flex justify-center z-50 items-center bg-gray-900/50 backdrop-blur-sm">
                  <div className="bg-white p-6 rounded flex flex-col items-center justify-center">
                  <AnimatedCheckmark  />
                    <p className='mb-4 text-center w-[200px] max-w-full'>You have succesfully Added <span className='font-bold '>{newCard.name}</span></p>
                    <button onClick={confirmAddUser} className="w-full text-white px-2 py-1  bg-blue-600 rounded hover:bg-opacity-80 transition-all duration-300 active:bg-opacity-60">
                      Ok
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="mb-2 text-neutral-600 text-lg font-semibold">Card Settings</h2>
            <div className="bg-white min-h-64 rounded-2xl p-4 flex flex-col gap-4 justify-center">
              {
                setting.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <div className="flex xl:gap-6 gap-4">
                      <div className={`p-3 flex-shrink-0 rounded-2xl ${colorClass(setting.id)} `}>{<setting.icon size={20} />}</div>
                      <div className="flex flex-col">
                        <p className="">{setting.title}</p>
                        <p className="text-slate-400 text-sm">{setting.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
      </div>
    </div>
    
  );
};



export default CreditCards;
