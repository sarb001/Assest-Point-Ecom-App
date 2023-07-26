import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Profile from './Profile';
import Setting from './Setting';
import Address from './Address';

const UserProfile = () => {

   const [activeTab,setactiveTab] = useState("Setting");

  return (
    <>
       <Header />
          <div className="user-profile">
              <button  onClick={() => setactiveTab('Profile')}  > Profile </button>
              <button  onClick={() => setactiveTab('Setting')}  > Setting  </button>
              <button  onClick={() => setactiveTab('Address')}  > Address  </button>
          </div>

              { (activeTab === 'Setting') && <Setting /> }

              { (activeTab === 'Profile') && <Profile /> }

              { (activeTab === 'Address') && <Address /> }

       <Footer />
    </>
  )
}

export default UserProfile