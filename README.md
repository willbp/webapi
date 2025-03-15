# 🚀 Projeto Piloto e Tutorial Completo para Aprendizado de Cypress
### _Este projeto foi subdividido em testes End-to-End e de API, também foi implementado uma pipeline no GitHub Actions_
O projeto foi realizado em 3 URL's diferentes, sendo 2 para API e uma para E2E.
**E2E:** Realizados testes em um formulário de cadastro no site https://automationpratice.com.br/register a fim de apresentar diferentes meios de dificuldade para realizar testes, do modo mais básico, ao mais avançado utilizando page objects com commands, e fixtures.

**API:** Realizados testes em 2 API's uma foi https://restful-api.dev/ que é uma API pública para treinar testes e foram executados os métodos GET/POST/PUT/DELETE, está API não precisava de autênticação. Com isso resolvi utilizar uma segunda API a fim de testar uma api com autenticação, então foi utilizado outra api pública https://restful-booker.herokuapp.com/apidoc/ nela foi executado um caso de teste isolado autenticando, coletando o token e alterando um item.

### ⏳ Pré-requisitos
Para executar o projeto, será necessário instalar e utilizar:
* [Node.js](https://nodejs.org/en/download/)
* [Cypress](https://docs.cypress.io/app/get-started/why-cypress)  - será instalado via terminal
* [Visual Studio Code](https://code.visualstudio.com/download) - ou outra IDE da sua escolha.

### 💻 Da Tecnologia
* **Cypress**: É uma ferramenta de automação de testes e2e para aplicações web. Com o cypress é possível testar a interface do usuário, garantindo que os elementos funcionem conforme o esperado. Também é utilizado para testes de integração verificando se diferentes partes do sistema funcionam bem juntas, por exemplo: Se o front-end está se comunicando corretamente com a API; também é possível fazer testes isolados de API identificando sua response e verificar os mais diferentes cenários criados.
* **O Cypress está em constante evolução, bem como nossa garra em querer aprender constantemente novas tecnologias, não podemos parar, pois a única coisa que ninguém pode nos tirar é o nosso conhecimento.**

### 🍀 Quer executar este projeto?
Após baixar o projeto e ter os pré-requisitos instalados, execute dentro da pasta do projeto em um terminal o comando npm install, com isso será instalado todas dependências automaticamente, após é só rodar npx cypress open e escolher seu navegador e qual teste deseja rodar.

### ✏️ Breve tutorial de como iniciar um projeto em Cypress:
###### Chegou aqui e nunca viu nada sobre Cypress? Dicas de como iniciar seu projeto em Cypress do zero
* Instalar node
* Criar uma pasta onde será seu projeto
* Abrir o terminal e ir até a pasta criada
* npm init -y (inicia o node no seu projeto)
* npm install cypress (instala pacote cypress no projeto)
* npx cypress install --force (instala o cypress em sua última versão)
* npx cypress open (inicia o cypress pela primeira vez)
* Nunca viu nada sobre cypress? Na tela que o cypress abriu clique em E2E>Continue>Selecione um navegador, após é possível clicar em Scaffold example specs>Okay, I got it, com isso será feito vários exemplos para você poder analisar e estudar previamente antes de por a mão na massa.
* Abrir seu projeto com a IDE da sua preferência e seja feliz.

### ✏️ Breve tutorial de como publicar seu projeto pela primeira vez no GitHub:
*     1 - Criar seu repositório no GitHub
      2 - Linkar seu projeto com o GitHub
          2.1 - iniciar o git no projeto - terminal: git init
           2.2 - linkar o projeto com o GitHub - terminal: git remote add origin https://github.com/SeuUser/SeuProjeto.git
           2.3 - caso não tenha criado uma branch ainda, você precisa criar uma - terminal: git branch -M 'x'
           2.4 - criar um pacote com os dados a serem enviados - terminal: git add .
           2.5 - adicionar um comentário sobre o que vai ser enviado neste pacote -  - terminal: git commit -m "projeto piloto"
           2.6 - caso seja solicitado entre com suas credenciais
               2.6.1 - git config --global user.email SeuEmail
               2.6.2 - git config --global user.name SeuNomeDeUsuario
               2.6.3 - realize o commit novamente - terminal: git commit -m "projeto misto piloto"
           2.7 - enviar código da nossa branch local para a branch do github 'online/remota' - git push -u origin x

### ✏️ Breve tutorial de como configurar uma pipeline do zero:
###### O GitHub Actions é uma plataforma de integração e entrega contínua, com ela é possível configurar uma pipeline para  automatizar testes e outras tarefas, como deploys e builds.

Criando sua pipeline do zero:
*         1 - crie uma branch - git branch -m feature/github-actions
          2 - Criar estrutura para o github actions no projeto
        	 2.1 - Na raiz do projeto > Nova pasta .github
        	 2.2 - Nova pasta dentro de .github > workflows
        	 2.3 - Criar um arquivo dentro de .github > workflows > pipeline.yml
        			2.3.1 - Nessa configuração será executada a pipeline toda vez que for feito um PR para branch master.
        			2.3.2 - Executando seus respectivos jobs em uma 'máquina' que utiliza ubuntu
        			2.3.3 - E roda os passos para clonar o projeto e executar o projeto
###### Lista de Actions utilizada no projeto:
* [Checkout V4](https://github.com/marketplace/actions/checkout) 
* [Cypress-io](https://github.com/marketplace/actions/cypress-io) 

###### Após é só enviar sua branch e testar a pipeline
*         1 - git add .
          2 - git commit -m "Criando arquivo de pipeline"
          3 - git push origin nomeDaSuaBranch (neste momento a sua branch local está sendo enviada para o projeto remoto do GitHub)

No GitHub crie um Pull Request, e será iniciado a execução da pipeline! Com isso vai começar a rodar a pipeline, deu sucesso? pode fazer o merge do pull request, caso contrário você precisa verificar e corrigir os erros nos seus testes.

**Autor: _William Bortoluzzi Pereira_** ❤️ 03.25
