import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";

function UpdateMenu(){
    const{id}=useParams();
    const[menu , setMenu] = useState(null);

    const navigate = useNavigate();
    
    useEffect(() => { 
    axios.get(`http://localhost:5000/Menu/${id}`)
    .then(response=>{
        setMenu(response.data);
    })
    .catch(error=> {
        console.error('there was an error fetching the menu data', error)
    })
    },[id])
     
    const formik = useFormik({
        initialValues:{
            image: menu?.image ||'',
            name: menu?.name ||'',
            description: menu?.description ||'',
            price: menu?.price ||''
        },

        enableReinitialize:true,

        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            name: Yup.string()
            .min(5,'Name must be at least 15 characters')
            .required('Name is required'),
        }),
        onSubmit: ( values, {setSubmitting , resetForm, setStatus})=>{
            axios.put(`http://localhost:5000/Menu/${id}`,values)
            .then(response =>{
                setStatus('success');
                resetForm();
                navigate('/menu')
            })
            .catch(error =>{
                setStatus('error');
            })
            .finally(()=>{
                setSubmitting(false);
            });
        },
    });
    return(
        <div className="container mt-4">
            <h2>Update Menu</h2>

            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                    id="image"
                    name="image"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.image}
                    />
                    {
                        formik.touched.image && formik.errors.image?(
                            <div className="text-danger">{formik.errors.image}</div>
                        ):null
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    />
                    {
                        formik.touched.name && formik.errors.name?(
                            <div className="text-danger">{formik.errors.name}</div>
                        ):null
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                    id="description"
                    name="description"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    />
                    {
                        formik.touched.description && formik.errors.description?(
                            <div className="text-danger">{formik.errors.description}</div>
                        ):null
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                    id="price"
                    name="price"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    />
                    {
                        formik.touched.price && formik.errors.price?(
                            <div className="text-danger">{formik.errors.price}</div>
                        ):null
                    }
                </div>
                
                <button type="submit" className="btn btn-primary">
                    submit
                </button>

            </form>
        </div>
    )
}
export default UpdateMenu;

 


