import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
  width: 1000px;
  height: 50px;
  background: linear-gradient(#767373, #434242);
  border-radius: 15px;
`

export const Count = styled.div`
  text-align: center;
  margin-left: 20px;
  margin-top: 10px;
  width: 50px;
  height: 30px;
  background-color: #313131;
  color: #d0d0d0;
  border-radius: 10px;
`

export const Input = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;  
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin-top: 17px;
  margin-right: 20px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    background: #7e1c1c;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 30%;
    background: #7e1c1c;
    cursor: pointer;
  }
`