export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number; // In DOP
  priceBefore?: number;
  shortDescription: string;
  description: string;
  benefits: string[];
  usage: string;
  image: string; // Gradient description class or safe placeholder
  badge?: "Bestseller" | "Nuevo" | "Oferta" | "Recomendado";
  stock: number;
  sku: string;
  idealPara?: string[];
  queAporta?: string[];
  combinaloCon?: string[]; // Recommended product slugs
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    slug: "fragancia-aura-n1",
    name: "Fragancia Aura Nº1",
    category: "Fragancias",
    price: 2500,
    shortDescription: "Una esencia premium con notas de sándalo y jazmín para elevar tu presencia.",
    description: "Fragancia Aura Nº1 es un tributo al lujo sutil. Combina la frescura de cítricos seleccionados con un corazón profundo de jazmín y sándalo, terminando en una base cálida de vainilla y ámbar. Elaborada con aceites puros e ingredientes de origen consciente.",
    benefits: [
      "Aroma duradero y elegante",
      "100% libre de parabenos y fijadores sintéticos nocivos",
      "Presentación premium en botella de cristal de demostración"
    ],
    usage: "Rocíe sobre puntos de pulso como cuello, muñecas y detrás de las orejas. Evite el contacto con los ojos.",
    image: "from-[#fbcfe8] to-[#db2777]",
    badge: "Bestseller",
    stock: 30,
    sku: "FRAG-AUR-N1",
    idealPara: [
      "Uso diario y ocasiones especiales",
      "Personas con piel sensible",
      "Amantes de aromas cálidos y amaderados"
    ],
    queAporta: [
      "Frasco de cristal con dosificador de precisión"
    ],
    combinaloCon: ["vela-aromatica-minimal", "difusor-home-essence"]
  },
  {
    id: "prod-02",
    slug: "fragancia-terra-n2",
    name: "Fragancia Terra Nº2",
    category: "Fragancias",
    price: 2800,
    shortDescription: "Notas terrosas de cedro, vetiver y pachulí que conectan con la naturaleza.",
    description: "Fragancia Terra Nº2 evoca la frescura del bosque después de la lluvia. Con una salida verde y especiada, su corazón revela la fuerza del cedro y vetiver sobre una base misteriosa de pachulí y almizcle vegetal.",
    benefits: [
      "Fragancia unisex de alta sofisticación",
      "Ingredientes orgánicos certificados",
      "Presentación de alta gama"
    ],
    usage: "Rocíe sobre el cuerpo o la ropa. Perfecta para el día o la noche.",
    image: "from-[#bbf7d0] to-[#15803d]",
    badge: "Nuevo",
    stock: 25,
    sku: "FRAG-TER-N2",
    idealPara: [
      "Aromas frescos y amaderados",
      "Uso cotidiano en cualquier clima"
    ],
    queAporta: [
      "Frasco de cristal de 100 ml con atomizador dorado"
    ],
    combinaloCon: ["vela-aromatica-minimal"]
  },
  {
    id: "prod-03",
    slug: "set-regalo-premium",
    name: "Set Regalo Premium",
    category: "Regalos",
    price: 4500,
    priceBefore: 5500,
    shortDescription: "Una selección exclusiva de nuestras mejores fragancias y accesorios de cuidado.",
    description: "El obsequio perfecto para celebrar momentos especiales. Este set premium reúne la Fragancia Aura Nº1, una Vela Aromática Minimal y una Bolsa Boutique Daily, presentados en una caja de diseño minimalista y elegante.",
    benefits: [
      "Combinación ideal de aromas y cuidado",
      "Presentación de regalo lista para entregar",
      "Ahorro especial en el pack completo"
    ],
    usage: "Utilice cada elemento según las indicaciones individuales para crear una experiencia de relajación completa.",
    image: "from-[#fef3c7] to-[#d97706]",
    badge: "Bestseller",
    stock: 15,
    sku: "SET-REG-PREM",
    idealPara: [
      "Regalos corporativos y cumpleaños",
      "Ocasiones especiales de bienestar"
    ],
    queAporta: [
      "Caja de regalo premium",
      "Fragancia Aura Nº1 (50ml)",
      "Vela Aromática Minimal (250ml)",
      "Bolsa Boutique Daily"
    ],
    combinaloCon: ["difusor-home-essence"]
  },
  {
    id: "prod-04",
    slug: "vela-aromatica-minimal",
    name: "Vela Aromática Minimal",
    category: "Hogar premium",
    price: 1500,
    shortDescription: "Cera de soya natural y aceites esenciales en un envase minimalista.",
    description: "Nuestra vela aromática se vierte a mano en pequeños lotes. Elaborada con cera de soya 100% biodegradable y libre de parafina. Infundida con aceites esenciales puros que purifican el ambiente e inducen calma.",
    benefits: [
      "Combustión limpia sin hollín tóxico",
      "Duración de 45 a 50 horas de encendido",
      "Aromaterapia activa para inducir calma y presencia"
    ],
    usage: "Encienda y mantenga encendida hasta que la cera superficial se derrita por completo hasta los bordes del vaso de vidrio.",
    image: "from-[#fed7aa] to-[#ea580c]",
    badge: "Recomendado",
    stock: 35,
    sku: "VEL-AROM-MIN",
    idealPara: [
      "Crear ambientes relajantes en salas o baños",
      "Meditar o acompañar lecturas"
    ],
    queAporta: [
      "Vaso de cristal esmerilado con tapa de madera"
    ],
    combinaloCon: ["difusor-home-essence"]
  },
  {
    id: "prod-05",
    slug: "kit-cuidado-personal",
    name: "Kit Cuidado Personal",
    category: "Cuidado personal",
    price: 3200,
    shortDescription: "Kit integral con crema hidratante y desodorante botánico.",
    description: "El Kit Cuidado Personal Nexa está pensado para tu higiene y nutrición corporal diaria libre de metales o químicos nocivos. Incluye nuestra Crema Corporal Sedosa y un Desodorante Botánico Suave en crema.",
    benefits: [
      "Higiene natural y efectiva 24/7",
      "Libre de aluminio y parabenos",
      "Hidratación corporal intensiva de rápida absorción"
    ],
    usage: "Aplique la Crema Corporal sobre la piel limpia. Use una pequeña cantidad de Desodorante Botánico en las axilas secas.",
    image: "from-[#ddd6fe] to-[#7c3aed]",
    badge: "Nuevo",
    stock: 20,
    sku: "KIT-CUID-PERS",
    idealPara: [
      "Transición a desodorantes sin aluminio",
      "Pieles normales a secas"
    ],
    queAporta: [
      "Crema Corporal Sedosa (120ml)",
      "Desodorante Botánico Suave (50ml)"
    ],
    combinaloCon: ["bolsa-boutique-daily"]
  },
  {
    id: "prod-06",
    slug: "bolsa-boutique-daily",
    name: "Bolsa Boutique Daily",
    category: "Accesorios",
    price: 1250,
    shortDescription: "Bolso ecológico de lona premium con asas de cuero reforzadas.",
    description: "Linfático y ecológico. Bolsa elaborada con lona de algodón reforzada de alta resistencia y detalles de cuero ecológico. Su diseño sobrio y moderno combina con cualquier estilo.",
    benefits: [
      "Material de alta durabilidad y lavable",
      "Gran espacio interior con bolsillos organizadores",
      "Estilo minimalista atemporal"
    ],
    usage: "Ideal para usar de diario, llevar a la playa, al supermercado o guardar tus kits de viaje.",
    image: "from-[#e2e8f0] to-[#475569]",
    badge: "Oferta",
    stock: 50,
    sku: "BOL-BOUT-DAI",
    idealPara: [
      "Uso cotidiano, viajes o regalos prácticos"
    ],
    queAporta: [
      "Bolsa de lona premium con asas"
    ],
    combinaloCon: ["set-regalo-premium"]
  },
  {
    id: "prod-07",
    slug: "difusor-home-essence",
    name: "Difusor Home Essence",
    category: "Hogar premium",
    price: 1850,
    shortDescription: "Difusor de varillas para perfumar de forma continua con aceites puros.",
    description: "Pergamino aromático que perfuma tus espacios las 24 horas del día. Su base vegetal difunde los aceites esenciales de forma constante a través de varillas de bambú natural. Sin aerosoles ni electricidad.",
    benefits: [
      "Aromatización constante sin consumo eléctrico",
      "Intensidad regulable por cantidad de varillas",
      "Fragancia fresca y purificante"
    ],
    usage: "Retire el sello del envase, introduzca las varillas de bambú y gírelas cada semana para avivar el aroma.",
    image: "from-[#e0f2fe] to-[#0284c7]",
    badge: "Nuevo",
    stock: 30,
    sku: "DIF-HOME-ESS",
    idealPara: [
      "Oficinas, salas, recibidores y habitaciones"
    ],
    queAporta: [
      "Frasco de cristal de 200 ml con varillas de bambú"
    ],
    combinaloCon: ["vela-aromatica-minimal"]
  },
  {
    id: "prod-08",
    slug: "pack-corporativo-regalo",
    name: "Pack Corporativo Regalo",
    category: "Regalos",
    price: 5000,
    priceBefore: 6500,
    shortDescription: "Set exclusivo diseñado para regalos corporativos de fin de año o aniversarios.",
    description: "La máxima expresión de agradecimiento empresarial. Contiene una combinación cuidada de Fragancia Terra Nº2, Vela Aromática Minimal, Difusor Home Essence y Bolsa Boutique Daily. Todo presentado en un empaque rígido premium personalizable.",
    benefits: [
      "Regalo corporativo de alta gama y prestigio",
      "Ahorro especial en compra de volumen",
      "Selección completa de bienestar"
    ],
    usage: "Utilice cada elemento según las indicaciones de su empaque individual para aromatizar y decorar sus espacios.",
    image: "from-[#fcd34d] to-[#b45309]",
    badge: "Oferta",
    stock: 10,
    sku: "PACK-CORP-REG",
    idealPara: [
      "Regalos empresariales y agradecimientos ejecutivos"
    ],
    queAporta: [
      "Caja rígida corporativa",
      "Fragancia Terra Nº2 (100ml)",
      "Vela Aromática Minimal",
      "Difusor Home Essence",
      "Bolsa Boutique Daily"
    ],
    combinaloCon: ["set-regalo-premium"]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}
