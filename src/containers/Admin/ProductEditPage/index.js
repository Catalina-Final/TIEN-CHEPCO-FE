import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../../redux/actions/product.actions";
import { useHistory, useParams } from "react-router-dom";

import {
    Form,
    Button,
    ButtonGroup,
} from "react-bootstrap";
import './EditProductStyle.css'
import AddImage from '../../../images/add-images.svg'
import SubmitIcon from '../../../images/add-button.svg'
import RemoveIcon from '../../../images/remove-btn.svg'
import AddEditBg from '../../../images/addedit-bg.svg'

const ProductEditPage = () => {

    const loading = useSelector((state) => state.product.loading);
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const auth = useSelector(state => state.auth)
    const selectedProduct = useSelector((state) => state.product.selectedProduct);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        ratingsAverage: "",
        inStock: "",
        availability: "",
        price: "",
        // images: null,
    });
    const redirectTo = useSelector((state) => state.product.redirectTo);
    const productId = params.id;
    // useEffect(() => {
    //     setFormData(selectedProduct)
    // }, [selectedProduct]);

    useEffect(() => {
        if (productId) {
            console.log(selectedProduct)
            if (!selectedProduct || selectedProduct._id != productId) {
                dispatch(productActions.getSingleProduct(productId));
            } else {
                setFormData({
                    ...formData,
                    name: selectedProduct.name,
                    description: selectedProduct.description,
                    category: selectedProduct.category,
                    ratingsAverage: selectedProduct.ratingsAverage,
                    inStock: selectedProduct.inStock,
                    availability: selectedProduct.availability,
                    price: selectedProduct.price,
                    // images: selectedProduct.images,
                });
            }
        }
    }, [productId, selectedProduct]);

    useEffect(() => {
        if (redirectTo) {
            if (redirectTo === "__GO_BACK__") {
                history.goBack();
                dispatch(productActions.setRedirectTo(""));
            } else {
                history.push(redirectTo);
                dispatch(productActions.setRedirectTo(""));
            }
        }
    }, [redirectTo, history]);

    const handleChange = (e) => {
        if (e.target.name === "images") {
            console.log(e.target.files);
            setFormData({ ...formData, images: e.target.files });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            name,
            description,
            category,
            ratingsAverage,
            inStock,
            availability,
            price,
            // images,
        } = formData;

        dispatch(productActions.updateProduct(selectedProduct._id, name, description, category, ratingsAverage, inStock, availability, price)); //,images
    };
    const handleCancel = () => {
        history.goBack();
    };
    const handleDelete = () => {
        // TODO : popup confirmation modal
        dispatch(productActions.deleteProduct(selectedProduct._id));
    };
    console.log(auth.user._id)
    console.log(selectedProduct)

    if (selectedProduct && selectedProduct.createdBy !== auth.user._id) {
        return <div> anhhhhhh </div>
    }

    return (
        <div className="tien-add-product-style">
            <div className="tien-add-body">
                <div className="tien-add-sidebar">
                    <div>
                        <img src={AddEditBg} alt="add edit bg" style={{ width: "30vw" }} />
                    </div>
                </div>
                <div classname="tien-add-content">
                    <div className="tien-form-input">
                        <Form onSubmit={handleSubmit}>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    plaintext
                                    required
                                    placeholder="Product Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    plaintext
                                    as="textarea"
                                    rows="10"
                                    placeholder="Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    plaintext
                                    rows="10"
                                    placeholder="Category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    plaintext
                                    rows="10"
                                    placeholder="Ratings Average"
                                    name="ratingsAverage"
                                    value={formData.ratingsAverage}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    plaintext
                                    rows="10"
                                    placeholder="In Stock"
                                    name="inStock"
                                    value={formData.inStock}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    plaintext
                                    rows="10"
                                    placeholder="Availability"
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    plaintext
                                    rows="10"
                                    placeholder="Price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>


                            {/* <Form.Group>
                    {formData?.images?.map((image) => (
                        <img
                            src={image}
                            key={image}
                            width="90px"
                            height="60px"
                            alt="blog images"
                        ></img>
                    ))}
                    <Button variant="info" onClick={uploadWidget}>
                        {addOrEdit} Images
                     </Button>
                </Form.Group> */}
                            <div>
                                <ButtonGroup className="tien-btn-wrap">
                                    {loading ? (
                                        <Button
                                            className="mr-3"
                                            variant="primary"
                                            type="button"
                                            disabled
                                        >
                                            <span
                                                className="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                  Submitting...
                                        </Button>
                                    ) : (
                                            <label >
                                                <img src={SubmitIcon} alt="remove icon" style={{ width: "5vw", cursor: "pointer" }} />
                                                <Button className="mr-3" type="submit" style={{ display: "none" }}>
                                                    Submit
                                    </Button>
                                            </label>
                                        )}
                                    <label>
                                        <img src={RemoveIcon} alt="remove icon" style={{ width: "5vw", marginLeft: "5vw", cursor: "pointer" }} />
                                        <Button onClick={handleCancel} disabled={loading} style={{ display: "none" }}>
                                            Cancel
                                        </Button>
                                    </label>
                                </ButtonGroup>
                            </div>


                            <ButtonGroup className="d-flex">
                                <Button
                                    style={{ borderRadius: "50px" }}
                                    variant="danger"
                                    onClick={handleDelete}
                                    disabled={loading}
                                >
                                    Delete Product
                </Button>
                            </ButtonGroup>

                        </Form>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default ProductEditPage
