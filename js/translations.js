const translations = {
  it: {
    nav_home: "Home",
    nav_about: "Chi Sono",
    nav_projects: "Progetti",
    nav_contact: "Contatti",

    hero_greeting: "Ciao, sono",
    hero_name: "Lorenzo Zambardi",
    hero_title: "Sviluppatore & Studente SMIA @ Sapienza",

    about_title: "Chi Sono",
    about_text_1:
      "Sono uno studente del terzo anno di Scienze Matematiche per l'Intelligenza Artificiale alla Sapienza di Roma. Il mio percorso si concentra sull'aspetto formale dietro l'AI, con particolare interesse per il Machine Learning e l'Ottimizzazione.",
    about_text_2:
      "Applico una filosofia di lavoro basata sull'efficienza e sulla riduzione di ogni frizione operativa tra pensiero e codice. Unisco lo studio teorico a un approccio di rapid prototyping, integrando strumenti di intelligenza artificiale per esplorare, testare e validare idee ad alta velocità.",
    about_text_3:
      "Il mio obiettivo è sviluppare progetti tecnologici ad alto impatto e orientati all'innovazione.",
    about_download_cv: "Scarica CV",
    about_pillar_1_tag: "01 - FONDAMENTA",
    about_pillar_1_title: "Matematica & AI",
    about_pillar_1_desc:
      "ML, Ottimizzazione e fondamenti formali dell'Intelligenza Artificiale.",
    about_pillar_2_tag: "02 - FILOSOFIA",
    about_pillar_2_title: "Massima Efficienza",
    about_pillar_2_desc:
      "Rapid prototyping con strumenti AI per validare idee in tempi record.",
    about_pillar_3_tag: "03 - OBIETTIVO",
    about_pillar_3_title: "Alto Impatto",
    about_pillar_3_desc:
      "Costruire tecnologie avanzate orientate all'innovazione reale.",

    projects_title: "Progetti",
    project_1_tag: "BIOMECCANICA & OTTIMIZZAZIONE",
    project_1_title: "Iron Stats",
    project_1_desc:
      "Engine computazionale avanzato per l'analisi scientifica e l'ottimizzazione del bodybuilding. Sostituisce il tonnellaggio grezzo con modelli biomeccanici a curve di Bézier di 3° grado lungo il ROM, calcolando ripetizioni effettive (HTMU), Time Under Tension (TUT) dinamico e accumulo di fatica esponenziale del SNC con un solutore multiobiettivo.",
    project_1_feat_1:
      "Modellazione della tensione muscolare con curve di Bézier cubiche lungo il ROM",
    project_1_feat_2:
      "Metriche dinamiche: ripetizioni effettive, TUT con rallentamento involontario e fatica esponenziale",
    project_1_feat_3:
      "Solutore multiobiettivo per generare schede matematicamente bilanciate",
    project_1_link: "Vedi su GitHub",

    project_2_tag: "AMBIENTE DI SVILUPPO & LATEX",
    project_2_title: "Neovim for STEM",
    project_2_desc:
      "Configurazione Neovim ultra-veloce e modulare ingegnerizzata per studenti e ricercatori STEM. Progettata per la stesura in tempo reale di documenti LaTeX con snippet matematici ad auto-espansione, sviluppo Python con Pyright LSP e formattazione Black, visualizzazione PDF sincronizzata e architettura cross-platform unificata.",
    project_2_feat_1:
      "Snippet matematici ad auto-espansione per formule complesse, matrici e integrali",
    project_2_feat_2:
      "Auto-save ogni 3 secondi con sincronizzazione bidirezionale del cursore nel PDF (Zathura/Sumatra/Skim)",
    project_2_feat_3:
      "Setup Python completo: Pyright LSP, Black, terminale integrato e script di installazione automatizzati",
    project_2_link: "Vedi su GitHub",
    project_link: "Vedi su GitHub",

    contact_title: "Contatti",
    contact_heading: "Costruiamo qualcosa di straordinario insieme.",
    contact_desc:
      "Hai un'idea o un progetto innovativo in ambito AI/Software da sviluppare? Inviami un messaggio.",
    contact_name_label: "Nome",
    contact_name_placeholder: "Il tuo nome",
    contact_email_label: "Email",
    contact_email_placeholder: "iltuonome@email.com",
    contact_subject_label: "Oggetto",
    contact_subject_placeholder: "Di cosa vorresti parlare?",
    contact_message_label: "Messaggio",
    contact_message_placeholder:
      "Raccontami del tuo progetto o della tua richiesta...",
    contact_send_btn: "Invia Messaggio",
    contact_privacy_note:
      "Questo modulo invia i dati tramite FormSubmit; nome ed email sono usati solo per risponderti.",
    contact_sending: "Invio in corso...",
    contact_success:
      "Messaggio inviato con successo! Ti risponderò al più presto.",
    contact_error:
      "Si è verificato un errore durante l'invio. Riprova più tardi.",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_greeting: "Hi, I'm",
    hero_name: "Lorenzo Zambardi",
    hero_title: "Developer & SMIA Student @ Sapienza",

    about_title: "About Me",
    about_text_1:
      "I am a third-year student in Mathematical Sciences for Artificial Intelligence at Sapienza University of Rome. My academic journey focuses on the formal aspects underlying AI, with a special interest in Machine Learning and Optimization.",
    about_text_2:
      "I apply a work philosophy centered on efficiency and minimizing operational friction between thought and code. I bridge theoretical study with a rapid prototyping approach, integrating artificial intelligence tools to explore, test, and validate ideas at high speed.",
    about_text_3:
      "My goal is to develop high-impact, innovation-driven technological projects.",
    about_download_cv: "Download CV",
    about_pillar_1_tag: "01 - FOUNDATIONS",
    about_pillar_1_title: "Mathematics & AI",
    about_pillar_1_desc:
      "ML, Optimization, and formal foundations of Artificial Intelligence.",
    about_pillar_2_tag: "02 - PHILOSOPHY",
    about_pillar_2_title: "Maximum Efficiency",
    about_pillar_2_desc:
      "Rapid prototyping with AI tools to test and validate ideas at top speed.",
    about_pillar_3_tag: "03 - MISSION",
    about_pillar_3_title: "High Impact",
    about_pillar_3_desc:
      "Building state-of-the-art tech projects tailored for real innovation.",

    projects_title: "Projects",
    project_1_tag: "BIOMECHANICS & OPTIMIZATION",
    project_1_title: "Iron Stats",
    project_1_desc:
      "Advanced computational engine for bodybuilding programming, simulation, and analysis. Replaces rudimentary tonnage with biomechanical 3rd-degree Bézier curves across ROM, dynamic Time Under Tension (TUT), effective reps (HTMUs), and exponential CNS fatigue modeling with a multi-objective optimization solver.",
    project_1_feat_1:
      "Biomechanical tension modeling via cubic Bézier curves across ROM",
    project_1_feat_2:
      "Dynamic metrics: effective reps, involuntary TUT slowdown, and exponential CNS fatigue",
    project_1_feat_3:
      "Multi-objective scalarized optimizer for mathematically balanced workout routines",
    project_1_link: "View on GitHub",

    project_2_tag: "DEVELOPER ENVIRONMENT & LATEX",
    project_2_title: "Neovim for STEM",
    project_2_desc:
      "Ultra-fast, modular Neovim configuration engineered for STEM students and researchers. Built for lightning-fast LaTeX authoring with auto-expanding math snippets, comprehensive Python development with Pyright LSP and Black formatting, cursor-synchronized PDF preview, and unified cross-platform scripts.",
    project_2_feat_1:
      "Auto-expanding LaTeX snippets for complex mathematical formulas, matrices, and integrals",
    project_2_feat_2:
      "3-second auto-save with bidirectional cursor sync in PDF viewers (Zathura/Sumatra/Skim)",
    project_2_feat_3:
      "Complete Python setup: Pyright LSP, Black, integrated terminal, and automated install scripts",
    project_2_link: "View on GitHub",
    project_link: "View on GitHub",

    contact_title: "Contact",
    contact_heading: "Let's build something extraordinary together.",
    contact_desc:
      "Have an idea or an innovative AI/Software project to develop? Send me a message.",
    contact_name_label: "Name",
    contact_name_placeholder: "Your name",
    contact_email_label: "Email",
    contact_email_placeholder: "yourname@email.com",
    contact_subject_label: "Subject",
    contact_subject_placeholder: "What would you like to discuss?",
    contact_message_label: "Message",
    contact_message_placeholder: "Tell me about your project or inquiry...",
    contact_send_btn: "Send Message",
    contact_privacy_note:
      "This form delivers your data through FormSubmit; your name and email are used only to reply.",
    contact_sending: "Sending...",
    contact_success: "Message sent successfully! I'll get back to you shortly.",
    contact_error: "An error occurred while sending. Please try again later.",
  },
};
