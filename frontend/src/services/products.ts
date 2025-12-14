export interface Product {
  slug: any;
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  badge?: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  specs: Record<string, string>;
}

const headphoneImage1 = 'https://images.unsplash.com/photo-1657223143933-33ceab36ecb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lcyUyMGJsYWNrfGVufDF8fHx8MTc2Mzk3Nzc0N3ww&ixlib=rb-4.1.0&q=80&w=1080';
const headphoneImage2 = 'https://images.unsplash.com/photo-1657223143933-33ceab36ecb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lcyUyMGJsYWNrfGVufDF8fHx8MTc2Mzk3Nzc0N3ww&ixlib=rb-4.1.0&q=80&w=1080';
const headphoneImage3 = 'https://images.unsplash.com/photo-1657223143933-33ceab36ecb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lcyUyMGJsYWNrfGVufDF8fHx8MTc2Mzk3Nzc0N3ww&ixlib=rb-4.1.0&q=80&w=1080';
const studioHeadphoneImage = 'https://images.unsplash.com/photo-1558590987-faeb0846037e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBtb25pdG9yJTIwaGVhZHBob25lc3xlbnwxfHx8fDE3NjQwOTYwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080';
const earbudsImage = 'https://images.unsplash.com/photo-1695634463848-4db4e47703a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjB3aGl0ZXxlbnwxfHx8fDE3NjQwNzkyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const audioSystemImage = 'https://images.unsplash.com/photo-1629741120780-10776e56a91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGFtcGxpZmllciUyMGRhY3xlbnwxfHx8fDE3NjQwOTYwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080';
const sportEarbudsImage = 'https://images.unsplash.com/photo-1758521960846-9f140cca42e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMGVhcmJ1ZHMlMjBydW5uaW5nfGVufDF8fHx8MTc2NDA5NjA3OHww&ixlib=rb-4.1.0&q=80&w=1080';
const professionalStudioSetImage = 'https://images.unsplash.com/photo-1737886099638-82bea680e9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkaW8lMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc2NDA5NjA3OXww&ixlib=rb-4.1.0&q=80&w=1080';

import api from "../lib/api";

export async function getProducts(query?: string) {
  const res = await api.get("products/", {
    params: query ? { search: query } : {},
  });
  return res.data.results;
}

export async function getProductsByCategory(slug: string) {
  const res = await api.get("products/", {
    params: { category: slug },
  });
  return res.data.results;
}

export async function getProductById(slug: string) {
  const res = await api.get(`products/${slug}/`);
  return res.data;
}


