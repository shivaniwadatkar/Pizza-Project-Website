import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function AddMenu(){

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            image:'',
            name:'',
            description:'',
            price:''
        },
        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            name: Yup.string()
                .min(5,'Name must be at least 5 characters')
                .required('Name is required'),
            price: Yup.number()
                .min(1, 'Price must be greater than 0')    
                .required('Price is required'),
            description: Yup.string()
                 .required('Description is required'),    
        }),
        onSubmit: ( values, {setSubmitting , resetForm, setStatus})=>{
            axios.post('http://localhost:5000/Menu', values)
            .then(response =>{
                setStatus('success');
                resetForm();
                navigate('/menu');
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
            <h2>Add New Menu</h2>

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
                        formik.touched.image && formik.errors.image ? (
                            <div className="text-danger">{formik.errors.image}</div>
                        ): null
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
                    <label htmlFor="price" className="form-label">Price </label>
                    <input
                    id="price"
                    name="price"
                    type="number"
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
export default AddMenu;