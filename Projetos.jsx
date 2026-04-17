import React from 'react';

const Projetos = () => {
  const meusProjetos = [
    {
      titulo: "Portifólio Profissional",
      descricao: "Primeira versão de meu Portifólio desenvolvido com HTML, CSS e JavaScript.",
      link: "https://github.com/risoneide295-star/RRCportfolio-mvp"
    },
    {
      titulo: "App TEA Modify",
      descricao: "Aplicativo pensado para trazer recursos educacionais acessíveis e funcionais.",
      link: "https://github.com/risoneide295-star"
    },
    {
      titulo: "Sistema de Organizaçao de Tarefas",
      descricao: "Aplicação simples para organizar atividades, estudos e compromissos.",
      link: "https://github.com/risoneide295-star"
    }
  ];

  return (
    <section id="projetos">
      <h2 style={{textAlign: 'center', marginTop: '20px'}}>Meus Projetos</h2>
      <div id="lista-projetos">
        {meusProjetos.map((projeto, index) => (
          <div className="card" key={index}>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <br />
            <a href={projeto.link} target="_blank" rel="noreferrer">Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;