// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { productActions } from "../../../redux/actions/product.actions";
// import { useHistory, useParams } from "react-router-dom"

// import {
//     Form,
//     Button,
//     ButtonGroup,
// } from "react-bootstrap";



// const ShipingPage = () => {
//     const [formData, setFormData] = useState({
//         phone: "",
//         address: ""
//     });

//     const loading = useSelector((state) => state.auth.loading);
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const params = useParams();
//     const selectedProduct = useSelector((state) => state.auth.selectedProduct);
//     const productId = params.id;

//     useEffect(() => {
//         if (orderId) {
//             setFormData((formData) => ({
//                 ...formData,

//             }));
//         }
//     }, [orderId]);

//     const handleChange = (e) => {
//         if (e.target.name === "images") {
//             console.log(e.target.files);
//             setFormData({ ...formData, images: e.target.files });
//         } else {
//             setFormData({ ...formData, [e.target.name]: e.target.value });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const {
//             phone,
//             address,

//         } = formData;

//         dispatch(productActions.updateProduct(orderProduct._id, phone, address)); //,images

//     };

//     return (
//         <div>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group>
//                     <Form.Control
//                         type="text"
//                         required
//                         placeholder="Phone Number"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Control
//                         as="textarea"
//                         rows="10"
//                         placeholder="address"
//                         name="address"
//                         value={formData.address}
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <ButtonGroup className="d-flex mb-3">
//                     {loading ? (
//                         <Button
//                             className="mr-3"
//                             type="button"
//                             disabled
//                         >
//                             <span
//                                 className="spinner-border spinner-border-sm"
//                                 role="status"
//                                 aria-hidden="true"
//                             ></span>
//                   Submitting...
//                         </Button>
//                     ) : (
//                             <Button className="mr-3" type="submit" variant="primary">
//                                 Submit
//                             </Button>
//                         )}
//                 </ButtonGroup>
//             </Form>
//         </div>
//     )
// }

// export default ShipingPage
