import React, { useEffect, useState } from 'react'

const Profile = () => {

    const [profile,setprofile] = useState({});

    useEffect(() => {
        setprofile(JSON.parse(localStorage.getItem('userData')));
    },[])


  return (
    <>
           <div className = "profile-container" style = {{margin:' 2% 2%'}}>
             <h4> Profile information  </h4>
              <div id = "name">  
                <span>  Name -- </span>
                <span> {profile.firstName} </span>
              </div>
              <div id = "email">  
                <span>  Email = </span>
                <span> {profile.email} </span>
              </div>
           </div>
    </>
  )
}

export default Profile