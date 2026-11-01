// Projects shown in the carousel, taken from github.com/Viniciusvbss.
// Texts are { pt, en }. Projects without `image` get a generated cover
// using `icon` (see ProjectCard.vue).
import burgueria from '@/assets/images/burgueria.png';
import avanti from '@/assets/images/avanti-ecommerce.png';

const GH = 'https://github.com/Viniciusvbss';

export const projects = [
    {
        id: 'navalha',
        icon: 'mdi:content-cut',
        title: { pt: 'Navalha — SaaS para barbearias', en: 'Navalha — SaaS for barbershops' },
        description: {
            pt: 'SaaS de agendamento e gestão para barbearias, em produção. O dono gerencia o negócio e os clientes agendam online. Desenvolvido sozinho, do modelo de dados ao deploy.',
            en: 'Scheduling and management SaaS for barbershops, live in production. Owners run their business and clients book online. Built on my own, from data model to deployment.',
        },
        tags: ['Vue.js', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
        liveLink: 'https://barber-saas-platform.vercel.app',
        codeLink: `${GH}/back-end-barbershop`,
    },
    {
        id: 'garagemx',
        icon: 'mdi:storefront-outline',
        title: { pt: 'GaragemX', en: 'GaragemX' },
        description: {
            pt: 'Plataforma para hospedar múltiplas lojas e serviços, com front-end em React e Tailwind CSS e back-end em Node.js com JWT, Socket.io e MySQL.',
            en: 'Platform that hosts multiple stores and services, with a React and Tailwind CSS front-end and a Node.js back-end using JWT, Socket.io and MySQL.',
        },
        tags: ['React', 'Node.js', 'JWT', 'Socket.io', 'MySQL'],
        codeLink: `${GH}/GaragemX`,
    },
    {
        id: 'api-node',
        icon: 'mdi:api',
        title: { pt: 'API RESTful em Node.js', en: 'RESTful API in Node.js' },
        description: {
            pt: 'API REST em Node.js e Express com Sequelize e MySQL, autenticação JWT e senhas com bcrypt. Rotas para usuários, funcionários e jobs.',
            en: 'REST API in Node.js and Express with Sequelize and MySQL, JWT authentication and bcrypt-hashed passwords. Routes for users, employees and jobs.',
        },
        tags: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT'],
        codeLink: `${GH}/API-node`,
    },
    {
        id: 'busca-perfil-github',
        icon: 'mdi:account-search-outline',
        title: { pt: 'Busca de Perfil do GitHub', en: 'GitHub Profile Search' },
        description: {
            pt: 'Atividade extracurricular da faculdade que busca perfis do GitHub usando a API oficial. Feito em React com Tailwind CSS.',
            en: 'Extracurricular college project that searches GitHub profiles using the official API. Built with React and Tailwind CSS.',
        },
        tags: ['React', 'Tailwind CSS', 'GitHub API'],
        liveLink: 'https://busca-perfil-github.vercel.app',
        codeLink: `${GH}/Busca-perfil-Github`,
    },
    {
        id: 'avanti',
        image: avanti,
        title: { pt: 'Landing page de e-commerce', en: 'E-commerce landing page' },
        description: {
            pt: 'Landing page de e-commerce em JavaScript, com manipulação do DOM e estilização com Tailwind CSS.',
            en: 'E-commerce landing page in JavaScript, with DOM manipulation and styling with Tailwind CSS.',
        },
        tags: ['JavaScript', 'Tailwind CSS', 'DOM'],
        liveLink: 'https://desenvolvimento-do-layout.vercel.app',
        codeLink: `${GH}/Desenvolvimento-do-Layout-`,
    },
    {
        id: 'burgueria',
        image: burgueria,
        title: { pt: 'Landing page de burgueria', en: 'Burger restaurant landing page' },
        description: {
            pt: 'Landing page de uma burgueria feita com HTML e CSS puro, com estrutura semântica e design responsivo.',
            en: 'Landing page for a burger restaurant built with plain HTML and CSS, with semantic structure and responsive design.',
        },
        tags: ['HTML', 'CSS', { pt: 'Responsivo', en: 'Responsive' }],
        liveLink: 'https://burgueria-mu.vercel.app',
        codeLink: `${GH}/siteWeb`,
    },
];
