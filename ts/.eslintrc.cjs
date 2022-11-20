module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  // "plugins": [
  //   "react-hooks"
  // ],
  settings: {
    "react": {
      "version": "detect",
    }
  },
  // 自訂規則
  rules: {
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
      "allowExpressions": true
      }
    ],
    // @fixable 必須使用 === 或 !==，禁止使用 == 或 !=，與 null 比較時除外
    "eqeqeq": [
      "error",
      "always",
      {
        null: "ignore"
      }
    ],
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "quotes": [2, "single", { "avoidEscape": true }],
    "react/display-name": 0,
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "semi": [2, "always"],
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",
    // 類別和介面的命名必須遵守帕斯卡命名法，比如 PersianCat
    // "typescript/class-name-casing": "error"
  },
};