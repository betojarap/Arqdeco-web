// Datos centrales del sitio. Edita aquí teléfono, correo, redes y servicios.

export const FOUNDED = 2012;
export const yearsOfExperience = () => new Date().getFullYear() - FOUNDED;

export const site = {
  name: 'Arqdeco Perú',
  legalName: 'ARQDECO PERÚ EIRL',
  description:
    'Proyectos de arquitectura, licencias de funcionamiento, planos, expedientes técnicos en edificaciones, diseño y dirección de obras civiles en Lima.',
  phone: '+51 922 243 627',
  phoneHref: 'tel:+51922243627',
  whatsapp: 'https://wa.me/51922243627?text=' + encodeURIComponent('Hola Arqdeco, quisiera información sobre sus servicios.'),
  email: 'susana@arqdeco.com.pe',
  // Clave pública de Web3Forms para el formulario de contacto (no es secreta).
  web3formsKey: 'e1d3c64f-c7ab-4694-a053-ed0b19c4ce1a',
  address: 'Av. Circunvalacion del Golf Los Incas Nro. 134 Int. 26 Centro Empresarial Panorama Torre 2 Piso 6 Lima - Lima - Santiago de Surco',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Av. Circunvalacion del Golf Los Incas 134, Santiago de Surco, Lima, Perú'),
  social: {
    facebook: 'https://www.facebook.com/arqdecope/',
    linkedin: 'https://pe.linkedin.com/company/arqdeco-per%C3%BA',
    // instagram: 'https://www.instagram.com/...',  // añadir cuando exista la cuenta
  },
};

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros/', label: 'Nosotros' },
  { href: '/servicios/', label: 'Servicios' },
  { href: '/facility-manager/', label: 'Facility Manager' },
  { href: '/normativas/', label: 'Normativa' },
  { href: '/galeria/', label: 'Galería' },
  { href: '/clientes/', label: 'Clientes' },
  { href: '/contacto/', label: 'Contacto' },
];

export type Service = { id: string; title: string; short: string; items: string[] };

export const services: Service[] = [
  {
    id: 'servicios-generales',
    title: 'Servicios generales y mantenimiento',
    short: 'Construcción, ampliaciones, remodelaciones e instalaciones para oficinas, viviendas y locales comerciales.',
    items: [
      'Construcción, ampliaciones y remodelaciones de oficinas, viviendas y locales comerciales',
      'Pintura',
      'Drywall y falsos cielos rasos',
      'Instalaciones eléctricas y tableros eléctricos certificados',
      'Mantenimiento de pozo a tierra y subestaciones',
      'Instalaciones sanitarias',
      'Sistemas contra incendio y de detección de intrusión (SCI y SDI)',
      'Aire acondicionado y trabajos electromecánicos',
      'Carpintería y vidriería',
      'Instalación de pisos: cerámico, vinílico, porcelanato y madera',
    ],
  },
  {
    id: 'anteproyectos',
    title: 'Anteproyectos y obras civiles',
    short: 'Planos, presupuestos, licencias de edificación, ejecución y supervisión de obra.',
    items: [
      'Planos de arquitectura, instalaciones eléctricas y sanitarias',
      'Cronograma y presupuesto de obra',
      'Trámite de expedientes para licencia de edificación',
      'Ejecución de obras civiles',
      'Asesoría en materiales',
      'Supervisión de obras civiles',
      'Topografía',
    ],
  },
  {
    id: 'expedientes-tecnicos',
    title: 'Expedientes técnicos (INDECI – Defensa Civil)',
    short: 'Te acompañamos hasta obtener tu Certificado de Inspección Técnica de Seguridad en Edificaciones.',
    items: [
      'Elaboración de expedientes técnicos para ITSE',
      'Asesoría en los requisitos de INDECI',
      'Equipos de seguridad y certificados',
      'Seguimiento del trámite hasta obtener el Certificado de Defensa Civil',
      'Trabajos eléctricos',
      'Plan de contingencia',
      'Capacitación en primeros auxilios, simulacro de evacuación y uso de extintores',
    ],
  },
  {
    id: 'tasaciones',
    title: 'Tasaciones',
    short: 'Valuaciones comerciales y de realización en Lima y provincias.',
    items: [
      'Tasación comercial y valor de realización',
      'Inspección en campo y trabajo en gabinete',
      'Atención en Lima y provincias',
      'Según el Reglamento Nacional de Tasaciones (RM N.º 172-2016-VIVIENDA)',
    ],
  },
  {
    id: 'licencias',
    title: 'Licencias de funcionamiento',
    short: 'Preparamos y tramitamos tu expediente ante la municipalidad.',
    items: [
      'Elaboración del expediente para la licencia de funcionamiento',
      'Trámite ante la municipalidad',
      'Cambio de uso cuando sea necesario',
    ],
  },
  {
    id: 'saneamiento',
    title: 'Saneamiento físico legal de inmuebles',
    short: 'Ordenamos la situación registral y legal de tu propiedad.',
    items: [
      'Búsquedas catastrales',
      'Declaratoria de fábrica e independización',
      'Valuación de inmuebles',
      'Desafectación y acumulación de áreas',
      'Reglamento interno y junta de propietarios',
      'Cambio de uso para locales comerciales',
      'Asesoría legal',
    ],
  },
];
