import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Trilhas from "./components/Trilhas";
import Beneficios from "./components/Beneficios";
import Coordenacao from "./components/Coordenacao";
import Cadastro from "./components/Cadastro";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Trilhas />
        <Coordenacao />
        <Cadastro />
      </main>
      <Footer />
    </>
  );
}

export default App;