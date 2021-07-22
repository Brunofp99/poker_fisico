import styled from 'styled-components'
import image from '../../Images/colisao-cern-.jpeg'

export const Container = styled.div`
  font-family: 'Dela Gothic One';
  width: 100%;
  background: radial-gradient(#636463, #131313 );
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const View = styled.div`
  display: grid;
`

export const Div = styled.div`
  display: flex;
  background-image: url(${image});
  position: relative;
  height: 50vh;
  width: 56vw;
  background-size: cover;
  border-radius: 260px;
  border: 20px solid #59241a;
`
export const ControllerDiv = styled.div`
  display: flex;
  padding-top: 120px;
  padding-left: 29px;
`

export const Column = styled.div`
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  height: 85vh;
`

export const Row = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end:5; 
  display: grid;
  grid-gap: 20%;
  height: 10vh;
  background-color: black;
  bottom: 0px;
`

export const CardControll = styled.div`
  display: flex;
  position: absolute;
  left: 45%;
  bottom: 20%;
`

export const Cards = styled.div`
  position: absolute;
  /* display: flex; */
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`



