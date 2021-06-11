import {useHistory} from 'react-router-dom';

const Adverts = (props) => {
    const history=useHistory();
    let id;
    const Delete=(id)=>{
        
    }
    const Update =(id)=>{
        props.view("Modify"); //sending data from child to parent
        props.advertid(id); //sending data from child to parent
    }
    return (
        <>
        <button onClick={()=>history.push('/Adverts/Add_Advert')}>Add</button>
        <div>
            <h2>Adverts1</h2>
            <p className="adv-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <a href="Adverts/12">Hecheckbechek.com</a><br/>
            <button onClick={()=>Update("Hecheckbechek")}>Update</button>
            <button onClick={()=>Delete(id)}>Delete</button>
            
        </div>
        <div>
            <h2>Adverts2</h2>
            <p className="adv-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <a href="Adverts/13">obok_obok.com</a><br/>
            <button onClick={()=>Update("obok_obok")}>Update</button>
            <button onClick={()=>Delete(id)}>Delete</button>
        </div>
            
        </>
    )
}

export default Adverts;