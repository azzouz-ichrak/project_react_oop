import './Advert.css';
import {useHistory} from 'react-router-dom';

const Adverts = () => {
    const history=useHistory();
    return (
        <div>
            <h2>Adverts</h2>
            <p className="adv-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <a href="Adverts/12">Hecheckbechek.com</a><br/>
            <a href="Adverts/13">obok_obok.com</a><br/>
            <button onClick={()=>history.push('/Adverts/Add_Advert')}>Add</button>
        </div>
    )
}

export default Adverts;