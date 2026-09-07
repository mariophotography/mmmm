import { NotaryProfile, NotaryService, FacilityImage } from '../types';

export const NOTARY_INFO: NotaryProfile = {
  name: "Dr. Marcelo Ramos Dávalos",
  title: "Notario Sexto Titular",
  notaryOffice: "Notaría Sexta",
  canton: "Cantón Riobamba",
  province: "Chimborazo - Ecuador",
  portraitUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
  experienceYears: 28,
  phoneLandline: "(03) 2399 595",
  phoneMobile: "0984436244",
  email: "notariasextariobamba@gmail.com",
  address: "Tarqui, N 23-16 entre Primera Constituyente y Veloz",
  reference: "Frente a CNT - Centro Histórico",
  hours: "Lunes a Viernes de 08:00 a 17:00 (Jornada Ininterrumpida)",
  bio: "La Notaría Sexta del Cantón Riobamba cuenta con un prestigio consolidado, brindando un servicio de excelencia desde hace décadas. Nuestra misión es garantizar la seguridad jurídica y la fe pública en cada trámite.",
  curriculum: {
    education: [
      {
        title: "Doctor en Jurisprudencia y Abogado de los Tribunales de Justicia",
        institution: "Universidad Central del Ecuador",
        year: "1994"
      },
      {
        title: "Magíster en Derecho Notarial, Registral e Inmobiliario",
        institution: "Universidad Andina Simón Bolívar",
        year: "2006"
      },
      {
        title: "Especialista Superior en Derecho Administrativo y Constitucional",
        institution: "Universidad San Francisco de Quito",
        year: "2012"
      }
    ],
    experience: [
      {
        role: "Notario Titular de la Notaría Sexta del Cantón Riobamba",
        organization: "Función Judicial del Ecuador / Consejo de la Judicatura",
        period: "2013 - Presente"
      },
      {
        role: "Docente Titular de Derecho Civil y Notarial",
        organization: "Universidad Nacional de Chimborazo (UNACH)",
        period: "2002 - 2018"
      },
      {
        role: "Asesor Jurídico y Consultor Legal en Contratación Pública",
        organization: "Diversas instituciones públicas y privadas de Chimborazo",
        period: "1995 - 2013"
      }
    ],
    certifications: [
      "Certificación en Fe Pública Digital y Firma Electrónica Avanzada (Consejo de la Judicatura)",
      "Diplomado Internacional en Derecho Societario y Gobierno Corporativo (UASB)",
      "Capacitación Continua en Prevención de Lavado de Activos (UAFE)",
      "Acreditación en Métodos Alternativos de Solución de Conflictos y Mediación Notarial"
    ],
    affiliations: [
      "Colegio de Abogados de Chimborazo - Matrícula Profesional Activa",
      "Federación Ecuatoriana de Notarios (FEN)",
      "Unión Internacional del Notariado Latino (UINL)"
    ]
  }
};

