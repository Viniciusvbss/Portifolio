import { ref, watch } from 'vue';

const STORAGE_KEY = 'locale';
const SUPPORTED = ['pt', 'en'];

const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam corrupti repellendus architecto officiis autem expedita.';
const loremLong =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde molestiae a vel beatae molestias, quo nostrum non doloremque, explicabo consequuntur voluptatum reiciendis omnis ea qui sit praesentium.';
const loremProject =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit sequi similique, asperiores quisquam nostrum, enim ut repellendus vitae earum consectetur recusandae.';

export const messages = {
    pt: {
        meta: {
            title: 'Vinicius | Portfólio',
            description: 'Vinicius — portfólio de desenvolvedor frontend',
        },
        nav: {
            menu: ['Serviços', 'Habilidades', 'Por que eu', 'Projetos', 'Contato'],
            toggleMenu: 'Abrir ou fechar o menu',
            lightMode: 'Ativar tema claro',
            darkMode: 'Ativar tema escuro',
            language: 'Mudar idioma para inglês',
        },
        hero: {
            badge: 'Disponível para novos projetos',
            greeting: 'Olá, eu sou',
            role: 'Desenvolvedor Frontend & entusiasta de UI',
            description: loremLong,
            hire: 'Me contrate',
            resume: 'Currículo',
            experienceValue: '5+ anos',
            experienceLabel: 'de experiência',
        },
        counter: ['Projetos criados', 'Projetos', 'Clientes satisfeitos', 'Anos'],
        services: {
            eyebrow: 'O que eu faço',
            title: 'Meus Serviços',
            subtitle: 'Soluções feitas com cuidado, do primeiro rascunho até a produção.',
            items: [
                { name: 'Desenvolvimento Web', description: lorem },
                { name: 'Design UI / UX', description: lorem },
                { name: 'Design Responsivo', description: lorem },
                { name: 'Redação Técnica', description: lorem },
                { name: 'Performance', description: lorem },
                { name: 'Consultoria', description: lorem },
            ],
        },
        skills: {
            eyebrow: 'Ferramentas',
            title: 'Minhas Habilidades',
            subtitle: 'Tecnologias e ferramentas que uso no dia a dia para tirar ideias do papel.',
        },
        whyme: {
            eyebrow: 'Trajetória',
            title: 'Por que eu',
            subtitle: 'Um resumo de onde estudei e onde já trabalhei.',
            education: 'Formação',
            experience: 'Experiência',
            educationItems: [
                { duration: '03/2008 - 07/2011', title: 'Engenharia de Software', subtitle: 'Escola 1' },
                { duration: '03/2008 - 07/2011', title: 'Engenharia de Software', subtitle: 'Escola 2' },
            ],
            experienceItems: [
                { duration: '03/2008 - 07/2011', title: 'Desenvolvedor Frontend', subtitle: 'Spotify' },
                { duration: '03/2008 - 07/2011', title: 'Desenvolvedor Frontend', subtitle: 'Spotify' },
            ],
        },
        projects: {
            eyebrow: 'Portfólio',
            title: 'Meus Projetos',
            subtitle: 'Uma seleção de coisas que construí recentemente.',
            itemTitle: 'Site de Portfólio',
            itemDescription: loremProject,
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
            location: 'Brasil',
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
            description: 'Vinicius — Frontend developer portfolio',
        },
        nav: {
            menu: ['Services', 'Skills', 'Why Me', 'Projects', 'Contact'],
            toggleMenu: 'Toggle menu',
            lightMode: 'Switch to light mode',
            darkMode: 'Switch to dark mode',
            language: 'Change language to Portuguese',
        },
        hero: {
            badge: 'Available for new projects',
            greeting: "Hi, I'm",
            role: 'Frontend Developer & UI enthusiast',
            description: loremLong,
            hire: 'Hire me',
            resume: 'Resume',
            experienceValue: '5+ years',
            experienceLabel: 'of experience',
        },
        counter: ['Created projects', 'Projects', 'Happy clients', 'Years'],
        services: {
            eyebrow: 'What I do',
            title: 'My Services',
            subtitle: 'Solutions crafted with care, from the first sketch to production.',
            items: [
                { name: 'Web Development', description: lorem },
                { name: 'UI / UX Design', description: lorem },
                { name: 'Responsive Design', description: lorem },
                { name: 'Technical Writing', description: lorem },
                { name: 'Performance', description: lorem },
                { name: 'Consulting', description: lorem },
            ],
        },
        skills: {
            eyebrow: 'Toolbox',
            title: 'My Skills',
            subtitle: 'Technologies and tools I use every day to bring ideas to life.',
        },
        whyme: {
            eyebrow: 'Journey',
            title: 'Why Me',
            subtitle: "A quick look at where I studied and where I've worked.",
            education: 'Education',
            experience: 'Experience',
            educationItems: [
                { duration: '03/2008 - 07/2011', title: 'Software Engineering', subtitle: 'School 1' },
                { duration: '03/2008 - 07/2011', title: 'Software Engineering', subtitle: 'School 2' },
            ],
            experienceItems: [
                { duration: '03/2008 - 07/2011', title: 'Frontend Developer', subtitle: 'Spotify' },
                { duration: '03/2008 - 07/2011', title: 'Frontend Developer', subtitle: 'Spotify' },
            ],
        },
        projects: {
            eyebrow: 'Portfolio',
            title: 'My Projects',
            subtitle: "A selection of things I've built recently.",
            itemTitle: 'Portfolio Website',
            itemDescription: loremProject,
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
            location: 'Brazil',
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
