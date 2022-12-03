import bootstrapSvg from '@/assets/images/bootstrap.svg';
import cssSvg from '@/assets/images/css.svg';
import htmlSvg from '@/assets/images/html.svg';
import javascriptSvg from '@/assets/images/javascript.svg';
import materialUiSvg from '@/assets/images/material-ui.svg';
import reactSvg from '@/assets/images/react.svg';
import typescriptSvg from '@/assets/images/typescript.svg';


export const TITLE = 'SKILLS';
export const CATEGORIES = ['Program Languages', 'JS Framework', 'UI Framework'];
export const SKILLS = {
  'Program Languages': [
    {
      src: htmlSvg,
      name: 'HTML',
    },
    {
      src: cssSvg,
      name: 'CSS',
    },
    {
      src: javascriptSvg,
      name: 'JavaScript',
    },
    {
      src: typescriptSvg,
      name: 'TypeScript',
    },
  ],
  'JS Framework': [
    {
      src: reactSvg,
      name: 'React',
    },
  ],
  'UI Framework': [
    {
      src: bootstrapSvg,
      name: 'Bootstrap',
    },
    {
      src: materialUiSvg,
      name: 'Material-UI',
    },
  ],
};