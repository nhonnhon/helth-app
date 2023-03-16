import { ROUTE_PATHS } from '@/routes/routes';

export const FOOTER_LIST = [
  {
    label: '会員登録',
    to: ROUTE_PATHS.REGISTER,
  },
  {
    label: '運営会社',
    to: ROUTE_PATHS.OPERATING_COMPANY,
  },
  {
    label: '利用規約',
    to: ROUTE_PATHS.TERMS,
  },
  {
    label: '個人情報の取扱について',
    to: ROUTE_PATHS.INFORMATION,
  },
  {
    label: '特定商取引法に基づく表記',
    to: ROUTE_PATHS.LAW,
  },
  {
    label: 'お問い合わせ',
    to: ROUTE_PATHS.INVESTIGATION,
  },
] as const;
