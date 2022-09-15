import styled from 'styled-components'

const PostContainer = styled.div`
  background-color: ${props =>  props.theme.white};
  padding: 20px;
  border-radius: 10px;
`

const StyledUsername = styled.p`
  font-weigth: bold;
  font-size: 18px;
`
const StyledDate = styled.p`
  font-size: 12px;
`
const ContainerText = styled.div`
  margin-top: 10px;
`
function Post (){
  return (
    <PostContainer>
      <StyledUsername>@username</StyledUsername>
      <StyledDate>01 de Janeiro de 2022</StyledDate>
      <ContainerText>Esse é um texto teste.</ContainerText>
    </PostContainer>
  )
}

export default Post