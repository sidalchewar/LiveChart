import React from 'react';
import {Outlet} from 'react-router-dom'
function Layout() {
    return (
        <div className='gradient-custom-4' >
        <div className="row pt-4">
         <div  className="col-10">
            <div className='row '>
             <div className='col-4 text-center'>
            <a className='position-absolute text-decoration-none rounded bg-dark text-white'  href='/bar'>Click to see in Bar Chart</a>
            </div>
            <div className='col-4 text-center'>
            <a className='position-absolute text-decoration-none rounded bg-dark text-white'  href='/line'>Click to see in Line Chart</a>
            </div>
            <div className='col-4 text-center'>
            <a className='position-absolute text-decoration-none rounded bg-dark text-white'  href='pie'>Click to see in Pie Chart</a>
            </div>
            </div>
        </div>
        <div className='row justify-content-evenly' style={{marginTop:"50px"}}>
        <div className='col-10'>
            <Outlet/>
            </div>
        </div>
        </div>
      </div>
    );
}

export default Layout;