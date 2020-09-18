import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../../redux/actions/product.actions";
import { useHistory, useParams } from "react-router-dom";

import {
    Form,
    Button,
    ButtonGroup,
} from "react-bootstrap";


const ProductEditPage = () => {

    const loading = useSelector((state) => state.auth.loading);
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const auth = useSelector(state => state.auth)
    const selectedProduct = useSelector((state) => state.auth.selectedProduct);
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
    const redirectTo = useSelector((state) => state.auth.redirectTo);
    const productId = params.id;
    // useEffect(() => {
    //     setFormData(selectedProduct)
    // }, [selectedProduct]);


    useEffect(() => {
        if (productId) {
            if (!selectedProduct) {
                dispatch(productActions.getSingleProduct(productId));
            } else {
                setFormData((formData) => ({
                    ...formData,
                    name: selectedProduct.name,
                    description: selectedProduct.description,
                    category: selectedProduct.category,
                    ratingsAverage: selectedProduct.ratingsAverage,
                    inStock: selectedProduct.inStock,
                    availability: selectedProduct.availability,
                    price: selectedProduct.price,
                    // images: selectedProduct.images,
                }));
            }
        }
    }, [selectedProduct]);

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
        dispatch(productActions.deleteBlog(selectedProduct._id));
    };

    if (selectedProduct && selectedProduct.createdBy !== auth.user._id) {
        return <div> Resource not found </div>
    }

    return (
        <div>
            fdsfds
            <Form onSubmit={handleSubmit}>
                <div className="text-center mb-3">
                    <h1 className="text-primary"> Edit product</h1>

                </div>
                <Form.Group>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Product Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="10"
                        placeholder="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="10"
                        placeholder="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="10"
                        placeholder="Ratings Average"
                        name="ratingsAverage"
                        value={formData.ratingsAverage}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="10"
                        placeholder="In Stock"
                        name="inStock"
                        value={formData.inStock}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="10"
                        placeholder="Availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="10"
                        placeholder="Price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
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
                <ButtonGroup className="d-flex mb-3">
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
                            <Button className="mr-3" type="submit" variant="primary">
                                Submit
                            </Button>
                        )}
                    <Button variant="light" onClick={handleCancel} disabled={loading}>
                        Cancel
              </Button>
                </ButtonGroup>

                <ButtonGroup className="d-flex">
                    <Button
                        variant="danger"
                        onClick={handleDelete}
                        disabled={loading}
                    >
                        Delete Product
                </Button>
                </ButtonGroup>

            </Form>
        </div>
    )
}

export default ProductEditPage
