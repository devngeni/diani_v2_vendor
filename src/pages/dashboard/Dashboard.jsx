import React from "react";
import './Dashboard.css'
import NavBar from "../../components/navbar/navbar";
import { Button, Table } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";


const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="vendor-add-page">
                <div className="vendor-details-becky mb-4">
                    <h6><span className="vendor-data-becky">Name: </span>Vendor One</h6>
                    <h6><span className="vendor-data-becky">Email: </span>Vendor1@gmail.com</h6>
                    <h6><span className="vendor-data-becky">Category: </span>Food</h6>
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
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="dashboard-image-button-becky">
                    <Button style={{ borderRadius: '50%', float: 'right' }}><FaPlus size="30px" /></Button>
                </div>
            </div>
        </>
    )
}
export default Dashboard