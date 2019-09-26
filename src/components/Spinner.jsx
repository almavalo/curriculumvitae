import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerLocation = styled.div`
    position: absolute;
		top:35%;
		left:45%;
`;

const Spinner = () => (
    <SpinnerLocation>
        <Loader
         type="BallTriangle"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
        />
    </SpinnerLocation>
    
);

export default Spinner;
