# Testes em Cypress utilizando CI com Jenkins
_Este projeto demonstra a integração do Cypress com o Jenkins para um pipeline de CI/CD eficiente. Foi adaptado a partir de um projeto da EBAC, com foco no uso do Jenkins como ferramenta de automação e integração contínua._

**Jenkins**: Ferramenta de CI/CD utilizada para configurar, gerenciar e automatizar os testes.

## Clonando e executando em sua máquina
### Pré-requisito:

-Node.js - Você encontra em: 
+ [Node.js](https://nodejs.org/pt)

-Para configurar o Jenkins em sua máquina, siga o guia oficial:
+ [Jenkins](https://www.jenkins.io/doc/book/installing/)

Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/philfujisawa/cypress-jenkins.git
```
```
cd path/to/directory/cypress-jenkins.git
```

#### Para instalar as dependências:
```
npm install 
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.


### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

-Faker: Biblioteca para geração de massa de dados: https://www.npmjs.com/package/faker

### Obrigado!