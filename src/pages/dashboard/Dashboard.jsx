import React, { useEffect, useState } from "react";
import './Dashboard.css'
import NavBar from "../../components/navbar/navbar";
import { Button, Table } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import profile from '../../assets/profile.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Dashboard = () => {
    const [allData, setAllData] = useState([])
    const navigate = useNavigate()
    let authToken = localStorage.getItem("authToken");
    let vendorData = JSON.parse(localStorage.getItem("vendorID"))

    const AddProduct = () => {
        navigate("/vendor-add-list")
    }

    const getAllProducts = async () => {
        try {
            await axios({
                method: 'GET',
                url: `https://server.dianiapp.me/products/my_products/${vendorData._id}`,
                headers: {
                    Authorization: `Bearer ${authToken} `,
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                console.log("===>", res.data);
                setAllData(res.data)
            })

        } catch (error) {
            console.log("errrr", error.response);
        }


    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <>
            <NavBar />
            <div className="vendor-add-page">
                <div className="vendor-details-becky mb-4">
                    <div>
                        <img className="vendor-image-becky" src={profile} alt="" />
                    </div>
                    <div className="vendor-profile-becky">
                        <h1>{vendorData.name}</h1>
                        <h5 className="vendor-header-becky">Email: {vendorData.email}</h5>
                    </div>
                </div>

                <Table striped hover variant="dark" className="dashboard-table-becky">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>

                        </tr>
                        <tr width="70%" style={{ color: '#66f0f1' }} />

                    </thead>

                    <tbody>
                        {allData.map((data, index) => {
                            let status
                            if (data.availability === true) {
                                status = "true"
                            } else {
                                status = "false"
                            }
                            const showProduct = () => {
                                navigate(`/vendor-view-list/${data._id}`)
                            }
                            return (
                                <tr key={index} onClick={showProduct}>
                                    <td>{data.product_name}</td>
                                    <td>{data.category}</td>
                                    <td>{data.price}</td>
                                    <td>{status}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
                <div className="dashboard-image-button-becky">

                    <Button onClick={AddProduct} style={{ borderRadius: '50%', float: 'right' }}><FaPlus size="20px" /></Button>


                </div>
            </div>
        </>
    )
}
export default Dashboard