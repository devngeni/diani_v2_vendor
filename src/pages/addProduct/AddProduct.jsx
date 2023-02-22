import React from "react";
import './AddProduct.css'
import { Button, Dropdown, Form } from "react-bootstrap";
import NavBar from "../../components/navbar/navbar";
import mainImage from '../../assets/mainImage.png'

const AddProduct = () => {
    return (
        <>
            <NavBar />
            <div className="add-product-becky">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="email" placeholder="Product Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Product Name" rows={3} />
                    </Form.Group>
                    <div className="product-input-becky">
                        <Form.Group className="mb-3">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" placeholder="1500/hr" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Availability</Form.Label>
                            <Dropdown className="form-dropdown">
                                <Dropdown.Toggle>
                                    Select
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/">True</Dropdown.Item>
                                    <Dropdown.Item href="/">False</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </div>

                    <div className="offer-buttons-becky mb-2">
                        <Button>
                            Offer
                        </Button>
                        <Button>
                            FlashSale
                        </Button>
                        <Button>None</Button>
                    </div>
                    <div>
                        <img src={mainImage} alt="" />
                    </div>
                    <div className="submit-buttons-becky mt-4">
                        <Button className="post-submit-becky">Post</Button>
                        <Button className="clear-submit-becky">Clear</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default AddProduct