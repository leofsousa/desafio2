import gitLogo from "../assets/gitLogo.png";
import { Container } from "./styles";
import Input from "../components/Input/index";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";
import Button from "../components/Button/index";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`/repos/${currentRepo}`);
      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);
        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("");
          return;
        }
      }
    } catch (error) {
      console.error("Erro ao buscar repositório:", error);
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos((prev) => prev.filter((repo) => repo.id !== id));
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="gitHub logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo, index) => (
        <ItemRepo
          handleRemoveRepo={handleRemoveRepo}
          key={`${repo.id}-${index}`}
          repo={repo}
        />
      ))}
    </Container>
  );
}

export default App;
