import React , {useState,useEffect} from 'react';

import {useParams,useHistory} from 'react-router-dom';
const Advert = () => {
    
    const params =useParams();
    const [id,setid]=useState();
    useEffect(()=>{
        setid(params.id);
    },[id]);
    console.log(params.id);
    return (
        <>
       {
        <div>
            <h2>hechek bechek</h2>
            <p>
            hechek bechek....
            </p>
            
        </div>
    }
    </>
    )
};

export default Advert; 