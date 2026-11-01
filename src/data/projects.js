// Projects shown in the carousel, taken from github.com/Viniciusvbss.
// Texts are { pt, en }. Projects without `image` get a generated cover
// using `icon` (see ProjectCard.vue).
import burgueria from '@/assets/images/burgueria.png';
import avanti from '@/assets/images/avanti-ecommerce.png';
import navalha from '@/assets/images/navalha.png';
import cocaCola from '@/assets/images/coca-cola.png';

const GH = 'https://github.com/Viniciusvbss';

export const projects = [
    {
        id: 'navalha',
        image: navalha,
        icon: 'mdi:content-cut',
        title: { pt: 'Navalha — SaaS para barbearias', en: 'Navalha — SaaS for barbershops' },
        description: {
            pt: 'SaaS de agendamento e gestão para barbearias, em produção. Desenvolvido sozinho, do modelo de dados ao deploy.',
            en: 'Scheduling and management SaaS for barbershops, live in production. Built on my own, from data model to deployment.',
        },
        tags: ['Vue.js', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
        liveLink: 'https://barber-saas-platform.vercel.app',
        codeLink: `${GH}/back-end-barbershop`,
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
    {
        id: 'coca-cola',
        image: cocaCola,
        title: { pt: 'Landing page Coca-Cola', en: 'Coca-Cola landing page' },
        description: {
            pt: 'Recriação da página da Coca-Cola com mudanças de layout, estilo e estrutura, feita para estudo e aprimoramento técnico.',
            en: 'Recreation of the Coca-Cola page with changes to layout, styling and structure, built for study and technical practice.',
        },
        tags: ['HTML', 'CSS', { pt: 'Estudo', en: 'Study' }],
        liveLink: 'https://cocacola-gilt.vercel.app',
        codeLink: `${GH}/cocacola`,
    },
];
