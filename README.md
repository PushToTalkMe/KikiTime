## **Начало работы**

- `npm create vite@latest my-react-app --template react`
- `cd my-react-app`
- `npm install`
- `npm run dev`

--------------------------------------

# Установка Eslint

- `npm init @eslint/config`
- `npm install -D eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb`

- - - - - - - - - - - - - - - - - - - 

## Настройка .eslintrc.json

```
"extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:import/recommended",
        "airbnb",
        "prettier"
    ],

"plugins": [
        "react-hooks",
        "react"
    ],

"rules": {
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn" ,
        "eslint.packageManager": "npm",
        "eslint.format.enable": true,
        "eslint.alwaysShowStatus": true,
        "eslint.workingDirectories": []
    }

```

--------------------------------------

# Установка **Prettier**

- `npm install -D --save-exact prettier eslint-config-prettier`
- `echo {}> .prettierrc.json`

- - - - - - - - - - - - - - - - - - - 

### настройка .prettierrc.json

```
{
  "prettier.tabWidth": 2,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all",
  "prettier.semi": true,
  "prettier.bracketSameLine": true,
  "prettier.printWidth": 100,
  "prettier.endOfLine": "auto",
}
```

--------------------------------------

# Общие настройки VScode

### настройка .settings.json

```
{
  "workbench.colorTheme": "Default Dark+",
  "workbench.iconTheme": "vscode-icons",
  "editor.tabSize": 2,
  "tabnine.experimentalAutoImports": false
  "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.cursorBlinking": "phase",
  "editor.cursorSmoothCaretAnimation": true,
  "emmet.triggerExpansionOnTab": true,
  "editor.fontSize": 16,
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.cursorStyle": "line",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {},
}

```
