import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import H2Degree from '../styled/H2Degree';
import LineaHr from '../styled/LineaHr';

const Education = props => (
    <div className="Education">
        <H2Styled name="Educación"/>
        <div className="Education-container">
            {props.data.map((edu, index) => (
                <div className="Education-item" key={`Edu-${index}`}>
                    <H2Degree>{edu.degree}</H2Degree>
                    <LineaHr/>
                    <H3Styled>{edu.institution}.  {edu.startDate}</H3Styled>
                    
                </div>
            ))}
        </div>
    </div>
);

export default Education;