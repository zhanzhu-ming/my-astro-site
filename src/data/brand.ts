export const languages = ["zh", "en", "de", "ja", "es", "ru", "it"] as const;
export type Lang = typeof languages[number];

export const brandCopy = {
  zh: {
    tagline: "活性物质载体系统 · 微球与纳米脂质体技术",
    nav: [["products","产品中心"],["custom-sourcing","创新技术"],["about","关于 Sheerherb"],["industries","应用领域"],["contact","联系我们"]],
    heroEyebrow: "ACTIVE CARRIER SYSTEMS · RESEARCH & MANUFACTURING",
    heroTitle: "以创新载体技术，释放活性成分的应用潜力",
    heroLead: "西安 Sheerherb 生物科技有限公司专注于活性物质载体系统的研究与生产，围绕微球技术和纳米脂质体技术，为个人护理、食品及营养补充剂等领域提供应用解决方案。",
    productsTitle: "产品与解决方案",
    productsLead: "了解 Sheerherb 网站展示的代表性产品方向。具体规格、检测方法、包装、起订量与供货情况请以项目沟通和正式文件为准。",
    objectivesTitle: "我们的核心目标",
    objectivesLead: "以研发、应用、效率、验证和配方实验为核心，与客户共同推进活性物质的有效应用。",
    technologyTitle: "载体技术与应用",
    technologyLead: "通过微球与纳米脂质体等技术路径，探索活性物质的包埋、保护与应用方式。",
    aboutTitle: "首页 | 维禾 Sheerherb",
    aboutLead: "西安 Sheerherb 生物科技有限公司是一家专注于活性物质载体系统研究与生产的科技企业，致力于为个人护理、食品和营养补充剂行业提供创新应用方案。",
    ctaTitle: "与 Sheerherb 开启项目沟通",
    ctaLead: "告诉我们您的产品方向、目标成分和应用需求，进一步沟通适合的产品与技术方案。",
    primary: "提交询盘", secondary: "了解产品",
    products: [
      ["liposomal-vitamin-c","脂质体维生素 C 粉末","Liposomal Vitamin C Powder","脂质体产品方向。规格、含量、剂型及检测方法以正式产品资料为准。","了解产品"],
      ["urolithin-a","尿石素 A","Urolithin A","国际站展示的热门产品方向之一。具体纯度、规格和供货情况请提交询盘确认。","了解产品"],
      ["shilajit-resin","喜来芝树脂","Shilajit Resin","国际站展示的热门产品方向之一。产品指标、来源及包装以批次资料为准。","了解产品"],
      ["berberine-hcl","盐酸小檗碱","Berberine HCl","国际站展示的热门产品方向之一。请联系确认目标规格、检测项目与包装。","了解产品"]
    ],
    objectives: [
      ["01","研发与生产","专注先进活性物质载体系统的开发与生产，持续提升解决方案的性能与可靠性。"],
      ["02","应用解决方案","针对行业应用挑战提供定制化方案，协助解决活性物质应用过程中的关键问题。"],
      ["03","效率提升","探索提升活性物质利用效率的技术路径，优化其在终端产品中的应用表现。"],
      ["04","功效验证","通过测试与评估验证载体系统的稳定性和应用表现，具体数据以项目资料为准。"],
      ["05","配方应用实验","与客户协作开展配方应用实验，围绕实际需求探索适配方案。"]
    ],
    technology: [
      ["微球技术","Sheerherb 已将微球技术应用于食品补充剂领域，并持续拓展相关研发范围与服务能力。"],
      ["纳米脂质体技术","Sheerherb 将纳米脂质体技术应用于食品补充剂领域，并持续探索活性物质的应用解决方案。"]
    ],
    aboutBlocks: [
      ["企业定位","Sheerherb 专注于活性物质载体系统的研究与生产，面向个人护理、食品及营养补充剂等应用领域。"],
      ["技术方向","公司网站重点介绍微球技术与纳米脂质体技术，并持续拓展相关研发与应用服务。"],
      ["合作理念","以市场需求为导向，与客户协作开展产品应用探索，重视技术创新与实际应用之间的结合。"],
      ["企业使命","秉持“以科技引领未来，以专业服务健康”的理念，持续推进研究创新与客户协作。"]
    ],
    contactIntro: "如果您对 Sheerherb 的产品或技术方案感兴趣，请提供目标产品、规格要求和应用场景，以便进一步沟通。"
  },
  en: {
    tagline: "Active Carrier Systems · Microsphere & Nano-Liposome Technology",
    nav: [["products","Products"],["custom-sourcing","Innovative Technology"],["about","About Sheerherb"],["industries","Applications"],["contact","Contact"]],
    heroEyebrow: "ACTIVE CARRIER SYSTEMS · RESEARCH & MANUFACTURING",
    heroTitle: "Advancing the application potential of active ingredients",
    heroLead: "Xi’an Sheerherb Biological Technology Co., Ltd. focuses on the research and production of active carrier systems, developing application solutions based on microsphere and nano-liposome technologies for personal care, food and nutritional supplements.",
    productsTitle: "Products & Solutions",
    productsLead: "Explore representative product categories featured on Sheerherb’s international website. Specifications, test methods, packaging, MOQ and availability are confirmed through project communication and official product documents.",
    objectivesTitle: "Our Core Objectives",
    objectivesLead: "Research, application, efficiency, verification and formula experiments guide our work with customers on active-substance applications.",
    technologyTitle: "Carrier Technologies & Applications",
    technologyLead: "We explore encapsulation, protection and application approaches for active substances through microsphere and nano-liposome technologies.",
    aboutTitle: "About Sheerherb",
    aboutLead: "Xi’an Sheerherb Biological Technology Co., Ltd. is a technology enterprise focused on researching and producing active carrier systems, with application solutions for personal care, food and nutritional supplements.",
    ctaTitle: "Start a Project Conversation with Sheerherb",
    ctaLead: "Tell us about your product direction, target ingredients and application requirements so we can discuss relevant products and technology options.",
    primary: "Send an Inquiry", secondary: "Explore Products",
    products: [
      ["liposomal-vitamin-c","Liposomal Vitamin C Powder","Liposomal Vitamin C Powder","A featured liposomal product direction. Confirm specifications, content, dosage form and test method against official product documents.","View Product"],
      ["urolithin-a","Urolithin A","Urolithin A","A featured product on the international website. Confirm grade, specification and availability through an inquiry.","View Product"],
      ["shilajit-resin","Shilajit Resin","Shilajit Resin","A featured product on the international website. Batch documentation confirms product parameters, origin and packaging.","View Product"],
      ["berberine-hcl","Berberine HCl","Berberine HCl","A featured product on the international website. Contact Sheerherb to confirm target specifications, testing and packaging.","View Product"]
    ],
    objectives: [
      ["01","Research & Production","Develop and produce advanced active carrier systems, with a focus on performance, efficacy and reliability."],
      ["02","Application Solutions","Provide tailored approaches to industry challenges and help address bottlenecks in active-substance applications."],
      ["03","Efficiency Enhancement","Explore technology approaches that improve the utilization efficiency of active substances in finished products."],
      ["04","Efficacy Verification","Use testing and evaluation to review carrier-system reliability and application performance; project data should be consulted."],
      ["05","Formula Application Experiments","Work with customers on formula application experiments aligned with their specific requirements."]
    ],
    technology: [
      ["Microsphere Technology","Sheerherb has applied microsphere technology in the field of food supplements and continues to expand its R&D scope and service capabilities."],
      ["Nano-Liposome Technology","Sheerherb has applied nano-liposome technology in the field of food supplements and continues to explore application solutions for active substances."]
    ],
    aboutBlocks: [
      ["Company Focus","Sheerherb focuses on the research and production of active carrier systems for personal care, food and nutritional supplement applications."],
      ["Technology Directions","The company website highlights microsphere and nano-liposome technologies and continued expansion of related R&D and application services."],
      ["Collaborative Approach","Market-oriented research and close customer collaboration connect technology development with practical applications."],
      ["Our Mission","Guided by “Leading the Future with Technology, Serving Health with Expertise,” Sheerherb continues to pursue research, innovation and customer collaboration."]
    ],
    contactIntro: "If you are interested in Sheerherb products or technology solutions, share your target product, specification and application so we can follow up."
  },
  de: {
    tagline: "Aktive Trägersysteme · Mikrosphären- und Nano-Liposomen-Technologie",
    nav: [["products","Produkte"],["custom-sourcing","Innovative Technologie"],["about","Über Sheerherb"],["industries","Anwendungen"],["contact","Kontakt"]],
    heroEyebrow: "AKTIVE TRÄGERSYSTEME · FORSCHUNG & PRODUKTION",
    heroTitle: "Das Anwendungspotenzial aktiver Inhaltsstoffe weiterentwickeln",
    heroLead: "Xi’an Sheerherb Biological Technology Co., Ltd. konzentriert sich auf Forschung und Produktion aktiver Trägersysteme sowie Anwendungslösungen auf Basis von Mikrosphären- und Nano-Liposomen-Technologien.",
    productsTitle: "Produkte & Lösungen", productsLead: "Entdecken Sie ausgewählte Produktbereiche der internationalen Sheerherb-Website. Spezifikationen und Verfügbarkeit werden anhand offizieller Produktunterlagen bestätigt.",
    objectivesTitle: "Unsere Kernziele", objectivesLead: "Forschung, Anwendung, Effizienz, Wirksamkeitsprüfung und Formulierungsexperimente prägen unsere Zusammenarbeit.",
    technologyTitle: "Trägertechnologien & Anwendungen", technologyLead: "Wir untersuchen Verkapselung, Schutz und Anwendung aktiver Substanzen durch Mikrosphären- und Nano-Liposomen-Technologien.",
    aboutTitle: "Über Sheerherb", aboutLead: "Sheerherb konzentriert sich auf Forschung und Produktion aktiver Trägersysteme für Körperpflege, Lebensmittel und Nahrungsergänzung.",
    ctaTitle: "Starten Sie ein Projektgespräch mit Sheerherb", ctaLead: "Teilen Sie Produktziel, Inhaltsstoff und Anwendungsanforderungen mit uns.",
    primary: "Anfrage senden", secondary: "Produkte ansehen",
    products: [
      ["liposomal-vitamin-c","Liposomales Vitamin-C-Pulver","Liposomal Vitamin C Powder","Ein hervorgehobener Produktbereich. Spezifikationen und Verfügbarkeit bitte anhand offizieller Unterlagen bestätigen.","Produkt ansehen"],
      ["urolithin-a","Urolithin A","Urolithin A","Ein auf der internationalen Website vorgestelltes Produkt. Qualität und Verfügbarkeit bitte anfragen.","Produkt ansehen"],
      ["shilajit-resin","Shilajit-Harz","Shilajit Resin","Ein auf der internationalen Website vorgestelltes Produkt. Chargenunterlagen bestätigen Parameter und Verpackung.","Produkt ansehen"],
      ["berberine-hcl","Berberin HCl","Berberine HCl","Ein auf der internationalen Website vorgestelltes Produkt. Spezifikationen und Prüfungen bitte anfragen.","Produkt ansehen"]
    ],
    objectives: [["01","Forschung & Produktion","Entwicklung und Produktion fortschrittlicher aktiver Trägersysteme."],["02","Anwendungslösungen","Maßgeschneiderte Ansätze für branchenspezifische Herausforderungen."],["03","Effizienzsteigerung","Technologische Ansätze zur besseren Nutzung aktiver Substanzen."],["04","Wirksamkeitsprüfung","Prüfung von Zuverlässigkeit und Anwendungsleistung anhand projektbezogener Daten."],["05","Formulierungsversuche","Gemeinsame Anwendungsexperimente entsprechend den Kundenanforderungen."]],
    technology: [["Mikrosphären-Technologie","Sheerherb setzt Mikrosphärentechnologie im Bereich Nahrungsergänzung ein und erweitert kontinuierlich Forschung und Service."],["Nano-Liposomen-Technologie","Sheerherb setzt Nano-Liposomen-Technologie im Bereich Nahrungsergänzung ein und entwickelt Anwendungslösungen weiter."]],
    aboutBlocks: [["Unternehmensfokus","Forschung und Produktion aktiver Trägersysteme für Körperpflege, Lebensmittel und Nahrungsergänzung."],["Technologierichtungen","Die Website stellt Mikrosphären- und Nano-Liposomen-Technologien vor."],["Zusammenarbeit","Marktorientierte Forschung und enge Zusammenarbeit mit Kunden."],["Mission","„Mit Technologie die Zukunft gestalten, mit Fachkompetenz der Gesundheit dienen.“"]],
    contactIntro: "Teilen Sie Produkt, Spezifikation und Anwendung mit, wenn Sie an Sheerherb-Produkten oder Technologielösungen interessiert sind."
  },
  ja: {
    tagline: "アクティブキャリアシステム · マイクロスフィア・ナノリポソーム技術",
    nav: [["products","製品"],["custom-sourcing","革新的技術"],["about","Sheerherbについて"],["industries","応用分野"],["contact","お問い合わせ"]],
    heroEyebrow: "アクティブキャリアシステム · 研究・製造",
    heroTitle: "有効成分の応用可能性を広げる",
    heroLead: "西安 Sheerherb 生物科技有限公司は、アクティブキャリアシステムの研究と製造に注力し、マイクロスフィアおよびナノリポソーム技術を活用した応用ソリューションを提供します。",
    productsTitle: "製品とソリューション", productsLead: "国際サイトで紹介されている代表的な製品分野です。仕様、試験方法、包装、MOQ、供給状況は正式資料でご確認ください。",
    objectivesTitle: "私たちの中核目標", objectivesLead: "研究、応用、効率、検証、処方実験を通じて、お客様と有効成分の応用を推進します。",
    technologyTitle: "キャリア技術と応用", technologyLead: "マイクロスフィアとナノリポソーム技術による有効成分の封入、保護、応用を研究します。",
    aboutTitle: "Sheerherbについて", aboutLead: "Sheerherbは、パーソナルケア、食品、栄養補助食品分野に向けたアクティブキャリアシステムの研究・製造に注力しています。",
    ctaTitle: "Sheerherbとのプロジェクト相談", ctaLead: "製品分野、対象成分、用途要件をお知らせください。",
    primary: "お問い合わせ", secondary: "製品を見る",
    products: [["liposomal-vitamin-c","リポソームビタミンCパウダー","Liposomal Vitamin C Powder","国際サイト掲載のリポソーム製品。仕様や試験方法は公式資料でご確認ください。","製品を見る"],["urolithin-a","ウロリチンA","Urolithin A","国際サイト掲載製品。グレードと供給状況はお問い合わせください。","製品を見る"],["shilajit-resin","シラジット樹脂","Shilajit Resin","国際サイト掲載製品。ロット資料で製品仕様をご確認ください。","製品を見る"],["berberine-hcl","ベルベリンHCl","Berberine HCl","国際サイト掲載製品。目標仕様と包装についてお問い合わせください。","製品を見る"]],
    objectives: [["01","研究・生産","先進的なアクティブキャリアシステムの開発と製造に取り組みます。"],["02","応用ソリューション","業界の課題に合わせたソリューションを検討します。"],["03","効率向上","有効成分の利用効率を高める技術を探求します。"],["04","有効性の検証","試験と評価を通じて信頼性と応用性能を確認します。"],["05","処方応用実験","お客様の要件に合わせた処方応用実験を協力して行います。"]],
    technology: [["マイクロスフィア技術","Sheerherbは食品サプリメント分野でマイクロスフィア技術を応用し、研究開発とサービス能力を拡大しています。"],["ナノリポソーム技術","Sheerherbは食品サプリメント分野でナノリポソーム技術を応用し、有効成分の応用ソリューションを探求しています。"]],
    aboutBlocks: [["企業の重点","パーソナルケア、食品、栄養補助食品向けのアクティブキャリアシステムの研究・製造。"],["技術分野","マイクロスフィア技術とナノリポソーム技術を紹介しています。"],["協業方針","市場志向の研究と顧客との協力を重視します。"],["使命","「技術で未来を導き、専門性で健康に貢献する」という理念を掲げています。"]],
    contactIntro: "Sheerherbの製品や技術ソリューションにご関心があれば、製品、仕様、用途をお知らせください。"
  },
  es: {
    tagline: "Sistemas portadores activos · Tecnología de microesferas y nanoliposomas",
    nav: [["products","Productos"],["custom-sourcing","Tecnología innovadora"],["about","Acerca de Sheerherb"],["industries","Aplicaciones"],["contact","Contacto"]],
    heroEyebrow: "SISTEMAS PORTADORES ACTIVOS · INVESTIGACIÓN Y PRODUCCIÓN",
    heroTitle: "Ampliamos el potencial de aplicación de los ingredientes activos",
    heroLead: "Xi’an Sheerherb Biological Technology Co., Ltd. se centra en investigar y producir sistemas portadores activos y soluciones basadas en tecnologías de microesferas y nanoliposomas.",
    productsTitle: "Productos y soluciones", productsLead: "Categorías representativas presentadas en el sitio internacional. Confirme especificaciones, pruebas, envase y disponibilidad mediante documentación oficial.",
    objectivesTitle: "Nuestros objetivos principales", objectivesLead: "Investigación, aplicación, eficiencia, verificación y experimentos de formulación orientan nuestro trabajo con clientes.",
    technologyTitle: "Tecnologías portadoras y aplicaciones", technologyLead: "Exploramos la encapsulación, protección y aplicación de activos mediante microesferas y nanoliposomas.",
    aboutTitle: "Acerca de Sheerherb", aboutLead: "Sheerherb se centra en la investigación y producción de sistemas portadores activos para cuidado personal, alimentos y suplementos nutricionales.",
    ctaTitle: "Inicie una conversación de proyecto", ctaLead: "Comparta su producto objetivo, ingrediente y requisitos de aplicación.",
    primary: "Enviar consulta", secondary: "Ver productos",
    products: [["liposomal-vitamin-c","Polvo de vitamina C liposomal","Liposomal Vitamin C Powder","Producto liposomal destacado. Confirme especificaciones y métodos de prueba en la documentación oficial.","Ver producto"],["urolithin-a","Urolitina A","Urolithin A","Producto destacado en el sitio internacional. Consulte grado y disponibilidad.","Ver producto"],["shilajit-resin","Resina de Shilajit","Shilajit Resin","Producto destacado en el sitio internacional. Consulte los documentos del lote.","Ver producto"],["berberine-hcl","Berberina HCl","Berberine HCl","Producto destacado en el sitio internacional. Consulte especificaciones y envase.","Ver producto"]],
    objectives: [["01","Investigación y producción","Desarrollar y producir sistemas portadores activos avanzados."],["02","Soluciones de aplicación","Abordar retos de aplicación con soluciones adaptadas."],["03","Mejora de eficiencia","Explorar tecnologías para mejorar el aprovechamiento de los activos."],["04","Verificación de eficacia","Evaluar la fiabilidad y el rendimiento según los datos del proyecto."],["05","Experimentos de formulación","Colaborar en experimentos de formulación según las necesidades del cliente."]],
    technology: [["Tecnología de microesferas","Sheerherb aplica tecnología de microesferas en el campo de los suplementos alimenticios y amplía sus capacidades de I+D y servicio."],["Tecnología de nanoliposomas","Sheerherb aplica tecnología de nanoliposomas en el campo de los suplementos alimenticios y sigue explorando soluciones de aplicación."]],
    aboutBlocks: [["Enfoque empresarial","Investigación y producción de sistemas portadores activos para cuidado personal, alimentos y suplementos."],["Tecnologías","El sitio presenta tecnologías de microesferas y nanoliposomas."],["Colaboración","Investigación orientada al mercado y cooperación estrecha con clientes."],["Misión","“Liderar el futuro con tecnología y servir a la salud con experiencia.”"]],
    contactIntro: "Si le interesan los productos o soluciones tecnológicas de Sheerherb, comparta el producto, la especificación y la aplicación."
  },
  ru: {
    tagline: "Активные системы-носители · Технологии микросфер и нанолипосом",
    nav: [["products","Продукты"],["custom-sourcing","Инновационные технологии"],["about","О Sheerherb"],["industries","Применение"],["contact","Контакты"]],
    heroEyebrow: "АКТИВНЫЕ СИСТЕМЫ-НОСИТЕЛИ · ИССЛЕДОВАНИЯ И ПРОИЗВОДСТВО",
    heroTitle: "Расширяем возможности применения активных ингредиентов",
    heroLead: "Xi’an Sheerherb Biological Technology Co., Ltd. занимается исследованиями и производством активных систем-носителей, разрабатывая решения на основе микросферных и нанолипосомальных технологий.",
    productsTitle: "Продукты и решения", productsLead: "Представленные категории опубликованы на международном сайте. Спецификации и наличие подтверждаются официальными документами.",
    objectivesTitle: "Наши основные цели", objectivesLead: "Исследования, применение, эффективность, проверка и эксперименты с формулами лежат в основе сотрудничества.",
    technologyTitle: "Технологии носителей и применение", technologyLead: "Изучаем инкапсуляцию, защиту и применение активных веществ с помощью микросфер и нанолипосом.",
    aboutTitle: "О Sheerherb", aboutLead: "Sheerherb специализируется на исследованиях и производстве активных систем-носителей для средств личной гигиены, пищевых продуктов и добавок.",
    ctaTitle: "Обсудим ваш проект", ctaLead: "Расскажите о продукте, целевом ингредиенте и требованиях к применению.",
    primary: "Отправить запрос", secondary: "Посмотреть продукты",
    products: [["liposomal-vitamin-c","Липосомальный витамин C, порошок","Liposomal Vitamin C Powder","Продукт из липосомального направления. Спецификации уточняются по официальным документам.","Подробнее"],["urolithin-a","Уролитин A","Urolithin A","Продукт, представленный на международном сайте. Уточните сорт и наличие.","Подробнее"],["shilajit-resin","Смола Шиладжит","Shilajit Resin","Продукт, представленный на международном сайте. Параметры уточняются по документам партии.","Подробнее"],["berberine-hcl","Берберин HCl","Berberine HCl","Продукт, представленный на международном сайте. Уточните спецификации и упаковку.","Подробнее"]],
    objectives: [["01","Исследования и производство","Разработка и производство современных активных систем-носителей."],["02","Прикладные решения","Индивидуальные решения для отраслевых задач."],["03","Повышение эффективности","Поиск технологий повышения эффективности использования активных веществ."],["04","Проверка эффективности","Оценка надежности и применения на основе проектных данных."],["05","Эксперименты с формулами","Совместные эксперименты с рецептурами по требованиям клиентов."]],
    technology: [["Микросферная технология","Sheerherb применяет микросферную технологию в сфере пищевых добавок и расширяет исследования и сервисные возможности."],["Технология нанолипосом","Sheerherb применяет нанолипосомальную технологию в сфере пищевых добавок и продолжает разрабатывать прикладные решения."]],
    aboutBlocks: [["Профиль компании","Исследования и производство активных систем-носителей для ухода, пищевых продуктов и добавок."],["Технологии","На сайте представлены микросферные и нанолипосомальные технологии."],["Сотрудничество","Исследования с учетом рынка и тесная работа с клиентами."],["Миссия","«Вести будущее с помощью технологий, служить здоровью с профессионализмом»."]],
    contactIntro: "Если вас интересуют продукты или технологические решения Sheerherb, укажите продукт, спецификацию и применение."
  },
  it: {
    tagline: "Sistemi carrier attivi · Tecnologia a microsfere e nanoliposomi",
    nav: [["products","Prodotti"],["custom-sourcing","Tecnologia innovativa"],["about","Chi è Sheerherb"],["industries","Applicazioni"],["contact","Contatti"]],
    heroEyebrow: "SISTEMI CARRIER ATTIVI · RICERCA E PRODUZIONE",
    heroTitle: "Ampliare il potenziale applicativo degli ingredienti attivi",
    heroLead: "Xi’an Sheerherb Biological Technology Co., Ltd. si concentra sulla ricerca e produzione di sistemi carrier attivi e su soluzioni basate su tecnologie a microsfere e nanoliposomi.",
    productsTitle: "Prodotti e soluzioni", productsLead: "Categorie rappresentative presentate sul sito internazionale. Specifiche, test, confezione e disponibilità vanno confermati tramite documentazione ufficiale.",
    objectivesTitle: "I nostri obiettivi principali", objectivesLead: "Ricerca, applicazione, efficienza, verifica ed esperimenti di formulazione guidano il lavoro con i clienti.",
    technologyTitle: "Tecnologie carrier e applicazioni", technologyLead: "Esploriamo incapsulamento, protezione e applicazione degli attivi tramite microsfere e nanoliposomi.",
    aboutTitle: "Chi è Sheerherb", aboutLead: "Sheerherb si concentra sulla ricerca e produzione di sistemi carrier attivi per cura personale, alimenti e integratori nutrizionali.",
    ctaTitle: "Avvia una conversazione sul progetto", ctaLead: "Condividi prodotto, ingrediente target e requisiti applicativi.",
    primary: "Invia una richiesta", secondary: "Esplora i prodotti",
    products: [["liposomal-vitamin-c","Polvere di vitamina C liposomiale","Liposomal Vitamin C Powder","Prodotto in evidenza nell'area liposomiale. Specifiche e test vanno confermati nei documenti ufficiali.","Vedi prodotto"],["urolithin-a","Urolitina A","Urolithin A","Prodotto presentato sul sito internazionale. Richiedere conferma di grado e disponibilità.","Vedi prodotto"],["shilajit-resin","Resina di Shilajit","Shilajit Resin","Prodotto presentato sul sito internazionale. Verificare i parametri nei documenti di lotto.","Vedi prodotto"],["berberine-hcl","Berberina HCl","Berberine HCl","Prodotto presentato sul sito internazionale. Richiedere specifiche e confezione.","Vedi prodotto"]],
    objectives: [["01","Ricerca e produzione","Sviluppare e produrre sistemi carrier attivi avanzati."],["02","Soluzioni applicative","Affrontare le sfide applicative con soluzioni su misura."],["03","Miglioramento dell'efficienza","Esplorare tecnologie per migliorare l'utilizzo degli attivi."],["04","Verifica dell'efficacia","Valutare affidabilità e prestazioni sulla base dei dati di progetto."],["05","Esperimenti di formulazione","Collaborare a esperimenti di formulazione secondo le esigenze dei clienti."]],
    technology: [["Tecnologia a microsfere","Sheerherb applica la tecnologia a microsfere nel settore degli integratori alimentari e amplia le capacità di ricerca e servizio."],["Tecnologia a nanoliposomi","Sheerherb applica la tecnologia a nanoliposomi nel settore degli integratori alimentari e continua a sviluppare soluzioni applicative."]],
    aboutBlocks: [["Focus aziendale","Ricerca e produzione di sistemi carrier attivi per cura personale, alimenti e integratori."],["Tecnologie","Il sito presenta tecnologie a microsfere e nanoliposomi."],["Collaborazione","Ricerca orientata al mercato e stretta collaborazione con i clienti."],["Missione","“Guidare il futuro con la tecnologia, servire la salute con competenza.”"]],
    contactIntro: "Se siete interessati ai prodotti o alle soluzioni tecnologiche Sheerherb, indicate prodotto, specifica e applicazione."
  }
} as const;

export function getBrandCopy(lang: string) {
  return brandCopy[(languages as readonly string[]).includes(lang) ? lang as Lang : "en"];
}
