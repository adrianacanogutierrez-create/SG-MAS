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
      eyebrow: "Capacitación empresarial",
      title: "Fortalece las competencias de tu equipo.",
      text: "La gestión de riesgos requiere personal capacitado y capaz de aplicar procedimientos adecuados en las actividades que desarrolla. SG+MAS ofrece capacitación empresarial especializada en seguridad industrial, emergencias y gestión ambiental, con contenidos orientados al contexto operativo de cada organización.",
      subtitle: "Capacitación para el entorno industrial",
      categories: [
        {
          name: "Seguridad industrial",
          courses: [
            {
              name: "Seguridad en el trabajo",
              description: "Fundamentos y prácticas de prevención de riesgos en entornos industriales.",
              modality: "Presencial / In company",
            },
            {
              name: "Trabajos en alturas",
              description: "Procedimientos seguros, equipos de protección y controles para trabajos elevados.",
              modality: "Presencial / In company",
            },
          ],
        },
        {
          name: "Emergencias",
          courses: [
            {
              name: "Prevención y combate de incendios",
              description: "Identificación de riesgos, uso de extintores y respuesta ante emergencias por fuego.",
              modality: "Presencial / In company",
            },
            {
              name: "Emergencias con amoniaco",
              description: "Manejo seguro, respuesta a fugas y protocolos específicos para instalaciones con amoniaco.",
              modality: "Presencial / In company",
            },
          ],
        },
        {
          name: "Gestión ambiental",
          courses: [
            {
              name: "Manejo de residuos peligrosos",
              description: "Clasificación, almacenamiento, transporte y disposición conforme a la normativa aplicable.",
              modality: "Presencial / In company",
            },
            {
              name: "Cuidado y gestión del agua",
              description: "Uso eficiente, cumplimiento de obligaciones y controles operacionales del recurso hídrico.",
              modality: "Presencial / In company",
            },
            {
              name: "Cédula de Operación Anual",
              description:
                "Resolvemos tus dudas sobre la plataforma, funcionamiento y obligaciones federales.",
              modality: "Presencial / In company",
            },
          ],
        },
      ],
      note: "Los contenidos y modalidades pueden adaptarse a las características, riesgos y necesidades de cada organización.",
      cta: { label: "Solicitar capacitación", service: "capacitacion" },
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
