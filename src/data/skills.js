// Skills grouped by category, taken from the resume.
// `name` is a string, or { pt, en } when the label needs translating.
// Category titles live in src/i18n.js under skills.categories.
export const skillGroups = [
    {
        id: 'frontend',
        icon: 'mdi:monitor-cellphone',
        items: [
            { name: 'Vue.js', icon: 'logos:vue' },
            { name: 'TypeScript', icon: 'logos:typescript-icon' },
            { name: 'React', icon: 'logos:react' },
            { name: 'JavaScript', icon: 'logos:javascript' },
            { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
            { name: 'HTML5', icon: 'logos:html-5' },
        ],
    },
    {
        id: 'backend',
        icon: 'mdi:server-network',
        items: [
            { name: 'Node.js', icon: 'logos:nodejs-icon' },
            { name: 'Express', icon: 'simple-icons:express' },
            { name: { pt: 'APIs REST', en: 'REST APIs' }, icon: 'mdi:api' },
            { name: { pt: 'Autenticação JWT', en: 'JWT authentication' }, icon: 'logos:jwt-icon' },
            { name: 'Rate limiting', icon: 'mdi:speedometer-slow' },
        ],
    },
    {
        id: 'database',
        icon: 'mdi:database-outline',
        items: [
            { name: 'MySQL', icon: 'logos:mysql-icon' },
            { name: { pt: 'Modelagem relacional', en: 'Relational modeling' }, icon: 'mdi:table-network' },
        ],
    },
    {
        id: 'infra',
        icon: 'mdi:cloud-upload-outline',
        items: [
            { name: 'Vercel', icon: 'simple-icons:vercel' },
            { name: 'Railway', icon: 'simple-icons:railway' },
            { name: 'S3 (Tigris)', icon: 'logos:aws-s3' },
            { name: { pt: 'CORS e variáveis de ambiente', en: 'CORS & environment variables' }, icon: 'mdi:shield-key-outline' },
        ],
    },
    {
        id: 'tools',
        icon: 'mdi:tools',
        items: [
            { name: 'Git', icon: 'logos:git-icon' },
            { name: 'GitHub', icon: 'simple-icons:github' },
            { name: 'Figma', icon: 'logos:figma' },
            { name: 'Claude Code', icon: 'simple-icons:claude' },
        ],
    },
    {
        id: 'languages',
        icon: 'mdi:code-braces',
        items: [
            { name: 'PHP', icon: 'logos:php' },
            { name: 'Java', icon: 'logos:java' },
        ],
    },
];
