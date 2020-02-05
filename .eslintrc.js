module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    "plugin:flowtype/recommended"
  ],
  globals: {
    PACKAGE_NAME: true
  },
  env: {
    browser: true
  },
  plugins: ["babel", "flowtype", "import", "react-hooks"],
  overrides: [],
  rules: {
    camelcase: ["error", { allow: ["^UNSAFE_"] }],
    "class-methods-use-this": ["off"],
    "lines-between-class-members": ["off"],
    "no-nested-ternary": ["off"],
    "no-use-before-define": ["off"],
    "no-useless-computed-key": ["off"],
    "no-param-reassign": ["off"],
    "no-plusplus": ["off"],
    "no-underscore-dangle": ["off"],

    "import/no-unresolved": ["error", { ignore: ["^config$"] }],
    "import/prefer-default-export": ["off"],
    "import/order": ["off"],

    "react/default-props-match-prop-types": ["off"],
    "react/destructuring-assignment": ["off"],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "ignore",
        logical: "ignore",
        prop: "ignore"
      }
    ],

    "react/no-multi-comp": ["off", { ignoreStateless: true }],
    "react/no-unused-prop-types": ["off"],
    "react/no-unused-state": ["off"],
    "react/require-default-props": ["off"],
    "react/sort-comp": [
      "error",
      {
        order: [
          "type-annotations",
          "static-methods",
          "everything-else",
          "rendering"
        ],
        groups: {
          rendering: ["/^render.+$/", "render"]
        }
      }
    ],

    "jsx-a11y/click-events-have-key-events": ["off"],
    "jsx-a11y/media-has-caption": ["off"],
    "jsx-a11y/label-has-for": ["off"],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: ["label"],
        labelAttributes: ["htmlFor"],
        controlComponents: ["input", "Input"]
      }
    ],
    "jsx-a11y/no-static-element-interactions": ["off"],
    "jsx-a11y/no-noninteractive-element-interactions": ["off"],
    "flowtype/space-after-type-colon": [
      "error",
      "always",
      { allowLineBreak: true }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
