# Roteiro

## Tooling
Certifique-se de que o Git, NPM, Bower e http-server estejam instalados na máquina. Para isso, abra o prompt de comando e digite os seguintes comandos:
### Git
```
git --version
```
Caso o Git não esteja instalado, baixe a versão mais nova em [https://git-scm.com/](https://git-scm.com/).
### NPM
```
npm -v
```
Caso não esteja instalado, baixe a versão mais nova do Node.js em [https://nodejs.org](https://nodejs.org), que já acompanha a versão mais nova do NPM.
### Bower
```
bower -v
```
Caso não esteja instalado, abra uma nova janela do prompt de comando e digite
```
npm install -g bower
```
### http-server
```
http-server -h
```
Caso não esteja instalado, digite
```
npm install -g http-server
```
em uma janela do Prompt de Comando

## Clonando o repositório
Abra uma janela do prompt de comando, navegue até a pasta desejada e digite
```
git clone https://github.com/zbra-solutions/ecet-puc-sp-16.git
```

## Instalando as dependências
Navegue até a pasta */client* dentro da pasta do repositório e digite
```
bower install
```

## Rodando o servidor local
Navegue até a pasta */client/app* dentro da pasta do repositório e digite
```
http-server -p <porta>
```

## Abrindo o site
Depois que o http-server estiver rodando, abra uma janela de seu browser favorito a navegue até *http://localhost:&lt;porta&gt;*