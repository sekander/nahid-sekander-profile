import React from 'react'
import styled from 'styled-components'
import ExpandableCard from '../ExpandableCard'

const AboutText = styled.div`
    display: flex;
    // align-items: center;
    justify-content: center;
    font-size: 50px;
    color: white;
    // height: 125vh;
`

const About: React.FunctionComponent = () => {
    return (
        <>
            <AboutText>About</AboutText>
            <ExpandableCard />
        </>
    )
}

export default About 
