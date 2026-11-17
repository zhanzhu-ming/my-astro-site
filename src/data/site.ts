
export const languages = ["zh", "en"] as const;

export const site = {
  zh: {
    name: "您的企业名称",
    tagline: "专业产品与采购解决方案",
    nav: [
      { label: "首页", href: "/zh/" },
      { label: "产品中心", href: "/zh/products/" },
      { label: "OEM/ODM", href: "/zh/oem-odm/" },
      { label: "关于我们", href: "/zh/about/" },
      { label: "资源中心", href: "/zh/resources/" },
      { label: "联系我们", href: "/zh/contact/" },
    ],
    languageLabel: "English",
    languageUrl: "/en/",
    inquiry: "立即询盘",
    footer: "版权所有 © 您的企业名称",
  },

  en: {
    name: "Your Company",
    tagline: "Professional Products & Sourcing Solutions",
    nav: [
      { label: "Home", href: "/en/" },
      { label: "Products", href: "/en/products/" },
      { label: "OEM/ODM", href: "/en/oem-odm/" },
      { label: "About Us", href: "/en/about/" },
      { label: "Resources", href: "/en/resources/" },
      { label: "Contact", href: "/en/contact/" },
    ],
    languageLabel: "中文",
    languageUrl: "/zh/",
    inquiry: "Send Inquiry",
    footer: "Copyright © Your Company",
  },
};

