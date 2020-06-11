const mongoose = require('mongoose');
const Product = require('../models/Product');

const products = [
  
  {
    info: {
        name: 'Asus ZenBook Pro Duo UX581',
        dimensions: '359 x 246 x 24 mm',
        weight: '2.5 Kg',
        displayType: 'OLED 4K',
        displaySize: '15.6"',
        displayResolution: '3840 x 2160 pixels',
        os: 'Windows 10 Pro',
        cpu: 'Intel® Core™ i9-9980HK',
        internalMemory: '256 GB',
        ram: '8 GB',
        camera: '12 MP ',
        batery: '71Wh 8-cell Rechargeable Li-Polymer',
        color: 'Black',
        price: 3499,
        photo: '/img/LAP1.jfif'
    },
    tags: {
        priceRange: '3000-3500',
        brand: 'Asus',
        color: 'Black',
        os: 'Windows',
        internalMemory: '256',
        ram: '8',
        displaySize: '15.6',
        displayResolution: '3840 X 2160',
        camera: '12',
        cpu: 'octa_core'
    }
},
{
    info: {
        name: 'HP Spectre X360 13',
        dimensions: '359 x 246 x 24 mm',
        weight: '1.3 Kg',
        displayType: 'IPS anti-glare Touchscreen display',
        displaySize: '13.3"',
        displayResolution: '1920 X 1080 pixels',
        os: 'Windows 10 Pro',
        cpu: 'Intel® Core™ i7-8565U',
        internalMemory: '512 GB',
        ram: '16 GB',
        camera: '12 MP',
        batery: '71Wh 8-cell Rechargeable Li-Polymer',
        color: 'Black',
        price: 2400,
        photo: '/img/LAP2.jpeg'
    },
    tags: {
        priceRange: '2500-3000',
        brand: 'HP',
        color: 'Black',
        os: 'Windows',
        internalMemory: '512',
        ram: '16',
        displaySize: '13.3',
        displayResolution: '1920 X 1080',
        camera: '12',
        cpu: 'octa_core'
    }
},
{
    info: {
        name: 'Asus ZenBook Pro 15',
        dimensions: '	18.9 x 365 x 251 mm',
        weight: '1.88 Kg',
        displayType: 'LED-backlit 4K UHD',
        displaySize: '15.6"',
        displayResolution: '3840 x 2160 pixels',
        os: 'Windows 10 Pro',
        cpu: 'Intel Core i9-8950HK',
        internalMemory: '1024 GB',
        ram: '16 GB',
        camera: '12 MP',
        batery: '71Wh 8-cell Rechargeable Li-Polymer',
        color: 'Black',
        price: 2400,
        photo: '/img/LAP3.png'
    },
    tags: {
        priceRange: '2500-3000',
        brand: 'HP',
        color: 'Black',
        os: 'Windows',
        internalMemory: '1024',
        ram: '16',
        displaySize: '15.6',
        displayResolution: '3840 x 2160',
        camera: '12',
        cpu: 'hexa_core'
    }
},
{
    info: {
        name: 'Lenovo IdeaPad C340',
        dimensions: '328 x 229 x 17.9 mm',
        weight: '1.65 Kg',
        displayType: 'LED-backlit 4K UHD',
        displaySize: '14"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Home',
        cpu: 'Intel Core i3-8145U',
        internalMemory: '512 GB',
        ram: '4 GB',
        camera: '12 MP',
        batery: '71Wh 8-cell Rechargeable Li-Polymer',
        color: 'Silver',
        price: 800,
        photo: '/img/LAP4.jpeg'
    },
    tags: {
        priceRange: '750-1000',
        brand: 'Lenovo',
        color: 'Silver',
        os: 'Windows',
        internalMemory: '512',
        ram: '4',
        displaySize: '14',
        displayResolution: '1920 x 1080',
        camera: '12',
        cpu: 'dual_core'
    }
},
{
    info: {
        name: 'Dell XPS 15',
        dimensions: '328 x 229 x 17.9 mm',
        weight: '1.8 Kg',
        displayType: 'LED-backlit 4K UHD',
        displaySize: '14"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Home',
        cpu: '7th Generation Intel Core i7-7700HQ',
        internalMemory: '256 GB',
        ram: '4 GB',
        camera: '12 MP',
        batery: '71Wh 8-cell Rechargeable Li-Polymer',
        color: 'Black',
        price: 2500,
        photo: '/img/LAP5.png'
    },
    tags: {
        priceRange: '2500-3000',
        brand: 'Dell',
        color: 'Black',
        os: 'Windows',
        internalMemory: '256',
        ram: '4',
        displaySize: '14',
        displayResolution: '1920 x 1080',
        camera: '12',
        cpu: 'quad_core'
    }
},
{
    info: {
        name: 'ASUS ZenBook 14 (UM431)',
        dimensions: '323.5 x 211.85 x 15.9 mm',
        weight: '1.39 Kg',
        displayType: 'LED-backlit 4K UHD',
        displaySize: '14"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Home',
        cpu: 'AMD® RyzenTM R5-3500U',
        internalMemory: '256 GB',
        ram: '8 GB',
        camera: '12 MP',
        batery: '71Wh 8-cell Rechargeable Li-Polymer',
        color: 'Black',
        price: 800,
        photo: '/img/LAP6.jpeg'
    },
    tags: {
        priceRange: '750-1000',
        brand: 'Asus',
        color: 'Black',
        os: 'Windows',
        internalMemory: '256',
        ram: '8',
        displaySize: '14',
        displayResolution: '1920 x 1080',
        camera: '12',
        cpu: 'octa_core'
    }
},
{
    info: {
        name: 'Lenovo IdeaPad S540',
        dimensions: '358 mm x 245 mm x 16.95 mm',
        weight: '1.8 Kg',
        displayType: 'LED-backlit FHD',
        displaySize: '15"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Home',
        cpu: '8th Gen Intel® Core™ i5',
        internalMemory: '512 GB',
        ram: '8 GB',
        camera: '12 MP',
        batery: '71Wh 8-cell Rechargeable Li-Polymer',
        color: 'Silver',
        price: 850,
        photo: '/img/LAP7.jfif'
    },
    tags: {
        priceRange: '750-1000',
        brand: 'Asus',
        color: 'Silver',
        os: 'Windows',
        internalMemory: '512',
        ram: '8',
        displaySize: '15',
        displayResolution: '1920 x 1080',
        camera: '12',
        cpu: 'quad_core'
    }
},
{
    info: {
        name: 'Asus TUF FX505DT',
        dimensions: '	364 X 262 X 26.7 mm',
        weight: '2.2 Kg',
        displayType: 'LED-backlit FHD',
        displaySize: '15.6"',
        displayResolution: '2160 x 1080 pixels',
        os: 'Windows 10 Home',
        cpu: 'AMD Ryzen 5 3550H',
        internalMemory: '256GB SSD + 1TB SSHD',
        ram: '16 GB',
        camera: '12 MP',
        batery: '71Wh 8-cell Rechargeable Li-Polymer',
        color: 'Black',
        price: 807,
        photo: '/img/LAP9.png'
    },
    tags: {
        priceRange: '750-1000',
        brand: 'Asus',
        color: 'Black',
        os: 'Windows',
        internalMemory: '256',
        ram: '16',
        displaySize: '15.6',
        displayResolution: '2160 x 1080',
        camera: '12',
        cpu: 'quad_core'
    }
},
{
    info: {
        name: 'Lenovo ThinkPad X1 Extreme',
        dimensions: '	364 X 262 X 26.7 mm',
        weight: '1.7 Kg',
        displayType: 'LED-backlit FHD',
        displaySize: '15.6"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Pro',
        cpu: '8th Gen Intel® Core™ FL-H i5',
        internalMemory: '512 GB',
        ram: '16 GB',
        camera: '12 MP',
        batery: '71Wh 8-cell Rechargeable Li-Polymer',
        color: 'Black',
        price: 3420,
        photo: '/img/LAP10.jfif'
    },
    tags: {
        priceRange: '3000-3500',
        brand: 'Lenevo',
        color: 'Black',
        os: 'Windows',
        internalMemory: '512',
        ram: '16',
        displaySize: '15.6',
        displayResolution: '1920 x 1080',
        camera: '12',
        cpu: 'quad_core'
    }
},
{
    info: {
        name: 'Asus VivoBook 14 X403',
        dimensions: '208.48 x 322.86 x 16.50 mm',
        weight: '1.7 Kg',
        displayType: 'LED-backlit FHD',
        displaySize: '15.6"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Pro',
        cpu: 'Intel Core i5 8th Gen 8265U',
        internalMemory: '512 GB',
        ram: '8 GB',
        camera: '12 MP',
        batery: '71Wh 8-cell Rechargeable Li-Polymer',
        color: 'Silver',
        price: 780,
        photo: '/img/LAP11.jpg'
    },
    tags: {
        priceRange: '750-1000',
        brand: 'Asus',
        color: 'Silver',
        os: 'Windows',
        internalMemory: '512',
        ram: '8',
        displaySize: '15.6',
        displayResolution: '1920 X 1080',
        camera: '12',
        cpu: 'quad_core'
    }
},
{
    info: {
        name: 'RAZER BLADE 15',
        dimensions: ' 0.78 x 13.98 x 9.25 inches',
        weight: '4.63 pounds',
        displayType: 'LED-backlit FHD',
        displaySize: '15.6"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Pro',
        cpu: 'Intel Core i7-8750H',
        internalMemory: '512 GB',
        ram: '16 GB',
        camera: '12 MP',
        batery: ' 80Wh 8-cell Rechargeable Li-Polymer',
        color: 'Black',
        price: 2999.99,
        photo: '/img/LAP12.jpg'
    },
    tags: {
        priceRange: '2500-3000',
        brand: 'Razer',
        color: 'Black',
        os: 'Windows',
        internalMemory: '512',
        ram: '16',
        displaySize: '15.6',
        displayResolution: '1920 X 1080',
        camera: '12',
        cpu: 'octa_core'
    }
},
{
    info: {
        name: 'Dell G3 15',
        dimensions: '0.85 x 14.4 x 10 inches',
        weight: '5.40 pounds',
        displayType: 'LED-backlit FHD',
        displaySize: '15.6"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Pro',
        cpu: ' Intel Core i7 9750H',
        internalMemory: '512 GB',
        ram: '16 GB',
        camera: '12 MP',
        batery: ' 94 Wh Rechargeable Li-Polymer',
        color: 'Black',
        price: 1199.99,
        photo: '/img/LAP14.jpg'
    },
    tags: {
        priceRange: '1000-1500',
        brand: 'Dell',
        color: 'Black',
        os: 'Windows',
        internalMemory: '512',
        ram: '16',
        displaySize: '15.6',
        displayResolution: '1920 X 1080',
        camera: '12',
        cpu: 'octa_core'
    }
},
{
    info: {
        name: 'MSI GS65 STEALTH THIN',
        dimensions: '358 x 248 x 17.9 mm',
        weight: '4.10 pounds',
        displayType: 'LED-backlit FHD',
        displaySize: '15.6"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Pro',
        cpu: 'Intel Core i7-8750H',
        internalMemory: '512 GB',
        ram: '16 GB',
        camera: '12 MP',
        batery: '82 Wh Rechargeable Li-Polymer',
        color: 'Black',
        price: 1400,
        photo: '/img/LAP15.jpg'
    },
    tags: {
        priceRange: '1000-1500',
        brand: 'MSI',
        color: 'Black',
        os: 'Windows',
        internalMemory: '512',
        ram: '16',
        displaySize: '15.6',
        displayResolution: '1920 X 1080',
        camera: '12',
        cpu: 'octa_core'
    }
},
{
    info: {
        name: 'Acer Predator Helios 300HIN',
        dimensions: '10.01 x 14.23 x 0.90 inches ',
        weight: '5.07 pounds',
        displayType: 'LED-backlit FHD',
        displaySize: '15.6"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Pro',
        cpu: 'Intel Core i5 9300H',
        internalMemory: '512 GB',
        ram: '16 GB',
        camera: '12 MP',
        batery: ' Rechargeable Li-Polymer',
        color: 'Black',
        price: 890,
        photo: '/img/LAP16.jpg'
    },
    tags: {
        priceRange: '750-1000',
        brand: 'Acer',
        color: 'Black',
        os: 'Windows',
        internalMemory: '512',
        ram: '16',
        displaySize: '15.6',
        displayResolution: '1920 X 1080',
        camera: '12',
        cpu: 'octa_core'
    }
},
{
    info: {
        name: 'Asus ROG Strix GL503VS-DH74',
        dimensions: '10.3 x 15.2 x 1.0 inches ',
        weight: '5.6 pounds',
        displayType: 'LED-backlit FHD',
        displaySize: '15.6"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Pro',
        cpu: 'Intel Core i7 8750H',
        internalMemory: '256 GB',
        ram: '16 GB',
        camera: '12 MP',
        batery: ' Rechargeable Li-Polymer',
        color: 'Black',
        price: 2800,
        photo: '/img/LAP17.jpg'
    },
    tags: {
        priceRange: '2500-3000',
        brand: 'Asus',
        color: 'Black',
        os: 'Windows',
        internalMemory: '256',
        ram: '16',
        displaySize: '15.6',
        displayResolution: '1920 X 1080',
        camera: '12',
        cpu: 'octa_core'
    }
},
{
    info: {
        name: 'Dell Alienware 15',
        dimensions: '10.3 x 15.2 x 1.0 inches ',
        weight: '3.49 kg',
        displayType: 'LED-backlit FHD',
        displaySize: '15.6"',
        displayResolution: '1920 x 1080 pixels',
        os: 'Windows 10 Pro',
        cpu: 'Intel Core i5 8750H',
        internalMemory: '256 GB',
        ram: '16 GB',
        camera: '12 MP',
        batery: ' Rechargeable Li-Polymer',
        color: 'Black',
        price: 2200,
        photo: '/img/LAP16.jpg'
    },
    tags: {
        priceRange: '2000-2500',
        brand: 'Dell',
        color: 'Black',
        os: 'Windows',
        internalMemory: '256',
        ram: '16',
        displaySize: '15.6',
        displayResolution: '1920 X 1080',
        camera: '12',
        cpu: 'octa_core'
    }
},
{
    info: {
        name: 'MacBook Pro',
        dimensions: '0.64 x 35.79 x 9.68 inches ',
        weight: '2 kg',
        displayType: 'LED-backlit FHD',
        displaySize: '16"',
        displayResolution: '3072 x 1920 pixels',
        os: 'macOS ',
        cpu: 'Intel Core i7',
        internalMemory: '512 GB',
        ram: '16 GB',
        camera: '12 MP',
        batery: ' Rechargeable Li-Polymer',
        color: 'Silver',
        price: 2199,
        photo: '/img/LAP17.jpg'
    },
    tags: {
        priceRange: '2000-2500',
        brand: 'Apple',
        color: 'Silver',
        os: 'macOS',
        internalMemory: '512',
        ram: '16',
        displaySize: '15.6',
        displayResolution: '1920 X 1080',
        camera: '12',
        cpu: 'octa_core'
    }
},
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  {
    info: {
      name: 'Apple iPhone 8 Plus',
      dimensions: '158.4 x 78.1 x 7.5 mm',
      weight: '202 g',
      displayType: 'LED-backlit IPS LCD, capacitive touchscreen, 16M colors',
      displaySize: '5.5"',
      displayResolution: '1080 x 1920 pixels',
      os: 'iOS 11',
      cpu: 'Hexa-core (2x Monsoon + 4x Mistral)',
      internalMemory: '256 GB',
      ram: '3 GB',
      camera: 'Dual: 12 MP (f/1.8, 28mm, OIS) + 12 MP (f/2.8, 57mm)',
      batery: 'Non-removable Li-Ion 2691 mAh battery (10.28 Wh)',
      color: 'White',
      price: 700,
      photo: '/img/apple_iphone_8_plus.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'apple',
      color: 'white',
      os: 'ios',
      internalMemory: '256',
      ram: '3',
      displaySize: '5.5',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'hexa_core'
    }
  },
  {
    info: {
      name: 'Apple iPhone X',
      dimensions: '143.6 x 70.9 x 7.7 mm',
      weight: '174 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '5.8"',
      displayResolution: '1125 x 2436 pixels',
      os: 'iOS 11.1.1',
      cpu: 'Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)',
      internalMemory: '256 GB',
      ram: '3 GB',
      camera: 'Dual: 12 MP (f/1.8, 28mm) + 12 MP (f/2.4, 52mm)',
      batery: 'Non-removable Li-Ion 2716 mAh battery (10.35 Wh)',
      color: 'Black',
      price: 950,
      photo: '/img/apple_iphone_x.jpg'
    },
    tags: {
      priceRange: '750-1000',
      brand: 'apple',
      color: 'black',
      os: 'ios',
      internalMemory: '256',
      ram: '3',
      displaySize: '5.8',
      displayResolution: '1125x2436',
      camera: '12',
      cpu: 'hexa_core'
    }
  },
  {
    info: {
      name: 'HTC U11',
      dimensions: '153.9 x 75.9 x 7.9 mm',
      weight: '169 g',
      displayType: 'Super LCD5 capacitive touchscreen, 16M colors',
      displaySize: '5.5"',
      displayResolution: '1440 x 2560 pixels',
      os: 'Android 7.1 (Nougat)',
      cpu: 'Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)',
      internalMemory: '128 GB',
      ram: '6 GB',
      camera: '12 MP (f/1.7, 1.4 µm, Dual Pixel PDAF, 5-axis OIS)',
      batery: 'Non-removable Li-Ion 3000 mAh battery',
      color: 'Ice White',
      price: 450,
      photo: '/img/htc_u11.jpg'
    },
    tags: {
      priceRange: '250-500',
      brand: 'htc',
      color: 'white',
      os: 'android',
      internalMemory: '128',
      ram: '6',
      displaySize: '5.5',
      displayResolution: '1440x2560',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Huawei Mate 10 Pro',
      dimensions: '154.2 x 74.5 x 7.9 mm',
      weight: '178 g',
      displayType: 'AMOLED capacitive touchscreen, 16M colors',
      displaySize: '6.0"',
      displayResolution: '1080 x 1920 pixels',
      os: 'Android 8.0 (Oreo)',
      cpu: 'Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)',
      internalMemory: '128 GB',
      ram: '6 GB',
      camera: 'Dual: 12 MP (f/1.6, 27mm, OIS) +20 MP (f/1.6, 27mm)',
      batery: 'Non-removable Li-Po 4000 mAh battery',
      color: 'Titanium Gray',
      price: 800,
      photo: '/img/huawei_mate_10_pro.jpg'
    },
    tags: {
      priceRange: '750-1000',
      brand: 'huawei',
      color: 'grey',
      os: 'android',
      internalMemory: '128',
      ram: '6',
      displaySize: '6.0',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Huawei P10',
      dimensions: '145.3 x 69.3 x 7 mm',
      weight: '145 g',
      displayType: 'IPS-NEO LCD capacitive touchscreen, 16M colors',
      displaySize: '5.1"',
      displayResolution: '1080 x 1920 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)',
      internalMemory: '64 GB',
      ram: '4 GB',
      camera: 'Dual: 12 MP (f/2.2, PDAF, OIS) + 20 MP',
      batery: 'Non-removable Li-Ion 3200 mAh battery',
      color: 'Mystic Silver',
      price: 680,
      photo: '/img/huawei_p10.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'huawei',
      color: 'grey',
      os: 'android',
      internalMemory: '64',
      ram: '4',
      displaySize: '5.1',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'LG G6',
      dimensions: '148.9 x 71.9 x 7.9 mm',
      weight: '163 g',
      displayType: 'IPS LCD capacitive touchscreen, 16M colors',
      displaySize: '5.8"',
      displayResolution: '1440 x 2880 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Quad-core (2x2.35 GHz Kryo & 2x1.6 GHz Kryo)',
      internalMemory: '128 GB',
      ram: '4 GB',
      camera: 'Dual: 13 MP (f/1.8, 1/3", 1.12 µm, 3-axis OIS, PDAF) + 13 MP (f/2.4, no AF)',
      batery: 'Non-removable Li-Po 3300 mAh battery',
      color: 'Ice Platinum',
      price: 800,
      photo: '/img/lg_g6.jpg'
    },
    tags: {
      priceRange: '750-1000',
      brand: 'lg',
      color: 'grey',
      os: 'android',
      internalMemory: '128',
      ram: '4',
      displaySize: '5.8',
      displayResolution: '1440x2880',
      camera: '13',
      cpu: 'quad_core'
    }
  },
  {
    info: {
      name: 'LG V30',
      dimensions: '151.7 x 75.4 x 7.3 mm',
      weight: '158 g',
      displayType: 'P-OLED capacitive touchscreen, 16M colors',
      displaySize: '6.0"',
      displayResolution: '1440 x 2880 pixels',
      os: 'Android 7.1.2 (Nougat)',
      cpu: 'Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)',
      internalMemory: '64 GB',
      ram: '4 GB',
      camera: 'Dual: 16 MP (f/1.6, 1 µm, 3-axis OIS, PDAF) + 13 MP (f/1.9, no AF)',
      batery: 'Non-removable Li-Po 3300 mAh battery',
      color: 'Aurora Black',
      price: 800,
      photo: '/img/lg_v30.jpg'
    },
    tags: {
      priceRange: '750-1000',
      brand: 'lg',
      color: 'black',
      os: 'android',
      internalMemory: '64',
      ram: '4',
      displaySize: '6.0',
      displayResolution: '1440x2880',
      camera: '16',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Samsung Galaxy A3',
      dimensions: '130.1 x 65.5 x 6.9 mm',
      weight: '110.3 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '4.5"',
      displayResolution: '540 x 960 pixels',
      os: 'Android 4.4.4 (KitKat)',
      cpu: 'Quad-core 1.2 GHz Cortex-A53',
      internalMemory: '16 GB',
      ram: '1 GB',
      camera: '8 MP (f/2.4, 31mm), autofocus, LED flash',
      batery: 'Non-removable Li-Ion 1900 mAh battery',
      color: 'Silver',
      price: 150,
      photo: '/img/samsung_galaxy_a3.JPG'
    },
    tags: {
      priceRange: '<250',
      brand: 'samsung',
      color: 'grey',
      os: 'android',
      internalMemory: '16',
      ram: '1',
      displaySize: '4.5',
      displayResolution: '540x960',
      camera: '8',
      cpu: 'quad_core'
    }
  },
  {
    info: {
      name: 'Samsung Galaxy Note 8',
      dimensions: '162.5 x 74.8 x 8.6 mm',
      weight: '195.3 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '6.3"',
      displayResolution: '1440 x 2960 pixels',
      os: 'Android 7.1.1 (Nougat)',
      cpu: 'Octa-core (4x2.3 GHz & 4x1.7 GHz) - EMEA',
      internalMemory: '256 GB',
      ram: '6 GB',
      camera: 'Dual: 12 MP (f/1.7, 26mm, 1/2.5", 1.4 µm) + 12MP (f/2.4, 52mm, 1/3.6", 1 µm)',
      batery: 'Non-removable Li-Ion 3300 mAh battery',
      color: 'Midnight Black',
      price: 800,
      photo: '/img/samsung_galaxy_note_8.jpg'
    },
    tags: {
      priceRange: '750-1000',
      brand: 'samsung',
      color: 'black',
      os: 'android',
      internalMemory: '256',
      ram: '6',
      displaySize: '6.3',
      displayResolution: '1440x2960',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Samsung Galaxy S8',
      dimensions: '148.9 x 68.1 x 8 mm',
      weight: '155 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '5.8"',
      displayResolution: '1440 x 2960 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Octa-core (4x2.3 GHz & 4x1.7 GHz) - EMEA',
      internalMemory: '64 GB',
      ram: '4 GB',
      camera: '12 MP (f/1.7, 26mm, 1/2.5", 1.4 µm, Dual Pixel PDAF), phase detection autofocus, OIS',
      batery: 'Non-removable Li-Ion 3000 mAh battery',
      color: 'Midnight Black',
      price: 720,
      photo: '/img/samsung_galaxy_s8.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'samsung',
      color: 'black',
      os: 'android',
      internalMemory: '64',
      ram: '4',
      displaySize: '5.8',
      displayResolution: '1440x2960',
      camera: '12',
      cpu: 'octa_core'
    }
  }
];

const seedProducts = () => {
  Product.remove({}, (err) => {
    if(err) {
      console.log(err);
    }
    console.log('PRODUCTS REMOVED');
    products.forEach((product) => {
      Product.create(product, (err, createdProduct) => {
        if(err) {
          console.log(err);
        } else {
          console.log('PRODUCT CREATED');
          createdProduct.save();
        }
      })
    })
  })
}

module.exports = seedProducts;