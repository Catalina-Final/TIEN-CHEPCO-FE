import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../../redux/actions/product.actions";
import { useHistory, useParams } from "react-router-dom";

import {
    Form,
    Button,
    ButtonGroup,
} from "react-bootstrap";
import './AddProductStyle.css'
import AddImage from '../../../images/add-images.svg'
import SubmitIcon from '../../../images/add-button.svg'
import RemoveIcon from '../../../images/remove-btn.svg'
import AddEditBg from '../../../images/addedit-bg.svg'
const ProductAddPage = () => {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        ratingsAverage: "",
        inStock: "",
        availability: "",
        price: "",
        images: null,
    });
    const loading = useSelector((state) => state.product.loading);
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const selectedProduct = useSelector((state) => state.product.selectedProduct);
    const redirectTo = useSelector((state) => state.product.redirectTo);
    const addOrEdit = params.id ? "Edit" : "Add";
    const productId = params.id;

    useEffect(() => {
        if (productId) {
            if (!selectedProduct) {
                dispatch(productActions.getSingleProduct(productId));
            }
            setFormData((formData) => ({
                ...formData,
                name: selectedProduct.name,
                description: selectedProduct.description,
                category: selectedProduct.category,
                ratingsAverage: selectedProduct.ratingsAverage,
                inStock: selectedProduct.inStock,
                availability: selectedProduct.availability,
                price: selectedProduct.price,
                images: selectedProduct.images,
            }));
        }
    }, [productId, selectedProduct, dispatch]);

    const handleChangeCat = (e) => {
        if (e.target.name) {
            setFormData({ ...formData, category: e.target.name })
        }
    }

    const handleChange = (e) => {
        if (e.target.name === "images") {

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
            images
        } = formData;
        if (addOrEdit === "Add") {
            dispatch(productActions.createNewProduct(name, description, category, ratingsAverage, inStock, availability, price, images)); //,images them khi lam chen hinh
        } else if (addOrEdit === "Edit") {
            // dispatch(productActions.updateProduct(selectedProduct._id, name, description, category, ratingsAverage, inStock, availability, price)); //,images
        }
    };
    const handleCancel = () => {
        history.goBack();
    };


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
    }, [redirectTo]);

    const uploadWidget = () => {
        window.cloudinary.openUploadWidget(
            {
                cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
                upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
                tags: ["chepco", "productImages"],

            },


            function (error, result) {
                if (result && result.data && result.data.info && result.data.info.files) {
                    let a = result.data.info.files

                    setFormData({
                        ...formData,
                        images: a.map((b) => b.uploadInfo.secure_url),
                    });
                }
            }
        );
    };

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
                        <Form onSubmit={handleSubmit} >
                            <div className="text-center mb-3">
                                {/* <h1 className="text-primary">{addOrEdit} product</h1> */}

                            </div>
                            <Form.Group>
                                <Form.Control
                                    autocomplete="off"
                                    plaintext
                                    size="sm"
                                    type="text"
                                    placeholder="Product Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    autocomplete="off"
                                    plaintext
                                    size="sm"
                                    as="textarea"
                                    placeholder="Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>

                            {/* <Form.Group>
                                <Form.Control
                                autocomplete="off"
                                    plaintext
                                    as="textarea"
                                    size="sm"
                                    placeholder="Category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group> */}
                            <Form.Group>
                                <div className="tien-checkbox-type">
                                    <Form.Check
                                        name="milk"
                                        label="milk"
                                        onChange={handleChangeCat}
                                        value={formData.category}
                                        id="5f606eec29c5b42a53c38672"
                                    />
                                    <Form.Check
                                        name="tea"
                                        label="tea"
                                        onChange={handleChangeCat}
                                        value={formData.category}
                                        id="5f6073583b66ed2d25aebf45"
                                    />
                                </div>
                                <hr />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    autocomplete="off"
                                    plaintext
                                    type="number" id="replyNumber" min="0" data-bind="value:replyNumber"
                                    size="sm"
                                    placeholder="Ratings Average"
                                    name="ratingsAverage"
                                    value={formData.ratingsAverage}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    autocomplete="off"
                                    plaintext
                                    type="number" id="replyNumber" min="0" data-bind="value:replyNumber"
                                    size="sm"
                                    placeholder="In Stock"
                                    name="inStock"
                                    value={formData.inStock}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    autocomplete="off"
                                    plaintext
                                    type="number" id="replyNumber" min="0" data-bind="value:replyNumber"
                                    size="sm"
                                    placeholder="Availability"
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    autocomplete="off"
                                    plaintext
                                    type="number"
                                    id="replyNumber"
                                    min="0"

                                    size="sm"
                                    placeholder="Price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                />
                                <hr />
                            </Form.Group>

                            <Form.Group>
                                {formData?.images?.map((image) => (
                                    < img
                                        src={image}
                                        key={image}
                                        width="90px"
                                        height="60px"
                                        alt="Product image"
                                    ></img>
                                ))}
                                <div className="add-img-wrap">
                                    <label className="tien-add-img">
                                        <img src={AddImage} alt="add img icon" style={{ width: "5vw" }} />
                                        <Button variant="info" onClick={uploadWidget} style={{ display: "none" }}>
                                            {addOrEdit} Images
                                 </Button>
                                    </label>
                                </div>

                            </Form.Group>
                            <div className="tien-btn-wrap">
                                <ButtonGroup>
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


                        </Form>
                    </div>

                </div>
            </div>


        </div >
    )
}

export default ProductAddPage
