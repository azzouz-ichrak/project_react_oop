
import React,{useState,useEffect} from 'react';
import Myads from './_components/adverts';
import Modify from './_components/modify_advert';
import Settings from './_components/update_profil';
import {useHistory} from 'react-router-dom';

const Profil = () => {
    const history=useHistory();
    const [view,setview]=useState("Myads");
    const [advertid,setadvertid]=useState();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            history.push('/login');
        }
    });
    const logoutHandler = () => {
        localStorage.removeItem("token");
        history.push("/login");
    };
    return (
        <>
        <div>
            <h2>Profil</h2>
            <button onClick={()=>setview("Myads")}>Myads</button>
            <button onClick={()=>setview("Settings")}>Settings</button>
            <button onClick={()=>logoutHandler()}>Logout</button>
            <p>
                Detail Profil....
            </p>
            
        </div>
        <div>
            {view==="Myads" && <Myads view={setview} advertid={setadvertid}/>} 
            {/*sending data from parent to child */}
            {view==="Modify" && <Modify id={advertid}/>} 
            {/*sending data from parent to child */}
            {view==="Settings" && <Settings/>}
        </div>
        </>
        
    )
};
/*
{(() => {
                    switch (view) {
                    case 'Myads':
                        return (<Myads/>)
                    case 'Modify':
                        return (<Modify/>)
                    default:
                        return (<div>You are a User.</div>)
                    }
                    })()}
*/
export default Profil; 