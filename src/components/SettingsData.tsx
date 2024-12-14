import { FaPencilAlt } from "react-icons/fa"
import React, { ChangeEvent, useState } from "react"
import AnimatedCheckmark from "./AnimatedCheckmark"
import { Switch } from "@mui/material"



export const EditProfile = () => {

  const [isChangesConfirmationOpen, setIsChangesConfirmationOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full md:w-1/4 flex flex-col items-center mb-6 sm:mb-0">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            className="rounded-full w-36  h-36 object-cover"
          />
          <span className="absolute bottom-2 right-1 bg-blue-600 p-2 rounded-full">
            <FaPencilAlt className="text-white"  size={16}/>
          </span>
        </div>
      </div>
      
      <div className="w-full sm:ml-6">
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 w-full">
            <div className="w-full">
              <label className="block font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Kate Winslet"
                className="mt-1 block w-full px-3 py-2 border rounded-lg  focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
                
              />
            </div>

            <div className="w-full">
              <label className="block font-medium text-gray-700">User Name</label>
              <input
                type="text"
                placeholder="Kate Winslet"
                className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
              />
            </div>

            <div className="w-full">
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Katewinslet@gmail.com"
                className="mt-1 block w-full px-3 py-2 border rounded-lg  focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
                
              />
            </div>

            <div className="w-full">
              <label className="block font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="*********"
                className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
              />
            </div>

            <div className="w-full">
              <label className="block font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                placeholder="Kate Winslet"
                className="mt-1 block w-full px-3 py-2 border rounded-lg  focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
                
              />
            </div>

            <div className="w-full">
              <label className="block font-medium text-gray-700">Present Address</label>
              <input
                type="text"
                placeholder="San Jose, California, USA"
                className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
              />
            </div>

            <div className="w-full">
              <label className="block font-medium text-gray-700">Permanent Address</label>
              <input
                type="text"
                placeholder="San Jose, California, USA"
                className="mt-1 block w-full px-3 py-2 border rounded-lg  focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
                
              />
            </div>

            <div className="w-full">
              <label className="block font-medium text-gray-700">City</label>
              <input
                type="text"
                placeholder="San Jose"
                className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
              />
            </div>

            <div className="w-full">
              <label className="block font-medium text-gray-700">Postal Code</label>
              <input
                type="text"
                placeholder="45962"
                className="mt-1 block w-full px-3 py-2 border rounded-lg  focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
                
              />
            </div>

            <div className="w-full">
              <label className="block font-medium text-gray-700">Country</label>
              <input
                type="text"
                placeholder="USA"
                className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
              />
            </div>

            <div className="sm:col-span-2 flex justify-end">
              <button
                onClick={() => setIsChangesConfirmationOpen(true)}
                  type='submit'
                  className='px-10 py-1 rounded-lg bg-blue-600 mt-5 text-white'
                >
                  Save
                </button>
              </div>

              {isChangesConfirmationOpen && (
                  <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900/50 backdrop-blur-sm">
                    <div className="bg-white p-6 rounded flex flex-col items-center justify-center">
                    <AnimatedCheckmark  />
                      <p className='mb-4 text-center w-[250px] max-w-full'>Changes Saved</p>
                      <button  onClick={() => setIsChangesConfirmationOpen(false)}className="w-full text-white px-2 py-1  bg-blue-600 rounded hover:bg-opacity-80 transition-all duration-300 active:bg-opacity-60">
                        Ok
                      </button>
                    </div>
                  </div>
                )}
          </div>
        
        </form>
      </div>
    </div>
  )
}


