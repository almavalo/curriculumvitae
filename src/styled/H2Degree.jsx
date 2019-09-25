import React from 'react';
import styled from 'styled-components';

const DegreeH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: .8px;
    margin: 1em 0 0 0;
    color: #6da3c7;
`;

const H2Degree = ({children }) => <DegreeH2>{children}</DegreeH2>;

export default H2Degree;
