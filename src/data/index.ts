import { v4 as uuidv4 } from 'uuid';

import {
  ColumnNews01,
  ColumnNews02,
  ColumnNews03,
  ColumnNews04,
  ColumnNews05,
  ColumnNews06,
  ColumnNews07,
  ColumnNews08,
  ImgMeal01,
  ImgMeal02,
  ImgMeal03,
  ImgMeal04,
  ImgMeal05,
  ImgMeal06,
  ImgMeal07,
  ImgMeal08,
} from '@/assets/images';
import { SECTION_CATEGORIES } from '@/constants/column-page.constant';
import { MEAL_TYPES } from '@/constants/top-page.constant';
import { getOneYearFromCurrent } from '@/utils/date-format';
import { getRandomDate, getRandomItemInArray } from '@/utils/misc';

const CHART_ARRAY_NUMBER = [
  5000, 3000, 4500, 2500, 4500, 7000, 6500, 6000, 8000, 7000, 9000, 8500,
];

const MEAL_IMAGES = [
  ImgMeal01,
  ImgMeal02,
  ImgMeal03,
  ImgMeal04,
  ImgMeal05,
  ImgMeal06,
  ImgMeal07,
  ImgMeal08,
];

const NEWS_IMAGE = [
  ColumnNews01,
  ColumnNews02,
  ColumnNews03,
  ColumnNews04,
  ColumnNews05,
  ColumnNews06,
  ColumnNews07,
  ColumnNews08,
];

export const BODY_FAT_DATA = getOneYearFromCurrent().map(month => ({
  name: `${month}月`,
  lastYear: getRandomItemInArray(CHART_ARRAY_NUMBER),
  thisYear: getRandomItemInArray(CHART_ARRAY_NUMBER),
}));

export const MEAL_HISTORIES = Array.from({ length: 30 }).map(() => ({
  id: uuidv4(),
  image: getRandomItemInArray(MEAL_IMAGES),
  types: getRandomItemInArray(MEAL_TYPES),
  createdAt: getRandomDate(new Date(2022, 0, 1), new Date()),
}));

export const RECORD_MY_EXERCISE = Array.from({ length: 30 }).map(() => ({
  id: uuidv4(),
  title: '家事全般（立位・軽い）',
  calory: '26kcal',
  duration: '10 min',
}));

export const RECORD_MY_DIARIES = Array.from({ length: 30 }).map(() => ({
  id: uuidv4(),
  createdAt: getRandomDate(new Date(2022, 0, 1), new Date()),
  title: '私の日記の記録が一部表示されます。',
  description:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
}));

export const COLUMN_NEWS = Array.from({ length: 30 }).map(() => ({
  id: uuidv4(),
  createdAt: getRandomDate(new Date(2022, 0, 1), new Date()),
  title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  hashTags: ['#魚料理', '#和食', '#DHA'],
  image: getRandomItemInArray(NEWS_IMAGE),
}));
