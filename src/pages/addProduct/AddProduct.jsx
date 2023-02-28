import React, { useRef, useState } from "react";
import './AddProduct.css'
import { Button, Card, Dropdown, Form } from "react-bootstrap";
import NavBar from "../../components/navbar/navbar";
import mainImage from '../../assets/mainImage.png'
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    let authToken = localStorage.getItem("authToken");
    let vendorData = JSON.parse(localStorage.getItem("vendorID"))
    const fileInputField = useRef(null);
    const navigate = useNavigate()
    const KILO_BYTES_PER_BYTE = 1000;
    const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [availability, setAvailabilty] = useState(true);
    const [offerDescription, setOfferDescription] = useState(false);
    const [offerPrice, setOfferPrice] = useState("");
    const [files, setFiles] = useState();
    const [image, setImage] = useState("");
    console.log("mmmm", image);

    const AddVendorProduct = async (e) => {
        e.preventDefault();
        try {

            let formData = new FormData();
            formData.append("product_name", productName);
            console.log("naeee", formData);
            formData.append("description", description);
            formData.append("category", vendorData.vendor_category);
            formData.append("price", productPrice);
            formData.append("availability", availability);
            formData.append("offer", offerDescription);
            formData.append("offer_price", offerPrice);
            formData.append("image", files);


            console.log("rrr", formData);

            let options = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${authToken}`,
                },
                body: formData,
            };

            await fetch(`https://server.dianiapp.me/products/new/${vendorData._id}`, options)
                .then((res) => res.json())
                .then((data) => {
                    navigate("/dashboard");
                    console.log("data", data);
                    return data;
                });
        } catch (error) {
            console.log("update error", error);
        }
    }
    return (
        <>
            <NavBar />
            <div className="add-product-becky">
                <Form >
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Product Name" onChange={(e) => {
                            setProductName(e.target.value)
                        }} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Product Name" rows={4} onChange={(e) => {
                            setDescription(e.target.value)
                        }} />
                    </Form.Group>
                    <div className="product-input-becky mb-3">
                        <Form.Group>
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" placeholder="1500/hr" onChange={(e) => {
                                setProductPrice(e.target.value)
                            }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Availability</Form.Label>
                            <Dropdown className="form-dropdown" onChange={(e) => {
                                setAvailabilty(e.target.value)
                            }}>
                                <Dropdown.Toggle>
                                    Select
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item value="true">True</Dropdown.Item>
                                    <Dropdown.Item value="false">False</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </div>

                    <div className="offer-buttons-becky mb-3">
                        <div>
                            <Form.Check
                                label="On offer"
                                name="group1"
                            // onChange={(e) => {
                            //     setOfferDescription(e.target.value)
                            // }}

                            />
                        </div>
                        <div className="offer-price-becky">
                            <Form.Group>

                                <Form.Control type="number" placeholder="Offer Price" onChange={(e) => {
                                    setOfferPrice(e.target.value)
                                }} />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="product-image-becky mb-3">
                        <Card className="postCard">
                            <form>
                                <label className="fileInput" style={{
                                    color
                                        : 'black'
                                }}>
                                    Click Here to Select multiple Images <br />
                                    {/* <div className="add-image-button-becky">
                                        <Button style={{ borderRadius: '50%' }}><FaPlus size="30px" /></Button>
                                    </div> */}
                                    <input
                                        className="inputTab"
                                        type="file"
                                        multiple
                                        ref={fileInputField}
                                        onChange={(e) => {
                                            setFiles(e.target.files[0]);
                                            setImage(e.target.files);
                                        }}
                                    ></input>
                                </label>
                            </form>
                        </Card>


                    </div>

                    <div className="submit-buttons-becky mt-4">
                        <Button className="post-submit-becky" onClick={AddVendorProduct}>Post</Button>
                        <Button className="clear-submit-becky" onClick={() => navigate(-1)}>Clear</Button>
                    </div>
                </Form>

                {/* <div className="displayImages">
                    {Object.keys(image).map((fileName, index) => {
                        let file = image[fileName];
                        let isImageFile = file.type.split("/")[0] === "image";
                        return (
                            <section key={fileName}>
                                <div>
                                    {isImageFile && (
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={`file preview ${index}`}
                                        />
                                    )}
                                    <div isImageFile={isImageFile}>
                                        <aside>
                                            <span
                                                style={{
                                                    fontSize: "12px",
                                                    float: "left",
                                                    paddingBottom: "5px",
                                                }}
                                            >
                                                {convertBytesToKB(file.size)} kb
                                            </span>
                                        </aside>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div> */}
            </div>
        </>
    )
}

export default AddProduct