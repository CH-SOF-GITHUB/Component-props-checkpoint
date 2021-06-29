import React from "react";
import Btn from "./Btn";


function Profile({item, children}) {
    return (
        <div className="profile">
            <>
            {children}
            </>
            <h3>Hello my name is {item.fullName} 👋 ⚛️</h3>
            <h3>{item.bio} ✨</h3>
            <h3>{item.profession} 👌</h3>
            <div className="button">
            <Btn cname="Default-1">FullName: {item.fullName}</Btn> 
            <Btn cname="Default-1">Bio: {item.bio}</Btn> 
            <Btn cname="Default-1">Profession: {item.profession}</Btn> 
            </div>
        </div>
        
    )
}

export default Profile;