import { MyRecommend01, MyRecommend02, MyRecommend03 } from '@/assets/images';

export const SECTION_ID: Record<string, string> = {
  bodyGraph: 'body-graph',
  myExercise: 'my-exercise',
  myDiary: 'my-diary',
};

export const FILTER_GRAPH = [
  {
    label: '日',
    value: 'day',
  },
  {
    label: '週',
    value: 'week',
  },
  {
    label: '月',
    value: 'month',
  },
  {
    label: '年',
    value: 'year',
  },
];

export const MY_RECORD_SECTIONS = [
  {
    scrollTo: SECTION_ID.bodyGraph,
    name: 'Body Record',
    description: '自分のカラダの記録',
    image: MyRecommend01,
  },
  {
    scrollTo: SECTION_ID.myExercise,
    name: 'My Exercise',
    description: '自分の運動の記録',
    image: MyRecommend02,
  },
  {
    scrollTo: SECTION_ID.myDiary,
    name: 'My Diary',
    description: '自分の日記',
    image: MyRecommend03,
  },
];
