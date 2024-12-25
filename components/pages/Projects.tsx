import React from 'react'
import styled from 'styled-components'

const ProjectText= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Home: React.FunctionComponent = () => {
    return (
        <ProjectText>Projects</ProjectText>
    )
}

export default Home
