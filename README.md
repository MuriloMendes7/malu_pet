# Malu Pet's — Estética Animal

Landing page de demonstração do pet shop Malu Pet's.

```
malu_pet/
├── frontend/   # React + Vite (landing page)
└── backend/    # reservado para o futuro
```

## Rodando o frontend

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a versão de produção em frontend/dist
```

> No PowerShell, se aparecer erro de "execução de scripts desabilitada", use `npm.cmd` no lugar de `npm`.

## Editando conteúdo

Todos os dados do negócio (WhatsApp, endereço, horários, Instagram, serviços, textos do espaço e diferenciais)
ficam em **`frontend/src/data/site.js`**. Alterou lá, a página inteira se atualiza.

As fotos ficam em `frontend/src/assets/` (`banho.jpg`, `secagem.jpg`, `tosa.jpg`, `logo.webp`).
Para trocar por fotos novas, basta substituir os arquivos mantendo o mesmo nome.
