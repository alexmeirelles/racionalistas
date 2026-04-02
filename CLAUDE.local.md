# ⚙️ CLAUDE.local.md (Personal Overrides)

Estas são as regras e sobreposições pessoais aplicáveis especificamente à sua máquina e workflow para o projeto Racionalistas.

## 🛠 Preferências Locais
- **Estilo de Código**: Tailwind CSS e separação estruturada por componentes Next.js
- **Validação de Testes**: Prioridade à responsividade visual (fontes e proporções devem refletir o design da marca e a densidade de conteúdo clínico)
- **Mensagens de Git**: Conventional Commits (ex: `feat:`, `fix:`, `chore:`)
- **Acesso Externo**: O projeto consome MCP Servers locais mapeados em `mcp.json` (incluindo nano-banana-pro, context7, 21st-dev).

## 🚀 Como Executar Localmente
```bash
# Rodar ambiente local Next.js
npm run dev

# Fazer commit automatizado após God Mode
git add . && git commit -m "update: implementações geradas pelos agentes" && git push
```
