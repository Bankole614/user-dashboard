import { cardlist } from "./constants/creditcard-consts"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { CardLists } from "./constants/creditcard-consts";
import AnimatedCheckmark from "./AnimatedCheckmark";

const CardDetails = () => {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [form, setForm] = useState<CardLists | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isChangesConfirmationOpen, setIsChangesConfirmationOpen] = useState(false)

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
                  <label className="block font-medium text-gray-700">Phone Number</label>
                  <input
                    name="type"
                    value={form?.type}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:ring-2 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">Card Number</label>
                  <input
                    name="cardNo"
                    value={form?.cardNo}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:ring-2 sm:text-sm"
                  />
                </div>

                

                <div className="">
                  <label className="block font-medium text-gray-700">Bank Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form?.name as string}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:ring-2  sm:text-sm"
                  />
                </div>

                <div className="">
                  <label className="block font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form?.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:ring-2  sm:text-sm"
                  />
                </div>

                <div className="">
                  <label className="block font-medium text-gray-700">Expiration Date</label>
                  <input
                    type="text"
                    name="expiration"
                    value={form?.expiration}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:ring-2  sm:text-sm"
                  />
                </div>


                <div className="">
                  <label className="block font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={form?.cvv}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:ring-2  sm:text-sm"
                  />
                </div>

                <div className="">
                  <label className="block font-medium text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={form?.zipCode}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:ring-2  sm:text-sm"
                  />
                </div>
              </div>

              <div className=" flex justify-end">
              <button
                onClick={() => setIsChangesConfirmationOpen(true)}
                  type='submit'
                  className={`px-4 py-2 rounded-lg shadow-md mt-5 text-white ${
                    isFormValid ? 'bg-blue-600 hover:bg-opacity-80 transition-all duration-300 active:bg-opacity-60' : 'bg-gray-300 cursor-not-allowed'
                  }`}
                  disabled={!isFormValid}
                >
                  Save changes
                </button>
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
    </div>
    </div>
  )
}

export default CardDetails