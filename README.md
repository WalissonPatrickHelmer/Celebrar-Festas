# 🎈 Celebrar — Decoração com Balões

Landing page profissional desenvolvida para a **Celebrar**, empresa especializada em decoração com balões para aniversários, chás de bebê, formaturas e eventos temáticos.

O projeto foi desenvolvido com foco em **design moderno, responsividade, experiência do usuário e conversão de visitantes em clientes**, utilizando uma comunicação visual alegre e alinhada ao segmento de festas.

---

## ✨ Demonstração

🔗 **Acesse o projeto:**
Adicione aqui o link publicado no GitHub Pages, Vercel ou Netlify.

---

## 📸 Sobre o projeto

A landing page apresenta a marca Celebrar e seus principais serviços, permitindo que o visitante conheça o trabalho, visualize o portfólio e solicite um orçamento diretamente pelo WhatsApp.

### Principais seções:

* 🏠 **Hero / Página inicial**
* 💡 **Sobre a Celebrar**
* 🎈 **Serviços**
* 🖼️ **Portfólio**
* 💬 **Depoimento**
* 📱 **Contato**
* 🔗 **WhatsApp**
* 📸 **Instagram**
* 📱 **Menu responsivo**
* ⬆️ **Botão voltar ao topo**

---

## 🎯 Objetivo

Criar uma presença digital profissional para a Celebrar, facilitando a apresentação dos serviços e tornando o contato com potenciais clientes rápido e simples.

A página foi pensada para funcionar como uma **vitrine digital**, destacando os trabalhos realizados e direcionando o usuário para o orçamento.

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Google Fonts
* CSS Variables
* CSS Animations
* Intersection Observer API
* WhatsApp URL API
* Responsive Design

---

## 🎨 Identidade visual

A identidade visual foi construída utilizando uma paleta inspirada no universo das festas e balões:

| Cor            | Hexadecimal | Utilização            |
| -------------- | ----------- | --------------------- |
| 🌸 Rosa        | `#E85D75`   | Destaques e chamadas  |
| 🟡 Amarelo     | `#FFC845`   | Elementos decorativos |
| 🩵 Teal        | `#3EC6C1`   | Destaques secundários |
| 🟣 Roxo        | `#8B5FBF`   | Elementos de apoio    |
| 🖤 Roxo escuro | `#2E2438`   | Textos e contraste    |
| 🤍 Creme       | `#FFF8EF`   | Fundo principal       |

As cores e fontes foram organizadas através de **CSS Variables**, facilitando futuras alterações na identidade visual.

---

## 🖋️ Tipografia

O projeto utiliza duas fontes do Google Fonts:

* **Baloo 2** — títulos e elementos de destaque
* **Nunito Sans** — textos e conteúdos gerais

Essa combinação cria uma identidade mais amigável e divertida, adequada ao segmento de festas.

---

## 🎈 Elementos visuais

Um dos diferenciais do projeto é a utilização de **balões criados exclusivamente com CSS**, sem depender de imagens para o elemento decorativo principal.

Os balões possuem:

* Diferentes cores
* Diferentes tamanhos
* Posicionamento responsivo
* Animação de flutuação
* Sombras
* Pequenos detalhes simulando o nó do balão

A animação é construída utilizando `@keyframes` e transformações CSS.

---

## 📱 Responsividade

O site foi desenvolvido seguindo uma abordagem responsiva, adaptando o layout para diferentes tamanhos de tela.

### Desktop

* Navegação horizontal
* Grid de serviços
* Galeria com múltiplas colunas
* Layout dividido para conteúdo e formulário

### Tablet

* Redução das colunas
* Ajuste dos grids
* Conteúdo reorganizado

### Mobile

* Menu hamburger
* Navegação vertical
* Cards em coluna única
* Galeria adaptada para telas menores
* Formulário ocupando toda a largura

As regras responsivas estão implementadas diretamente no CSS.

