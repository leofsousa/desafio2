import gitLogo from '../../assets/gitLogo.png';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="gitHub logo"/>
    </Container>
  );
}

export default App;
