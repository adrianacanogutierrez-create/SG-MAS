// ============================================================
// SG+MAS · config.js
// ------------------------------------------------------------
// Fuente de verdad: branding, copy, features y configuración.
// ============================================================

const config = {
  app: {
    name: "SG+MAS",
    description:
      "Consultoría, auditorías, capacitación y gestión ambiental para empresas. Servicios especializados en seguridad industrial, cumplimiento y prevención en Chihuahua.",
    seoTitle: "SG+MAS | Consultoría Ambiental y Seguridad Industrial",
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

    nav: [
      { label: "Inicio", href: "#inicio" },
      { label: "Consultoría y auditorías", href: "#consultoria" },
      { label: "Capacitación", href: "#capacitacion" },
      { label: "Gestión de trámites", href: "#tramites" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],

    hero: {
      titleLine1: "Fortalece tu empresa.",
      titleLine2: "Previene riesgos.",
      subtitle:
        "Consultoría, auditorías, capacitación y gestión ambiental para fortalecer el cumplimiento y la seguridad de tu operación.",
      complement:
        "Soluciones especializadas para empresas que buscan prevenir riesgos, atender sus obligaciones y fortalecer su gestión ambiental y de seguridad industrial.",
      supportText:
        "Gestión ambiental · Seguridad industrial · Cumplimiento · Capacitación",
      cta: { label: "Solicitar diagnóstico", service: "diagnostico" },
      ctaSecondary: { label: "Ver servicios", href: "#servicios" },
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85&auto=format&fit=crop",
    },

    servicios: {
      id: "servicios",
      title: "Soluciones para tu empresa",
      subtitle:
        "Servicios especializados para fortalecer la gestión ambiental, la seguridad industrial y el cumplimiento de tu organización.",
      items: [
        {
          number: "01",
          title: "Consultoría y auditorías",
          tagline: "Evalúa. Detecta. Prioriza.",
          description:
            "Diagnósticos y evaluaciones ambientales y de seguridad industrial para conocer el estado actual de tu empresa, identificar áreas de atención y establecer prioridades.",
          cta: { label: "Conocer consultoría", href: "#consultoria" },
        },
        {
          number: "02",
          title: "Capacitación empresarial",
          tagline: "Forma a tu equipo. Fortalece la prevención.",
          description:
            "Cursos especializados en seguridad, salud y medio ambiente, orientados a las necesidades reales de las organizaciones.",
          cta: { label: "Ver capacitación", href: "#capacitacion" },
        },
        {
          number: "03",
          title: "Gestión y trámites",
          tagline: "Ordena tus obligaciones. Gestiona tu cumplimiento.",
          description:
            "Acompañamiento profesional en trámites, permisos, registros y obligaciones ante autoridades ambientales, laborales y de protección civil.",
          cta: { label: "Ver servicios", href: "#tramites" },
        },
      ],
    },

    consultoria: {
      id: "consultoria",
      eyebrow: "Consultoría y auditorías",
      title: "Conoce qué debe atender tu empresa y por dónde empezar.",
      text: "Evaluamos documentación, condiciones de operación y aspectos ambientales y de seguridad industrial para identificar áreas de atención y establecer prioridades.",
    },

    diagnostico360: {
      id: "diagnostico",
      title: "Diagnóstico 360°",
      titleLine2: "Ambiental y de seguridad industrial",
      text: "Una evaluación preventiva diseñada para conocer el estado actual de tu empresa, detectar brechas y establecer una ruta de atención de acuerdo con las características de tu operación.",
      elementsTitle: "¿Qué revisamos?",
      elements: [
        {
          number: "01",
          title: "Revisión documental",
          body: "Documentación, registros, programas, permisos, procedimientos y evidencias aplicables.",
        },
        {
          number: "02",
          title: "Evaluación en campo",
          body: "Condiciones físicas, instalaciones, equipos, señalización y controles relacionados con la operación.",
        },
        {
          number: "03",
          title: "Aspectos ambientales",
          body: "Residuos, almacenamiento, registros, obligaciones y controles ambientales aplicables.",
        },
        {
          number: "04",
          title: "Análisis de cumplimiento",
          body: "Identificación y clasificación de hallazgos y áreas de atención.",
        },
        {
          number: "05",
          title: "Matriz de prioridades",
          body: "Organización de las áreas que requieren atención de acuerdo con su relevancia.",
        },
        {
          number: "06",
          title: "Plan de acción",
          body: "Definición de acciones recomendadas para atender las áreas identificadas.",
        },
      ],
      cta: { label: "Solicitar diagnóstico 360°", service: "diagnostico" },
    },

    auditorias: {
      id: "evaluaciones",
      eyebrow: "Evaluaciones especializadas",
      title: "Evaluaciones especializadas",
      subtitle: "Servicios de evaluación enfocados en áreas específicas de la operación.",
      items: [
        {
          title: "Seguridad industrial",
          body: "Revisión de condiciones, controles, documentación y prácticas relacionadas con la prevención de riesgos laborales.",
        },
        {
          title: "Medio ambiente",
          body: "Evaluación de aspectos y obligaciones ambientales aplicables a las actividades de la organización.",
        },
        {
          title: "Revisión documental",
          body: "Análisis de expedientes, registros, programas, permisos, procedimientos y evidencias.",
        },
        {
          title: "Preparación para inspecciones",
          body: "Revisión preventiva para identificar áreas susceptibles de observación antes de una visita de autoridad.",
        },
      ],
      cta: { label: "Solicitar una evaluación", service: "consultoria" },
    },

    capacitacion: {
      id: "capacitacion",
      eyebrow: "",
      title: "Capacitación empresarial",
      subtitle:
        "Cursos especializados para fortalecer las competencias de tu organización en materia de seguridad, salud y medio ambiente.",
      text: "Capacitación orientada a las necesidades reales de la industria, con enfoque preventivo, aplicación práctica y referencia al marco normativo mexicano aplicable.",
      stpsBadge: "Cursos registrados ante STPS",
      courseRegisteredLabel: "Curso registrado ante STPS",
      whatsappPhone: "526142847739",
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
        title: "¿Necesitas capacitar a tu personal en un tema específico?",
        text: "Podemos revisar las necesidades de capacitación de tu organización y proponer una alternativa acorde con sus actividades, procesos y riesgos.",
        buttonLabel: "Hablar con SG+MAS",
        whatsappMessage:
          "Hola, SG+MAS. Me interesa conocer las opciones de capacitación para mi empresa.",
      },
    },

    tramites: {
      id: "tramites",
      eyebrow: "Gestión y trámites",
      title: "Gestión y trámites",
      subtitle: "Ordena tus obligaciones y gestiona los trámites aplicables a tu operación.",
      text: "Apoyamos a las organizaciones en la identificación, preparación y gestión de obligaciones y trámites ante las autoridades competentes, de acuerdo con las características de cada establecimiento.",
      levels: [
        {
          title: "Federal",
          items: ["SEMARNAT", "PROFEPA", "STPS", "Otras autoridades federales competentes según la actividad."],
        },
        {
          title: "Estatal",
          items: [
            "Dependencias y autoridades ambientales y de seguridad del Estado de Chihuahua, de acuerdo con las obligaciones aplicables.",
          ],
        },
        {
          title: "Municipal",
          items: [
            "Gestiones y requisitos municipales relacionados con la operación de establecimientos, protección civil y obligaciones aplicables.",
          ],
        },
      ],
      gestionesTitle: "Algunas gestiones y obligaciones",
      gestiones: [
        "Cédula de Operación Anual",
        "Licencias y autorizaciones ambientales",
        "Residuos peligrosos",
        "Registros y avisos ambientales",
        "Actualizaciones y regularizaciones",
        "Protección Civil",
        "Obligaciones relacionadas con seguridad y salud en el trabajo",
      ],
      note: "Las obligaciones, permisos y trámites aplicables dependen de la actividad, características, ubicación y alcance de cada establecimiento.",
      cta: { label: "Consultar mi situación", service: "tramites" },
    },

    metodologia: {
      id: "metodologia",
      title: "¿Cómo trabajamos?",
      subtitle:
        "Un proceso estructurado para conocer la situación de tu empresa y definir prioridades de atención.",
      steps: [
        { number: "01", title: "Conocemos", body: "Comprendemos las características y actividades de la organización." },
        { number: "02", title: "Evaluamos", body: "Analizamos documentación, instalaciones y condiciones operativas." },
        { number: "03", title: "Identificamos", body: "Detectamos brechas, desviaciones y áreas de atención." },
        { number: "04", title: "Priorizamos", body: "Determinamos qué requiere atención primero." },
        { number: "05", title: "Acompañamos", body: "Definimos acciones orientadas a fortalecer la gestión y reducir riesgos." },
      ],
    },

    momentos: {
      id: "momentos",
      title: "¿En qué momento puede ayudarte SG+MAS?",
      items: [
        {
          title: "¿Vas a iniciar operaciones?",
          body: "Identifica las obligaciones ambientales y de seguridad aplicables a tu actividad.",
        },
        {
          title: "¿Tu empresa ya está operando?",
          body: "Evalúa el estado actual y detecta áreas que requieren atención.",
        },
        {
          title: "¿Tienes pendientes regulatorios?",
          body: "Ordena obligaciones, trámites y prioridades de atención.",
        },
        {
          title: "¿Tienes una inspección próxima?",
          body: "Realiza una revisión preventiva antes de una visita de autoridad.",
        },
      ],
    },

    nosotros: {
      id: "nosotros",
      eyebrow: "Nosotros",
      title: "Conocimiento técnico orientado a la gestión empresarial.",
      text: "SG+MAS integra experiencia en gestión ambiental, seguridad industrial y cumplimiento normativo con una visión orientada a las necesidades reales de las organizaciones.",
      text2:
        "Nuestro trabajo combina análisis técnico, prevención y acompañamiento profesional para ayudar a las empresas a comprender sus obligaciones, identificar áreas de atención y fortalecer su gestión.",
      pillars: [
        "Gestión ambiental",
        "Seguridad industrial",
        "Cumplimiento normativo",
        "Capacitación empresarial",
      ],
    },

    finalCta: {
      title: "¿Tu empresa está preparada para lo que viene?",
      text: "Conoce tus obligaciones, identifica áreas de atención y establece prioridades para fortalecer tu operación.",
      cta: { label: "Solicitar diagnóstico", service: "diagnostico" },
      ctaSecondary: { label: "Hablar con un especialista", service: null },
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
      phone: "614-284-7739",
      email: "adrianacano.sgmas@gmail.com",
      linkedin: { label: "SG+MAS", href: "https://www.linkedin.com/" },
      legal: [
        { label: "Aviso de privacidad", href: "#" },
        { label: "Términos y condiciones", href: "#" },
      ],
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
