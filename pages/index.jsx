import styled from 'styled-components'

import Navbar from "../src/components/layout/Navbar"
import Container from '../src/components/layout/Container'
import CreatePost from '../src/components/cards/CreatePost'
import H3 from '../src/components/typography/H3'
import Post from '../src/components/cards/Posts'

const Content = styled.div`
  margin: 50px 0;
`
const LastPostText = styled(H3)`
  padding: 30px 0;
`

const RefreshPosts =styled.span`
  font-weigth: bold;
  color: ${props => props.theme.primary};
  cursor: pointer;
`
const RefreshPostsContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
function HomePage () {
  
  return (
    <>
       <Navbar />
       <Content>
        <Container>
          <CreatePost />
          <LastPostText>Últimas postagens:</LastPostText>
          <RefreshPostsContainer>
            <RefreshPosts>Carregar novas postagens</RefreshPosts>
          </RefreshPostsContainer>   
          <PostContainer>
            <Post />
            <Post />
            <Post />
          </PostContainer>       
        </Container>     
       </Content>
    </>   
  )
}

export default HomePage