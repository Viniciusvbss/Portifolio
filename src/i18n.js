import { ref, watch } from 'vue';

const STORAGE_KEY = 'locale';
const SUPPORTED = ['pt', 'en'];

export const messages = {
    pt: {
        meta: {
            title: 'Vinicius | Portfólio',
            description: 'Vinicius Barbosa — Software Engineer full stack (Node.js, TypeScript, Vue.js)',
        },
        nav: {
            menu: ['Serviços', 'Habilidades', 'Por que eu', 'Projetos', 'Contato'],
            toggleMenu: 'Abrir ou fechar o menu',
            lightMode: 'Ativar tema claro',
            darkMode: 'Ativar tema escuro',
            language: 'Mudar idioma para inglês',
        },
        hero: {
            badge: 'Aberto a oportunidades',
            greeting: 'Olá, eu sou',
            role: 'Software Engineer',
            description:
                'Sou desenvolvedor full stack, formado em Análise e Desenvolvimento de Sistemas, e construo aplicações completas, do banco de dados ao deploy. Trabalho com Node.js, TypeScript, Vue.js, React e MySQL, e meu principal projeto é o Navalha, um SaaS para barbearias que desenvolvi sozinho e está em produção.',
            hire: 'Me contrate',
            resume: 'Currículo',
            resumeLabel: 'Abrir currículo em PDF',
            stackLabel: 'Stack principal',
            experienceValue: '3 anos',
            experienceLabel: 'de experiência',
        },
        counter: ['Projetos criados', 'Projetos', 'Clientes satisfeitos', 'Anos'],
        services: {
            eyebrow: 'O que eu faço',
            title: 'Meus Serviços',
            subtitle: 'O que posso construir para você, do banco de dados ao deploy.',
            items: [
                { name: 'Aplicações Web Full Stack', description: 'Sistemas completos, do banco de dados ao deploy, como o Navalha, um SaaS de agendamento em produção.' },
                { name: 'Landing Pages', description: 'Páginas rápidas, responsivas e com foco em conversão, com HTML semântico e boas práticas de acessibilidade.' },
                { name: 'APIs REST', description: 'Back-end em Node.js e Express, com autenticação JWT, controle de acesso por perfil e validação no servidor.' },
                { name: 'Front-end com Vue e React', description: 'Interfaces mobile-first em Vue.js e React com TypeScript e Tailwind CSS, a partir de protótipos no Figma.' },
                { name: 'Banco de Dados', description: 'Modelagem relacional em MySQL, com chaves estrangeiras e consultas pensadas para as regras do negócio.' },
                { name: 'Deploy e Infraestrutura', description: 'Publicação na Vercel e na Railway, armazenamento em S3, CORS e variáveis de ambiente configurados.' },
            ],
        },
        skills: {
            eyebrow: 'Ferramentas',
            title: 'Minhas Habilidades',
            subtitle: 'Tecnologias e ferramentas que uso no dia a dia para tirar ideias do papel.',
            categories: {
                frontend: 'Front-end',
                backend: 'Back-end',
                database: 'Banco de dados',
                infra: 'Infraestrutura e deploy',
                tools: 'Ferramentas',
                languages: 'Outras linguagens',
            },
        },
        whyme: {
            eyebrow: 'Trajetória',
            title: 'Por que eu',
            subtitle: 'Um resumo de onde estudei e onde já trabalhei.',
            education: 'Formação',
            experience: 'Experiência',
            languagesTitle: 'Idiomas',
            languages: [
                { name: 'Português', level: 'Nativo' },
                { name: 'Inglês', level: 'Leitura de documentação técnica' },
            ],
            educationItems: [
                {
                    duration: 'Mar 2023 – Dez 2025',
                    title: 'Análise e Desenvolvimento de Sistemas',
                    subtitle: 'Tecnólogo · Descomplica – Digital College',
                    description: 'Curso concluído.',
                },
            ],
            experienceItems: [
                {
                    duration: 'Jan 2025 – Atual',
                    title: 'Desenvolvedor Web',
                    subtitle: 'Freelance',
                    description:
                        'Landing page para uma empresa do setor financeiro em React e TypeScript, mobile-first e carregando em menos de 2 segundos. Levantamento de requisitos direto com o cliente, manutenção e correção de bugs após a entrega.',
                },
                {
                    duration: '2025 – Atual',
                    title: 'Desenvolvedor Full Stack',
                    subtitle: 'Navalha · projeto autoral em produção',
                    description:
                        'SaaS de agendamento e gestão para barbearias, desenvolvido sozinho do modelo de dados ao deploy: API REST em Node.js e Express com MySQL, front-end em Vue.js e TypeScript, deploy na Vercel e na Railway.',
                },
            ],
        },
        projects: {
            eyebrow: 'Portfólio',
            title: 'Meus Projetos',
            subtitle: 'Alguns dos projetos que desenvolvi, do SaaS em produção aos estudos.',
            live: 'Ver online',
            code: 'Ver código',
            prev: 'Projeto anterior',
            next: 'Próximo projeto',
        },
        contact: {
            eyebrow: 'Fale comigo',
            title: 'Contato',
            subtitle: 'Tem um projeto em mente? Vamos conversar.',
            heading: 'Vamos construir algo incrível juntos',
            reply: 'Costumo responder em até 24 horas.',
            emailLabel: 'Email',
            locationLabel: 'Localização',
            location: 'Recife, Pernambuco — Brasil',
            fields: {
                email: { label: 'Seu email', placeholder: 'email@exemplo.com' },
                subject: { label: 'Assunto', placeholder: 'Conte como posso te ajudar' },
                message: { label: 'Mensagem', placeholder: 'Escreva sua mensagem' },
            },
            send: 'Enviar mensagem',
        },
        footer: { rights: 'Todos os direitos reservados.' },
        backToTop: 'Voltar ao topo',
    },
    en: {
        meta: {
            title: 'Vinicius | Portfolio',
            description: 'Vinicius Barbosa — Full stack Software Engineer (Node.js, TypeScript, Vue.js)',
        },
        nav: {
            menu: ['Services', 'Skills', 'Why Me', 'Projects', 'Contact'],
            toggleMenu: 'Toggle menu',
            lightMode: 'Switch to light mode',
            darkMode: 'Switch to dark mode',
            language: 'Change language to Portuguese',
        },
        hero: {
            badge: 'Open to opportunities',
            greeting: "Hi, I'm",
            role: 'Software Engineer',
            description:
                "I'm a full stack developer with a degree in Systems Analysis and Development, and I build complete applications, from the database to deployment. I work with Node.js, TypeScript, Vue.js, React and MySQL, and my main project is Navalha, a SaaS for barbershops that I built on my own and is live in production.",
            hire: 'Hire me',
            resume: 'Resume',
            resumeLabel: 'Open resume (PDF, in Portuguese)',
            stackLabel: 'Main stack',
            experienceValue: '3 years',
            experienceLabel: 'of experience',
        },
        counter: ['Created projects', 'Projects', 'Happy clients', 'Years'],
        services: {
            eyebrow: 'What I do',
            title: 'My Services',
            subtitle: 'What I can build for you, from the database to deployment.',
            items: [
                { name: 'Full Stack Web Apps', description: 'Complete systems from database to deployment, like Navalha, a scheduling SaaS live in production.' },
                { name: 'Landing Pages', description: 'Fast, responsive, conversion-focused pages with semantic HTML and accessibility best practices.' },
                { name: 'REST APIs', description: 'Node.js and Express back-ends with JWT authentication, role-based access control and server-side validation.' },
                { name: 'Vue & React Front-end', description: 'Mobile-first interfaces in Vue.js and React with TypeScript and Tailwind CSS, built from Figma prototypes.' },
                { name: 'Databases', description: 'Relational modeling in MySQL, with foreign keys and queries designed around the business rules.' },
                { name: 'Deploy & Infrastructure', description: 'Deployment on Vercel and Railway, S3 storage, and properly configured CORS and environment variables.' },
            ],
        },
        skills: {
            eyebrow: 'Toolbox',
            title: 'My Skills',
            subtitle: 'Technologies and tools I use every day to bring ideas to life.',
            categories: {
                frontend: 'Front-end',
                backend: 'Back-end',
                database: 'Database',
                infra: 'Infrastructure & deploy',
                tools: 'Tools',
                languages: 'Other languages',
            },
        },
        whyme: {
            eyebrow: 'Journey',
            title: 'Why Me',
            subtitle: "A quick look at where I studied and where I've worked.",
            education: 'Education',
            experience: 'Experience',
            languagesTitle: 'Languages',
            languages: [
                { name: 'Portuguese', level: 'Native' },
                { name: 'English', level: 'Reading technical documentation' },
            ],
            educationItems: [
                {
                    duration: 'Mar 2023 – Dec 2025',
                    title: 'Systems Analysis and Development',
                    subtitle: "Associate's degree · Descomplica – Digital College",
                    description: 'Completed.',
                },
            ],
            experienceItems: [
                {
                    duration: 'Jan 2025 – Present',
                    title: 'Web Developer',
                    subtitle: 'Freelance',
                    description:
                        'Landing page for a financial services company built with React and TypeScript, mobile-first and loading in under 2 seconds. Gathered requirements directly with the client and handled maintenance and bug fixes after delivery.',
                },
                {
                    duration: '2025 – Present',
                    title: 'Full Stack Developer',
                    subtitle: 'Navalha · personal project in production',
                    description:
                        'Scheduling and management SaaS for barbershops, built on my own from data model to deployment: REST API in Node.js and Express with MySQL, front-end in Vue.js and TypeScript, deployed on Vercel and Railway.',
                },
            ],
        },
        projects: {
            eyebrow: 'Portfolio',
            title: 'My Projects',
            subtitle: "Some of the projects I've built, from a SaaS in production to study projects.",
            live: 'Live Demo',
            code: 'View Code',
            prev: 'Previous project',
            next: 'Next project',
        },
        contact: {
            eyebrow: 'Get in touch',
            title: 'Contact Me',
            subtitle: "Have a project in mind? Let's talk about it.",
            heading: "Let's build something great together",
            reply: 'I usually reply within 24 hours.',
            emailLabel: 'Email',
            locationLabel: 'Location',
            location: 'Recife, Pernambuco — Brazil',
            fields: {
                email: { label: 'Your email', placeholder: 'email@example.com' },
                subject: { label: 'Subject', placeholder: 'Let me know how I can help you' },
                message: { label: 'Message', placeholder: 'Leave a comment' },
            },
            send: 'Send message',
        },
        footer: { rights: 'All rights reserved.' },
        backToTop: 'Back to top',
    },
};

function readStoredLocale() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return SUPPORTED.includes(stored) ? stored : null;
    } catch {
        return null;
    }
}

// Shared, app-wide reactive locale. Portuguese is the default.
export const locale = ref(readStoredLocale() || 'pt');

function applyLocale(value) {
    document.documentElement.lang = value === 'pt' ? 'pt-BR' : 'en';
    document.title = messages[value].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', messages[value].meta.description);
    try {
        localStorage.setItem(STORAGE_KEY, value);
    } catch {
        /* storage unavailable: keep the choice for this visit only */
    }
}

watch(locale, applyLocale, { immediate: true });

/** Look up a dot-separated key, e.g. t('hero.badge'). Returns strings, arrays or objects. */
export function t(key) {
    return key.split('.').reduce((node, part) => node?.[part], messages[locale.value]) ?? key;
}

export function toggleLocale() {
    locale.value = locale.value === 'pt' ? 'en' : 'pt';
}

export function useI18n() {
    return { t, locale, toggleLocale };
}
