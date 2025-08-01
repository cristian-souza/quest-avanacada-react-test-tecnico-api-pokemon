# 🔥 Pokédex 

Uma Single Page Application (SPA) para listagem e visualização de detalhes de Pokémons utilizando a PokéAPI.

<div align="left">
    <img width="960" height="540" alt="pokedex-branco" src="https://github.com/user-attachments/assets/86bec111-b065-4bd1-9713-3d0a2c534932" />
</div>

<br>

<div align="left">
    <img width="960" height="540" alt="pokedex-escuro" src="https://github.com/user-attachments/assets/2f76a066-b225-4d2c-ab79-0bd5059c026b" />
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
   <img width="190em" height="998" alt="pokedex-branco" src="https://github.com/user-attachments/assets/01a05599-1d8a-40ce-a322-b2a1a0def92b" />
</div>

- **Escuro**: Fundo escuro com texto claro
  <div align="left">
   <img height="190em" alt="pokedex-escuro" src="https://github.com/user-attachments/assets/7bac0918-946f-49f8-bc45-0fccf5f8688d" />
</div>


O tema é alternado através do botão no cabeçalho da aplicação.

## 📱 Responsividade

Interface responsiva que se adapta a diferentes tamanhos de tela.

## 🔗 API

Utiliza a [PokéAPI](https://pokeapi.co/) para buscar dados dos pokémons.

---
