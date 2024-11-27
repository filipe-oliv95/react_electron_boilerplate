# React + Electron Boilerplate

Este repositório é um boilerplate para criar aplicações desktop usando React e Electron. Ao realizar o build de produção, você terá disponível um executável e um instalador da aplicação.

## Requisitos

- **Node.js**: versão 16 ou superior
- **npm**: versão 8 ou superior

## Passos iniciais

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   cd <NOME_DO_REPOSITÓRIO>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Para gerar a build de produção e criar os executáveis:
   ```bash
   npm run dist
   ```
   - **Executável**: gerado em `/dist/win-unpacked/`.
   - **Instalador**: gerado em `/dist/`.

## Ambiente de desenvolvimento

Durante o desenvolvimento, a aplicação roda no `localhost:3000`. Para iniciar:
```bash
npm run dev
```

Este comando inicializa o React no navegador e o Electron com o hot-reload habilitado.

Sinta-se à vontade para personalizar e expandir este boilerplate conforme necessário! 🚀