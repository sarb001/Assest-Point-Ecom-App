import React, { useState } from 'react'
import Header from './Header'
import Profile from './Profile';
import Setting from './Setting';

const UserProfile = () => {

   const [activeTab,setactiveTab] = useState("Settings");

  return (
    <>
       <Header />
              <div className="userprofile-section" style = {{textAlign:'center',marginTop:'3%'}}>
                  <div className="userprofile-buttons" >
                      <button className='bg-slate-400 py-2 px-4 mx-2' onClick={() => setactiveTab('Profile')}  > Profile </button>
                      <button className='bg-slate-400 py-2 px-4 '  onClick={() => setactiveTab('Setting')}  > Settings  </button>
                  </div>
                    { (activeTab === 'Settings') && <Setting /> }
                    { (activeTab === 'Profile')  && <Profile /> }
                  </div>
      
    </>
  )
}

export default UserProfile