// Texto alternativo (alt) de las fotos y logos. Google y los lectores de pantalla lo usan
// para entender qué muestra cada imagen. La clave es el nombre del archivo sin extensión.
// Si subes una foto nueva y no la añades aquí, se usa un texto genérico.

const captions: Record<string, string> = {
  // Galería
  'Captura': 'Soldador de Arqdeco trabajando en una estructura metálica',
  'IMG-20180822-WA0098': 'Técnico pintando un muro exterior desde una escalera',
  'IMG-20180822-WA0111': 'Mantenimiento y pintura de fachada en local industrial',
  'IMG-20180824-WA0069': 'Simulacro de evacuación con brigadistas atendiendo a un herido',
  'IMG-20180824-WA0071': 'Capacitación en primeros auxilios con camilla de rescate',
  'IMG-20180824-WA0075': 'Brigada trasladando a un herido en camilla durante un simulacro',
  'IMG-20180824-WA0081': 'Práctica de inmovilización y traslado en camilla',
  'IMG-20180825-WA0046': 'Instalación de rejilla metálica y cableado en piso',
  'IMG-20180903-WA0002': 'Nivelación de piso en una remodelación de interiores',
  'a': 'Mantenimiento de equipo electromecánico en exteriores',
  'gal-01': 'Trabajo de fachada con andamio en un local comercial',
  'gal-02': 'Equipo de Arqdeco en charla de seguridad antes de iniciar obra',
  'gal-03': 'Revisión de sistema contra incendio y válvulas de rociadores',
  'gal-04': 'Remodelación de oficina con tabiques de drywall',
  'gal-05': 'Instalación de falso cielo raso desde escalera',
  'gal-06': 'Instalación de señalización de seguridad y tablero eléctrico',
  'gal-07': 'Señalización de salida y trabajos eléctricos en altura',
  'gal-08': 'Supervisión de remodelación de oficinas',
  'gal-09': 'Equipo de Arqdeco en un proyecto de acondicionamiento de almacén',
  'gal-10': 'Pintura de interiores en ambiente recién remodelado',
  'gal-11': 'Técnicos instalando mamparas y marcos de aluminio',
  'gal-12': 'Instalación eléctrica en muro de drywall',
  'gal-13': 'Reparación de enchape cerámico en baño',
  'gal-14': 'Equipo de obra revisando planos durante una remodelación',
  'gal-15': 'Reparación de tuberías e instalaciones sanitarias',
  'gal-16': 'Construcción de oficinas con estructura de drywall',
  'gal-17': 'Acabados finales en oficina corporativa remodelada',
  // Clientes
  'clientes-1': 'Logo de Telefónica',
  'clientes-2': 'Logo de T-Gestiona',
  'clientes-4a': 'Logo de Ezentis',
  'clientes-5': 'Logo de C&E Médica',
  'clientes-7': 'Logo de Logicalis',
  'clientes-8a': 'Logos de Pepsi y CBC',
  'clientes-9': 'Logo de Tambo+',
  'clientes-10': 'Logo de C2 Mining Solutions',
};

export function caption(src: string, fallback: string): string {
  const key = src.split('/').pop()!.replace(/\.[^.]+$/, '');
  return captions[key] ?? fallback;
}
