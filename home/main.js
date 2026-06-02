
async function carregarProjetos() {
    const containerProjetos = document.querySelector(".lista-projetos");
    
    try {
        // 1. Busca o arquivo JSON local
        const resposta = await fetch("assets/projetos.json");
        const projetos = await resposta.json();
        
        // 2. Limpa o HTML atual (remove os templates estáticos)
        containerProjetos.innerHTML = "";

        // 3. Varre o JSON e cria os cards de verdade
        projetos.forEach(projeto => {
            const cardHTML = `
                <li class="project-card mb-4 shadow-sm bg-white rounded overflow-hidden">
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img src="${projeto.imagemURL}" alt="Preview: ${projeto.nome}" class="img-fluid project-img">
                        </div>
                        <div class="col-md-7 p-4 d-flex flex-column justify-content-between">
                            <div>
                                <h3 class="h5 fw-bold text-dark mb-2">${projeto.nome}</h3>
                                <p class="text-muted small">${projeto.descricao}</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <span class="badge bg-dark-subtle text-dark-emphasis">${projeto.tecnologias}</span>
                                <a href="${projeto.repositorio}" target="_blank" class="btn btn-sm btn-outline-primary">
                                    Ver Repositório <i class="bi bi-arrow-right-short"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            `;
            // Insere o card pronto na tela
            containerProjetos.insertAdjacentHTML('beforeend', cardHTML);
        });

    } catch (erro) {
        console.error("Erro ao carregar o JSON:", erro);
        containerProjetos.innerHTML = '<p class="text-danger text-center mt-4">Erro ao carregar a lista de projetos. Tente atualizar a página.</p>';
    }
}

// Dispara a função quando a página abre
carregarProjetos();
