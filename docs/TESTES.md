# Registro dos testes - GeoPoint

Aluno(a): KÉLEN CAMARGO DOS SANTOS
Data da execução: 26/11/2026
API usada: http://localhost:8080/api/points

| Teste | Resultado esperado | Resultado observado / evidência | Situação |
| --- | --- | --- | --- |
| GET da API no navegador | Lista JSON | Lista JSON [] vazia | Lista JSON válida, significa que a consulta funcionou e não existem pontos cadastrados.
| Rotas e menu | Cinco rotas acessíveis, com menu disponível nas telas. | A URL /pontos/novo exibiu a tela inicial Cadastro e edição de ponto, com os links Lista de pontos e Cadastrar ponto e o rodapé GeoPoint. Evidência: print da aplicação | Parcial: rota de cadastro confirmada; resultados das demais rotas ainda não registrados. |
| Aplicação dos estilos e exibição das páginas | Menu estilizado e conteúdo visível nas rotas /pontos e /pontos/novo. | As duas páginas exibiram fundo verde-escuro, textos claros e destaque laranja no link ativo. Durante a navegação, o menu, o título e o rodapé permaneceram visíveis. | Aprovado |
| Passagem de props — inspeção do código | Um componente pai enviar dados e funções para um componente filho. | Em FiltroPontos.jsx, o componente CampoTexto recebe rotulo="Filtrar pontos" como dado e onChange como função. Em CampoTexto.jsx, rotulo é utilizado no label, enquanto value e onChange são repassados ao input por meio de {...props}. | Aprovado na inspeção do código |
