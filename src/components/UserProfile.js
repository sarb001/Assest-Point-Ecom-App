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
              <div className="userprofile-section" style = {{textAlign:'center',marginTop:'3%'}}>
                  <div className="userprofile-buttons" >
                      <button style = {{padding:'0.5% 3%'}} onClick={() => setactiveTab('Profile')}  > Profile </button>
                      <button style = {{padding:'0.5% 3%'}} onClick={() => setactiveTab('Setting')}  > Setting  </button>
                      <button style = {{padding:'0.5% 3%'}} onClick={() => setactiveTab('Address')}  > Address  </button>
                  </div>
                    { (activeTab === 'Setting') && <Setting /> }
                    { (activeTab === 'Profile') && <Profile /> }
                    { (activeTab === 'Address') && <Address /> }
                  </div>
       <Footer />
    </>
  )
}

export default UserProfile