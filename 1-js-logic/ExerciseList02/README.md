# Lista de Exercícios 2 - Manipulação de Objetos e Arrays em JavaScript

Esta lista de exercícios tem como objetivo praticar a manipulação de objetos e arrays em JavaScript. Aqui você encontrará exercícios que envolvem iteração, filtragem, cálculos e operações sobre objetos e arrays de objetos.

## Exercícios

### 1. Manipulação de Objetos
- **Acessando Propriedades de Objetos**: Criar um objeto `carro` e iterar sobre suas propriedades.
- **Verificando Propriedades**: Verificar e adicionar uma propriedade no objeto `livro`.
- **Filtrando Propriedades de Objetos**: Retornar um novo objeto filtrado por valor específico.

### 2. Manipulação de Arrays de Objetos com `for of`
- **Iterando Sobre Arrays de Objetos**: Exibir informações de um array de objetos `pessoas`.
- **Calculando Valores em Arrays de Objetos**: Calcular a média de notas dos alunos.
- **Filtrando Arrays de Objetos**: Filtrar funcionários por salário.

### 3. Manipulação de Arrays de Objetos com `forEach`
- **Modificando Objetos em um Array**: Aplicar desconto em produtos.
- **Criando Novos Arrays a Partir de Objetos**: Criar um novo array contendo apenas os títulos dos filmes.
- **Contabilizando Elementos com uma Condição**: Contar quantos clientes têm mais de 30 anos.

### 4. Combinação de Estruturas
- **Criando Relatórios com Objetos e Arrays**: Calcular o valor total de vendas.
- **Agrupando Elementos com `forEach`**: Agrupar quantidade total de produtos por cliente.
- **Atualizando um Array de Objetos**: Atualizar a quantidade dos produtos no estoque.
- **Implementando um Carrinho de Compras**: Calcular o valor total do carrinho.
- **Manipulando Objetos Complexos**: Iterar sobre departamentos e funcionários de uma empresa.
- **Filtrando e Somando Valores**: Calcular saldo final de transações.

## Tecnologias Necessárias

- **Node.js**: Para executar os exercícios em JavaScript no terminal.
- **prompt-sync**: Para entradas no terminal (em caso de necessidade de interação).
- **Code Runner**: Para rodar o código diretamente no VSCode.

## Como Configurar o Ambiente


## Instalação do Node.js

### 1. **Instalação no Windows**

1. Acesse o site oficial do [Node.js](https://nodejs.org/).
2. Baixe a versão recomendada (LTS) para Windows.
3. Abra o instalador baixado e siga as instruções do assistente de instalação.
4. Marque a opção **"Automatically install the necessary tools"** (para instalar as ferramentas necessárias).
5. Após a instalação, abra o terminal e verifique se o Node.js foi instalado corretamente:
   ```bash
   node -v
   npm -v


### 2. **Instalação no Linux**
Para distribuições baseadas em Debian/Ubuntu:
## 1. Abra o terminal.
## 2. Atualize os pacotes:
```bash
    sudo apt update
    sudo apt upgrade
```

## 3. Instale o Node.js e o gerenciador de pacotes npm:
```bash
    sudo apt install nodejs npm
```
## 4. Verifique a instalação:
```bash
    node -v
    npm -v
```
## Para distribuições baseadas em Fedora/RHEL:
## 1. Abra o terminal.
## 2. Instale o Node.js:
```bash
    sudo dnf install nodejs
```
## 3. Verifique a instalação:
```bash
    node -v
    npm -v
```

### 3. Instalação no macOS

1. Baixe o Node.js no site oficial (versão LTS recomendada).
2. Após o download, abra o arquivo .pkg e siga as instruções do assistente de instalação.
3. Verifique se o Node.js foi instalado corretamente:
```bash
    node -v
    npm -v
```
## Outra alternativa no macOS é usar o Homebrew:

## 1. Instale o Homebrew (se ainda não tiver):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 2. Instale o Node.js:

```bash
    brew install node
```

## 3. Verifique a instalação:
```bash
    node -v
    npm -v
```
---

### Instalação de Dependências

## 1. Instalar prompt-sync
prompt-sync é uma biblioteca para capturar entradas de usuário no terminal. Após instalar o Node.js, você pode instalá-la facilmente com o npm.

No terminal, execute o seguinte comando:
```bash
npm install prompt-sync
```

## 2. Instalação da Extensão Code Runner no VS Code
Code Runner é uma extensão que permite executar código diretamente no VS Code.

1. Abra o Visual Studio Code.
2. No menu lateral, clique no ícone de Extensões (ou pressione `Ctrl+Shift+X`).
3. Na barra de pesquisa, digite "Code Runner".
4. Clique na extensão Code Runner e, em seguida, clique em Instalar.
5. Após a instalação, você poderá executar seus arquivos de código clicando com o botão direito e escolhendo a opção Run Code, ou usando o atalho `Ctrl+Alt+N`.
6. Como Verificar a Instalação
7. Após instalar o Node.js e as dependências, use os seguintes comandos para verificar se tudo está funcionando corretamente:
```bash
node -v   # Verifica a versão do Node.js
npm -v    # Verifica a versão do npm
```

Se ambos os comandos retornarem versões, então o Node.js e o npm estão prontos para uso.

---

### Executando Arquivos com o Code Runner no VS Code

1. Abra o arquivo JavaScript no VS Code.
2. Clique com o botão direito no editor e selecione Run Code, ou use o atalho `Ctrl+Alt+N`.
3. O código será executado diretamente no terminal integrado do VS Code.

# Desenvolvedor

[<img loading="lazy" src="https://avatars.githubusercontent.com/u/134724019?v=4" width=115><br><sub>Ronaldo Navarro</sub>](https://github.com/ronaldosnavarro)
- LinkedIn: https://www.linkedin.com/in/ronaldonavarro

---