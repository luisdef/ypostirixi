<div align='center'>
    <img width="95" src='client/public/ypostiriki.svg'>
    <h1>ypostirixi</h1>
</div>

## Introdução

Sistema teste de suporte para a área corporativa de Tecnologia de Informação.
Apresentação do framework de desenvolvimento web Flask escrito em Python para a disciplina de Programação IV.

TODO:

- [ ] Preparação do ambiente de desenvolvimento com um ambiente virtual rodando Python 3.10+;
- [ ] Estrutura da Base de dados;
- [ ] Base do servidor de cliente com Vite+ReactTS;

## Para rodar a aplicação

É recomendado executar a aplicação por meio de um ambiente virtual em Python, a fim de haver uma instância
do interpretador de Python com apenas os pacotes que serão necessários para a execução.

```sh
pip install -r requirements.txt
```

Com o ambiente virtual Python propriamente instalado e ativado, é necessário instalar (via pip) os pacotes que
serão usados pela aplicação.

Comando abaixo para rodar o servidor backend da aplicação.

```sh
flask run --debug
```

Para rodar a aplicação do cliente, é necessário se deslocar ao diretório `client/` e executar os seguintes comandos:

```sh
npm install
npm run dev # para desenvolvimento
```

## Contribuidores

- Luis Felipe Assmann (luis.assmann.1234@gmail.com);

## Licença

Esse software está sob licença GNU General Public License versão 3.
