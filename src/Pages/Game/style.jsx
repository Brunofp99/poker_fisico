import styled from 'styled-components'
import image from '../../Images/colisao-cern-.jpeg'

export const Container = styled.div`
  font-family: 'Dela Gothic One';
  width: 100%;
  background: radial-gradient(#6be664, #285226);
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const View = styled.div`
  display: grid;
  grid-template-columns: 20fr 60fr 20fr;
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
export const ControllerDivBotton = styled.div`
  display: flex;
  margin-top: 2px;
`

export const Column = styled.div`
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
`

export const Row = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 4;
  display: grid;
  grid-gap: 10px;
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`

export const BettingButton = styled.button`
  display: flex;
  width: 170px;
  height: 60px;
  border-radius: 5px;
  font-size: 40px;
  font-weight: 1000;
  background-color: #e82020;
  color: white;
  border: 1px solid red;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 5px;
`

export const AllIn = styled.button`
  display: flex;
  width: 170px;
  height: 60px;
  border-radius: 5px;
  font-size: 40px;
  font-weight: 1000;
  background-color: #e82020;
  border: 1px solid red;
  color: white;
  margin-bottom: 5px;
`

export const Fold = styled.button`
  display: flex;
  width: 170px;
  height: 60px;
  border-radius: 5px;
  font-size: 40px;
  font-weight: 1000;
  background-color: #e82020;
  border: 1px solid red;
  color: white;
`

export const Range = styled.div`
  height: 80px;
  width: 300px;
  background: red;
  border-radius: 10px;
  padding: 0 65px 0 45px;
  margin-left: 50px;

  .sliderValue{
    position: relative;
    width: 100%;
  }
`

export const Field = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .value{
    position: absolute;
    font-size: 18px;
  }

  .left{
    left: -40px;
  }

  .right{
    right: -50px;
  }

  .teste{
    -webkit-appearance: none;
    height: 3px;
    width: 90%;
    background: #ddd;
    border-radius: 5px;
    outline: none;
    border: none;

  }

  .teste::-webkit-slider-thumb{
    -webkit-appearance: none;
    height:20px;
    width: 20px;
    background: white;
    border-radius: 50%;
    border: 1px solid white;
    cursor: pointer;
  }
`