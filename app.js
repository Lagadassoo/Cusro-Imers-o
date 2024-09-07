function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (!campoPesquisa) { 
        section.innerHTML = "<p>Digite uma pesquisa</p>"
        return}
    
        campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";
  
    // Itera sobre cada dado da pesquisa e constrói o HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      sinopse = dado.sinopse.toLowerCase()
      tags = dado.tags.toLowerCase()
      if(titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>
            <p class="titulo">${dado.titulo}</p>
          </h2>
          <p class="genero">Gênero: ${dado.genero}</p>
          <p class="data de lancamento">Data de lançamento: ${dado.dataLancamento}</p>
          <p class="sinopse">Resumo do jogo: ${dado.sinopse}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
    }

    if (!resultados){
        resultados = "<p>Nenhum resultado encontrado</p>"
    }
  
    // Insere o HTML gerado na seção selecionada, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }


