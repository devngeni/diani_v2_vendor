import React from "react";
import './Dashboard.css'
import NavBar from "../../components/navbar/navbar";
import { Table } from "react-bootstrap";


const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="vendor-add-page">
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
            </div>
        </>
    )
}
export default Dashboard