export const products: Product[] = [
  {
    slug: 'premium-over-ear-headphones',
    id: '1',
    name: 'Premium Over-Ear Headphones',
    price: 299,
    originalPrice: 399,
    category: 'Headphones',
    image: headphoneImage1,
    images: [headphoneImage1, headphoneImage2, headphoneImage3],
    badge: 'Bestseller',
    rating: 4.8,
    reviews: 124,
    description: 'Experience unparalleled audio quality with our premium over-ear headphones. Engineered for audiophiles, these headphones deliver crystal-clear sound across all frequencies with exceptional comfort for extended listening sessions.',
    features: [
      'Hi-Res Audio certified',
      '40mm dynamic drivers',
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium leather earpads',
      'Detachable cable design'
    ],
    specs: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 40kHz',
      'Impedance': '32 Ohms',
      'Sensitivity': '98dB/mW',
      'Weight': '250g',
      'Cable Length': '1.2m (detachable)'
    }
  },
  {
    slug: 'wireless-earbuds-pro',
    id: '2',
    name: 'Wireless Earbuds Pro',
    price: 199,
    originalPrice: 249,
    category: 'Earbuds',
    image: earbudsImage,
    images: [
      earbudsImage,
      earbudsImage,
      earbudsImage
    ],
    badge: 'New',
    rating: 4.6,
    reviews: 89,
    description: 'Premium wireless earbuds with exceptional sound quality and all-day comfort. Features advanced ANC technology and seamless connectivity for the ultimate listening experience.',
    features: [
      'Active Noise Cancellation',
      'Transparency Mode',
      '8-hour battery (32h with case)',
      'IPX4 water resistance',
      'Touch controls',
      'Wireless charging case'
    ],
    specs: {
      'Driver Size': '10mm',
      'Frequency Response': '20Hz - 20kHz',
      'Bluetooth': '5.3',
      'Battery Life': '8 hours (earbuds), 32 hours (with case)',
      'Weight': '5g per earbud',
      'Charging': 'USB-C, Wireless'
    }
  },
  {
    slug: 'studio-monitor-headphones',
    id: '3',
    name: 'Studio Monitor Headphones',
    price: 449,
    originalPrice: 549,
    category: 'Headphones',
    image: studioHeadphoneImage,
    images: [
      studioHeadphoneImage,
      studioHeadphoneImage,
      studioHeadphoneImage
    ],
    badge: 'Pro',
    rating: 4.9,
    reviews: 156,
    description: 'Professional studio monitor headphones designed for critical listening and audio production. Delivers accurate, uncolored sound reproduction with exceptional detail and clarity.',
    features: [
      'Planar magnetic drivers',
      'Open-back design',
      'Studio reference tuning',
      'Detachable braided cable',
      'Velour earpads',
      'Lightweight aluminum frame'
    ],
    specs: {
      'Driver Type': 'Planar Magnetic',
      'Frequency Response': '10Hz - 50kHz',
      'Impedance': '80 Ohms',
      'Sensitivity': '96dB/mW',
      'Weight': '370g',
      'Cable Length': '3m (detachable)'
    }
  },
  {
    slug: 'premium-audio-system',
    id: '4',
    name: 'Premium Audio System',
    price: 599,
    originalPrice: 699,
    category: 'Amplifiers',
    image: audioSystemImage,
    images: [
      audioSystemImage,
      audioSystemImage,
      audioSystemImage
    ],
    rating: 4.7,
    reviews: 67,
    description: 'High-performance headphone amplifier and DAC system for the discerning audiophile. Provides clean, powerful amplification with support for high-resolution audio formats.',
    features: [
      'ESS Sabre DAC chip',
      'Balanced and unbalanced outputs',
      'DSD512 and PCM 768kHz support',
      'Multiple input options',
      'Aluminum chassis',
      'Premium volume control'
    ],
    specs: {
      'DAC Chip': 'ESS ES9038PRO',
      'Output Power': '2W per channel',
      'THD+N': '0.0003%',
      'SNR': '130dB',
      'Inputs': 'USB, Optical, Coaxial, Balanced',
      'Outputs': 'XLR, 6.35mm, 3.5mm'
    }
  },
  {
    slug: 'audiophile-headphones',
    id: '5',
    name: 'Audiophile Headphones',
    price: 799,
    originalPrice: 899,
    category: 'Headphones',
    image: 'https://images.unsplash.com/photo-1719793768960-079ae1fbd525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpb3BoaWxlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzQ2MTAzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1719793768960-079ae1fbd525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpb3BoaWxlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzQ2MTAzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1719793768960-079ae1fbd525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpb3BoaWxlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzQ2MTAzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1719793768960-079ae1fbd525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpb3BoaWxlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzQ2MTAzN3ww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    badge: 'Premium',
    rating: 5.0,
    reviews: 201,
    description: 'Flagship audiophile headphones crafted for ultimate sound reproduction. Hand-assembled with premium components for an uncompromising listening experience.',
    features: [
      'Custom 50mm beryllium drivers',
      'Semi-open acoustic design',
      'OCC copper cabling',
      'Real wood earcups',
      'Memory foam earpads',
      'Premium carrying case included'
    ],
    specs: {
      'Driver Size': '50mm',
      'Driver Material': 'Beryllium',
      'Frequency Response': '5Hz - 50kHz',
      'Impedance': '300 Ohms',
      'Sensitivity': '100dB/mW',
      'Weight': '420g',
      'Cable Length': '2m (detachable OCC copper)'
    }
  },
  {
    slug: 'wireless-over-ear',
    id: '6',
    name: 'Wireless Over-Ear',
    price: 349,
    category: 'Headphones',
    image: 'https://images.unsplash.com/photo-1657223143933-33ceab36ecb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lcyUyMGJsYWNrfGVufDF8fHx8MTc2MzQzMzI0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1657223143933-33ceab36ecb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lcyUyMGJsYWNrfGVufDF8fHx8MTc2MzQzMzI0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1657223143933-33ceab36ecb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lcyUyMGJsYWNrfGVufDF8fHx8MTc2MzQzMzI0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1657223143933-33ceab36ecb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lcyUyMGJsYWNrfGVufDF8fHx8MTc2MzQzMzI0MXww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    rating: 4.5,
    reviews: 94,
    description: 'Versatile wireless headphones with premium sound quality and long battery life. Perfect for daily commutes and travel.',
    features: [
      'Bluetooth 5.0',
      'Active Noise Cancellation',
      '35-hour battery life',
      'Quick charge (5 min = 3 hours)',
      'Multi-device pairing',
      'Foldable design'
    ],
    specs: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Bluetooth': '5.0',
      'Battery Life': '35 hours',
      'Weight': '280g',
      'Charging': 'USB-C fast charge'
    }
  },
  {
    slug: 'sport-earbuds',
    id: '7',
    name: 'Sport Earbuds',
    price: 149,
    category: 'Earbuds',
    image: sportEarbudsImage,
    images: [
      sportEarbudsImage,
      sportEarbudsImage,
      sportEarbudsImage
    ],
    rating: 4.4,
    reviews: 78,
    description: 'Durable wireless earbuds designed for active lifestyles. Sweat and water-resistant with secure fit for workouts.',
    features: [
      'IPX7 waterproof rating',
      'Secure ear hooks',
      '10-hour battery life',
      'Ambient sound mode',
      'Sweatproof nano-coating',
      'Quick pair technology'
    ],
    specs: {
      'Driver Size': '8mm',
      'Frequency Response': '20Hz - 20kHz',
      'Bluetooth': '5.2',
      'Battery Life': '10 hours',
      'Water Resistance': 'IPX7',
      'Weight': '6g per earbud'
    }
  },
  {
    slug: 'professional-studio-set',
    id: '8',
    name: 'Professional Studio Set',
    price: 899,
    originalPrice: 1099,
    category: 'Headphones',
    image: professionalStudioSetImage,
    images: [
      professionalStudioSetImage,
      professionalStudioSetImage,
      professionalStudioSetImage
    ],
    badge: 'Professional',
    rating: 4.9,
    reviews: 143,
    description: 'Complete professional studio monitoring solution. Industry-standard headphones trusted by audio engineers worldwide.',
    features: [
      'Closed-back design',
      'Circumaural fit',
      'Replaceable parts',
      'Coiled and straight cables included',
      'Rugged construction',
      'Exceptional isolation'
    ],
    specs: {
      'Driver Size': '45mm',
      'Frequency Response': '5Hz - 35kHz',
      'Impedance': '70 Ohms',
      'Sensitivity': '99dB/mW',
      'Weight': '340g',
      'Cable Length': '3m coiled, 1.5m straight'
    }
  }
];

export const categories = [
  { id: 'headphones', name: 'Headphones', count: 5 },
  { id: 'earbuds', name: 'Earbuds', count: 2 },
  { id: 'amplifiers', name: 'Amplifiers', count: 1 },
  { id: 'dacs', name: 'DACs', count: 0 },
  { id: 'cables', name: 'Cables', count: 0 }
];