import styled from "styled-components"

import Navbar from "../src/components/layout/Navbar"
import LogoImage from "../src/components/layout/LogoImage"
import ButtonCard from '../src/components/Button/ButtonCard'

const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SecondDiv = styled.div`
    background-color: #414758;
    width: 400px;
    height: 400px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const ThirdDiv = styled.div`
    padding-top: 300px;
    position: absolute;
`

const FourthDiv = styled.div`
    position: relative;
    padding-left: 180px;
    padding-bottom: 50px;
`

const Input = styled.input`
    padding: 10px;
    margin-top: 20px;
    width: 300px;
    font-size: 14px;
`

const FileInput = styled.input`
    display: none;
`

const LabelFileInput = styled.label`
  background-color: #f0f1f4;
  border-radius: 50%;
  color: #c4c8d4;
  cursor: pointer;
  padding: 5px 10px;
`

function RegisterBarber() {
    return(
        <>
            <Navbar />
            <PrincipalDiv>
                <SecondDiv>
                    <LogoImage image="/layout-principal.jpg" width="300px" height="300px" />
                    <ThirdDiv>
                        <FourthDiv>
                            <LabelFileInput for="selecao-de-arquivo">+</LabelFileInput>
                            <FileInput type="file" id="selecao-de-arquivo" />
                        </FourthDiv>
                    </ThirdDiv>
                </SecondDiv>
                <Input placeholder="NOME DO BARBEIRO" />
                <ButtonCard color="#ffb34a">CADASTRAR</ButtonCard>
            </PrincipalDiv>
        </>
    )
}

export default RegisterBarber