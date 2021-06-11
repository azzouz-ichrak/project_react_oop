import React,{useState, useEffect} from 'react';
import APIAdverts from '../../../api/adverts_api';

const Modify = (props)=>{

    
const [data, setData] = useState();
const [updateData, setUpdateData] = useState({});

useEffect(() =>{
    APIAdverts.getAdvert(props.id)
    .then(response =>{
        setData(response.data);
    })
    .catch(e =>{
        console.log(e);
    })
},[data])

const addarticleHandler = async (e) => {
    e.preventDefault();
    APIAdverts.updateAdvert(props.id, updateData)
    .then(response =>{
        console.log('hello')
    })

}

    return(
        <div>{props.id}</div>
    )

}
export default Modify;