export const NOTARY_SERVICES: NotaryService[] = [
  {
    id: "escrituras-publicas",
    name: "Escrituras Públicas",
    shortDesc: "Compraventas, donaciones, hipotecas, cancelaciones de patrimonio familiar y permutas de bienes inmuebles.",
    fullDesc: "Formalización e instrumentación legal de actos y contratos que requieren solemnidad de escritura pública para su validez jurídica e inscripción en el Registro de la Propiedad.",
    category: "inmobiliario",
    requirements: [
      "Copia de cédula y certificado de votación actualizado de los comparecientes.",
      "Título de propiedad o escritura anterior debidamente inscrita.",
      "Certificado de Gravámenes actualizado emitido por el Registro de la Propiedad del cantón.",
      "Pago de Impuesto Predial del año en curso.",
      "Carta de pago de Plusvalía y Alcabala (si aplica según el GAD Municipal).",
      "Minuta autorizada por abogado patrocinador."
    ],
    estimatedTime: "2 a 3 días laborables",
    legalBase: "Art. 29 y 30 de la Ley Notarial del Ecuador",
    tariffEstimate: "Según avalúo comercial / tabla oficial del Consejo de la Judicatura",
    isFeatured: true
  },
  {
    id: "poderes",
    name: "Poderes",
    shortDesc: "Poderes generales, especiales, revocatorias y procuraciones judiciales para trámites y representación legal.",
    fullDesc: "Otorgamiento de facultades de representación legal para administración de bienes, trámites bancarios, compraventa de vehículos, representación procesal o trámites ante entidades públicas y privadas.",
    category: "general",
    requirements: [
      "Cédula de ciudadanía o pasaporte vigente del poderdante.",
      "Certificado de votación del poderdante.",
      "Datos completos y número de cédula del apoderado.",
      "Minuta con las facultades específicas requeridas (o redacción directa en notaría para poderes estándar)."
    ],
    estimatedTime: "Mismo día (1 hora)",
    legalBase: "Art. 18 numeral 13 Ley Notarial / Art. 2020 Código Civil",
    tariffEstimate: "Arancel fijo reglamentario",
    isFeatured: true
  },
  {
    id: "reconocimiento-firmas",
    name: "Reconocimiento de Firmas",
    shortDesc: "Autenticación de firmas y rúbricas en contratos privados, pagarés, letras de cambio y declaraciones.",
    fullDesc: "Diligencia mediante la cual el Notario da fe pública de que la firma estampada en un documento privado corresponde a la persona compareciente, quien reconoce su autoría bajo juramento.",
    category: "general",
    requirements: [
      "Documento original a ser reconocido y firmado en presencia del Notario.",
      "Cédula de identidad física y original del compareciente.",
      "Certificado de votación original y vigente.",
      "Presencia física del suscriptor o comparecencia telemática validada."
    ],
    estimatedTime: "Inmediato (15 - 20 minutos)",
    legalBase: "Art. 18 numeral 9 de la Ley Notarial",
    tariffEstimate: "Arancel oficial por firma y certificación",
    isFeatured: true
  },
  {
    id: "actas-supervivencia",
    name: "Actas de Supervivencia",
    shortDesc: "Fe de vida presencial y a domicilio para jubilados (IESS, ISSFA, ISSPOL y pensionistas del exterior).",
    fullDesc: "Emisión de constancia notarial que certifica la existencia y supervivencia de una persona, requisito habitual para el cobro de pensiones jubilares nacionales e internacionales.",
    category: "familia",
    requirements: [
      "Cédula de identidad original del solicitante / jubilado.",
      "Presencia física del compareciente en la Notaría (o solicitud previa para visita domiciliaria/hospitalaria).",
      "Formulario institucional de la entidad de seguridad social solicitante (si aplica)."
    ],
    estimatedTime: "Inmediato (10 minutos)",
    legalBase: "Art. 18 numeral 12 de la Ley Notarial",
    tariffEstimate: "Trámite preferencial y tarifas especiales para adultos mayores",
    isFeatured: true
  },
  {
    id: "posesiones-efectivas",
    name: "Posesiones Efectivas",
    shortDesc: "Declaración notarial de herederos sobre el patrimonio dejado por el causante sin testamento.",
    fullDesc: "Acto notarial mediante el cual se confiere a los herederos la posesión legal de los bienes del causante, paso indispensable para liquidación de herencias y transferencias inmobiliarias.",
    category: "familia",
    requirements: [
      "Partida de defunción original del causante.",
      "Partida de matrimonio o unión de hecho del causante (si aplica).",
      "Partidas de nacimiento de todos los herederos legítimos.",
      "Copia de cédulas y papeletas de votación de los solicitantes.",
      "Petición o minuta elaborada por abogado patrocinador."
    ],
    estimatedTime: "24 a 48 horas",
    legalBase: "Art. 18 numeral 12 de la Ley Notarial",
    tariffEstimate: "Arancel regulado según tabla del Consejo de la Judicatura",
    isFeatured: true
  },
  {
    id: "divorcios-mutuo-acuerdo",
    name: "Divorcios por Mutuo Acuerdo",
    shortDesc: "Disolución del vínculo matrimonial por consentimiento mutuo sin hijos menores ni dependientes.",
    fullDesc: "Procedimiento notarial expedito y confidencial para disolver legalmente el matrimonio de común acuerdo cuando no existen hijos menores de edad o cuando su situación jurídica ya ha sido resuelta.",
    category: "familia",
    requirements: [
      "Partida de matrimonio íntegra y actualizada.",
      "Copia de cédulas y certificados de votación de ambos cónyuges.",
      "Acta de mediación o resolución judicial previa sobre alimentos, tenencia y visitas (si hay hijos menores).",
      "Petición suscrita por ambos cónyuges con patrocinio de abogado.",
      "Comparecencia personal de ambos cónyuges o mediante poder especial."
    ],
    estimatedTime: "Audiencia fijada en 5 a 10 días laborables",
    legalBase: "Art. 18 numeral 22 de la Ley Notarial",
    tariffEstimate: "Arancel oficial fijado por la Función Judicial",
    isFeatured: true
  },
  {
    id: "declaraciones-juramentadas",
    name: "Declaraciones Juramentadas",
    shortDesc: "Declaraciones patrimoniales juradas para la Contraloría, ingreso al sector público y trámites legales.",
    fullDesc: "Testimonio bajo juramento rendido ante Notario sobre hechos propios, estados civiles, bienes patrimoniales o requisitos para el ejercicio de funciones públicas.",
    category: "general",
    requirements: [
      "Cédula y certificado de votación original.",
      "Borrador o formulario en línea de la Contraloría General del Estado (si es declaración de bienes).",
      "Detalle de los hechos o condiciones que se declaran bajo fe de juramento."
    ],
    estimatedTime: "20 a 30 minutos",
    legalBase: "Art. 18 numeral 28 Ley Notarial",
    tariffEstimate: "Arancel base oficial",
    isFeatured: false
  },
  {
    id: "constitucion-empresas",
    name: "Constitución de Compañías y Actos Societarios",
    shortDesc: "Constitución de S.A., Cía. Ltda., SAS, aumentos de capital, reformas estatutarias y nombramientos.",
    fullDesc: "Asesoramiento notarial para la constitución y modificación de estructuras societarias, garantizando la correcta adecuación a la Ley de Compañías y Superintendencia de Compañías.",
    category: "societario",
    requirements: [
      "Reserva de denominación otorgada por la Superintendencia de Compañías.",
      "Minuta de constitución con estatutos sociales elaborada por abogado.",
      "Copia de documentos de identidad de los socios/accionistas.",
      "Comprobante de depósito de capital inicial (según la especie de compañía)."
    ],
    estimatedTime: "2 a 4 días laborables",
    legalBase: "Ley de Compañías / Ley Notarial",
    tariffEstimate: "De acuerdo al capital suscrito y aranceles societarios",
    isFeatured: false
  }
];

export const FACILITIES: FacilityImage[] = [
  {
    id: "sala-firmas",
    title: "Sala Principal de Firmas y Despacho",
    description: "Espacio formal y privado dotado de tecnología para la lectura y otorgamiento de escrituras públicas solemnes y audiencias notariales.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    tag: "Despacho & Firmas"
  },
  {
    id: "atencion-ciudadano",
    title: "Módulo de Recepción y Atención",
    description: "Área climatizada diseñada para la recepción ágil de trámites, verificación de requisitos y entrega oportuna de testimonios notariales.",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
    tag: "Recepción & Turnos"
  },
  {
    id: "archivo-digital",
    title: "Archivo Notarial y Digitalización",
    description: "Custodia segura de protocolos matrices y sistema de archivo digitalizado para consulta histórica y expedición rápida de copias certificadas.",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    tag: "Custodia & Protocolo"
  },
  {
    id: "sala-juntas",
    title: "Sala de Audiencias y Mediación",
    description: "Ambiente reservado y confortable para la celebración de divorcios notariales, particiones extrajudiciales y reuniones privadas.",
    imageUrl: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=900&q=80",
    tag: "Audiencias Privadas"
  }
];
