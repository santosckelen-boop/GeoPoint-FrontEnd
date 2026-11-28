# GeoPoint - CRUD de pontos geográficos

Aluno(a): KÉLEN CAMARGO DOS SANTOS
RA: 1102339
Curso: Ciência da Computação
Disciplina: Frontend

Frontend para cadastrar, listar, filtrar, consultar, editar e excluir pontos geográficos na GeoPoint API.

## Tecnologias

React com JavaScript, Vite, React Router DOM e CSS.
A API oficial usa Java/Spring Boot e PostgreSQL.

## URL da API

- Origem usada: `http://localhost:8080`
- Recurso: `http://localhost:8080/api/points`
- Arquivo das requisições: `src/services/api.js`
- Para outra origem, crie `.env` a partir de `.env.example`, ajuste `VITE_API_URL` e reinicie o Vite.
- O identificador é um UUID em texto, gerado pela API.

## Como executar

### 1. Iniciar a API oficial

Tenha Java 17 ou superior e PostgreSQL instalados. Obtenha o backend oficial indicado para o trabalho:
https://github.com/1139749-maker/GeoPoint

No GitHub, clique em **Code > Download ZIP** e extraia o arquivo. A pasta do backend é a que contém `pom.xml` e `mvnw.cmd`; renomeie-a para `GeoPoint-master` para manter os caminhos usados abaixo.

No pgAdmin, crie o banco `geo_point` e depois a tabela `points`.
Os scripts estão em `docs/api/01_criar_banco.sql` e `docs/api/02_criar_tabela.sql`.
Execute o primeiro conectado a `postgres` apenas se o banco não existir; execute o segundo conectado a `geo_point`.

Em PowerShell aberto na pasta `GeoPoint-master`, configure as credenciais do seu PostgreSQL e execute:

```powershell
$env:SPRING_DATASOURCE_USERNAME="postgres"
$env:SPRING_DATASOURCE_PASSWORD="SUA_SENHA_LOCAL"
.\mvnw.cmd spring-boot:run
```

Para essa alternativa, tenha um JDK completo instalado. Se usar o pacote de apoio com a mesma API já compilada, execute `java -jar api-oficial.jar` na pasta que contém o JAR, após configurar as credenciais nesse terminal.

Confirme no navegador que `http://localhost:8080/api/points` mostra uma lista JSON.

### 2. Iniciar o frontend

Tenha uma versão LTS atual do Node.js compatível com Vite. Abra o terminal na pasta deste frontend:

```powershell
npm.cmd install
npm.cmd run dev
```

Abra o endereço informado pelo terminal e acrescente `/pontos`, por exemplo `http://localhost:5173/pontos`.
Mantenha os terminais do frontend e da API abertos.
Em terminais fora do Windows, use `npm` no lugar de `npm.cmd`.

### 3. Gerar a versão de produção

```powershell
npm.cmd run build
```

## Rotas

| Tela | Rota |
| --- | --- |
| Listagem | `/pontos` |
| Cadastro | `/pontos/novo` |
| Detalhe | `/pontos/:id` |
| Edição | `/pontos/:id/editar` |
| Página não encontrada | `*` |

## Organização

- `src/pages`: telas da aplicação.
- `src/components`: Navbar, tabela, linha, filtro, formulário, botão, campo e mensagem.
- `src/services/api.js`: cinco funções para acessar a API com fetch.
- `src/index.css`: estilos e adaptação para celular.
- `docs/DIARIO_DESENVOLVIMENTO.md`: registro das etapas realizadas.
- `docs/TESTES.md`: resultados observados nos testes.
- `docs/REFERENCIA_VISUAL.md`: conferência do protótipo.

## Funcionamento

A listagem é obtida pela API. O filtro é local, por nome ou descrição, sem diferenciar maiúsculas. Cadastro e edição reutilizam o mesmo formulário. O nome é obrigatório e tem até 100 caracteres; a descrição é opcional e tem até 255. As coordenadas são obrigatórias, convertidas com Number e verificadas nos intervalos de latitude e longitude. Campos vazios são rejeitados antes do envio. A exclusão pede confirmação e trata a resposta 204 sem ler JSON. O botão Salvar fica desabilitado enquanto a requisição está em andamento.

## Referência visual

Protótipo indicado pelo professor:
https://www.figma.com/design/URbGgm66WeokwWRRh1BvCg/CHIAVE---Prot%C3%B3tipo?node-id=2260-412&t=4ZVgavA7CVcYQAz1-1

## Referência visual e adaptações

A interface utiliza como referência o protótipo CHIAVE no Figma. Foram conferidos cores, tipografia, botões, campos e cartões das telas de Login e Início. A paleta confirmada inclui verde-escuro (#18372E), verde-claro (#83B29B), menta (#D5E9DD), texto claro (#F5F2E8) e destaque laranja (#A64E26). A interface utiliza a fonte Inter, confirmada no protótipo do Figma e carregada pelo Google Fonts.

Para o CRUD GeoPoint, adaptei esses elementos para o menu, os formulários de cadastro e edição e a apresentação dos detalhes. A tabela e os botões Ver, Editar e Excluir foram organizados conforme as necessidades da atividade. As larguras e os espaçamentos foram ajustados para notebook e celular.

A versão inicial foi construída com algumas informações incorretas. Posteriormente, a consulta ao arquivo de forma mais detalhada permitiu confirmar as propriedades.

## Prints da aplicação

### Listagem

![Listagem](docs/prints/listagem.png)

### Filtro

![Filtro](docs/prints/filtro.png)

### Cadastro

![Cadastro](docs/prints/cadastro.png)

### Cadastro Sem nome

![CadastroSemNome](docs\prints\CadastroSemNome.png)

### Cadastro Sem Latitude

![CadastroSemLatitude](docs\prints\CadastroSemLatitude.png)

### Detalhe

![Detalhe](docs/prints/detalhe.png)

### Edição

![Edição](docs\prints\Edição.png)

### Registro ausente

![Registro Ausente](docs\prints\RegistroAusente.png)


## Testes e observações

**Data da execução:** 27/11/2026.

Os resultados e as evidências estão registrados em [docs/TESTES.md](docs/TESTES.md). As verificações foram realizadas em ambiente local, no Windows, utilizando a API na porta 8080 e o frontend pelo Vite.

O build gerou os arquivos de produção em 4,76 segundos e apresentou o aviso PLUGIN_TIMINGS, relacionado ao tempo de processamento dos plugins.