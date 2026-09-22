// ============================================================
// SG+MAS · config.js
// ------------------------------------------------------------
// Fuente de verdad: branding, copy, features y configuración.
// ============================================================

const config = {
  app: {
    name: "SG+MAS",
    description:
      "Consultoría, auditorías, capacitación y gestión ambiental para empresas. Servicios especializados en seguridad industrial, cumplimiento y prevención.",
    seoTitle: "SG+MAS | Gestión Ambiental y Seguridad Industrial",
    icp:
      "Empresas medianas y grandes del sector industrial (manufactura, maquila, logística, agroindustria y química) con alta exposición a riesgos operativos.",
    domain: "sgmas.mx",
    locale: "es",
    defaultUrl: "http://localhost:3000",
  },

  brand: {
    primary: "#193961",
    accent: "#82C033",
    gray: "#51504F",
    logoText: "SG+MAS",
    logoSrc: "/logo.png",
    radius: "0.5rem",
  },

  features: {
    waitlist: false,
    googleAuth: true,
    emailLogin: false,
    aiChat: true,
    toolUse: true,
    agents: true,
    resend: true,
    pricing: false,
    paypal: false,
    adminPanel: true,
  },

  payment: {
    paypalMeUsername: "",
    defaultAmount: 0,
    currency: "USD",
    buttonText: "Pagar con PayPal",
  },

  ai: {
    chatModel: "gpt-4o-mini",
    structuredModel: "gpt-4o-mini",
    agentModel: "gpt-4o",
    maxTokens: 1500,
    temperature: 0.4,
  },

  email: {
    from: "SG+MAS <onboarding@resend.dev>",
    replyTo: "adrianacano.sgmas@gmail.com",
    supportEmail: "adrianacano.sgmas@gmail.com",
  },

  auth: {
    loginUrl: "/login",
    afterLoginUrl: "/dashboard",
    afterLogoutUrl: "/",
    providers: ["google"],
  },

  landing: {
    descriptor: "Gestión Ambiental y Seguridad Industrial",
    tagline:
      "Fortalecemos el cumplimiento empresarial mediante una gestión integral ambiental y de seguridad industrial.",

    whatsapp: {
      phone: "526141333130",
      display: "614 133 3130",
      defaultMessage:
        "Hola, SG+MAS. Me gustaría recibir orientación sobre un servicio para mi empresa.",
      diagnosticoMessage:
        "Hola, SG+MAS. Me interesa solicitar información sobre el Diagnóstico 360° Ambiental y de Seguridad Industrial para mi empresa.",
      evaluacionesMessage:
        "Hola, SG+MAS. Me interesa consultar un servicio de evaluación especializada para mi empresa.",
      tramitesMessage:
        "Hola, SG+MAS. Me interesa consultar una situación relacionada con trámites y obligaciones de mi empresa.",
      capacitacionMessage:
        "Hola, SG+MAS. Me interesa conocer las opciones de capacitación para mi empresa.",
    },

    social: {
      linkedin: "https://www.linkedin.com/in/sg-mas",
      // FACEBOOK_URL — completar cuando exista la página oficial de Facebook
      facebookUrl: "",
    },

    nav: [
      { label: "Inicio", href: "#inicio" },
      { label: "Servicios", href: "#servicios" },
      { label: "Consultoría", href: "#consultoria" },
      { label: "Capacitación", href: "#capacitacion" },
      { label: "Trámites", href: "#tramites" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],

    hero: {
      titleLine1: "Fortalece tu empresa.",
      titleLine2: "Previene riesgos.",
      subtitle:
        "Consultoría, auditorías, capacitación y gestión ambiental para empresas que buscan prevenir riesgos y atender sus obligaciones.",
      complement:
        "Servicios especializados en gestión ambiental y seguridad industrial, adaptados a las características y necesidades de cada empresa.",
      supportText: "Gestión ambiental · Seguridad industrial · Capacitación",
      cta: { label: "Solicitar diagnóstico", service: "diagnostico" },
      ctaSecondary: { label: "Ver servicios", href: "#servicios" },
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85&auto=format&fit=crop",
    },

    servicios: {
      id: "servicios",
      title: "Servicios para tu empresa",
      subtitle: "Apoyo profesional en gestión ambiental, seguridad industrial y capacitación.",
      items: [
        {
          number: "01",
          title: "Consultoría y auditorías",
          description:
            "Evaluamos las condiciones documentales, ambientales y de seguridad de tu empresa para identificar aspectos que requieren atención y establecer prioridades.",
          cta: { label: "Conocer consultoría", href: "#consultoria" },
        },
        {
          number: "02",
          title: "Capacitación empresarial",
          description:
            "Cursos especializados para fortalecer los conocimientos del personal en seguridad, salud y medio ambiente.",
          cta: { label: "Ver capacitación", href: "#capacitacion" },
        },
        {
          number: "03",
          title: "Gestión y trámites",
          description:
            "Apoyo en la preparación y gestión de trámites, permisos, registros y obligaciones ante las autoridades correspondientes.",
          cta: { label: "Ver trámites", href: "#tramites" },
        },
      ],
    },

    consultoria: {
      id: "consultoria",
      sectionTitle: "Consultoría y auditorías",
      title: "Conoce qué debe atender tu empresa.",
      text: "Revisamos documentación, condiciones de operación y aspectos ambientales y de seguridad industrial para conocer la situación actual de tu empresa y definir prioridades de atención.",
    },

    diagnostico360: {
      id: "diagnostico",
      title: "Diagnóstico 360°",
      titleLine2: "Ambiental y de seguridad industrial",
      text: "Una evaluación preventiva para conocer la situación actual de tu empresa, identificar aspectos que requieren atención y establecer una ruta de trabajo.",
      elementsTitle: "¿Qué revisamos?",
      elements: [
        {
          number: "01",
          title: "Revisión documental",
          body: "Permisos, registros, programas, procedimientos y evidencias aplicables.",
        },
        {
          number: "02",
          title: "Condiciones en campo",
          body: "Instalaciones, equipos, señalización, áreas de trabajo y condiciones observables.",
        },
        {
          number: "03",
          title: "Gestión ambiental",
          body: "Residuos, obligaciones, registros y controles ambientales aplicables.",
        },
        {
          number: "04",
          title: "Seguridad industrial",
          body: "Condiciones de seguridad, medidas preventivas y documentación relacionada.",
        },
        {
          number: "05",
          title: "Prioridades de atención",
          body: "Organización de los aspectos que requieren atención de acuerdo con su importancia.",
        },
        {
          number: "06",
          title: "Plan de acción",
          body: "Recomendaciones y acciones sugeridas para atender los aspectos identificados.",
        },
      ],
      cta: { label: "Solicitar diagnóstico", service: "diagnostico" },
      ctaWhatsapp: { label: "Hablar por WhatsApp" },
    },

    queRecibes: {
      title: "¿Qué recibes?",
      items: [
        {
          number: "01",
          title: "Resultados de la evaluación",
          body: "Resumen de los principales aspectos identificados.",
        },
        {
          number: "02",
          title: "Aspectos por atender",
          body: "Relación organizada de los puntos que requieren atención.",
        },
        {
          number: "03",
          title: "Prioridades",
          body: "Identificación de los asuntos que deben atenderse primero.",
        },
        {
          number: "04",
          title: "Ruta de trabajo",
          body: "Recomendaciones para continuar con la atención de las necesidades identificadas.",
        },
      ],
    },

    auditorias: {
      title: "Evaluaciones especializadas",
      subtitle: "Revisiones enfocadas en necesidades específicas de la empresa.",
      items: [
        {
          title: "Seguridad industrial",
          body: "Revisión de condiciones de seguridad, documentación y medidas preventivas.",
        },
        {
          title: "Medio ambiente",
          body: "Revisión de obligaciones, residuos, registros y aspectos ambientales aplicables.",
        },
        {
          title: "Revisión documental",
          body: "Análisis de expedientes, permisos, registros, programas y procedimientos.",
        },
        {
          title: "Preparación para inspecciones",
          body: "Revisión preventiva de documentación y condiciones antes de una visita de autoridad.",
        },
      ],
      cta: { label: "Consultar servicio" },
    },

    porQue: {
      title: "¿Por qué SG+MAS?",
      items: [
        {
          title: "Experiencia profesional",
          body: "Más de 10 años de experiencia en gestión ambiental y seguridad industrial.",
        },
        {
          title: "Atención personalizada",
          body: "Cada servicio se adapta a las características y necesidades de la empresa.",
        },
        {
          title: "Enfoque preventivo",
          body: "Identificamos aspectos que requieren atención antes de que se conviertan en problemas.",
        },
        {
          title: "Conocimiento técnico",
          body: "Experiencia aplicada a las necesidades reales de las organizaciones.",
        },
      ],
    },

    indicadores: {
      items: [
        { line1: "+10 años", line2: "de experiencia" },
        { line1: "Gestión ambiental", line2: "y seguridad industrial" },
        { line1: "Capacitación", line2: "empresarial" },
        { line1: "Cursos registrados", line2: "ante STPS" },
      ],
    },

    capacitacion: {
      id: "capacitacion",
      eyebrow: "",
      title: "Capacitación empresarial",
      subtitle:
        "Cursos especializados para fortalecer las competencias del personal en seguridad, salud y medio ambiente.",
      text: "Capacitación orientada a las necesidades de la industria, con contenidos relacionados con la prevención de riesgos y el cumplimiento aplicable.",
      stpsBadge: "Cursos registrados ante STPS",
      courses: [
        {
          category: "Ambiental",
          name: "Manejo de Residuos Peligrosos y No Peligrosos",
          description:
            "Fortalece las competencias del personal para identificar, separar y gestionar adecuadamente los residuos generados en las actividades de la empresa.",
          objective:
            "Proporcionar conocimientos para reconocer los principales tipos de residuos, favorecer su correcta separación y manejo y fortalecer las prácticas de gestión integral dentro de la organización.",
          temario: [
            "Introducción a la gestión integral de residuos",
            "Identificación y clasificación de residuos",
            "Separación y almacenamiento",
            "Manejo y control de residuos",
            "Prevención de impactos ambientales",
            "Buenas prácticas y responsabilidad ambiental",
          ],
          normativa:
            "NOM-052-SEMARNAT-2005 y demás disposiciones aplicables según el tipo de residuo y actividad de la empresa.",
          whatsappMessage:
            "Hola, SG+MAS. Me interesa recibir información sobre el curso de Manejo de Residuos Peligrosos y No Peligrosos para mi empresa.",
        },
        {
          category: "Seguridad industrial",
          name: "Operación Segura de Montacargas",
          description:
            "Capacitación enfocada en la prevención de incidentes durante las actividades relacionadas con la operación y manejo de materiales.",
          objective:
            "Fortalecer los conocimientos del personal sobre los principales riesgos asociados con la operación de montacargas y las medidas preventivas aplicables en el entorno laboral.",
          temario: [
            "Principios de seguridad en la operación",
            "Características y riesgos asociados al equipo",
            "Inspección y condiciones de seguridad",
            "Manejo seguro de materiales",
            "Riesgos, actos y condiciones inseguras",
            "Medidas preventivas y buenas prácticas",
            "Responsabilidades del personal",
            "Evaluación de conocimientos",
          ],
          normativa: "NOM-006-STPS-2014 y disposiciones aplicables.",
          whatsappMessage:
            "Hola, SG+MAS. Me interesa recibir información sobre el curso de Operación Segura de Montacargas para mi empresa.",
        },
        {
          category: "Seguridad y salud",
          name: "Ergonomía Aplicada",
          description:
            "Identificación de factores de riesgo ergonómico y aplicación de medidas preventivas para favorecer condiciones de trabajo más seguras.",
          objective:
            "Proporcionar herramientas para reconocer factores de riesgo ergonómico presentes en las actividades laborales y promover medidas preventivas orientadas a reducir la exposición.",
          temario: [
            "Fundamentos de ergonomía",
            "Factores de riesgo ergonómico",
            "Identificación de riesgos en las actividades laborales",
            "Manipulación manual de cargas",
            "Posturas y movimientos",
            "Medidas preventivas y de control",
            "Buenas prácticas ergonómicas",
            "Aplicación en el entorno laboral",
          ],
          normativa: "NOM-036-1-STPS-2018 y disposiciones aplicables.",
          whatsappMessage:
            "Hola, SG+MAS. Me interesa recibir información sobre el curso de Ergonomía Aplicada para mi empresa.",
        },
        {
          category: "Emergencias",
          name: "Combate Contra Incendios",
          description:
            "Fortalece la preparación del personal para prevenir incendios y participar de manera organizada en la respuesta ante emergencias.",
          objective:
            "Desarrollar conocimientos básicos de prevención, organización y respuesta ante incendios, de acuerdo con las condiciones y riesgos de cada centro de trabajo.",
          temario: [
            "Fundamentos del fuego y los incendios",
            "Identificación de riesgos de incendio",
            "Medidas de prevención",
            "Equipos y sistemas de protección contra incendios",
            "Organización para la atención de emergencias",
            "Evacuación y respuesta organizada",
            "Brigadas y responsabilidades",
            "Evaluación y mejora de la preparación",
          ],
          normativa: "NOM-002-STPS-2010 y disposiciones aplicables.",
          whatsappMessage:
            "Hola, SG+MAS. Me interesa recibir información sobre el curso de Combate Contra Incendios para mi empresa.",
        },
        {
          category: "Emergencias",
          name: "Emergencias con Amoniaco",
          description:
            "Capacitación orientada al reconocimiento de los riesgos asociados al amoniaco y a la preparación organizada ante situaciones de emergencia.",
          objective:
            "Fortalecer los conocimientos del personal para reconocer los peligros asociados al amoniaco, interpretar la información de seguridad y comprender los principios de prevención y respuesta ante emergencias.",
          temario: [
            "Características y peligros asociados al amoniaco",
            "Reconocimiento de escenarios de riesgo",
            "Comunicación de peligros e información de seguridad",
            "Medidas preventivas",
            "Organización para la atención de emergencias",
            "Uso y selección de equipo de protección conforme a procedimientos establecidos",
            "Comunicación, evacuación y coordinación",
            "Simulacros y evaluación de la respuesta",
          ],
          normativa: "NOM-010-STPS-2014, NOM-018-STPS-2015 y demás disposiciones aplicables.",
          whatsappMessage:
            "Hola, SG+MAS. Me interesa recibir información sobre el curso de Emergencias con Amoniaco para mi empresa.",
        },
        {
          category: "Seguridad industrial",
          name: "Trabajos en Alturas",
          description:
            "Capacitación para reconocer los riesgos asociados al trabajo en alturas y fortalecer las medidas preventivas.",
          objective:
            "Proporcionar conocimientos para identificar peligros, aplicar medidas preventivas y fortalecer la gestión segura de las actividades realizadas en altura.",
          temario: [
            "Conceptos fundamentales de trabajo en alturas",
            "Identificación de peligros y evaluación de riesgos",
            "Medidas preventivas",
            "Sistemas personales de protección contra caídas",
            "Equipos y sistemas de acceso",
            "Andamios y plataformas",
            "Organización y responsabilidades",
            "Atención y respuesta ante emergencias",
            "Evaluación de conocimientos",
          ],
          normativa: "NOM-009-STPS-2011 y disposiciones aplicables.",
          whatsappMessage:
            "Hola, SG+MAS. Me interesa recibir información sobre el curso de Trabajos en Alturas para mi empresa.",
        },
        {
          category: "Gestión ambiental",
          name: "Llenado de la Cédula de Operación Anual",
          description:
            "Capacitación para comprender la estructura de la COA y organizar la información ambiental necesaria para su integración.",
          objective:
            "Proporcionar conocimientos para identificar, organizar y revisar la información requerida para la integración de la Cédula de Operación Anual, de acuerdo con las obligaciones aplicables al establecimiento.",
          temario: [
            "Introducción a la Cédula de Operación Anual",
            "Identificación del establecimiento y datos generales",
            "Información de operación",
            "Emisiones y transferencias",
            "Información relacionada con residuos y contaminantes",
            "Integración y organización de información",
            "Revisión y validación de datos",
            "Captura de información",
            "Revisión previa a la presentación",
          ],
          normativa:
            "Disposiciones y criterios vigentes de SEMARNAT aplicables a la Cédula de Operación Anual.",
          whatsappMessage:
            "Hola, SG+MAS. Me interesa recibir información sobre el curso de Llenado de la Cédula de Operación Anual para mi empresa.",
        },
        {
          category: "Gestión ambiental",
          name: "Cultura del Cuidado del Agua",
          description:
            "Promueve una cultura organizacional orientada al uso responsable, eficiente y sostenible del agua dentro de la empresa.",
          objective:
            "Sensibilizar y proporcionar herramientas al personal para identificar oportunidades de ahorro, prevenir desperdicios y fortalecer una cultura de uso responsable del recurso hídrico.",
          temario: [
            "Importancia del agua",
            "Uso del agua en las actividades de la empresa",
            "Identificación de consumos y oportunidades de mejora",
            "Prevención de desperdicios y fugas",
            "Uso eficiente y responsable del recurso",
            "Prevención de contaminación",
            "Cultura ambiental y participación del personal",
            "Buenas prácticas y mejora continua",
          ],
          normativa:
            "Principios y programas de Cultura del Agua promovidos por CONAGUA y disposiciones ambientales aplicables.",
          whatsappMessage:
            "Hola, SG+MAS. Me interesa recibir información sobre el curso de Cultura del Cuidado del Agua para mi empresa.",
        },
      ],
      finalCta: {
        title: "¿Necesitas capacitar a tu personal?",
        text: "Si buscas capacitación sobre un tema específico, podemos revisar las necesidades de tu empresa.",
        buttonLabel: "Hablar por WhatsApp",
      },
    },

    tramites: {
      id: "tramites",
      eyebrow: "Gestión y trámites",
      title: "Gestión y trámites",
      subtitle: "Apoyo profesional para atender obligaciones y trámites relacionados con la operación de tu empresa.",
      text: "Apoyamos en la preparación, revisión y gestión de trámites ante las autoridades correspondientes, de acuerdo con la actividad y características de cada establecimiento.",
      levels: [
        {
          title: "Federal",
          items: ["SEMARNAT", "PROFEPA", "STPS", "Otras autoridades federales aplicables."],
        },
        {
          title: "Estatal",
          items: [
            "Dependencias y autoridades del Estado de Chihuahua relacionadas con las obligaciones ambientales y de seguridad aplicables.",
          ],
        },
        {
          title: "Municipal",
          items: [
            "Gestiones y requisitos relacionados con la operación de establecimientos y protección civil.",
          ],
        },
      ],
      gestionesTitle: "Algunos servicios",
      gestiones: [
        "Cédula de Operación Anual",
        "Licencias y autorizaciones ambientales",
        "Gestión de residuos",
        "Registros y avisos ambientales",
        "Actualizaciones y regularizaciones",
        "Protección Civil",
        "Apoyo en obligaciones de seguridad y salud en el trabajo",
      ],
      note: "Las obligaciones y trámites aplicables dependen de la actividad, ubicación y características de cada establecimiento.",
      cta: { label: "Consultar mi situación" },
    },

    metodologia: {
      id: "metodologia",
      title: "¿Cómo trabajamos?",
      subtitle:
        "Un proceso sencillo para conocer la situación de tu empresa y definir las acciones necesarias.",
      steps: [
        { number: "01", title: "Conocemos", body: "Comprendemos la actividad y las características de la empresa." },
        { number: "02", title: "Evaluamos", body: "Revisamos documentación y condiciones relacionadas con la operación." },
        { number: "03", title: "Identificamos", body: "Detectamos aspectos que requieren atención." },
        { number: "04", title: "Priorizamos", body: "Ordenamos las acciones de acuerdo con su importancia." },
        { number: "05", title: "Acompañamos", body: "Apoyamos en la atención de las necesidades identificadas." },
      ],
    },

    momentos: {
      id: "momentos",
      title: "¿En qué momento puede ayudarte SG+MAS?",
      items: [
        {
          title: "Cuando vas a iniciar operaciones",
          body: "Revisa las obligaciones que pueden aplicar a tu actividad.",
        },
        {
          title: "Cuando tu empresa ya está operando",
          body: "Evalúa condiciones y aspectos que requieren atención.",
        },
        {
          title: "Cuando tienes pendientes",
          body: "Organiza trámites, documentos y acciones necesarias.",
        },
        {
          title: "Cuando tienes una inspección próxima",
          body: "Realiza una revisión preventiva de documentación y condiciones.",
        },
      ],
    },

    nosotros: {
      id: "nosotros",
      sectionTitle: "Sobre SG+MAS",
      text: "SG+MAS es un servicio especializado en gestión ambiental y seguridad industrial, enfocado en apoyar a empresas en la atención de sus obligaciones, prevención de riesgos y capacitación de su personal.",
      text2:
        "Nuestra experiencia combina conocimientos técnicos, gestión administrativa y atención personalizada para ofrecer servicios acordes con las características de cada organización.",
      profile: {
        name: "MBA. Adriana Cano",
        lines: [
          "Ingeniera en Ecología",
          "Más de 10 años de experiencia en medio ambiente y seguridad industrial.",
          "Agente Capacitador Externo registrado ante STPS.",
        ],
      },
    },

    experiencia: {
      id: "experiencia",
      title: "Experiencia SG+MAS",
      text: "Experiencia profesional aplicada a las necesidades de empresas y organizaciones.",
    },

    finalCta: {
      title: "¿Necesitas apoyo para tu empresa?",
      text: "Cuéntanos qué necesitas atender y revisemos la mejor forma de apoyarte.",
      ctaWhatsapp: { label: "Hablar por WhatsApp" },
      ctaForm: { label: "Solicitar información", service: null },
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85&auto=format&fit=crop",
    },

    contacto: {
      id: "contacto",
      title: "Hablemos de las necesidades de tu empresa.",
      successMessage:
        "Gracias por contactarnos. Hemos recibido tu solicitud y nos pondremos en contacto contigo para conocer las necesidades de tu organización.",
      buttonLabel: "Solicitar información",
      services: [
        {
          value: "diagnostico",
          label: "Diagnóstico 360° Ambiental y de Seguridad Industrial",
        },
        { value: "consultoria", label: "Consultoría y auditorías" },
        { value: "capacitacion", label: "Capacitación empresarial" },
        { value: "tramites", label: "Gestión y trámites" },
        { value: "otro", label: "Otro" },
      ],
    },

    footer: {
      whatsappDisplay: "614 133 3130",
      email: "adrianacano.sgmas@gmail.com",
    },

    // Compat con componentes legacy
    problem: { eyebrow: "", title: "", subtitle: "", items: [] },
    features: { eyebrow: "", title: "", subtitle: "", items: [] },
    faq: { eyebrow: "", title: "", items: [] },
    waitlist: {
      eyebrow: "",
      title: "",
      subtitle: "",
      successMessage: "",
      buttonLabel: "",
      placeholder: "",
    },
  },

  pricing: {
    eyebrow: "",
    title: "",
    subtitle: "",
    plans: [],
  },
}

export default config
