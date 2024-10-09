import {useState , useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Menu(){
    const [menu , setMenu]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
      fetchMenu();
    },[])

    const fetchMenu = () => {
        axios.get('http://localhost:5000/Menu')
        .then(response=>{
         setMenu(response.data);
      })
        .catch(error=> {
         console.error('There was an error fetching the menu data', error)
      })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/Menu/${id}`)
        .then(response=>{
        fetchMenu();
      })
        .catch(error=> {
        console.error('there was an error deleting the menu data', error)
      })
    }

    return(
        <div className="container mt-4">
            <h2>Menu List</h2>
            <div className="row">
                {menu.map(menu => (
                    <div className="col-md-4" key={menu.id}>
                        <div className="card mb-4">
                            <img src={menu.image} height={250} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{menu.name}</h5>
                                <p className="card-text">  {menu.description}</p>
                                <p className="card-text">Price : {menu.price}</p>

                                <button className="btn btn-danger me-4" onClick={()=>handleDelete(menu.id)}  >DELETE</button>
                                <button className="btn btn-warning "  onClick={()=> navigate(`/update-menu/${menu.id}`)}>UPDATE</button>

                                <br></br>
                                <br></br>

                                <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button">Add to card</button>
                                </div>

                            </div>
                        </div>    
                    </div>  
                ))}
            </div>
        </div>
    )
}
export default Menu;

                            
                                