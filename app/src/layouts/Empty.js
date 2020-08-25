import React from "react";
import { Container} from "shards-react";
import Helmet from 'react-helmet';

const EmptyLayout = ({ children }) => (
    <Container fluid>
        <Helmet bodyAttributes={{ style: 'background-color : #007BFE' }} />
        {children}
    </Container>
);

export default EmptyLayout;
