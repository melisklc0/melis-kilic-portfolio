import type { Lang } from './translations';

export interface Certificate {
  id: string;
  issuer: string;
  date: string;
  title: Record<Lang, string>;
}

export const certificates: Certificate[] = [
  {
    id: 'huawei-hccda-ai',
    issuer: 'Huawei',
    date: '16/10/2025',
    title: {
      en: 'HCCDA-AI (Huawei Certified Developer Associate - AI)',
      tr: 'HCCDA-AI (Huawei Certified Developer Associate - AI)',
    },
  },
  {
    id: 'nta-ai-basic',
    issuer: 'National Technology Academy',
    date: '03/01/2025',
    title: {
      en: 'Artificial Intelligence Basic Training Certificate',
      tr: 'Yapay Zeka Temel Eğitim Sertifikası',
    },
  },
];
