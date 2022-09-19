import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  padding: 15px 20px; 
  border-radius: 10px;
  boorder: 0;
  font-weigth: bold;
  color: ${props => props.theme.white};
  font-size: 16px;
  transition: 0.3s;

  ${props => props.disabled && 'cursor: pointer;'}

  :hover {
    background-color: ${props => props.theme.primaryHover};
  }

  :disabled {
    background-color: ${props => props.theme.disabled};
  }
`

export default Button