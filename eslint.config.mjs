import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import importPlugin from "eslint-plugin-import-x";

export default tseslint.config(
  {
    ignores: [".next/**", "node_modules/**", "postcss.config.mjs", "commitlint.config.js", "coverage/**", "eslint.config.mjs"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@next/next": nextPlugin,
      "no-relative-import-paths": noRelativeImportPaths,
      "import-x": importPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      
      // Custom rules
      "comma-dangle": ["error", "always-multiline"],
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "semi": "error",
      "quotes": ["error", "double"],
      "jsx-quotes": ["error", "prefer-double"],
      "eol-last": "error",
      "indent": ["error", 2],
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": "error",
      "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
      "space-before-function-paren": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true }],
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/typedef": [
        "error",
        {
          "memberVariableDeclaration": true,
          "propertyDeclaration": true,
          "variableDeclarationIgnoreFunction": true
        }
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "memberLike",
          "modifiers": ["private"],
          "format": ["camelCase"],
          "leadingUnderscore": "require"
        },
        {
          "selector": "variable",
          "types": ["boolean"],
          "format": ["PascalCase"],
          "prefix": ["is", "should", "has", "can", "did", "will"]
        },
        {
          "selector": "variable",
          "format": ["camelCase", "UPPER_CASE", "PascalCase"]
        },
        {
          "selector": "interface",
          "format": ["PascalCase"],
          "custom": { "regex": "^I[A-Z]", "match": true }
        },
        {
          "selector": ["variable"],
          "format": ["camelCase"],
          "leadingUnderscore": "allow"
        },
        {
          "selector": ["function"],
          "format": ["PascalCase", "camelCase"]
        },
        {
          "selector": ["enumMember", "enum"],
          "format": ["PascalCase"]
        }
      ],
      "import-x/no-absolute-path": "error",
      "import-x/exports-last": "error",
      "import-x/newline-after-import": "error",
      "import-x/no-default-export": "error",
      // "import-x/no-unused-modules": ["error", { "missingExports": true , unusedExports: true, ignoreExports: ["**/jest.setup.ts"] }],
      "import-x/order": [
        "error",
        {
          "groups": ["type", "builtin", "external", "internal", "parent", "index", "object", "sibling"],
          "newlines-between": "always",
          "alphabetize": { "order": "asc" }
        }
      ],
      "no-relative-import-paths/no-relative-import-paths": ["error",
        { "allowSameFolder": true,
        "rootDir": "src",
        "prefix": "@"
        }
      ],
      "react/react-in-jsx-scope": "off",
    },
  },
  {
      files: ["src/**/page.tsx", "src/**/layout.tsx", "src/**/loading.tsx", "src/**/not-found.tsx", "next.config.ts"],
      rules: { "import-x/no-default-export": "off" }
  },
  {
      files: ["*.spec.*", "*.test.*"],
      rules: { "import-x/no-unused-modules": "off" }
  }
);
