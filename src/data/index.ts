import { v4 as uuidv4 } from 'uuid';

import {
  ImgMeal01,
  ImgMeal02,
  ImgMeal03,
  ImgMeal04,
  ImgMeal05,
  ImgMeal06,
  ImgMeal07,
  ImgMeal08,
} from '@/assets/images';
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

export const BODY_FAT_DATA = getOneYearFromCurrent().map(month => ({
  name: `${month}月`,
  lastYear: getRandomItemInArray(CHART_ARRAY_NUMBER),
  thisYear: getRandomItemInArray(CHART_ARRAY_NUMBER),
}));

export const MEAL_TYPES = [
  {
    id: '0a493f45-9888-4855-8104-de2c7f126fb5',
    name: 'Morning',
    icon: 'knife',
  },
  {
    id: 'b165886c-057a-42c0-900c-0bc98dc312b1',
    name: 'Lunch',
    icon: 'knife',
  },
  {
    id: 'ae17ce22-1f7d-4c36-9580-1aeb1d1fe040',
    name: 'Dinner',
    icon: 'knife',
  },
  {
    id: 'd0215f8d-d449-4a1b-8522-101223e0f249',
    name: 'Snack',
    icon: 'cup',
  },
];

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
