// import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from '../Header'


const Layout = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className='flex h-screen'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className='flex-1  lg:ml-52'>
          <div className='fixed w-full lg:w-[calc(100%-13rem)] top-0 z-10 h-16'>
            <Header toggleSidebar={toggleSidebar} />
          </div>
          <div>
            <div className='pt-[90px] py-6 px-3 sm:px-5 bg-gray-50 h-full   min-h-screen'>{<Outlet />}</div>
          </div>
        </div>
    </div>
  )
}

export default Layout