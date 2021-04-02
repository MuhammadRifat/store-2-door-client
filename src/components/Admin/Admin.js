import React from "react";
import './Admin.css';
import { Col, Container, Row } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus, faEdit, faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons'
import EditProduct from "../EditProduct/EditProduct";

const routes = [
    {
        path: "/admin",
        exact: true,
        sidebar: () => "",
        main: () => <ManageProduct/>
    },
    {
        path: "/admin/manage-product",
        exact: true,
        sidebar: () => "",
        main: () => <ManageProduct/>
    },
    {
        path: "/admin/add-product",
        sidebar: () => "",
        main: () => <AddProduct/>
    },
    {
        path: "/admin/edit-product/:id",
        sidebar: () => "",
        main: () => <EditProduct/>
    }
];

const Admin = () => {
    return (
        <Router>
            <Container fluid>
                <Row>
                    <Col md={2} className="admin-menu">
                        <div>
                        <ul className="mt-4" style={{ listStyleType: "none", padding: 0 }}>
                        <Link className="link"  to="/admin/manage-product">
                            <li><FontAwesomeIcon icon={faTasks} /> Manage Product</li>
                        </Link>
                        <Link className="link"  to="/admin/add-product">
                            <li><FontAwesomeIcon icon={faPlus} /> Add Product</li>
                        </Link>
                        <Link className="link"  to="/admin/manage-product/">
                            <li><FontAwesomeIcon icon={faEdit} /> Edit Product</li>
                        </Link>
                        </ul>

                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.sidebar />}
                                />
                            ))}
                        </Switch>
                        </div>
                    </Col>

                    <Col md={10}>
                        <Switch>
                            {routes.map((route, index) => (
                                // Render more <Route>s with the same paths as
                                // above, but different components this time.
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default Admin;