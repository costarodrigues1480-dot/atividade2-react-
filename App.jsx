import Projetos from './components/Projetos';
import './App.css';
import Projetos from './components/Projetos'; // Importando o componente criado

function App() {
  return (
    <div className="App">
      <header>
        <h1>Risoneide Rodrigues da Costa</h1>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <img src="/perfil.jpg.jpeg" alt="Foto de Risoneide" id="foto-perfil" />
          <p>Professora, Bacharela em Administração e Especialista em Tecnologia e Inovações WEB, atualmente cursando Tecnológo em Sistemas para Internet.</p>
          <p>Tenho experiência com HTML5, CSS3, JavaScript, e estou aprofundando em React e Angular.</p>
        </section>

        {/* Uso do Componente de Projetos (Exigência da Atividade) */}
        <Projetos />

        <section id="contato">
          <h2>Contato</h2>
          <p><strong>Email:</strong> <a href="mailto:Rodrigues50@gmail.com">Rodrigues50@gmail.com</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/55899989897658" target="_blank">(89) 99898-97658</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/risoneide295-star" target="_blank">github.com/risoneide295-star</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 - Desenvolvido por Risoneide Rodrigues da Costa</p>
      </footer>
    </div>
  );
}

export default App;