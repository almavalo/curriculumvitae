import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #02686f;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    display: block;
    margin: 0 auto;
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #025377;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: bold;
    color: #02686f;

`;

const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5em;
`;

const AboutHiper = styled.a`
    text-decoration: none;
    color: #025377;
`;

const About = ( { avatar , name , profession, bio, email, phone, addres, portfolio,social } ) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt={name} />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>{name}</AboutH2>
                <AboutProfession>{profession}</AboutProfession>
            </AboutName>
            <div className="About-desc">
                <AboutBio>{bio}</AboutBio>
            </div>
            <div className="About-email">
                <AboutBio>Email: {email}</AboutBio>
            </div>
            <div className="About-phone">
                <AboutBio>Teléfono: {phone}</AboutBio>
            </div>
            <div className="About-portfolio">
                <AboutLocation>Portafolio: <AboutHiper href={portfolio}>{portfolio}</AboutHiper></AboutLocation>
            </div>
            <div className="About-location">
                <AboutLocation>{addres}</AboutLocation>
            </div>
            <div className="About-social">
                <Social social={social}/>
            </div>

        </div>
    </AboutStyle>
);

export default About;