// import React from 'react'
import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { FaChevronRight } from 'react-icons/fa6';
import Sidebar from './Sidebar'
import Header from '../Header'


const Layout = () => {

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);


  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    // <div className='flex h-screen'>
    //   <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    //     <div className='flex-1 lg:ml-52 '>
    //       <div className='fixed w-full lg:w-[calc(100%-13rem)] top-0 z-10 h-16'>
    //         <Header toggleSidebar={toggleSidebar} />
            
            
    //       </div>
    //       <div className='bg-gray-100 pt-2 min-h-screen px-3 sm:px-5'>
    //           <Breadcrumbs aria-label="breadcrumb" separator={<FaChevronRight fontSize='small' />}>
    //             <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontSize: '15px' }}>
    //               Home
    //             </Link>
    //             {pathnames.map((value, index) => {
    //               const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    //               const isLast = index === pathnames.length - 1;

    //               return isLast ? (
    //                 <Typography key={to} color="text.primary" fontSize='15px'>
    //                   {value.charAt(0).toUpperCase() + value.slice(1)}
    //                 </Typography>
    //               ) : (
    //                 <Link
    //                   key={to}
    //                   to={to}
    //                   style={{ textDecoration: 'none', color: 'inherit',  }}
    //                 >
    //                   {value.charAt(0).toUpperCase() + value.slice(1)}
    //                 </Link>
    //               );
    //             })}
    //           </Breadcrumbs>
    //           <div className='pt-4'>{<Outlet />}</div>
    //         </div>
    //     </div>
    // </div>

    <div className='flex h-screen'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className='lg:ml-52 w-full lg:w-[calc(100%-13rem)] '>
        <div className='fixed w-full lg:w-[calc(100%-13rem)] top-0 z-10'>
          <Header toggleSidebar={toggleSidebar} />
        </div>
        <div className='bg-gray-100 min-h-screen px-5 pt-20'>
          <div>
          <Breadcrumbs aria-label="breadcrumb" separator={<FaChevronRight fontSize='small' />}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontSize: '15px' }}>
                  Home
                </Link>
                {pathnames.map((value, index) => {
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                  const isLast = index === pathnames.length - 1;

                  return isLast ? (
                    <Typography key={to} color="text.primary" fontSize='15px'>
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Typography>
                  ) : (
                    <Link
                      key={to}
                      to={to}
                      style={{ textDecoration: 'none', color: 'inherit',  }}
                    >
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Link>
                  );
                })}
              </Breadcrumbs>
          </div>
          <div className='pt-4'>{<Outlet />}</div>
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Layout