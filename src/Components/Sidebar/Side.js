import React from 'react'
import Chats from '../Chats/Chats';
import Sidebar from './Sidebar';
import Navbar from '../Navbar/Navabar';
import Card from '../Card/Card';

const Side = ()=>{

    return(
        
        <div>
<Navbar />
<div className='row '>
    <div className='col-lg-2 border  ' style={{height:'100vh'}}>
    <Sidebar/>
    </div>
    <div className='col-lg-10 '>
    <div className='row '>

    <div className='col-lg-3 border  '>
        
        </div>    

    <div className='col-lg-3 border  '>12</div>
    <div className='col-lg-3 border  '>12</div>
    <div className='col-lg-3 border  '>12</div>
    <div className='row'>
        <div className='col-lg-6 border'>
            <div className='row'>
            <div className='col-lg-6 border'>
                sa
</div>
<div className='col-lg-6 border'>
    asas
</div>
<div className='col-lg-6 border'>
    asas
</div>
<div className='col-lg-6 border'>
    asas
</div>
<div className='col-lg-6 border'>
    asas
</div>
<div className='col-lg-6 border'>
    asas
</div>
            </div>
        </div>
        <div className='col-lg-6 border'>
        <Chats/>
        </div>

    </div>

</div>
    </div>


</div>
        </div>
    )
}

export default Side;