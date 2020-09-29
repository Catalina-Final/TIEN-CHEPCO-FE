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
    const addOrEdit = params.id ? "Edit" : "Add";
    const selectedProduct = useSelector((state) => state.product.selectedProduct);
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
    const redirectTo = useSelector((state) => state.product.redirectTo);
    const productId = params.id;

    useEffect(() => {
        if (!selectedProduct) {
            dispatch(productActions.getSingleProduct(productId));
        }

        if (selectedProduct && productId !== selectedProduct._id) {
            dispatch(productActions.getSingleProduct(productId));
        }

        if (selectedProduct) {
            setFormData({
                ...formData,
                name: selectedProduct.name,
                description: selectedProduct.description,
                category: selectedProduct.type.type,
                ratingsAverage: selectedProduct.ratingsAverage,
                inStock: selectedProduct.inStock,
                availability: selectedProduct.availability,
                price: selectedProduct.price,
                images: selectedProduct.images,
            });
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
            images,
        } = formData;

        dispatch(productActions.updateProduct(selectedProduct._id, name, description, category, ratingsAverage, inStock, availability, price, images)); //,images
    };
    const handleCancel = () => {
        history.goBack();
    };
    const handleDelete = () => {
        // TODO : popup confirmation modal
        dispatch(productActions.deleteProduct(selectedProduct._id));
    };

    const handleChangeCat = (e) => {
        if (e.target.value) {
            setFormData({ ...formData, category: e.target.value })
        }
    }
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

    if (!selectedProduct) return null;

    return (
        <div className="tien-add-product-style">
            <div className="tien-add-body">
                <div className="tien-add-sidebar">

                    <img src={AddEditBg} alt="add edit bg" />

                </div>
                <div className="tien-add-content">
                    <div className="tien-edit-form-input">
                        <Form onSubmit={handleSubmit}>

                            <Form.Group>
                                <Form.Control
                                    autocomplete="off"
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
                                    autocomplete="off"
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
                                <div className="tien-checkbox-type">
                                    <Form.Check
                                        name="milk"
                                        label="milk"
                                        onChange={handleChangeCat}
                                        value="milk"
                                        checked={formData.category === 'milk'}
                                        id="cat-milk"
                                    />
                                    <Form.Check
                                        name="tea"
                                        label="tea"
                                        onChange={handleChangeCat}
                                        value="tea"
                                        checked={formData.category === 'tea'}
                                        id="cat-tea"
                                    />
                                </div>
                                <hr />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    autocomplete="off"
                                    type="number" id="replyNumber" min="0" data-bind="value:replyNumber"
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
                                    autocomplete="off"
                                    type="number" id="replyNumber" min="0" data-bind="value:replyNumber"
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
                                    autocomplete="off"
                                    type="number"
                                    id="replyNumber"
                                    min="0"
                                    data-bind="value:replyNumber"
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
                                    autocomplete="off"
                                    type="number" id="replyNumber" min="0" data-bind="value:replyNumber"
                                    plaintext
                                    rows="10"
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
                                        width="60px"

                                        alt="Product image"
                                    ></img>
                                ))}
                                <div className="add-img-wrap">
                                    <label className="tien-add-img">
                                        <img src={AddImage} alt="add img icon" style={{ width: "70px" }} />
                                        <Button variant="info" onClick={uploadWidget} style={{ display: "none" }}>
                                            {addOrEdit} Images
                                 </Button>
                                    </label>
                                </div>

                            </Form.Group>
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
                                    <label className="del-btn">
                                        <h4 style={{ color: "red" }}>Delete</h4>
                                        <Button
                                            style={{ display: "none" }}
                                            variant="outline-danger"
                                            onClick={handleDelete}
                                            disabled={loading}
                                        >
                                            Delete
                                        </Button>
                                    </label>
                                </ButtonGroup>

                            </div>




                        </Form>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default ProductEditPage
