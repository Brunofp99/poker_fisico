import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Dela Gothic One';
  width: 100%;
  background: radial-gradient(#6be664, #285226);
  height: 100vh;

  > a{
    text-decoration: none;
  }
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  font-size: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
`
export const Cards = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`

export const Button = styled.a`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 229px;
  height: 100px;
  padding-top: 23px;
  border-radius: 20px;
  font-size: 50px;
  font-weight: 1000;
  background-color: #e82020;
  color: black;
`