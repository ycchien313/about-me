import oneClassMmsPng from '@/assets/images/oneclass-mms.png';
import oneClassLiveFrontstagePng from '@/assets/images/oneclass-live-frontstage.png';
import oneClassLiveBackstagePng from '@/assets/images/oneclass-live-backstage.png';
import loginPagePng from '@/assets/images/login-page.png';
import mfee16HomePng from '@/assets/images/mfee16-home.png';
import mfee16MemberCenterPng from '@/assets/images/mfee16-member-center.png';
import mfee16BackstagePng from '@/assets/images/mfee16-backstage.png';
import { TCard } from './Works.type';

export const TITLE = 'WORKS';
export const CARDS: TCard[] = [
  {
    alt: 'OneClass 後勤管理系統',
    description:
      `使用技術：
TypeScript | React | React Router DOM | Material UI | styled-component | Axios\n
專案簡述：
此專案為多人開發，並首次導入 TypeScript 來開發，剛開始會覺得有點棘手，但後來認為 TS 是一個非常好用的語言。專案的 router 採用 file-based routing，可以透過 url 就能快速看出目前的檔案是在哪個位置。針對 prop-drilling 則以 context 來處理。`,
    image: oneClassMmsPng,
    title: 'OneClass 後勤管理系統',
  },
  {
    alt: 'OneClass 真人Live家教-上課系統(前台)',
    description:
      `使用技術：
React | React Router DOM | Redux | 串接 RESTful API | Material UI | styled-component\n
專案簡述：
專案主要以 React 框架為主，配合 React Router DOM 來處理路由的部分，狀態管理以 React Redux 來管理，另外此為主要對外產品之一，因此盡可能滿足設計師的設計稿。`,
    image: oneClassLiveFrontstagePng,
    title: 'OneClass 真人Live家教-上課系統(前台)',
  },
  {
    alt: 'OneClass 真人Live家教-上課系統(後台)',
    description:
      `使用技術：
React | React Router DOM | Redux | Material UI | styled-component\n
專案簡述：
負責開發、維護前端部分，React 框架為主，串接後端提供的 RESTful API。

另外還有處理學校端專用的專案，功能上有些微的差異，如各學校有自己專屬的 logo，因此使用 react-cropper 來處理圖片裁切的部分。學校有大量匯入資料的需求，所以有使用 excel.js 處理使用者端的 excel 檔案，將其轉成可使用的 array object 來使用。`,
    image: oneClassLiveBackstagePng,
    title: 'OneClass 真人Live家教-上課系統(後台)',
  },
  {
    alt: '登入頁面',
    description: `使用技術：
HTML | CSS | SASS | JavaScript | React\n
專案簡述：
切版練習作品，自適應電腦版、平板、手機版，頭像可任意修改數量\n

P.S. 如網站沒反應，請直接複製貼上 https://7zzeq.csb.app`,
    github: 'https://github.com/ycchien313/react-projects/tree/main/login-page',
    image: loginPagePng,
    detail: 'https://7zzeq.csb.app/',
    title: '登入頁面',
  },
  {
    alt: 'MFEE16 homepage',
    description:
      'Personal practice work. Implement the homepage of designed by the team. Use react framework',
    github:
      'https://github.com/ycchien313/mfee16/tree/develop/forestage/frontend',
    image: mfee16HomePng,
    detail: 'https://drive.google.com/file/d/1_oD3hyeJVBRSF80vHGd0J0AI9jIpBfa_/view?usp=sharing',
    title: 'MFEE16 Homepage',
  },
  {
    alt: 'MFEE16 member center',
    description:
      'Implement front end and back end of member center. Includes google login, facebook login, live chat, personal data, reservation data etc.',
    github:
      'https://github.com/ycchien313/mfee16/tree/develop/forestage/backend',
    image: mfee16MemberCenterPng,
    detail: 'https://drive.google.com/file/d/1k5iN8DuKI04PF3FFI3M_u6Tj96egj2u3/view?usp=sharing',
    title: 'MFEE16 Member Center',
  },
  {
    alt: 'mfee16 後台網站',
    description:
      `使用技術：
HTML | CSS | Redux | Bootstrap | jQuery | PHP | MySQL\n
專案簡述：
負責訂位管理、資料庫大致之規劃

1. 訂位資料之撈取 (ajax)
因為資料庫有做正規化，因此訂位資料必須跟 member、seat、meal 等 table 做關聯，此部分於下 SQL 指令較為複雜。

2. 檢視按鈕 (檢視詳細、修改資料、新增餐點)
可以看到詳細的訂位資料，並且使用 modal 作為檢視視窗，其內可以修改及新增餐點資料。

3. 刪除、復原
訂位之 table 有設置 valid 欄位，藉此來達到刪除並且保留其資料，進而達到復原之功能。`,
    image: mfee16BackstagePng,
    title: 'mfee16 後台網站',
  },
];
