import styled from 'styled-components';
import { Button } from '../styled/Button';
const Home=({toggle})=> {
  return (
    <Container>
        <div className="image">
            <img src='/images/dices.png'/>
        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}
export default Home

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;

    h1{
    font-size: 96px
   }
`;
   

