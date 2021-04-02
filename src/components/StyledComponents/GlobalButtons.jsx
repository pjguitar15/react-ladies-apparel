import styled from 'styled-components'

export const Button = styled.button`
  padding: ${(props) => (props.secondary ? '5px 14px' : '8px 14px')};
  font-size: 12px;
  background: ${(props) => (props.secondary ? 'none' : '#dfbd6d')};
  font-family: Open Sans;
  font-weight: 600;
  border: ${(props) => (props.secondary ? '1px black solid' : 'none')};
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background: ${(props) => (props.secondary ? 'black' : '#dbc182')};
    transition-duration: 0.2s;
    color: ${(props) => (props.secondary ? 'white' : '#333')};
  }
`
