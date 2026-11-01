# Documentação do Projeto — Portfólio Vinicius

Este documento explica como o portfólio funciona: tecnologias, estrutura de pastas, componentes, temas, traduções e como editar o conteúdo e publicar.

---

## Sumário

1. [Visão geral](#1-visão-geral)
2. [Tecnologias](#2-tecnologias)
3. [Como rodar](#3-como-rodar)
4. [Estrutura de pastas](#4-estrutura-de-pastas)
5. [Como a aplicação inicia](#5-como-a-aplicação-inicia)
6. [Seções da página](#6-seções-da-página)
7. [Componentes reutilizáveis (UI)](#7-componentes-reutilizáveis-ui)
8. [Sistema visual (design)](#8-sistema-visual-design)
9. [Tema claro e escuro](#9-tema-claro-e-escuro)
10. [Tradução PT/EN](#10-tradução-pten)
11. [Animações](#11-animações)
12. [Onde editar cada conteúdo](#12-onde-editar-cada-conteúdo)
13. [Deploy na Vercel](#13-deploy-na-vercel)
14. [Fluxo de trabalho com Git](#14-fluxo-de-trabalho-com-git)
15. [Pendências e próximos passos](#15-pendências-e-próximos-passos)

---

## 1. Visão geral

É um site de página única (*single page*) que apresenta o Vinicius como desenvolvedor full stack. A página é dividida em seções (Hero, Números, Serviços, Habilidades, Por que eu, Projetos e Contato), com menu fixo no topo para navegar entre elas.

Principais recursos:

- Layout responsivo (celular, tablet e computador)
- Tema claro e escuro, com a escolha salva no navegador
- Botão de idioma **PT/EN**, com português como padrão
- Animações ao rolar a página e contadores animados
- Carrossel de projetos

---

## 2. Tecnologias

| Tecnologia | Para que serve |
| --- | --- |
| [Vue 3](https://vuejs.org/) | Framework da interface, usando componentes `.vue` com `<script setup>` |
| [Vite](https://vite.dev/) | Servidor de desenvolvimento e build de produção |
| [Tailwind CSS 3](https://tailwindcss.com/) | Estilização com classes utilitárias |
| [PostCSS](https://postcss.org/) + Autoprefixer | Processa o CSS do Tailwind e adiciona prefixos de navegador |
| [@iconify/vue](https://iconify.design/) | Ícones (componente global `<Icon>`) |
| [Swiper](https://swiperjs.com/) | Carrossel da seção de projetos |
| [AOS](https://michalsnik.github.io/aos/) | Animações ao rolar a página (`data-aos`) |
| [vue-countup-v3](https://github.com/jizai1125/vue-countup-v3) | Números animados (componente global `<Countup>`) |
| Google Fonts — Plus Jakarta Sans | Fonte principal do site |

> Os ícones do Iconify e a fonte do Google são baixados pela internet quando a página abre.

---

## 3. Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 20.19 ou mais recente (exigido pelo Vite 7).

```bash
npm install
```

```bash
npm run dev
```

Abre o servidor de desenvolvimento (normalmente em `http://localhost:5173`). As mudanças no código aparecem na hora.

```bash
npm run build
```

Gera a versão de produção na pasta `dist/` (ela não vai para o Git; está no `.gitignore`).

```bash
npm run preview
```

Serve localmente a versão gerada pelo build, para conferir antes de publicar.

---

## 4. Estrutura de pastas

```
Portifolio/
├── docs/
│   └── PROJETO.md            ← este documento
├── public/
│   └── vite.svg              ← ícone da aba (favicon)
├── src/
│   ├── assets/images/        ← foto de perfil (eu.jpeg) e prints dos projetos
│   ├── components/
│   │   ├── layout/           ← seções da página (Navbar, Hero, Contato...)
│   │   └── UI/               ← peças reutilizáveis (Button, Input, Card...)
│   ├── data/contact.js       ← email e links das redes sociais
│   ├── data/skills.js        ← habilidades por categoria
│   ├── data/projects.js      ← projetos do carrossel
│   ├── App.vue               ← monta a página com todas as seções
│   ├── i18n.js               ← textos em PT/EN e lógica de tradução
│   ├── main.js               ← ponto de entrada da aplicação
│   └── style.css             ← estilos globais e classes do design
├── index.html                ← HTML base (fonte, tema inicial, título)
├── tailwind.config.js        ← cores, fonte e animações do Tailwind
├── postcss.config.js
├── vite.config.js            ← configuração do Vite e atalho "@" → src/
└── package.json              ← dependências e scripts
```

O atalho `@` aponta para `src/`. Exemplo: `import { t } from '@/i18n'`.

---

## 5. Como a aplicação inicia

1. **`index.html`** carrega a fonte e roda um pequeno script **antes** da página aparecer, que lê o tema salvo (`localStorage.theme`) e aplica a classe `dark` no `<html>`. Isso evita a página "piscar" no tema errado.
2. **`src/main.js`**:
   - importa os estilos (`style.css` e o CSS do AOS);
   - inicia o AOS (`duration: 800`, `once: true`);
   - registra `<Icon>` e `<Countup>` como componentes globais (podem ser usados em qualquer `.vue` sem importar);
   - monta o `App.vue` em `#app`.
3. **`src/App.vue`** desenha o fundo decorativo (grade + manchas de cor) e carrega as seções com `defineAsyncComponent`, dentro de um `<Suspense>`. Enquanto carregam, aparece o `LoadingSpinner`.

---

## 6. Seções da página

Todas ficam em `src/components/layout/`, na ordem em que aparecem:

| Componente | Âncora | O que mostra |
| --- | --- | --- |
| `Navbar.vue` | — | Menu fixo no topo. Fica com fundo de vidro ao rolar. Tem o botão **PT/EN**, o botão de tema e o menu do celular. |
| `HeroSection.vue` | — | Selo "Disponível", saudação com o nome, função, descrição, botões *Me contrate* e *Currículo*, redes sociais e foto com selos flutuantes. |
| `Counter.vue` | — | Faixa com 4 números animados (projetos, clientes, anos). Os números só animam quando a faixa aparece na tela (`IntersectionObserver`). |
| `Services.vue` | `#services` | Grade com 6 cards de serviços, cada um com ícone. |
| `Skills.vue` | `#skills` | 6 cards por categoria (Front-end, Back-end, Banco de dados, Infraestrutura, Ferramentas, Outras linguagens), cada um com as tecnologias e seus logos. |
| `Whyme.vue` | `#whyme` | Junta `Education.vue` e `Experience.vue`, que são linhas do tempo (usam o componente `Timeline`). |
| `Projects.vue` | `#projects` | Carrossel (Swiper) com os projetos. Mostra 1, 2 ou 3 cards conforme a largura da tela, com autoplay, setas e paginação. |
| `Contact.vue` | `#contact` | Card dividido: informações de contato e redes à esquerda, formulário à direita. |
| `Footer.vue` | — | Logo e direitos autorais com o ano atual. |
| `BackToTop.vue` | — | Botão flutuante "voltar ao topo", aparece depois de rolar 400px. |
| `LoadingSpinner.vue` | — | Indicador de carregamento inicial. |

Os links do menu usam as âncoras (`#services`, `#skills`...). A rolagem suave e o espaço para o menu fixo vêm do CSS (`scroll-behavior: smooth` e `scroll-padding-top`).

---

## 7. Componentes reutilizáveis (UI)

Ficam em `src/components/UI/`.

### `Button.vue`
Botão principal amarelo com borda em gradiente girando.

| Prop | Tipo | Padrão | Descrição |
| --- | --- | --- | --- |
| `label` | String | `'Button'` | Texto do botão |
| `href` | String | `null` | Se tiver, vira um link `<a>` |
| `type` | String | `'button'` | Tipo do `<button>` (ex.: `submit`) |
| `icon` | String | `null` | Ícone do Iconify à direita do texto |

```vue
<Button :label="t('hero.hire')" href="#contact" icon="mdi:arrow-right" />
```

### `Input.vue`
Campo de formulário com label. Vira `<textarea>` quando `type="textarea"`.

Props: `id` (obrigatório), `label` (obrigatório), `type`, `placeholder`, `rows`.

### `SectionHeader.vue`
Cabeçalho padrão das seções: selo pequeno (*eyebrow*), título, linha em gradiente e subtítulo.

Props: `title` (obrigatório), `eyebrow`, `subtitle`.

### `ProjectCard.vue`
Card de projeto com imagem (zoom ao passar o mouse), título, descrição, tags e links. Sem `image`, mostra uma capa gerada com gradiente e o ícone de `icon`. Os links só aparecem quando existem.

Props: `title` e `description` (obrigatórios), `image`, `icon`, `tags`, `liveLink`, `codeLink`, `liveLabel`, `codeLabel`.

### `Timeline.vue`
Card com linha do tempo, usado em Formação e Experiência.

Props: `title`, `icon`, `items` (lista de `{ duration, title, subtitle, description }`; `description` é opcional).

---

## 8. Sistema visual (design)

### Cores (`tailwind.config.js`)

| Nome no Tailwind | Cor | Uso |
| --- | --- | --- |
| `primary` | `#000957` | Azul-marinho: textos no tema claro, botões |
| `secondary` | `#FFEB00` | Amarelo: destaque principal, botões |
| `ink` | `#080326` | Fundo do tema escuro |
| `mist` | `#D4EBF8` | Fundo do tema claro |
| `accent-cyan` | `#00c6cc` | Gradientes |
| `accent-violet` | `#785ae4` | Gradientes e destaques no tema claro |

Exemplos de uso: `bg-primary`, `text-secondary`, `from-accent-cyan`.

### Classes próprias (`src/style.css`)

| Classe | O que faz |
| --- | --- |
| `.glass` | Card de "vidro fosco": fundo translúcido, borda sutil, sombra e desfoque |
| `.glass-hover` | Faz o card subir e brilhar ao passar o mouse |
| `.gradient-text` | Texto com gradiente (usado no nome no Hero) |
| `.container-x` | Largura máxima de 72rem, centralizado e com margens laterais |
| `.chip` | Etiqueta arredondada pequena (tags, datas) |
| `.blob` | Mancha de cor desfocada usada no fundo |

### Animações extras (`tailwind.config.js`)

- `animate-float`: flutuação suave (foto do Hero)
- `animate-spin-slow`: rotação lenta (borda do botão)
- `animate-shimmer`: brilho que percorre o gradiente do nome

---

## 9. Tema claro e escuro

- O Tailwind está em `darkMode: 'class'`: tudo que tem prefixo `dark:` só vale quando o `<html>` tem a classe `dark`.
- A escolha fica salva em `localStorage` com a chave `theme` (`'dark'` ou `'light'`). Na primeira visita, o padrão é **escuro**.
- O script do `index.html` aplica o tema antes da página aparecer.
- O botão na `Navbar.vue` (`toggleDarkMode`) troca a classe e salva a nova escolha.

---

## 10. Tradução PT/EN

Toda a tradução fica em **`src/i18n.js`**, sem biblioteca externa.

### Como funciona

- `messages` é um objeto com duas chaves, `pt` e `en`, cada uma com os mesmos campos (`hero`, `nav`, `services`...).
- `locale` é uma variável reativa do Vue com o idioma atual. O padrão é **`'pt'`**.
- `t('caminho.da.chave')` devolve o texto do idioma atual. Pode devolver texto, lista ou objeto.
- `toggleLocale()` alterna entre `pt` e `en`.
- Sempre que o idioma muda, o código:
  - atualiza `<html lang>` (`pt-BR` ou `en`);
  - troca o título da aba e a meta description;
  - salva a escolha em `localStorage` com a chave `locale`.

Como `locale` é reativo, todos os textos da página mudam na hora, sem recarregar.

### Usando em um componente

```vue
<script setup>
import { t } from '@/i18n';
</script>

<template>
  <h2>{{ t('services.title') }}</h2>
</template>
```

Quando a lista depende do idioma, use `computed` para ela se atualizar ao trocar:

```js
import { computed } from 'vue';
import { t } from '@/i18n';

const services = computed(() => t('services.items'));
```

### Adicionando um texto novo

1. Adicione a chave em **`pt`** e em **`en`** dentro de `messages`, no mesmo lugar nos dois.
2. Use `t('sua.chave')` no componente.

> Se uma chave não existir, `t()` devolve o próprio nome da chave (ex.: `hero.titulo`). Assim fica fácil perceber que faltou traduzir.

---

## 11. Animações

- **AOS:** qualquer elemento com `data-aos="fade-up"` (ou `fade-left`, `zoom-in`...) anima ao aparecer na tela. `data-aos-delay` define um atraso em milissegundos. Configuração em `src/main.js`.
- **Contadores:** `Counter.vue` usa `IntersectionObserver` para só começar a contar quando a faixa aparece.
- **Carrossel:** autoplay a cada 5 segundos, pausando quando o mouse está em cima.

---

## 12. Onde editar cada conteúdo

| O que mudar | Onde |
| --- | --- |
| Textos do site (PT e EN) | `src/i18n.js` |
| Formação e experiência | `src/i18n.js` → `whyme.educationItems` / `whyme.experienceItems` |
| Serviços (nomes e descrições) | `src/i18n.js` → `services.items` · ícones em `Services.vue` |
| Números do contador | `Counter.vue` (valores) · `src/i18n.js` → `counter` (rótulos) |
| Habilidades (tecnologias e logos) | `src/data/skills.js` · títulos das categorias em `src/i18n.js` → `skills.categories` |
| Projetos (textos, tags, links, imagem ou ícone) | `src/data/projects.js` |
| Imagens dos projetos | `src/assets/images/` e os `import` no topo de `src/data/projects.js` |
| Foto de perfil | `src/assets/images/eu.jpeg` |
| Email e redes sociais (Hero e Contato) | `src/data/contact.js` |
| Localização | `src/i18n.js` → `contact.location` |
| Link do currículo | `HeroSection.vue` → `href` do botão *Currículo* |
| Cores, fonte, animações | `tailwind.config.js` |
| Estilo dos cards e classes globais | `src/style.css` |
| Título da aba e descrição | `src/i18n.js` → `meta` (e o padrão em `index.html`) |
| Itens do menu | `src/i18n.js` → `nav.menu` e `hrefs` em `Navbar.vue` |

### Adicionando um projeto novo

1. Se tiver um print, coloque em `src/assets/images/` (ex.: `meu-projeto.png`) e importe no topo de `src/data/projects.js`.
2. Adicione um objeto na lista `projects`:
   ```js
   {
       id: 'meu-projeto',
       image: meuProjeto,          // ou, sem print: icon: 'mdi:rocket-launch-outline'
       title: { pt: 'Meu Projeto', en: 'My Project' },
       description: { pt: 'Descrição em português.', en: 'English description.' },
       tags: ['Vue.js', 'Node.js'],
       liveLink: 'https://meu-projeto.vercel.app', // opcional
       codeLink: 'https://github.com/Viniciusvbss/meu-projeto', // opcional
   },
   ```
3. A ordem da lista é a ordem do carrossel.

---

## 13. Deploy na Vercel

O site está publicado na Vercel. Com o repositório conectado:

- Todo push na branch **`main`** gera um deploy de **produção**.
- Pushes em outras branches e pull requests geram **links de preview**.

Configurações usadas (a Vercel detecta sozinha por ser um projeto Vite):

| Campo | Valor |
| --- | --- |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

**Dicas:**

- No plano gratuito (Hobby), a Vercel pode bloquear deploys de commits cujo autor não é reconhecido como membro do projeto. Por isso os commits são feitos com o nome e email do dono da conta.
- Para trocar o endereço do site, vá em **Settings → Domains** e adicione um novo domínio (ex.: `vinicius-soares.vercel.app`).

---

## 14. Fluxo de trabalho com Git

1. Crie uma branch para cada mudança (ex.: `botao-traduzir`).
2. Faça os commits e envie a branch para o GitHub.
3. Abra um **pull request** para a `main` e confira o link de preview da Vercel.
4. Faça o merge. A Vercel publica em produção automaticamente.

---

## 15. Pendências e próximos passos

**Dados provisórios para trocar:**

- Números do contador

**Ideias de melhorias:**

- Fazer o formulário de contato enviar mensagens de verdade (Formspree, EmailJS)
- Melhorar o SEO: imagem de compartilhamento (Open Graph) e favicon próprio
- Trocar o nome do pacote em `package.json` (hoje `my-project-vue3`)
