import gitLogo from "../assets/gitLogo.png";
import { Container } from "./styles";
import Input from "../components/Input/index";
import ItemRepo from "../components/ItemRepo";

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="gitHub logo" />
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
