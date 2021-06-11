import React , {useState,useEffect} from 'react';

import {useHistory} from 'react-router-dom';



const Add_Advert=()=>{
    const history=useHistory();
    if(!localStorage.getItem("token")){
        history.push('/login');
    }
    
    return(
        <div>
            add advert
        </div>
    );
}

export default Add_Advert;