export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
    },
    hero: {
      badge: "It's me",
      name1: 'Henry',
      name2: 'Enoch',
      lastName: 'Francisco Vázquez',
      description:
        'Ingeniero de Software con afinidad al desarrollo web y enfoque Full Stack. Me gusta crear aplicaciones escalables y funcionales, combinando diseño intuitivo con soluciones eficientes tanto en frontend como en backend.',
      downloadCv: 'Descargar CV',
    },
    footer: {
      copyright: 'Henry Enoch Francisco Vázquez ©',
    },
    projects: {
      subtitle: 'Mis Proyectos',
      title: 'Proyectos en los que he trabajado',
      description:
        'Desde el año 2024 he participado en proyectos académicos, de emprendimiento y empresariales. Estas experiencias me han permitido colaborar en el desarrollo de aplicaciones móviles, plataformas web y sistemas administrativos, fortaleciendo mis conocimientos en levantamiento de requisitos, diseño y desarrollo de software, modelado y gestión de bases de datos, integración de APIs y despliegue de aplicaciones.',
      modalDescription: 'Descripción',
      technologies: 'Tecnologías',
      features: 'Funcionalidades',
      screenshots: 'Capturas',
      erpGpc: {
        name: 'ERP GPC Logística',
        shortDescription: 'Plataforma para control de solicitudes de pago, operadores, unidades de transporte y viajes.',
        description: `
ERP empresarial desarrollado para centralizar distintos procesos operativos y administrativos de la organización. La plataforma está compuesta por un módulo de solicitudes de pago para la gestión y aprobación de gastos entre sucursales, un módulo de transporte enfocado en la administración de operadores y viajes, y un módulo de nómina integrado con el sistema de recursos humanos de la empresa para el control de asistencia del personal.

Además, el sistema se integra con servicios externos mediante APIs para obtener información operativa en tiempo real y mantener sincronizados distintos procesos del negocio.`,
        role: 'Desarrollador Full Stack',
        features: [
          'Gestión de solicitudes de pago entre sucursales',
          'Flujo de aprobación de gastos por Tesorería y Dirección',
          'Exportación de solicitudes de pago a Excel',
          'Administración de operadores de transporte',
          'Gestión y seguimiento de viajes',
          'Control de materiales transportados',
          'Generación de cartas porte',
          'Integración con APIs de rastreo en tiempo real',
          'Sincronización de empleados mediante API al sistema de Recursos Humanos de la empresa',
          'Control de asistencia, descansos y días festivos',
          'Importación y exportación de información de nómina mediante Excel',
        ],
      },
      rotomfit: {
        name: 'Rotomfit',
        shortDescription: 'Plataforma web para gestión de pacientes, citas, rutinas terapéuticas, contenido especializado y venta de productos.',
        description: `
RotomFit es una plataforma web desarrollada para optimizar la gestión de una clínica de rehabilitación física. El sistema centraliza la administración de pacientes, el agendamiento de citas, la creación de rutinas terapéuticas personalizadas y la publicación de contenido informativo para los usuarios.

Además, incorpora un módulo de comercio electrónico para el apartado de productos relacionados con la terapia física, permitiendo a los administradores gestionar inventario, pedidos y entregas desde una misma plataforma. El objetivo principal del proyecto es facilitar el seguimiento de los pacientes y mejorar la organización de los procesos clínicos y administrativos.`,
        role: 'Desarrollador Full Stack',
        features: [
          'Registro y gestión de pacientes',
          'Aprobación y validación de pacientes por administradores',
          'Agendamiento y administración de citas',
          'Creación y gestión de ejercicios terapéuticos',
          'Diseño de rutinas personalizadas compuestas por múltiples ejercicios',
          'Dosificación de ejercicios mediante series, repeticiones y parámetros específicos',
          'Seguimiento de rutinas asignadas a pacientes',
          'Gestión de productos para la tienda en línea',
          'Carrito de compras y administración de pedidos',
          'Seguimiento de entregas pendientes por parte de administradores',
          'Publicación y administración de artículos informativos para terapia física',
        ],
      },
      maternico: {
        name: 'Maternico',
        shortDescription: 'Aplicación móvil diseñada para acompañar a las madres primerizas en el cuidado y seguimiento de sus bebés.',
        description: `
Maternico es una aplicación móvil desarrollada por un equipo multidisciplinario integrado por estudiantes de Ingeniería de Software, Contaduría y Gestión de Negocios de la Universidad Veracruzana. El proyecto surgió como una iniciativa de emprendimiento para competir en eventos organizados por ANFECA a nivel regional y nacional, combinando conocimientos tecnológicos, administrativos y financieros.

Fue pensada especialmente para madres primerizas, tanto en zonas urbanas como en comunidades con recursos limitados. Su propósito es centralizar toda la información y seguimiento necesario durante los primeros años de vida del bebé, en un solo lugar accesible desde el celular.

La aplicación permite registrar los datos del bebé y llevar un calendario personalizado donde se pueden agendar eventos propios, pero que también viene precargado con hitos médicos importantes como calendarios de vacunación y revisiones pediátricas según la edad del bebé. Cuenta con una sección informativa a través de videos y revistas digitales, y un directorio que ayuda a localizar los centros de salud u hospitales IMSS más cercanos. Las mamás pueden interactuar entre sí a través de un foro comunitario y conservar los momentos especiales de su bebé en un álbum fotográfico dentro de la app.`,
        role: 'Desarrollador Backend',
        features: [
          'Registro y autenticación de usuarios (madre y administrador)',
          'Registro y gestión del perfil del bebé',
          'Calendario de eventos con hitos de vacunación precargados por edad',
          'Álbum fotográfico de acontecimientos del bebé',
          'Foro comunitario entre madres con comentarios',
          'Directorio de centros de salud y hospitales IMSS cercanos',
          'Visualización de revistas informativas sobre crianza y salud',
          'Visualización de videos informativos sobre cuidado del bebé',
          'Gestión de contenido (revistas y videos) por parte del administrador',
          'Moderación del foro y comentarios por parte del administrador',
        ],
      },
      imprenta: {
        name: 'Imprenta Vázquez',
        shortDescription: 'Plataforma web de gestión de solicitudes de impresión que permite a los clientes solicitar trabajos desde casa y dar seguimiento a su proceso, mientras el administrador gestiona cada etapa.',
        description: `
Es una plataforma web diseñada para digitalizar y centralizar la operación de una imprenta. El administrador es el encargado de registrar manualmente a los clientes en el sistema, quienes una vez con acceso pueden ingresar desde cualquier lugar y crear solicitudes de trabajo de impresión sin necesidad de acudir físicamente al local.

Cada solicitud pasa por un flujo de estados que tanto el cliente como el administrador pueden consultar en todo momento, permitiendo transparencia y seguimiento desde que se recibe el pedido hasta que se completa. Cuando el trabajo es aprobado y el cliente elige pagar por transferencia bancaria, puede subir directamente su comprobante de pago desde la plataforma para agilizar la confirmación. El administrador cuenta con una vista de perfil por cliente donde puede revisar todos los trabajos realizados a lo largo del tiempo, facilitando el seguimiento de clientes frecuentes y el historial completo de su relación comercial.`,
        role: 'Desarrollador Backend',
        features: [
          'Registro y gestión de clientes por parte del administrador',
          'Autenticación de clientes y administrador',
          'Creación de solicitudes de trabajo de impresión por parte del cliente',
          'Seguimiento del estado de las solicitudes en tiempo real',
          'Gestión y actualización de estados de solicitudes por el administrador',
          'Carga de comprobante de pago por transferencia bancaria',
          'CRUD de tipos de trabajo de impresión disponibles',
          'Perfil de cliente con historial completo de trabajos realizados',
          'Visualización del historial de solicitudes por cliente',
        ],
      },
    },
    about: {
      subtitle: 'Quién soy',
      title: 'Sobre mí',
      intro:
        'Desde pequeño sentí una gran curiosidad por el mundo tecnológico y desde inicios del 2024 empecé a participar en el desarrollo de software empresarial.',
      p1: 'Estudio Ingeniería de Software en la Universidad Veracruzana, próximo a egresar en julio de 2026.',
      p2: 'He trabajado desarrollando sistemas reales tanto trabajando para empresas como de manera independiente. Lo cual no solo me ha ayudado a aprender sobre el desarrollo del software, sino también del mantenimiento y la administración en ambientes de producción reales.',
      p3: 'Creo que el buen software no se trata solo de que funcione, sino de que sea fácil de mantener, agradable de usar y resuelva un problema de verdad.',
      stats: {
        years: 'Años de experiencia',
        projects: 'Proyectos realizados',
        university: 'Universidad Veracruzana',
      },
      info: {
        title: 'Información',
        location: 'Ubicación',
        availability: 'Disponibilidad',
        modality: 'Modalidad',
        focus: 'Enfoque',
        languages: 'Idiomas',
        locationValue: 'Coatzacoalcos, Ver. 🇲🇽',
        availabilityValue: 'Disponible',
        modalityValue: 'Remoto / Presencial',
        focusValue: 'Full Stack',
        languagesValue: 'Español · Inglés básico',
      },
      workStyle: {
        results: {
          title: 'Orientado a resultados',
          desc: 'No me conformo con que algo funcione. Me importa que resuelva bien el problema para el que fue creado y que quien lo use lo sienta así.',
        },
        adaptable: {
          title: 'Rápido y adaptable',
          desc: 'He aprendido que en el desarrollo las cosas cambian seguido: requisitos, tecnologías, prioridades. Me adapto a cualquier tipo de cambios.',
        },
        collaborative: {
          title: 'Colaborativo',
          desc: 'Trabajo bien solo, pero mejor en equipo. Escucho, propongo y no tengo problema en reconocer cuando alguien tiene una mejor idea.',
        },
      },
      techStack: {
        subtitle: 'Stack tecnológico',
        title: 'Tecnologías que manejo',
        closing:
          'Estas son las tecnologías con las que he estado trabajado y con las que me siento cómodo. Sin embargo, no me cierro a nada, si un proyecto o equipo requiere algo diferente, lo tomo como una oportunidad de seguir creciendo como parte de mi',
        closingHighlight: 'aprendizaje constante.',
      },
    },
    staging: {
      title: 'Contenido en desarrollo',
      description:
        'Esta sección todavía está en desarrollo. Muy pronto estará disponible con nuevo contenido y proyectos.',
      back: 'Volver al inicio',
    },
    role: {
      fullstack: 'Desarrollador Full Stack',
      backend: 'Desarrollador Backend',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About me',
    },
    hero: {
      badge: "It's me",
      name1: 'Henry',
      name2: 'Enoch',
      lastName: 'Francisco Vázquez',
      description:
        'Software Engineer with an affinity for web development and a Full Stack approach. I enjoy creating scalable and functional applications, combining intuitive design with efficient solutions on both frontend and backend.',
      downloadCv: 'Download CV',
    },
    footer: {
      copyright: 'Henry Enoch Francisco Vázquez ©',
    },
    projects: {
      subtitle: 'My Projects',
      title: "Projects I've worked on",
      description:
        'Since 2024 I have participated in academic, entrepreneurial and business projects. These experiences have allowed me to collaborate on the development of mobile applications, web platforms and administrative systems, strengthening my knowledge in requirements gathering, software design and development, database modeling and management, API integration and application deployment.',
      modalDescription: 'Description',
      technologies: 'Technologies',
      features: 'Features',
      screenshots: 'Screenshots',
      erpGpc: {
        name: 'ERP GPC Logistics',
        shortDescription: 'Platform for managing payment requests, operators, transport units and trips.',
        description: `
Enterprise ERP developed to centralize various operational and administrative processes of the organization. The platform consists of a payment request module for managing and approving expenses between branches, a transportation module focused on operator and trip management, and a payroll module integrated with the company's HR system for employee attendance control.

Additionally, the system integrates with external services through APIs to obtain real-time operational information and keep different business processes synchronized.`,
        role: 'Full Stack Developer',
        features: [
          'Payment request management between branches',
          'Expense approval flow by Treasury and Management',
          'Export payment requests to Excel',
          'Transport operator management',
          'Trip management and tracking',
          'Control of transported materials',
          'Waybill generation',
          'Integration with real-time tracking APIs',
          'Employee synchronization via API to the company\'s HR system',
          'Attendance, breaks and holiday control',
          'Import and export of payroll information via Excel',
        ],
      },
      rotomfit: {
        name: 'Rotomfit',
        shortDescription: 'Web platform for managing patients, appointments, therapeutic routines, specialized content and product sales.',
        description: `
RotomFit is a web platform developed to optimize the management of a physical rehabilitation clinic. The system centralizes patient administration, appointment scheduling, creation of personalized therapeutic routines, and publication of informational content for users.

It also incorporates an e-commerce module for physical therapy related products, allowing administrators to manage inventory, orders and deliveries from a single platform. The main objective of the project is to facilitate patient follow-up and improve the organization of clinical and administrative processes.`,
        role: 'Full Stack Developer',
        features: [
          'Patient registration and management',
          'Patient approval and validation by administrators',
          'Appointment scheduling and management',
          'Exercise creation and management',
          'Custom routine design composed of multiple exercises',
          'Exercise dosing through sets, repetitions and specific parameters',
          'Tracking of routines assigned to patients',
          'Product management for the online store',
          'Shopping cart and order management',
          'Pending delivery tracking by administrators',
          'Publication and management of informational articles for physical therapy',
        ],
      },
      maternico: {
        name: 'Maternico',
        shortDescription: 'Mobile application designed to support first-time mothers in the care and monitoring of their babies.',
        description: `
Maternico is a mobile application developed by a multidisciplinary team made up of students of Software Engineering, Accounting and Business Management from Universidad Veracruzana. The project emerged as an entrepreneurship initiative to compete in events organized by ANFECA at regional and national levels, combining technological, administrative and financial knowledge.

It was designed especially for first-time mothers, both in urban areas and in communities with limited resources. Its purpose is to centralize all the information and monitoring necessary during the first years of the baby's life, in a single accessible place from the phone.

The app allows registering the baby's data and keeping a personalized calendar where you can schedule your own events, but also comes preloaded with important medical milestones such as vaccination schedules and pediatric check-ups according to the baby's age. It has an informational section through videos and digital magazines, and a directory that helps locate the nearest health centers or IMSS hospitals. Moms can interact with each other through a community forum and preserve their baby's special moments in a photo album within the app.`,
        role: 'Backend Developer',
        features: [
          'User registration and authentication (mother and administrator)',
          'Baby profile registration and management',
          'Event calendar with vaccination milestones preloaded by age',
          'Baby photo album of special moments',
          'Community forum between mothers with comments',
          'Directory of nearby health centers and IMSS hospitals',
          'Viewing of informational magazines on parenting and health',
          'Viewing of informational videos on baby care',
          'Content management (magazines and videos) by the administrator',
          'Forum and comment moderation by the administrator',
        ],
      },
      imprenta: {
        name: 'Imprenta Vázquez',
        shortDescription: 'Print job management web platform that allows clients to request work from home and track their process, while the admin manages each stage.',
        description: `
It is a web platform designed to digitize and centralize the operation of a printing press. The administrator is responsible for manually registering clients in the system, who, once they have access, can log in from anywhere and create print job requests without having to physically go to the store.

Each request goes through a status flow that both the client and administrator can check at all times, allowing transparency and tracking from when the order is received until it is completed. When the job is approved and the client chooses to pay by bank transfer, they can upload their payment receipt directly from the platform to speed up confirmation. The administrator has a client profile view where they can review all work done over time, making it easy to track frequent clients and their complete business history.`,
        role: 'Backend Developer',
        features: [
          'Client registration and management by the administrator',
          'Client and administrator authentication',
          'Print job request creation by the client',
          'Real-time request status tracking',
          'Request status management and updates by the administrator',
          'Bank transfer payment receipt upload',
          'CRUD for available print job types',
          'Client profile with complete work history',
          'Request history view by client',
        ],
      },
    },
    about: {
      subtitle: 'Who I am',
      title: 'About me',
      intro:
        "Since I was a child I felt a great curiosity for the technological world and since early 2024 I started participating in enterprise software development.",
      p1: 'I study Software Engineering at Universidad Veracruzana, about to graduate in July 2026.',
      p2: 'I have worked developing real systems both working for companies and independently. This has not only helped me learn about software development, but also about maintenance and administration in real production environments.',
      p3: 'I believe good software is not just about it working, but about being easy to maintain, pleasant to use, and solving a real problem.',
      stats: {
        years: 'Years of experience',
        projects: 'Projects completed',
        university: 'Universidad Veracruzana',
      },
      info: {
        title: 'Information',
        location: 'Location',
        availability: 'Availability',
        modality: 'Modality',
        focus: 'Focus',
        languages: 'Languages',
        locationValue: 'Coatzacoalcos, Ver. 🇲🇽',
        availabilityValue: 'Available',
        modalityValue: 'Remote / On-site',
        focusValue: 'Full Stack',
        languagesValue: 'Spanish · Basic English',
      },
      workStyle: {
        results: {
          title: 'Results-driven',
          desc: "I'm not satisfied with something just working. I care that it solves the problem it was created for and that whoever uses it feels that way.",
        },
        adaptable: {
          title: 'Fast and adaptable',
          desc: "I've learned that in development things change often: requirements, technologies, priorities. I adapt to any kind of change.",
        },
        collaborative: {
          title: 'Collaborative',
          desc: 'I work well alone, but better in a team. I listen, propose, and have no problem recognizing when someone has a better idea.',
        },
      },
      techStack: {
        subtitle: 'Tech Stack',
        title: 'Technologies I work with',
        closing:
          'These are the technologies I have been working with and feel comfortable using. However, I am open to anything — if a project or team requires something different, I take it as an opportunity to keep growing as part of my',
        closingHighlight: 'continuous learning.',
      },
    },
    staging: {
      title: 'Content in development',
      description:
        'This section is still under development. It will be available soon with new content and projects.',
      back: 'Back to home',
    },
    role: {
      fullstack: 'Full Stack Developer',
      backend: 'Backend Developer',
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.es;