export const Preference = () => {

  const [firstChecked, setFirstChecked] = useState(false)
  const [secondChecked, setSecondChecked] = useState(true)
  const [thirdChecked, setThirdChecked] = useState(false)
  const [isChangesConfirmationOpen, setIsChangesConfirmationOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  


  return (
    <div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 w-full mb-4">
          <div className="w-full">
            <label className="block font-medium text-gray-700">Currency</label>
            <input
              type="text"
              placeholder="USD"
              className="mt-1 block w-full px-3 py-2 border rounded-lg  focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
              
            />
          </div>

          <div className="w-full">
            <label className="block font-medium text-gray-700">Time Zone</label>
            <input
              type="text"
              placeholder="(GMT-12:00) International Date Line West"
              className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
            />
          </div>
        </div>
        <div>
          <p className="text-lg font-medium">Notification</p>
          <div className="flex gap-2 items-center">
            <Switch checked={firstChecked} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstChecked(e.target.checked)} inputProps={{ 'aria-label': 'basic switch' }} color="primary" />
            <p>I send or recieve digital currency</p>
          </div>
          <div className="flex gap-2 items-center">
            <Switch checked={secondChecked} onChange={(e: ChangeEvent<HTMLInputElement>) => setSecondChecked(e.target.checked)} inputProps={{ 'aria-label': 'basic switch' }} color="primary" />
            <p>I recieve merchant order</p>
          </div>
          <div className="flex gap-2 items-center">
            <Switch checked={thirdChecked} onChange={(e: ChangeEvent<HTMLInputElement>) => setThirdChecked(e.target.checked)} inputProps={{ 'aria-label': 'basic switch' }} color="primary" />
            <p>There are reccomendations for my account</p>
          </div>
        </div>
        <div className="flex justify-end sm:col-span-2">
          <button
          onClick={() => setIsChangesConfirmationOpen(true)}
            type='submit'
            className='px-10 py-1 rounded-lg bg-blue-600 mt-5 text-white'
          >
            Save
          </button>
        </div>
      </form>
      {isChangesConfirmationOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded flex flex-col items-center justify-center">
          <AnimatedCheckmark  />
            <p className='mb-4 text-center w-[250px] max-w-full'>Changes Saved</p>
            <button  onClick={() => setIsChangesConfirmationOpen(false)}className="w-full text-white px-2 py-1  bg-blue-600 rounded hover:bg-opacity-80 transition-all duration-300 active:bg-opacity-60">
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export const Security = () => {

  const [checked, setChecked] = useState(true)
  const [isChangesConfirmationOpen, setIsChangesConfirmationOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="w-full" onSubmit={handleSubmit}>
        <h3 className="mb-4 text-lg font-medium">Two Factor Authentication</h3>
        <div className="flex gap-2 items-center mb-4">
          <Switch checked={checked} onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)} inputProps={{ 'aria-label': 'basic switch' }} color="primary" />
          <p>Enable or disable two factor authentication</p>
        </div>
        <p className="mb-2 text-lg font-medium">Change Password</p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 w-full">
          <div className="w-full">
            <label className="block font-medium text-gray-700">Current Password</label>
            <input
              type="password"
              placeholder="*********"
              className="mt-1 block w-full px-6 py-2 border rounded-lg focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
            />
          </div>
          <div className="w-full">
            <label className="block font-medium text-gray-700">New Password</label>
            <input
              type="password"
              placeholder="*********"
              className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-slate-400 focus:ring-2 text-sm"
            />
          </div>
          <div className="flex justify-end sm:col-span-2">
          <button
          onClick={() => setIsChangesConfirmationOpen(true)}
            type='submit'
            className='px-10 py-1 rounded-lg bg-blue-600 mt-5 text-white'
          >
            Save
          </button>
        </div>
        </div>
      </form>
      {isChangesConfirmationOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded flex flex-col items-center justify-center">
          <AnimatedCheckmark  />
            <p className='mb-4 text-center w-[250px] max-w-full'>Changes Saved</p>
            <button  onClick={() => setIsChangesConfirmationOpen(false)}className="w-full text-white px-2 py-1  bg-blue-600 rounded hover:bg-opacity-80 transition-all duration-300 active:bg-opacity-60">
              Ok
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
};

