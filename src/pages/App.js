import gitLogo from "../assets/gitLogo.png";
import { Container } from "./styles";
import Input from "../components/Input/index";

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="gitHub logo" />
      <Input />
    </Container>
  );
}

export default App;
