import styled from "styled-components"

import Input from "../src/components/inputs/Input"
import Button from "../src/components/Button/Button"
import TransparentButton from "../src/components/Button/TransparentButton"

const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function HomePage() {
    return(
        <PrincipalDiv>
            <Input type="text" />
            <Input type="password" />
            <Button>LOGIN</Button>
            <TransparentButton>REGISTER</TransparentButton>
        </PrincipalDiv>
    )
}

export default HomePage