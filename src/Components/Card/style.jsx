import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 5px;
  width: 130px;
  height: 170px;
  /* max-height: 130px; */
  min-width: 100px;
  background-color: ${props =>props.background.main};
  z-index: 1;
  border-radius: 5px;
  transition: 0.7s;
  transform: ${props => props.theme.rotate};
  margin-left: ${props => props.theme.margin};
  bottom: ${props => props.theme.bottom};
`

export const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: contain;
  border-radius: 5px;
`