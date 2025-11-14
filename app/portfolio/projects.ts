
type ProjectsType = Array<{
    id: number
    name: string
    category: string[]
    description: string
    linkDribble?: string
    linkGithub?: string
    image: string
}>

export const projects: ProjectsType = [
    {
        id: 1,
        name: "Flux",
        category: ["Design", "Code"],
        description: "Flux is a project made to help programmers/developers to organize their routine and organization with the possibility of organizing code sessions, projects, tasks and more.",
        linkDribble: "https://dribbble.com/shots/26520217-Flux-Routine-management-for-developers",
        linkGithub: "https://github.com/OBitencourt/Flux",
        image: "/images/Design-Flux-LandingPage.png",
    },
    {
        id: 2,
        name: "Vault",
        category: ["Design", "Code"],
        description: "Vault is a personal finances management web app made to help people to manage their finances, being able to add and remove transactions and organize their finances monthly",
        linkDribble: "https://dribbble.com/shots/26560195-Vault-Personal-Finances-Management-Web-App",
        linkGithub: "https://github.com/OBitencourt/vault",
        image: "/images/DesignVault.png",
    },
    /*
    {
        id: 3,
        name: "Anunx",
        category: ["Code"],
        description: "Anunx is an ecommerce made in OLX style, where people are able to post products, search for them, and more. (More details in repository)",
        linkGithub: "https://github.com/OBitencourt/anunx",
        image: "/images/Design-Flux-LandingPage.png",
    },
    */
    {
        id: 4,
        name: "Shard",
        category: ["Design"],
        description: "Shard landing page is an web design made for an IA company, with the purpose of making the company more known and increase incomings.",
        linkDribble: "https://dribbble.com/shots/26688549-Shard-AI-Fictional-AI-Company",
        image: "/images/DesignShard-LandingPage.png",
    },
    {
        id: 6,
        name: "Sr & Sra Boni",
        category: ["Design"],
        description: "Sr. & Sra. Boni is a landing page project made with the purpose of attracting more customers in the region of the barbershop.",
        linkDribble: "https://dribbble.com/shots/26769617-Sr-Sra-Boni-Barbershop",
        image: "/images/Design-BoniBarbershop.png",
    },
    
]