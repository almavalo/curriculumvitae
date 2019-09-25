import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import H2Degree from '../styled/H2Degree';
import LineaHr from '../styled/LineaHr';

const Experience = props => (
    <div className="Experience">
        <H2Styled name="Experiencia" />
        <div className="Experience-container">
            {props.data.map((exp,index) =>(
                <div className="Experience-item" key={`Exp-${index}`}>
                    <H2Degree>{exp.company}</H2Degree>
                    <LineaHr/>
                    <H3Styled>{exp.jobTitle}. {exp.jobDate}</H3Styled>
                    <PStyled>{exp.jobDescription}</PStyled>
                    <H3Styled>Cargo Ocupado:</H3Styled>
                    <PStyled>{exp.jobPosition}</PStyled>
                    <H3Styled>Tecnologia Usada:</H3Styled>
                    <PStyled>{exp.jobTechnology}</PStyled>
                </div>
            ))}
        </div>
    </div>
);

export default Experience;