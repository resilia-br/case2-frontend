# case2-frontend

Case 2 - Site do EstudoApp (Frontend)

## Sobre o projeto

O projeto foi desenvolvido com o intuito de criar um site para o EstudoApp, uma aplicação que ajuda os estudantes a se organizarem e estudarem melhor. O site foi desenvolvido com ReactJS e React Bootstrap. Para gestão do conteúdo é possível acessar a rota /login e informar usuário e senha cadastrados no back-end, essa rota recebe um token que fica armazenado no localStorage do navegador e é utilizado para acessar as rotas do admin.

## Pré-requisitos

- [Node.js](https://nodejs.org/en/) (na versão 16 ou superior)
- [NPM](https://www.npmjs.com/)

## Como executar?

```bash
npm install
npm run dev
```

## Passo a passo do desenvolvimento

### 1. Criar o projeto

```bash
npm create vite@latest estudoapp-site --template react
```

### 2. Instalar as dependências

```bash
cd estudoapp-site
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install react-router-bootstrap
```

#### 2.1 Importar css do bootstrap

Adicione a seguinte linha em seu `main.jsx`:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
```

Adicione a seguinte linha em seu `index.html`:

```js
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" /> 
```

### 3. Excluir arquivos que não serão utilizados

Exclua os arquivos de configuração inicial do vite, deixando apenas uma div no arquivo App.jsx

### 4. Configurando a comunicação com o back-end

Crie a pasta api, e dentro inclua um arquivo com as rotas que foram criadas em sua api. Criando funções para cada ação do back-end. (Exemplo: [CmsApi.js](/estudoapp-site/src/api/CmsApi.js))

### 5. Criando as páginas do site

Crie a pasta pages, e dentro inclua um arquivo para cada página do site. (Exemplo: [Home.jsx](/estudoapp-site/src/pages/Home.jsx))

#### 5.1 Criando os componentes do site

Durante a criação das páginas aproveite para componentizar seu código. Crie a pasta components, e dentro inclua um arquivo para cada componente do site. (Exemplo: [Menu.jsx](/estudoapp-site/src/components/Menu.jsx))

### 6. Criando as rotas do site

Crie a pasta routes, e dentro inclua um arquivo com a configuração das rotas do site, aqui estamos utilizando o `react-router-dom` para isso. (Exemplo: [Rotas.jsx](/estudoapp-site/src/routes/Rotas.jsx))

### 7. Configurando as páginas do lado do admin

Crie a pasta admin, dentro da pasta pages, e dentro inclua um arquivo para cada página da administração. Aqui nesse projeto estamos utilizando um exemplo de login simples com um token que é enviado pelo back-end após acessar a tela de login (Exemplo: [AdminFuncionalidades.jsx](/estudoapp-site/src/pages/admin/AdminFuncionalidades.jsx) e [AdminLogin.jsx](/estudoapp-site/src/pages/Login.jsx))
