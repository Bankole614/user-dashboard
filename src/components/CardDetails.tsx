import { cardlist } from "./constants/creditcard-consts"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { CardLists } from "./constants/creditcard-consts";
import AnimatedCheckmark from "./AnimatedCheckmark";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoAlertFill } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";

const CardDetails = () => {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [form, setForm] = useState<CardLists | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isChangesConfirmationOpen, setIsChangesConfirmationOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false)

  useEffect(() => {
    const isValid =
      form?.cardName.trim() !== '' &&
      form?.name.trim() !== '' &&
      form?.cardNo.trim() !== '' &&
      form?.expiration.trim() !== '' &&
      form?.address.trim() !== '' &&
      form?.cvv.trim() !== '' &&
      form?.zipCode.trim() !== '';

    setIsFormValid(isValid);
  }, [form]);

  useEffect(() => {
    const profile = cardlist.find(profile => profile.id === parseInt(id!));
    if (profile) {
      setForm(profile);
    }
  }, [id, cardlist]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (form) {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleDelete = () => {
    setIsDeleteConfirmationOpen(true)
    setIsDeleteModalOpen(false);
  };

  const handleConfirmation = () => {
    setIsDeleteModalOpen(false);
    navigate('/credit-cards'); 
  }

  const closeModal = () => {
    setIsDeleteModalOpen(false);
  };

  
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };



  const closeChangesModal = () => {
    setIsChangesConfirmationOpen(false)
    navigate('/credit-cards');
  };
  
  return (
    <div>
      <div className="flex justify-center items-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full ">
          {form && (
            
          
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">Card Name</label>
                  <input
                     name="cardName"
                     type="text"
                     value={form?.cardName}
                     onChange={handleInputChange}
                    placeholder="Staff ID"
                    className="mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm sm:text-sm"
                    
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">Bank Type</label>
                  <input
                    name="type"
                    value={form?.type}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-slate-400 focus:ring-2 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">Card Number</label>
                  <input
                    name="cardNo"
                    value={form?.cardNo}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-400 focus:ring-2 sm:text-sm"
                  />
                </div>

                

                <div className="">
                  <label className="block font-medium text-gray-700">Bank Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form?.name as string}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-400 focus:ring-2  sm:text-sm"
                  />
                </div>

                <div className="">
                  <label className="block font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form?.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-400 focus:ring-2  sm:text-sm"
                  />
                </div>

                <div className="">
                  <label className="block font-medium text-gray-700">Expiration Date</label>
                  <input
                    type="text"
                    name="expiration"
                    value={form?.expiration}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-400 focus:ring-2  sm:text-sm"
                  />
                </div>


                <div className="">
                  <label className="block font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={form?.cvv}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-400 focus:ring-2  sm:text-sm"
                  />
                </div>

                <div className="">
                  <label className="block font-medium text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={form?.zipCode}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-400 focus:ring-2  sm:text-sm"
                  />
                </div>
              </div>

              <div className=" flex gap-4 justify-end mt-5">
              <button
                onClick={() => setIsChangesConfirmationOpen(true)}
                  type='submit'
                  className={`px-4 py-2 rounded-lg text-white ${
                    isFormValid ? 'bg-blue-600 hover:bg-opacity-80 transition-all duration-300 active:bg-opacity-60' : 'bg-gray-300 cursor-not-allowed'
                  }`}
                  disabled={!isFormValid}
                >
                  Save changes
                </button>
                <button onClick={() => setIsDeleteModalOpen(true)} type="button" className="border px-4 py-2 rounded-lg hover:text-white hover:bg-red-600 transition-all duration-300 active:bg-opacity-60">Delete</button>
              </div>

              
                

                
                
              

              {isChangesConfirmationOpen && (
                  <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900/50 backdrop-blur-sm">
                    <div className="bg-white p-6 rounded flex flex-col items-center justify-center">
                    <AnimatedCheckmark  />
                      <p className='mb-4 text-center w-[250px] max-w-full'>Changes Saved</p>
                      <button  onClick={closeChangesModal} className="w-full text-white px-2 py-1  bg-blue-600 rounded hover:bg-opacity-80 transition-all duration-300 active:bg-opacity-60">
                        Ok
                      </button>
                    </div>
                  </div>
                )}
            </form>
            )}
          </div>
        </div>
      </div>
      <div>
      
      </div>

      {isDeleteModalOpen && (
        <div onClick={closeModal} className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900/50 backdrop-blur-sm">
          <div onClick={stopPropagation} className="bg-white p-6 rounded flex flex-col items-center justify-center">
            <GoAlertFill size={60} className='animate-scale-up-down text-red-500 mb-4' />
            <p className='w-[200px] max-w-full text-center'>Are you sure you want to delete this profile?</p>
            <div className="mt-4 flex gap-4">
              <button onClick={handleDelete} className=" px-4 py-2 text-left flex items-center gap-2 border  rounded hover:text-white hover:bg-red-500 hover:border-none transition-all duration-300 active:bg-opacity-60">
                <RiDeleteBinLine  />
                Yes! Delete
              </button>
              <button onClick={closeModal} className="text-white px-4 py-2 text-left flex items-center gap-2 bg-blue-600 rounded hover:bg-opacity-80 transition-all duration-300 active:bg-opacity-60">
                <BsArrowLeft  />
                No! Go Back
              </button>
            </div>
          </div>
        </div>
      )}


      {isDeleteConfirmationOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded flex flex-col items-center justify-center">
            <AnimatedCheckmark  />
            <p className='mb-4 text-center w-[220px] max-w-full'>You have succesfully deleted <span className='font-bold '>{form?.name}</span></p>
            <button onClick={handleConfirmation} className="w-full text-white px-2 py-1  bg-black rounded hover:bg-opacity-80 transition-all duration-300 active:bg-opacity-60">
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default CardDetails