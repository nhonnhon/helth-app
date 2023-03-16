import { ROUTE_PATHS } from '@/routes/routes';

export const NAVBAR_HEIGHT = 64;

export const MENU_LIST = [
  {
    href: ROUTE_PATHS.MY_RECORDS,
    label: '自分の記録',
  },
  {
    href: ROUTE_PATHS.CHARTS,
    label: '体重グラフ',
  },
  {
    href: ROUTE_PATHS.TARGETS,
    label: '目標',
  },
  {
    href: ROUTE_PATHS.COURSES,
    label: '選択中のコース',
  },
  {
    href: ROUTE_PATHS.COLUMNS,
    label: 'コラム一覧',
  },
  {
    href: ROUTE_PATHS.SETTINGS,
    label: '設定',
  },
] as const;
