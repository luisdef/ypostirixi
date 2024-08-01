<div align='center'>
    <img width="120" src='client/public/ypostiriki.svg'>
    <h1>ypostirixi</h1>
    <span><strong>Suporte em TI.</strong></span>
</div>

## Introdução

Sistema teste de suporte para a área corporativa de Tecnologia de Informação.
Apresentação do framework de desenvolvimento web Flask escrito em Python para a disciplina de Programação IV.

## Para rodar a aplicação

### Parte servidor

#### Ambiente Linux (distros Debian):

Para configuração do ambiente a fim de rodar o servidor Flask em Python, primeiramente é necessário instalar alguns pacotes de ferramentas que são utilizadas pelo servidor Flask, conectores MySQL e build.

Para começar, é necessário já possuir instalado na máquina o Python versão 3.10 ou superior (versão 3.12.4 recomendada).

Instale então os seguintes pacotes:

```sh
sudo apt install python3-dev default-libmysqlclient-dev build-essential pkg-config python3-pip python3-venv
```

É recomendado executar a aplicação por meio de um ambiente virtual em Python, a fim de haver uma instância
do interpretador de Python com apenas os pacotes que serão necessários para a execução.

Com o ambiente virtual Python propriamente instalado e ativado, é necessário instalar (via pip) os pacotes que
serão usados pela aplicação.


```sh
pip3 install -r requirements.txt
```

Execute o comando abaixo para rodar o servidor backend da aplicação.

```sh
flask run -h localhost -p 8080
```

### Parte cliente

É necessário ter instalado Node.JS na máquina.

Para rodar a aplicação do cliente, é necessário se deslocar ao diretório `client/` e executar os seguintes comandos:

```sh
npm install
npm run dev # para desenvolvimento
```

## Contribuidores

- Luis Felipe Assmann (luis.assmann.1234@gmail.com);

## Licença

Esse software está sob licença GNU General Public License versão 3.
