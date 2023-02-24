import React from "react";
import './AddProduct.css'
import { Button, Dropdown, Form } from "react-bootstrap";
import NavBar from "../../components/navbar/navbar";
import mainImage from '../../assets/mainImage.png'
import { FaPlus } from "react-icons/fa";

const ViewProduct = () => {
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
                        <Form.Control as="textarea" placeholder="Product Name" rows={4} />
                    </Form.Group>
                    <div className="product-input-becky mb-3">
                        <Form.Group>
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" placeholder="1500/hr" />
                        </Form.Group>
                        <Form.Group>
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

                    <div className="offer-buttons-becky mb-3">
                        <Button style={{ color: 'red' }}>
                            Offer
                        </Button>
                        <Button style={{ backgroundColor: '#66f0f1', color: 'black' }}>
                            FlashSale
                        </Button>
                        <Button>None</Button>
                    </div>
                    <div className="product-image-becky mb-3">
                        <img src={mainImage} alt="" />
                    </div>
                    <div className="add-image-button-becky">
                        <Button style={{ borderRadius: '50%' }}><FaPlus size="50px" /></Button>
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

export default ViewProduct