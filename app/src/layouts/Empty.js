import React from "react";
import {Container} from "react-bootstrap";
import Helmet from 'react-helmet';

const EmptyLayout = ({ children }) => (
    <Container fluid>
        <Helmet bodyAttributes={{ style: 'background-color : #007BFE' }} />
        {children}
    </Container>
);

export default EmptyLayout;