# App - Msb
  * Hospedado no heroku: https://msb-front.herokuapp.com/
### Bem vindo a aplicação - parte do Front end

## TECNOLOGIAS UTILIZADOS
<ul>
  <li>React</li>
  <li>React-router-dom</li>
  <li>Dotenv</li>
  <li>React test library</li>
  <li>Axios</li>
</ul>

# Instruções para iniciar o projeto

1. Clone o repositório
  * Chave SSH
    * `git clone git@github.com:GustavoSFer/msb-front-end.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd msb-front-end`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start`

## Utilizando o projeto com o Docker

1. Crie a imagem no docker
  * docker build -t <'NomeDaImagem'> <'LocalOndeestaODockerFile'>
  * Exemplo
``` docker build -t msb . ```
2. Crie o container no docker
  * docker container run -p 3000:3000 <'NomeDaImagem'>
  * Exemplo
``` docker container run -p 3001:3001 msb ```

## Observação: Banco de dados Utilizado no projeto MySQL. Certifique-se que ja tenha em seu computador ou rodando em um container Docker
 -- Link: https://hub.docker.com/_/mysql

## Configurando variavel de ambiente API
  * Crie um arquivo .env e informe nele a URL do banco
  ``` REACT_APP_API_URL=https://.... ```
Se não foi informado por padão será utilizado 'http://localhost:3001'