---

## ⚙️ Funcionalidades JavaScript

O JavaScript é responsável pelas principais interações da página.

### 📱 Menu mobile

Permite abrir e fechar o menu de navegação em dispositivos menores.

### ✨ Scroll Reveal

Os elementos recebem uma animação de entrada quando aparecem na tela, utilizando a **Intersection Observer API**.

### ⬆️ Voltar ao topo

Botão localizado no rodapé que retorna suavemente o usuário ao início da página.

### 📲 Formulário → WhatsApp

O formulário coleta:

* Nome
* Tema da festa
* Data do evento
* Mensagem

Em seguida, o JavaScript monta automaticamente uma mensagem e abre o WhatsApp com os dados preenchidos.

Não existe backend para armazenamento dos dados. O pedido é encaminhado diretamente para o WhatsApp da empresa.

---

## 📂 Estrutura do projeto

```text
celebrar/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── imagens/
│   ├── celebrar-logo.png
│   ├── sobre-decoradora.jpg
│   ├── portfolio-festa-junina.jpg
│   ├── portfolio-hot-wheels.jpg
│   ├── portfolio-festa-rustica.jpeg
│   ├── portfolio-festa-fazendinha.jpeg
│   ├── portfolio-patrulha-canina.jpg
│   ├── portfolio-arco-tradicional-amarelo.jpg
│   ├── portfolio-guirlanda-bluey.jpg
│   ├── portfolio-guirlanda-cha-ursinha.jpg
│   ├── portfolio-guirlanda-pintor-mundo.jpg
│   ├── portfolio-guirlanda-looney-tunes.jpg
│   ├── portfolio-mural-bandeira-brasil.jpg
│   └── portfolio-mural-doces.jpg
│
└── README.md
```

---

## 🚀 Como executar

Como o projeto utiliza apenas **HTML, CSS e JavaScript**, não é necessário instalar dependências ou configurar um servidor backend.

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/celebrar.git
```

### 2. Entre na pasta

```bash
cd celebrar
```

### 3. Execute

Abra o arquivo:

```text
index.html
```

no navegador.

Para desenvolvimento, também é possível utilizar a extensão **Live Server** no VS Code.

---

## 📲 Contato

A página possui integração direta com:

**WhatsApp:**
31 98507-4372

**Instagram:**
@celebrar.festaas

**Atendimento:**
Belo Horizonte e região metropolitana

Os contatos também estão disponíveis diretamente na seção de contato da página.

---

## 💡 Possíveis melhorias futuras

Algumas evoluções que podem ser implementadas:

* [ ] Integração com Google Analytics
* [ ] SEO avançado
* [ ] Open Graph para compartilhamento nas redes sociais
* [ ] Favicon otimizado
* [ ] Galeria com modal/lightbox
* [ ] Filtro de portfólio por categoria
* [ ] Formulário conectado a banco de dados
* [ ] Painel administrativo
* [ ] Sistema de orçamento online
* [ ] Integração com Google Calendar
* [ ] Integração com WhatsApp Business API
* [ ] Otimização e conversão das imagens para WebP
* [ ] Deploy automático via GitHub Actions

---

## 📚 Aprendizados

Este projeto demonstra a aplicação prática de conceitos de:

* Estruturação semântica com HTML5
* CSS moderno
* CSS Variables
* Flexbox
* CSS Grid
* Media Queries
* Animações CSS
* Design responsivo
* JavaScript DOM
* Event Listeners
* Intersection Observer
* Manipulação de formulários
* Integração com WhatsApp
* UX/UI para landing pages
* Organização de código front-end

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido como parte do portfólio de desenvolvimento web, com foco na criação de **landing pages profissionais para pequenos negócios e empreendedores**.

---

## 📄 Licença

Este projeto foi desenvolvido para fins de portfólio e apresentação profissional.

© 2026 Celebrar — Decoração com Balões.
