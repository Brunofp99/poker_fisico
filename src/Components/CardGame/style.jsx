import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 5px;
  width: 130px;
  height: 170px;
  min-width: 100px;
  background-color: ${props =>props.background.main};
  z-index: 1;
  border-radius: 5px;
  transition: 0.7s;
`

export const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: contain;
  border-radius: 5px;
`