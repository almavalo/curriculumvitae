import React from 'react';
import styled from 'styled-components';

const HrLinea = styled.hr`
    height: 1px;
    background-color: #6da3c7;
`;

const LineaHr = ({ name }) => <HrLinea>{name}</HrLinea>;

export default LineaHr;