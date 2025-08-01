# 🔥 Pokédex 

Uma Single Page Application (SPA) para listagem e visualização de detalhes de Pokémons utilizando a PokéAPI.

<div align="left">
    <img height="300em" src="img/pokedex-branco.JPG"/>
</div>

<br>

<div align="left">
    <img height="295em" src="img/pokedex-escuro.JPG"/>
</div>

<br>

<div align="left">
        <video width="320" height="240" controls>
        <source src="video/pokedex.mp4" type="video/mp4">
</video> 
</div>

## 🚀 Funcionalidades

- **Listagem de Pokémons**: Exibe 10 pokémons iniciais com imagem e nome
- **Carregamento incremental**: Botão "Carregar mais" para buscar mais 10 pokémons
- **Detalhes do Pokémon**: Página com informações completas (movimentos, habilidades, tipos)
- **Alternador de tema**: Botão para alternar entre tema claro e escuro
- **Navegação**: Sistema de rotas para navegação entre páginas

## 🛠️ Tecnologias Utilizadas

- **React.js** - Biblioteca principal para construção da interface
- **AXIOS** - BibliotecaJavaScript, que facilita a realização de requisições HTTP
- **Context API** - Gerenciamento de estado do tema (claro/escuro)
- **styled-components** - Estilização dos componentes
- **react-router-dom** - Navegação entre páginas
- **PokéAPI** - API para dados dos pokémons

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/quest-avanacada-react-test-tecnico-api-pokemon.git

# Navegue até o diretório
cd quest-avanacada-react-test-tecnico-api-pokemon

# Instale as dependências
npm install

# Execute o projeto
npm start
```

## 🎯 Estrutura

### Página Inicial (Home)
- Lista de pokémons com imagem e nome
- Botão "Carregar mais" para paginação
- Cada pokémon é clicável para acessar os detalhes

### Página de Detalhes
- Imagem do pokémon
- Nome
- Lista de movimentos
- Lista de habilidades com descrições
- Tipos do pokémon

## 🎨 Temas

A aplicação possui dois temas:
- **Branco**: Fundo branco com texto escuro
  <div align="left">
    <img height="190em" src="img/pokedex-branco.JPG"/>
</div>

- **Escuro**: Fundo escuro com texto claro
  <div align="left">
    <img height="185em" src="img/pokedex-escuro.JPG"/>
</div>


O tema é alternado através do botão no cabeçalho da aplicação.

## 📱 Responsividade

Interface responsiva que se adapta a diferentes tamanhos de tela.

## 🔗 API

Utiliza a [PokéAPI](https://pokeapi.co/) para buscar dados dos pokémons.

---

