import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: absolute; 
  left: ${props => props.style.left};
  right: ${props => props.style.right};
  top: ${props => props.style.top};
`

export const CardCompetitor = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  color: white;
  margin-top: 84px;
  border-radius: 10px;
`
export const Break = styled.div`
  flex-basis: 100%;
  height: 1px;
  background-color: #F7F7F7;
  box-shadow: 5px 1px 17px #ffffff;
`