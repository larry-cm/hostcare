// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'HostCare',
    title: 'HostCare - Hosting y Administración de Sitios Web',
    description:
      'HostCare ofrece hosting confiable, administración de sitios y dominios, con servidores seguros y soporte técnico 24/7 en español. Garantizamos velocidad, disponibilidad 99.9% y presencia en Latinoamérica. Registra tu dominio .lat y potencia tu presencia online.',
    keywords:
      'hosting, dominio .lat, hosting web, hosting latino, dominios, administración de sitios, servidores seguros, soporte 24/7, hosting latinoamérica, certificado ssl, hosting compartido, vps, hosting administrado',
    email: 'soporte@HostCare.co',

    // Open Graph / Twitter
    ogTitle: 'HostCare - Hosting y Administración Web',
    ogDescription:
      'Hosting confiable, administración de sitios y dominios con soporte 24/7 en español. Garantizamos velocidad, seguridad y 99.9% de disponibilidad.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'HostCare',
    twitterDescription:
      'Hosting confiable y administración de sitios. Soporte 24/7 en español.',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Características', href: '#features' },
      { name: 'Cómo funciona', href: '#how-it-works' },
      { name: 'Planes', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Alojar ahora',
      href: '#contact',
    },
  },
  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'HostCare',
    subheadline: 'Confiable para toda Latinoamérica',
    description:
      'Ofrecemos hosting web de alto rendimiento, seguro y disponible 99.9%, con servidores regionales y soporte técnico 24/7 en español.',
    cta: {
      primary: {
        text: 'Comenzar ahora',
        href: '#contact',
      },
      secondary: {
        text: 'Ver planes y precios',
        href: '#pricing',
      },
    },
    stats: [
      { value: '99.9%', label: 'Tiempo activo garantizado' },
      { value: '<50ms', label: 'Latencia promedio' },
      { value: '24/7', label: 'Soporte en español' },
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    title: 'Soluciones de hosting completas',
    subtitle:
      'Todo lo que necesitas para lanzar y hacer crecer tu presencia online en Latinoamérica',
    items: [
      { icon: 'server', title: 'Hosting compartido' },
      { icon: 'cloud', title: 'VPS en la nube' },
      { icon: 'database', title: 'Bases de datos' },
      { icon: 'mail', title: 'Correo corporativo' },
      { icon: 'shield', title: 'SSL gratuito' },
      { icon: 'globe', title: 'CDN regional' },
      { icon: 'backup', title: 'Respaldos automáticos' },
      { icon: 'zap', title: 'Dominio .lat' },
      { icon: 'bolt', title: 'Seguridad avanzada' },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'Cómo funciona',
    subtitle:
      'Comienza en minutos con nuestro sencillo proceso de 5 pasos',
  },

  // ============================================
  // TESTIMONIOS
  // ============================================
  testimonials: {
    title: 'Elegido por empresas de toda Latinoamérica',
    subtitle:
      'Esto es lo que dicen nuestros clientes sobre HostCare y nuestros servicios de hosting',
  },

  // ============================================
  // PRICING
  // ============================================
  pricing: {
    title: 'Planes de hosting en Latinoamérica',
    subtitle:
      'Elige el plan ideal para tu sitio web. Migra en minutos. Actualiza o cancela cuando quieras.',
    plans: [
      {
        name: 'Starter',
        price: '$0',
        period: '/mes',
        description: 'Ideal para proyectos personales y páginas estáticas',
        badge: 'Para empezar',
        features: [
          'Subdominio incluido (HostCare.host/tudominio)',
          '1 sitio web estático',
          '1 GB de almacenamiento',
          '5 GB de transferencia mensual',
          'SSL básico',
        ],
        cta: {
          text: 'Comenzar gratis',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Pro',
        price: '$15',
        period: '/mes',
        description: 'Perfecto para PyMEs y sitios en crecimiento',
        badge: 'Más popular',
        features: [
          '1 dominio incluido + DNS gratuito',
          '10 sitios web',
          '100 GB SSD',
          'SSL gratuito + Let\'s Encrypt',
          'CDN regional',
          'Backups automáticos',
          'Soporte prioritario 24/7',
        ],
        cta: {
          text: 'Elegir Pro',
          href: '#contact',
        },
        featured: true,
      },
      {
        name: 'Empresa',
        price: '$29',
        period: '/mes',
        description: 'Máximo rendimiento y soporte dedicado',
        badge: 'Para alto tráfico',
        features: [
          'Dominios ilimitados + .lat gratuito',
          'Sitios web ilimitados',
          '300 GB SSD NVMe',
          'CDN regional LATAM + Anycast DNS',
          'SSL avanzado + WAF',
          'Soporte dedicado 24/7',
          'Backups diarios + semanales',
        ],
        cta: {
          text: 'Hablar con ventas',
          href: '#contact',
        },
        featured: false,
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Preguntas frecuentes',
    subtitle:
      'Todo lo que necesitas saber sobre HostCare y nuestro hosting en Latinoamérica',
    items: [
      {
        question: '¿Cuál es la garantía de disponibilidad (SLA)?',
        answer:
          'Garantizamos 99.9% de disponibilidad con monitoreo 24/7 y compensación por incumplimiento.',
      },
      {
        question: '¿Dónde están ubicados sus centros de datos?',
        answer:
          'Operamos presencia en Brasil, México, Colombia y Chile, con latencia promedio <50 ms en LATAM.',
      },
      {
        question: '¿Ofrecen migración gratuita desde mi proveedor actual?',
        answer:
          'Sí, migramos tu sitio, base de datos y DNS sin downtime. Soporte en español incluido.',
      },
      {
        question: '¿Qué métodos de pago aceptan?',
        answer:
          'Aceptamos tarjetas Visa/Mastercard, PayPal, transferencias (PIX, PSE, OXXO) y pagos en USD, MXN, COP, CLP, PEN.',
      },
      {
        question: '¿Cuál es el tiempo de respuesta del soporte?',
        answer:
          'Respuesta inicial <10 min 24/7 en español por chat, ticket y WhatsApp.',
      },
      {
        question: '¿Qué incluye el dominio .lat?',
        answer:
          'Registro/renovación de .lat, DNS anycast, SSL gratuito y protección de privacidad.',
      },
      {
        question: '¿Tienen certificado SSL y CDN?',
        answer:
          'Incluimos SSL Let\'s Encrypt automático y CDN regional optimizado para LATAM con presencia en México, Colombia, Brasil y Chile.',
      },
      {
        question: '¿Cómo funcionan los backups?',
        answer:
          'Backups automáticos diarios por 14 días, restaurables con 1 clic desde cPanel/Plesk. Planes Pro y Empresa incluyen backups semanales y mensuales.',
      },
    ],
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: '¿Listo para lanzar tu sitio en Latinoamérica?',
    subtitle:
      'Únete a miles de empresas que confían en HostCare para hospedar sus sitios web. Empieza hoy con nuestro plan gratuito y migra en minutos.',
    benefits: [
      'Sin tarjeta de crédito',
      'Configuración en menos de 5 minutos',
      'Migración gratuita desde tu proveedor actual',
      'Soporte 24/7 en español',
    ],
    email: 'soporte@HostCare.co',
    form: {
      cta: 'Comenzar gratis',
      fields: {
        name: {
          label: 'Nombre completo',
          placeholder: 'Larry Moncada',
          required: true,
        },
        email: {
          label: 'Correo electrónico',
          placeholder: 'larry@tuempresa.com',
          required: true,
        },
        company: {
          label: 'Empresa',
          placeholder: 'Tu Empresa S.A.S.',
          required: false,
        },
        message: {
          label:
            'Cuéntanos sobre tu proyecto y necesidades de hosting',
          placeholder:
            'Describe tu sitio, visitas mensuales, tecnologías y cualquier requerimiento específico...',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Hosting confiable con soporte técnico 24/7 en español, ideal para mantener tu sitio siempre en línea y con el mejor rendimiento. además de un dominio.',
    columns: [
      {
        title: 'Producto',
        links: [
          { name: 'Características', href: '#features' },
          { name: 'Precios', href: '#pricing' },
          { name: 'Integraciones', href: '#' },
          { name: 'Docs API', href: '#' },
          { name: 'Changelog', href: '#' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { name: 'Nosotros', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Empleos', href: '#' },
          { name: 'Prensa', href: '#' },
          { name: 'Contacto', href: '#contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Política de Privacidad', href: '#' },
          { name: 'Términos de Servicio', href: '#' },
          { name: 'Política de Cookies', href: '#' },
          { name: 'Seguridad', href: '#' },
          { name: 'Cumplimiento', href: '#' },
        ],
      },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: 'twitter' },
      { name: 'GitHub', href: '#', icon: 'github' },
      { name: 'Dribbble', href: '#', icon: 'dribbble' },
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
    copyright: `${new Date().getFullYear()} HostCare Platform. Todos los derechos reservados.`,
  },
};
