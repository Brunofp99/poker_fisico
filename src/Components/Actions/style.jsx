import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 100vw;
  bottom: 0;
  .controll{
    margin-bottom: 0px
  }
`

export const Counter = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
`

export const BettingButton = styled.button`
  width: 170px;
  height: 60px;
  border-radius: 5px;
  font-size: 40px;
  font-weight: 800;
  background-color: #af2e2e;
  color: white;
  border: 1px solid #7e1c1c;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 5px;
`

export const AllIn = styled.button`
  width: 170px;
  height: 60px;
  border-radius: 5px;
  font-size: 40px;
  font-weight: 1000;
  background-color: #af2e2e;
  border: 1px solid #7e1c1c;
  cursor: pointer;
  color: white;
  margin-bottom: 5px;
  margin-top: 5px;
`

export const Fold = styled.button`
  width: 170px;
  height: 60px;
  border-radius: 5px;
  font-size: 40px;
  font-weight: 1000;
  background-color: #af2e2e;
  border: 1px solid #7e1c1c;
  cursor: pointer;
  color: white;  
  margin-top: 5px;
`