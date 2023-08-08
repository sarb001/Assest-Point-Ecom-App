import React, { useEffect, useState } from 'react'

const Profile = () => {

    const [profile,setprofile] = useState({});

    useEffect(() => {
        setprofile(JSON.parse(localStorage.getItem('userData')));
    },[])


  return (
    <>
      <h2> Profile info </h2>
           <div className="profile-container">
              <h3> First Name </h3> 
              <h4>  {profile.firstName} </h4>

               <h3> Email - </h3> 
              <h4> {profile.email} </h4>

              <h3> Contact Number  </h3>
              <h4> 99999-44444 </h4>
           </div>
    </>
  )
}

export default Profile