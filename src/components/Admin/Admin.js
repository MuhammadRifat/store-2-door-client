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
        path: "/admin/edit-product",
        sidebar: () => "",
        main: () => <h2>Edit Product</h2>
    }
];

const Admin = () => {
    return (
        <Router>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <div className="admin-menu">
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li>
                                <Link to="/admin/manage-product">Manage Product</Link>
                            </li>
                            <li>
                                <Link to="/admin/add-product">Add Product</Link>
                            </li>
                            <li>
                                <Link to="/admin/edit-product">Edit Product</Link>
                            </li>
                        </ul>

                        <Switch>
                            {routes.map((route, index) => (
                                // You can render a <Route> in as many places
                                // as you want in your app. It will render along
                                // with any other <Route>s that also match the URL.
                                // So, a sidebar or breadcrumbs or anything else
                                // that requires you to render multiple things
                                // in multiple places at the same URL is nothing
                                // more than multiple <Route>s.
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