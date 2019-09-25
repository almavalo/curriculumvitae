import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import About from '../components/About';
import Languages from '../components/Languages';
import useGetData from "../hooks/useGetData";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        background: url("https://drive.google.com/open?id=1rQszDx9YdBuSyuP-v8G7vKYZkBjwwpZU");
        background-size: 101% 103%;
        background-repeat: no-repeat;
    }
`;

const App = () => {
    const data = useGetData();
    console.log(data);
    return data.length === 0 ? <h1>Cargando...</h1> : (
        <Main>
            <GlobalStyle />
            <Sidebar>
                <About
                    avatar = { data.avatar }
                    name = { data.name }
                    profession = { data.profession }
                    bio = { data.bio }
                    email = { data.email }
                    phone = { data.phone }
                    addres = { data.addres }
                    portfolio = { data.portfolio }
                    social = { data.social }
                />
                <Skills 
                    data = { data.skills }
                />
                <Languages
                    data = {data.idiomas}
                />
            </Sidebar>
            <Info>
                <Experience 
                    data = { data.experience }
                />
                <Education 
                    data = { data.education }
                />
            </Info>
        </Main>
    );
}

export default App;