export const pages = {
  zh: {
    products: {
      title: "产品中心",
      intro: "探索我们的产品系列，寻找适合您的采购方案。",
      sections: [
        {
          title: "产品分类",
          items: ["产品类别一", "产品类别二", "产品类别三"],
        },
      ],
    },

    "product-detail": {
      title: "产品详情",
      intro: "了解产品规格、材质、包装及定制选项。",
      sections: [
        {
          title: "产品规格",
          items: ["产品名称：[待填写]", "材质：[待填写]", "尺寸：[待填写]"],
        },
        {
          title: "采购信息",
          items: ["最小起订量：[待填写]", "包装方式：[待填写]", "交货周期：[待填写]"],
        },
        {
          title: "定制能力",
          items: ["产品设计", "品牌及包装定制", "OEM/ODM 合作"],
        },
      ],
    },

    "oem-odm": {
      title: "OEM / ODM 定制服务",
      intro: "根据您的品牌、设计和采购需求，提供定制合作方案。",
      sections: [
        {
          title: "可定制项目",
          items: ["产品规格", "产品材质", "品牌标识", "包装设计"],
        },
        {
          title: "合作流程",
          items: ["需求沟通", "方案确认", "打样与测试", "订单生产", "质量检查与交付"],
        },
      ],
    },

    about: {
      title: "关于我们",
      intro: "了解我们的企业背景、团队和业务发展。",
      sections: [
        {
          title: "企业介绍",
          items: ["企业身份：[待填写]", "成立时间：[待填写]", "主营业务：[待填写]"],
        },
        {
          title: "我们的优势",
          items: ["产品经验", "客户服务", "采购与供应链管理"],
        },
      ],
    },

    factory: {
      title: "工厂与生产能力",
      intro: "了解生产设施、设备、生产流程及供应能力。",
      sections: [
        {
          title: "生产设施",
          items: ["生产车间：[待填写]", "设备情况：[待填写]", "生产能力：[待填写]"],
        },
        {
          title: "生产流程",
          items: ["原材料采购", "生产加工", "质量检查", "包装与交付"],
        },
      ],
    },

    quality: {
      title: "质量与认证",
      intro: "了解产品质量管理、检验流程及适用认证。",
      sections: [
        {
          title: "质量管理",
          items: ["来料检查", "生产过程检查", "成品检验"],
        },
        {
          title: "认证与报告",
          items: ["适用认证：[待填写]", "检测报告：[待填写]", "认证覆盖范围：[待填写]"],
        },
      ],
    },

    solutions: {
      title: "行业解决方案",
      intro: "根据不同行业和采购场景，选择适合的产品方案。",
      sections: [
        {
          title: "应用行业",
          items: ["行业类别一", "行业类别二", "行业类别三"],
        },
        {
          title: "采购解决方案",
          items: ["产品选型", "规格推荐", "定制采购"],
        },
      ],
    },

    cases: {
      title: "项目案例",
      intro: "展示实际项目、定制需求和交付成果。",
      sections: [
        {
          title: "项目案例",
          items: ["案例一：[待填写]", "案例二：[待填写]", "案例三：[待填写]"],
        },
      ],
    },

    resources: {
      title: "采购指南与资源中心",
      intro: "为采购人员提供产品选型、规格比较和采购知识。",
      sections: [
        {
          title: "采购指南",
          items: ["产品选型指南", "规格比较", "常见采购问题"],
        },
        {
          title: "技术资料",
          items: ["产品目录", "技术规格书", "相关资料下载"],
        },
      ],
    },

    contact: {
      title: "联系我们",
      intro: "告诉我们您的采购需求，我们将与您联系。",
      sections: [
        {
          title: "联系方式",
          items: ["邮箱：[待填写]", "WhatsApp：[待填写]", "地址：[待填写]"],
        },
      ],
    },

    privacy: {
      title: "隐私政策与法律声明",
      intro: "了解网站信息收集、使用及相关法律条款。",
      sections: [
        {
          title: "隐私政策",
          items: ["信息收集与使用", "数据保护", "Cookie 说明"],
        },
        {
          title: "网站使用条款",
          items: ["网站内容使用", "知识产权", "责任声明"],
        },
      ],
    },
  },

  en: {
    products: {
      title: "Our Products",
      intro: "Explore our product range and find the right sourcing solution.",
      sections: [
        {
          title: "Product Categories",
          items: ["Category One", "Category Two", "Category Three"],
        },
      ],
    },

    "product-detail": {
      title: "Product Details",
      intro: "Explore product specifications, materials, packaging and customization.",
      sections: [
        {
          title: "Specifications",
          items: ["Product Name: [To be completed]", "Material: [To be completed]", "Size: [To be completed]"],
        },
        {
          title: "Ordering Information",
          items: ["MOQ: [To be completed]", "Packaging: [To be completed]", "Lead Time: [To be completed]"],
        },
        {
          title: "Customization",
          items: ["Product Design", "Branding & Packaging", "OEM/ODM Services"],
        },
      ],
    },

    "oem-odm": {
      title: "OEM / ODM Services",
      intro: "Customized solutions based on your brand, design and sourcing requirements.",
      sections: [
        {
          title: "Customization Options",
          items: ["Product Specifications", "Materials", "Branding", "Packaging Design"],
        },
        {
          title: "Cooperation Process",
          items: ["Requirement Discussion", "Proposal Confirmation", "Sampling & Testing", "Production", "Quality Inspection & Delivery"],
        },
      ],
    },

    about: {
      title: "About Us",
      intro: "Learn about our company background, team and business development.",
      sections: [
        {
          title: "Company Profile",
          items: ["Business Type: [To be completed]", "Established: [To be completed]", "Main Business: [To be completed]"],
        },
        {
          title: "Our Strengths",
          items: ["Product Experience", "Customer Service", "Sourcing & Supply Chain Management"],
        },
      ],
    },

    factory: {
      title: "Factory & Manufacturing",
      intro: "Explore our facilities, equipment, production processes and capabilities.",
      sections: [
        {
          title: "Production Facilities",
          items: ["Workshop: [To be completed]", "Equipment: [To be completed]", "Production Capacity: [To be completed]"],
        },
        {
          title: "Production Process",
          items: ["Material Sourcing", "Manufacturing", "Quality Inspection", "Packaging & Delivery"],
        },
      ],
    },

    quality: {
      title: "Quality & Certifications",
      intro: "Learn about quality management, inspection procedures and applicable certifications.",
      sections: [
        {
          title: "Quality Control",
          items: ["Incoming Inspection", "In-process Inspection", "Final Inspection"],
        },
        {
          title: "Certifications & Reports",
          items: ["Applicable Certifications: [To be completed]", "Test Reports: [To be completed]", "Certification Scope: [To be completed]"],
        },
      ],
    },

    solutions: {
      title: "Industry Solutions",
      intro: "Find suitable products for different industries and sourcing requirements.",
      sections: [
        {
          title: "Industries",
          items: ["Industry One", "Industry Two", "Industry Three"],
        },
        {
          title: "Sourcing Solutions",
          items: ["Product Selection", "Specification Recommendations", "Customized Sourcing"],
        },
      ],
    },

    cases: {
      title: "Project Cases",
      intro: "Explore real projects, customization requirements and delivery results.",
      sections: [
        {
          title: "Project Portfolio",
          items: ["Case One: [To be completed]", "Case Two: [To be completed]", "Case Three: [To be completed]"],
        },
      ],
    },

    resources: {
      title: "Resources & Buying Guides",
      intro: "Practical sourcing knowledge, product comparisons and technical resources.",
      sections: [
        {
          title: "Buying Guides",
          items: ["Product Selection Guide", "Specification Comparison", "Frequently Asked Questions"],
        },
        {
          title: "Technical Resources",
          items: ["Product Catalog", "Technical Data Sheets", "Resource Downloads"],
        },
      ],
    },

    contact: {
      title: "Contact Us",
      intro: "Tell us about your sourcing requirements. Our team will get in touch.",
      sections: [
        {
          title: "Contact Information",
          items: ["Email: [To be completed]", "WhatsApp: [To be completed]", "Address: [To be completed]"],
        },
      ],
    },

    privacy: {
      title: "Privacy Policy & Legal",
      intro: "Learn about data collection, privacy and website terms.",
      sections: [
        {
          title: "Privacy Policy",
          items: ["Information Collection & Use", "Data Protection", "Cookie Policy"],
        },
        {
          title: "Website Terms",
          items: ["Website Content", "Intellectual Property", "Disclaimer"],
        },
      ],
    },
  },
};
