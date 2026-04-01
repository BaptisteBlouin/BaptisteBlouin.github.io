const translations = {
    fr: {
        "nav.about": "\u00c0 propos",
        "nav.skills": "Comp\u00e9tences",
        "nav.experience": "Exp\u00e9rience",
        "nav.projects": "Projets",
        "nav.publications": "Publications",
        "nav.education": "Formation",
        "nav.contact": "Contact",

        "hero.badge": "Disponible pour de nouvelles opportunit\u00e9s",
        "hero.greeting": "Bonjour, je suis",
        "hero.description": "Data Scientist et Ing\u00e9nieur IA avec un Doctorat en Informatique, sp\u00e9cialis\u00e9 en NLP et analyse de textes \u00e0 grande \u00e9chelle.",
        "hero.cta": "Me contacter",
        "hero.projects": "Voir mes projets",
        "hero.stat1": "Publications",
        "hero.stat2": "Ann\u00e9es d'exp\u00e9rience",
        "hero.stat3": "Pays (ateliers)",
        "hero.typed": [
            "Data Scientist & Ing\u00e9nieur IA",
            "Sp\u00e9cialiste NLP",
            "Docteur en Informatique",
            "D\u00e9veloppeur Full-Stack ML"
        ],

        "about.title": "\u00c0 propos",
        "about.p1": "Data Scientist et Ing\u00e9nieur IA avec un Doctorat en Informatique, je combine une expertise approfondie en recherche avec des comp\u00e9tences pratiques en impl\u00e9mentation ML.",
        "about.p2": "Ma capacit\u00e9 d\u00e9montr\u00e9e \u00e0 explorer des probl\u00e8mes complexes, concevoir des solutions innovantes et communiquer des r\u00e9sultats techniques \u00e0 des audiences diverses est au c\u0153ur de mon approche professionnelle.",
        "about.p3": "J'ai une solide exp\u00e9rience en recherche ind\u00e9pendante, r\u00e9solution collaborative de probl\u00e8mes et transfert de connaissances par publications et pr\u00e9sentations internationales.",
        "about.languages": "Fran\u00e7ais, Anglais",
        "about.h1": "Recherche",
        "about.h1d": "Investigation ind\u00e9pendante, conception exp\u00e9rimentale, publication acad\u00e9mique",
        "about.h2": "Ing\u00e9nierie",
        "about.h2d": "Full-stack ML, architecture \u00e9volutive, d\u00e9ploiement production",
        "about.h3": "Collaboration",
        "about.h3d": "Travail interculturel, mentorat, pr\u00e9sentations internationales",

        "skills.title": "Comp\u00e9tences",
        "skills.programming": "Langages",
        "skills.nlp": "NLP & Traitement de Documents",
        "skills.dev": "D\u00e9veloppement Full-Stack",
        "skills.research": "Recherche & Communication",
        "skills.nlp1": "Traitement de Textes Historiques",
        "skills.nlp2": "Adaptation de Domaine",
        "skills.nlp3": "NER Multilingue",
        "skills.nlp4": "Gestion d'Erreurs OCR",
        "skills.llm": "LLM & IA G\u00e9n\u00e9rative",
        "skills.llm1": "Prompt Engineering",
        "skills.llm2": "Routing Multi-provider & Fallback",
        "skills.llm3": "Recherche Hybride (BM25 + Vector)",
        "skills.llm4": "Suivi de Co\u00fbts LLM",
        "skills.nlp5": "Extraction d'\u00c9v\u00e9nements",
        "skills.nlp6": "Annotation de Donn\u00e9es",
        "skills.nlp7": "Segmentation de Mots",
        "skills.r1": "Recherche Ind\u00e9pendante",
        "skills.r2": "Pens\u00e9e Critique",
        "skills.r3": "Conception Exp\u00e9rimentale",
        "skills.r4": "R\u00e9daction Technique & Publication",
        "skills.r5": "Pr\u00e9sentations Internationales",
        "skills.r6": "M\u00e9thodologie Scientifique",
        "skills.r7": "Analyse Statistique",
        "skills.r8": "Revue de Litt\u00e9rature",
        "skills.r9": "Mentorat",
        "skills.r10": "Collaboration Interculturelle",
        "skills.engineering": "Ing\u00e9nierie & Architecture",
        "skills.e1": "Architecture Multi-tenant",

        "exp.title": "Exp\u00e9rience",
        "exp.present": "Pr\u00e9sent",
        "exp.j0t": "Fondateur \u2014 Plateforme Data & IA SaaS",
        "exp.j0d1": "Conception et d\u00e9veloppement d'une plateforme SaaS d'analyse de donn\u00e9es (FastAPI, React, PostgreSQL, LLM, RAG)",
        "exp.j1t": "Ing\u00e9nieur ML",
        "exp.j1o": "Projet ENP-China",
        "exp.j1d1": "Chercheur principal et d\u00e9veloppeur pour la plateforme HistText, gestion de projet ind\u00e9pendante",
        "exp.j1d2": "Exploration et r\u00e9solution de d\u00e9fis ML complexes dans le traitement de textes historiques \u00e0 grande \u00e9chelle",
        "exp.j1d3": "Communication de concepts techniques par ateliers de formation dans 4 pays",
        "exp.j1d4": "Collaboration interdisciplinaire avec historiens, linguistes et informaticiens internationaux",
        "exp.j2t": "Doctorant & Scientifique ML",
        "exp.j2o": "Laboratoire LIS / IrAsia",
        "exp.j2d1": "Recherche ind\u00e9pendante sur subvention ERC Avanc\u00e9e europ\u00e9enne, apprentissage auto-dirig\u00e9",
        "exp.j2d2": "Publi\u00e9 7 articles \u00e0 comit\u00e9 de lecture, r\u00e9daction technique et communication",
        "exp.j2d3": "Pr\u00e9sent\u00e9 la recherche dans des conf\u00e9rences internationales (PACLIC, NLP4DH, TALN, LREC-COLING)",
        "exp.j2d4": "Mentor\u00e9 et collabor\u00e9 avec \u00e9quipes de recherche internationales (France, Taiwan, Vietnam, Japon)",

        "proj.title": "Projets Cl\u00e9s",
        "proj.demo": "D\u00e9mo live",
        "proj.article": "Article",
        "proj.p1sub": "Plateforme d'Analyse de Textes \u00e0 Grande \u00c9chelle",
        "proj.p1desc": "Plateforme full-stack traitant des milliards de tokens de documents historiques avec NER, recherche full-text, visualisations interactives et package R client. D\u00e9ploy\u00e9e pour la communaut\u00e9 internationale.",
        "proj.p2title": "Dataset NER Chinois & Pipeline ML",
        "proj.p2sub": "Ing\u00e9nierie de Donn\u00e9es & ML",
        "proj.p2desc": "Le plus grand dataset NER annot\u00e9 de textes chinois historiques (1872\u20131949) avec contr\u00f4le qualit\u00e9 automatis\u00e9, pipeline ML et benchmarks reproductibles. Donn\u00e9es librement disponibles.",
        "proj.p3title": "Mod\u00e8le de Langue & Tokenisation Chinoise",
        "proj.p3sub": "D\u00e9veloppement de Mod\u00e8les ML",
        "proj.p3desc": "Mod\u00e8les de tokenisation atteignant 83% de pr\u00e9cision (+35% d'am\u00e9lioration) pour le chinois transitionnel, en collaboration avec Academia Sinica.",
        "proj.p4title": "Simulation OCR & Robustesse ML",
        "proj.p4sub": "Recherche Exp\u00e9rimentale",
        "proj.p4desc": "Approche d'augmentation de donn\u00e9es r\u00e9duisant l'impact d'erreur OCR de 50%, avec framework de benchmarking pour la robustesse des mod\u00e8les.",
        "proj.p5title": "Transfer Learning & Adaptation",
        "proj.p5sub": "D\u00e9veloppement & Optimisation ML",
        "proj.p5desc": "Few-shot learning atteignant 93% de r\u00e9cup\u00e9ration de performance avec donn\u00e9es minimales, architectures character-aware pour textes historiques.",
        "proj.p6title": "Plateforme Data & IA SaaS",
        "proj.p6sub": "Projet Entrepreneurial \u2014 En d\u00e9veloppement",
        "proj.p6desc": "Plateforme SaaS de transformation et d'analyse de donn\u00e9es combinant extraction IA, RAG avanc\u00e9 (GraphRAG, RAPTOR), text-to-SQL, connecteurs multi-sources et tableaux de bord analytiques. Architecture multi-tenant avec pipeline de traitement en 7 \u00e9tapes.",
        "proj.p7sub": "Ressource communautaire Open Source",
        "proj.p7desc": "Liste curated de ressources NLP sur l'extraction d'\u00e9v\u00e9nements. R\u00e9f\u00e9rence largement utilis\u00e9e dans la communaut\u00e9 de recherche.",
        "proj.p8sub": "Pipeline OCR & Annotation",
        "proj.p8desc": "Suite d'outils transformant des images num\u00e9ris\u00e9es en corpus s\u00e9mantiquement enrichis : OCR (Google Vision), interface d'annotation web interactive, classification par raccourcis clavier. Con\u00e7u pour documents multilingues complexes.",
        "proj.wip": "En cours",

        "pub.p4": "Simulation d'Erreurs OCR & Robustesse de Mod\u00e8les",

        "edu.title": "Formation",
        "edu.phd": "Doctorat en Informatique (Machine Learning)",
        "edu.thesis": "Th\u00e8se : Extraction d'\u00e9v\u00e9nements \u00e0 partir de fac-simil\u00e9s de documents anciens pour les \u00e9tudes en histoire",
        "edu.advisor": "Directeur : Prof. Benoit Favre \u2014 Subvention ERC Avanc\u00e9e ENP-China (n\u00b0 788476)",
        "edu.master": "Master Informatique (IA/ML)",
        "edu.licence": "Licence Informatique",
        "edu.thesislink": "Lire la th\u00e8se",

        "contact.title": "Contact",
        "contact.text": "N'h\u00e9sitez pas \u00e0 me contacter pour discuter d'opportunit\u00e9s, de collaborations ou simplement pour \u00e9changer."
    },
    en: {
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.publications": "Publications",
        "nav.education": "Education",
        "nav.contact": "Contact",

        "hero.badge": "Open to new opportunities",
        "hero.greeting": "Hi, I'm",
        "hero.description": "Data Scientist and AI Engineer with a PhD in Computer Science, specialized in NLP and large-scale text analysis.",
        "hero.cta": "Get in touch",
        "hero.projects": "View my projects",
        "hero.stat1": "Publications",
        "hero.stat2": "Years of experience",
        "hero.stat3": "Countries (workshops)",
        "hero.typed": [
            "Data Scientist & AI Engineer",
            "NLP Specialist",
            "PhD in Computer Science",
            "Full-Stack ML Developer"
        ],

        "about.title": "About",
        "about.p1": "Data Scientist and AI Engineer with a PhD in Computer Science, I combine deep research expertise with hands-on ML implementation skills.",
        "about.p2": "My demonstrated ability to explore complex problems, design innovative solutions and communicate technical results to diverse audiences is at the core of my professional approach.",
        "about.p3": "I have a strong background in independent research, collaborative problem-solving and knowledge transfer through international publications and presentations.",
        "about.languages": "French, English",
        "about.h1": "Research",
        "about.h1d": "Independent investigation, experimental design, academic publishing",
        "about.h2": "Engineering",
        "about.h2d": "Full-stack ML, scalable architecture, production deployment",
        "about.h3": "Collaboration",
        "about.h3d": "Cross-cultural teamwork, mentoring, international presentations",

        "skills.title": "Skills",
        "skills.programming": "Languages",
        "skills.nlp": "NLP & Document Processing",
        "skills.dev": "Full-Stack Development",
        "skills.research": "Research & Communication",
        "skills.nlp1": "Historical Text Processing",
        "skills.nlp2": "Domain Adaptation",
        "skills.nlp3": "Multilingual NER",
        "skills.nlp4": "OCR Error Handling",
        "skills.llm": "LLM & Generative AI",
        "skills.llm1": "Prompt Engineering",
        "skills.llm2": "Multi-provider Routing & Fallback",
        "skills.llm3": "Hybrid Search (BM25 + Vector)",
        "skills.llm4": "LLM Cost Tracking",
        "skills.nlp5": "Event Extraction",
        "skills.nlp6": "Data Annotation",
        "skills.nlp7": "Word Segmentation",
        "skills.r1": "Independent Research",
        "skills.r2": "Critical Thinking",
        "skills.r3": "Experimental Design",
        "skills.r4": "Technical Writing & Publishing",
        "skills.r5": "International Presentations",
        "skills.r6": "Scientific Methodology",
        "skills.r7": "Statistical Analysis",
        "skills.r8": "Literature Review",
        "skills.r9": "Mentoring",
        "skills.r10": "Cross-cultural Collaboration",
        "skills.engineering": "Engineering & Architecture",
        "skills.e1": "Multi-tenant Architecture",

        "exp.title": "Experience",
        "exp.present": "Present",
        "exp.j0t": "Founder \u2014 Data & AI SaaS Platform",
        "exp.j0d1": "Design and development of a data analysis SaaS platform (FastAPI, React, PostgreSQL, LLM, RAG)",
        "exp.j1t": "ML Engineer",
        "exp.j1o": "ENP-China Project",
        "exp.j1d1": "Lead researcher and developer for the HistText platform, independent project management",
        "exp.j1d2": "Explored and solved complex ML challenges in large-scale historical text processing",
        "exp.j1d3": "Communicated technical concepts through training workshops in 4 countries",
        "exp.j1d4": "Interdisciplinary collaboration with international historians, linguists and computer scientists",
        "exp.j2t": "PhD Candidate & ML Scientist",
        "exp.j2o": "LIS / IrAsia Laboratory",
        "exp.j2d1": "Independent research on European ERC Advanced grant, self-directed learning",
        "exp.j2d2": "Published 7 peer-reviewed papers, technical writing and communication",
        "exp.j2d3": "Presented research at international conferences (PACLIC, NLP4DH, TALN, LREC-COLING)",
        "exp.j2d4": "Mentored and collaborated with international research teams (France, Taiwan, Vietnam, Japan)",

        "proj.title": "Key Projects",
        "proj.demo": "Live demo",
        "proj.article": "Article",
        "proj.p1sub": "Large-Scale Text Analysis Platform",
        "proj.p1desc": "Full-stack platform processing billions of tokens from historical documents with NER, full-text search, interactive visualizations and R client package. Deployed for the international research community.",
        "proj.p2title": "Chinese NER Dataset & ML Pipeline",
        "proj.p2sub": "Data Engineering & ML",
        "proj.p2desc": "The largest annotated NER dataset of historical Chinese texts (1872\u20131949) with automated quality control, ML pipeline and reproducible benchmarks. Freely available data.",
        "proj.p3title": "Chinese Language Model & Tokenization",
        "proj.p3sub": "ML Model Development",
        "proj.p3desc": "Tokenization models achieving 83% accuracy (+35% improvement) for transitional Chinese, in collaboration with Academia Sinica.",
        "proj.p4title": "OCR Simulation & ML Robustness",
        "proj.p4sub": "Experimental Research",
        "proj.p4desc": "Data augmentation approach reducing OCR error impact by 50%, with benchmarking framework for model robustness.",
        "proj.p5title": "Transfer Learning & Adaptation",
        "proj.p5sub": "ML Development & Optimization",
        "proj.p5desc": "Few-shot learning achieving 93% performance recovery with minimal data, character-aware architectures for historical texts.",
        "proj.p6title": "Data & AI SaaS Platform",
        "proj.p6sub": "Entrepreneurial Project \u2014 In development",
        "proj.p6desc": "SaaS platform for data transformation and analysis combining AI extraction, advanced RAG (GraphRAG, RAPTOR), text-to-SQL, multi-source connectors and analytical dashboards. Multi-tenant architecture with 7-step processing pipeline.",
        "proj.p7sub": "Open Source Community Resource",
        "proj.p7desc": "Curated list of NLP resources on event extraction. Widely used reference in the research community.",
        "proj.p8sub": "OCR & Annotation Pipeline",
        "proj.p8desc": "Tool suite transforming scanned images into semantically enriched corpora: OCR (Google Vision), interactive web annotation interface, keyboard-driven classification. Designed for complex multilingual documents.",
        "proj.wip": "In progress",

        "pub.p4": "OCR Error Simulation & Model Robustness",

        "edu.title": "Education",
        "edu.phd": "PhD in Computer Science (Machine Learning)",
        "edu.thesis": "Thesis: Event extraction from facsimiles of historical documents for history studies",
        "edu.advisor": "Advisor: Prof. Benoit Favre \u2014 ERC Advanced Grant ENP-China (no. 788476)",
        "edu.master": "MSc Computer Science (AI/ML)",
        "edu.licence": "BSc Computer Science",
        "edu.thesislink": "Read the thesis",

        "contact.title": "Contact",
        "contact.text": "Feel free to reach out to discuss opportunities, collaborations, or just to chat."
    }
};

let currentLang = 'fr';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    document.documentElement.lang = lang;

    const langBtn = document.getElementById('lang-toggle');
    langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';

    // Restart typed effect with new language
    if (window.typedInstance) {
        window.typedInstance.strings = t['hero.typed'];
        window.typedInstance.restart();
    }

    localStorage.setItem('lang', lang);
}

function toggleLanguage() {
    setLanguage(currentLang === 'fr' ? 'en' : 'fr');
}
