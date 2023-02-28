import React, { useEffect, useState } from "react";
import './AddProduct.css'
import { Button, Dropdown, Form } from "react-bootstrap";
import NavBar from "../../components/navbar/navbar";
import mainImage from '../../assets/mainImage.png'
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewProduct = () => {
    let { id } = useParams();
    const [data, setData] = useState("")
    let authToken = localStorage.getItem("authToken")
    let status = "";
    const productData = async () => {
        try {
            await axios({
                method: 'GET',
                url: `https://server.dianiapp.me/products/product/${id}`,
                headers: {
                    Authorization: `Bearer ${authToken} `,
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                console.log("===>", res.data);
                setData(res.data)
            })
        }
        catch (error) {
            console.log("errrr", error.response);
        }


    }

    const availability = () => {
        if (data.availability === true) {
            return "true"
        } else {
            return "false"
        }
    }
    useEffect(() => {
        productData()
    }, [])
    return (
        <>
            <NavBar />
            <div className="add-product-becky">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control className="rendor-productData-becky" type="email" placeholder={data.product_name} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control className="rendor-productData-becky" type="text" placeholder={data.description} />
                    </Form.Group>
                    <div className="product-input-becky mb-5">
                        <Form.Group>
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control className="rendor-productData-becky" type="text" placeholder={data.price} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Availability</Form.Label>
                            <Form.Control className="rendor-productData-becky" type="text" placeholder={availability()} />
                        </Form.Group>
                    </div>
                    <div className="product-image-becky mb-3">
                        <img src={data.product_image} alt="" width="50%" />
                    </div>
                    {/* <div className="add-image-button-becky">
                        <Button style={{ borderRadius: '50%' }}><FaPlus size="50px" /></Button>
                    </div>
                    <div className="submit-buttons-becky mt-4">
                        <Button className="post-submit-becky">Post</Button>
                        <Button className="clear-submit-becky">Clear</Button>
                    </div> */}
                </Form>
            </div>
        </>
    )
}

export default ViewProduct