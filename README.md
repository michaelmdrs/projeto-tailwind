# Projeto de Estudo Next.js + Tailwind CSS 

Este projeto é um ambiente de estudo para explorar e aprender o poder do Tailwind CSS em conjunto com o Next.js.

##  Tecnologias Utilizadas

* **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
* **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
* **Node.js**: Ambiente de tempo de execução JavaScript.
* **npm ou Yarn**: Gerenciador de pacotes.

##  Estrutura do Projeto

![image](https://github.com/user-attachments/assets/94419afe-324c-4868-a1a9-c42fbf49b5e8)


##  Como Executar o Projeto

1.  Clone o repositório:

    ```bash
    git clone [https://github.com/dolthub/dolt](https://github.com/dolthub/dolt)
    cd meu-projeto
    ```

2.  Instale as dependências:

    ```bash
    npm install # ou yarn install
    ```

3.  Execute o servidor de desenvolvimento:

    ```bash
    npm run dev # ou yarn dev
    ```

4.  Abra o navegador em `http://localhost:3000`.

##  Personalizando o Tailwind CSS

O arquivo `tailwind.config.js` permite personalizar as configurações do Tailwind CSS, como cores, fontes e breakpoints.

```javascript
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // ou 'media' ou 'class'
  theme: {
    extend: {
      colors: {
        'meu-azul': '#1DA1F2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

##  Como Executar o Projeto

1.  Clone o repositório:

    ```bash
    git clone [https://github.com/dolthub/dolt](https://github.com/dolthub/dolt)
    cd meu-projeto
    ```

2.  Instale as dependências:

    ```bash
    npm install # ou yarn install
    ```

3.  Execute o servidor de desenvolvimento:

    ```bash
    npm run dev # ou yarn dev
    ```

4.  Abra o navegador em `http://localhost:3000`.

##  Personalizando o Tailwind CSS

O arquivo `tailwind.config.js` permite personalizar as configurações do Tailwind CSS, como cores, fontes e breakpoints.

```javascript
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // ou 'media' ou 'class'
  theme: {
    extend: {
      colors: {
        'meu-azul': '#1DA1F2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

<!-- end list -->
