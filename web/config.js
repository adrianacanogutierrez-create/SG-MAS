// ============================================================
// SG+MAS · config.js
// ------------------------------------------------------------
// Fuente de verdad: branding, copy, features y configuración.
// ============================================================

const config = {
  app: {
    name: "SG+MAS",
    description:
      "Consultoría, auditorías, capacitación y gestión de trámites en materia ambiental y seguridad industrial para empresas en México.",
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
      title:
        "Conoce el nivel de cumplimiento de tu empresa y toma decisiones con información.",
      subtitle:
        "Evaluamos de manera integral las condiciones ambientales y de seguridad industrial de tu organización para identificar brechas, establecer prioridades y fortalecer su gestión de cumplimiento.",
      supportText:
        "Gestión ambiental · Seguridad industrial · Cumplimiento · Capacitación",
      cta: { label: "Solicitar diagnóstico", service: "diagnostico" },
      ctaSecondary: { label: "Conocer servicios", href: "#consultoria" },
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85&auto=format&fit=crop",
    },

    valueProp: {
      eyebrow: "Nuestro enfoque",
      title: "Del cumplimiento a la gestión preventiva.",
      text: "El cumplimiento no debe limitarse a responder ante una inspección. Una gestión adecuada comienza con el conocimiento preciso de las obligaciones aplicables, la identificación objetiva de las brechas y la definición de prioridades para su atención. En SG+MAS integramos evaluación, análisis y acompañamiento profesional para proporcionar una visión clara de la situación actual de cada organización.",
      items: [
        {
          number: "01",
          title: "Diagnóstico",
          body: "Identificación de obligaciones, condiciones y áreas de oportunidad relevantes para la operación.",
        },
        {
          number: "02",
          title: "Priorización",
          body: "Análisis de hallazgos para determinar niveles de atención y establecer prioridades de intervención.",
        },
        {
          number: "03",
          title: "Fortalecimiento",
          body: "Definición de acciones orientadas a mejorar el cumplimiento, prevenir riesgos y fortalecer la gestión.",
        },
      ],
    },

    consultoria: {
      id: "consultoria",
      eyebrow: "Consultoría y auditorías",
      title: "Evaluamos. Identificamos. Priorizamos.",
      subtitle:
        "Una evaluación profesional permite conocer el estado actual de cumplimiento de tu empresa antes de que una desviación se convierta en una contingencia.",
      text: "Nuestro enfoque combina revisión documental, evaluación de condiciones físicas y análisis de aspectos operativos para obtener una visión integral de las áreas ambiental y de seguridad industrial.",
      diagnostico: {
        title: "Diagnóstico 360° ambiental y de seguridad industrial",
        text: "Una evaluación preventiva diseñada para identificar el nivel de cumplimiento de la organización, detectar brechas y establecer una ruta de atención de acuerdo con las necesidades y características de cada operación.",
        elements: [
          {
            title: "Evaluación documental",
            body: "Revisión de documentación, registros, programas, permisos, procedimientos y evidencias asociadas a las obligaciones aplicables.",
          },
          {
            title: "Evaluación en campo",
            body: "Verificación de condiciones físicas, instalaciones, equipos, señalización, almacenamiento, controles operacionales y condiciones de seguridad.",
          },
          {
            title: "Evaluación ambiental",
            body: "Revisión de aspectos relacionados con residuos, almacenamiento, manejo, registros, obligaciones y controles ambientales aplicables.",
          },
          {
            title: "Análisis de cumplimiento",
            body: "Identificación y clasificación de hallazgos para facilitar la toma de decisiones.",
          },
          {
            title: "Matriz de prioridades",
            body: "Organización de las áreas de atención de acuerdo con su relevancia y nivel de riesgo.",
          },
          {
            title: "Plan de acción",
            body: "Definición de acciones recomendadas para avanzar en la atención de las brechas identificadas.",
          },
        ],
        cta: { label: "Solicitar diagnóstico 360°", service: "diagnostico" },
      },
    },

    diagnosticoFlow: {
      title: "Información para tomar decisiones.",
      text: "El valor de una evaluación no está únicamente en detectar incumplimientos, sino en convertir los hallazgos en información útil para la gestión.",
      steps: [
        "Situación actual",
        "Identificación de brechas",
        "Evaluación",
        "Priorización",
        "Plan de acción",
        "Seguimiento",
      ],
      footer:
        "El resultado proporciona una visión estructurada de las principales áreas de oportunidad y facilita la definición de acciones de mejora.",
    },

    auditorias: {
      eyebrow: "Evaluación especializada",
      title: "Auditorías orientadas a la prevención y al cumplimiento.",
      text: "Evaluaciones enfocadas en verificar el grado de cumplimiento de requisitos ambientales y de seguridad industrial, identificar desviaciones y proporcionar elementos para su atención.",
      items: [
        {
          title: "Auditoría de seguridad industrial",
          body: "Revisión de condiciones, controles, documentación y prácticas relacionadas con la prevención de riesgos laborales.",
        },
        {
          title: "Auditoría ambiental",
          body: "Evaluación de aspectos y obligaciones ambientales aplicables a las actividades de la organización.",
        },
        {
          title: "Revisión documental",
          body: "Análisis sistemático de expedientes, registros, programas, permisos, procedimientos y evidencias.",
        },
        {
          title: "Preparación para inspecciones",
          body: "Identificación preventiva de áreas susceptibles de observación antes de una visita de autoridad.",
        },
      ],
      cta: { label: "Solicitar una evaluación", service: "auditoria" },
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
            "Capacitación enfocada en la prevención de incidentes durante las actividades relacionadas con la operación y manejo de materiales mediante montacargas.",
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
            "Fortalece la preparación del personal para prevenir incendios y participar de manera organizada en la respuesta ante situaciones de emergencia.",
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
            "Capacitación para reconocer los riesgos asociados al trabajo en alturas y fortalecer las medidas preventivas para evitar accidentes.",
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
            "Capacitación para comprender la estructura de la COA y organizar la información ambiental necesaria para su integración y presentación.",
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
      eyebrow: "Gestión y cumplimiento",
      title: "Gestión de obligaciones y trámites ante autoridades.",
      text: "Apoyamos a las organizaciones en la identificación, preparación y gestión de obligaciones y trámites relacionados con sus actividades, de acuerdo con el marco regulatorio aplicable y la autoridad competente.",
      levels: [
        {
          title: "Federal",
          items: ["SEMARNAT", "PROFEPA", "STPS", "Y otras autoridades federales competentes según la actividad."],
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
      eyebrow: "Metodología SG+MAS",
      title: "Un proceso estructurado para entender y mejorar el cumplimiento.",
      steps: [
        { number: "01", title: "Conocer", body: "Comprendemos las características y actividades de la organización." },
        { number: "02", title: "Evaluar", body: "Analizamos documentación, instalaciones y condiciones operativas." },
        { number: "03", title: "Identificar", body: "Detectamos brechas, desviaciones y áreas de oportunidad." },
        { number: "04", title: "Priorizar", body: "Determinamos qué debe atenderse primero." },
        { number: "05", title: "Fortalecer", body: "Definimos acciones orientadas a mejorar el desempeño y reducir riesgos." },
      ],
    },

    diferenciador: {
      title: "No se trata solo de cumplir. Se trata de gestionar el riesgo.",
      text: "Una organización preparada conoce sus obligaciones, identifica sus vulnerabilidades y cuenta con información para actuar antes de que una desviación genere consecuencias operativas, legales o económicas.",
      quote: "Conocer el estado actual de cumplimiento es el primer paso para gestionarlo.",
      cta: { label: "Evaluar mi empresa", service: "diagnostico" },
    },

    paraQuien: {
      title: "Soluciones para organizaciones que buscan mayor control sobre su cumplimiento.",
      items: [
        {
          title: "Empresas industriales",
          body: "Para organizaciones que necesitan fortalecer sus sistemas de gestión ambiental y seguridad industrial.",
        },
        {
          title: "PYMES",
          body: "Para empresas que requieren identificar sus obligaciones y establecer prioridades sin asumir estructuras administrativas innecesariamente complejas.",
        },
        {
          title: "Empresas en crecimiento",
          body: "Para organizaciones que necesitan ordenar sus obligaciones y fortalecer sus procesos conforme crece su operación.",
        },
        {
          title: "Empresas ante una inspección",
          body: "Para organizaciones que desean realizar una evaluación preventiva antes de una visita de autoridad.",
        },
      ],
    },

    nosotros: {
      id: "nosotros",
      eyebrow: "SG+MAS",
      title: "Conocimiento técnico orientado a la gestión empresarial.",
      text: "SG+MAS integra conocimiento técnico en gestión ambiental, seguridad industrial y cumplimiento normativo con una visión orientada a las necesidades reales de las organizaciones. Nuestro enfoque combina análisis técnico, prevención y acompañamiento profesional para transformar las obligaciones regulatorias en herramientas de gestión.",
      pillars: [
        "Gestión ambiental",
        "Seguridad industrial",
        "Cumplimiento normativo",
        "Capacitación empresarial",
      ],
    },

    finalCta: {
      title: "¿Conoces realmente el nivel de cumplimiento de tu empresa?",
      text: "Obtén una visión estructurada de tus principales áreas de oportunidad y establece prioridades para fortalecer tu gestión ambiental y de seguridad industrial.",
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
        { value: "diagnostico", label: "Diagnóstico 360°" },
        { value: "consultoria", label: "Consultoría" },
        { value: "auditoria", label: "Auditoría" },
        { value: "capacitacion", label: "Capacitación" },
        { value: "tramites", label: "Gestión de trámites" },
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
