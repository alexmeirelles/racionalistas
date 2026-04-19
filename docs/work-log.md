# Work Log — racionalistas


## 2026-04-17 16:27
**chore: sync AIOX framework to latest upstream** `f482f71`
Files (101): .aiox-core/core-config.yaml .aiox-core/core/config/config-cache.js .aiox-core/core/config/config-loader.js .aiox-core/core/execution/build-state-manager.js .aiox-core/core/synapse/runtime/hook-runtime.js .aiox-core/core/utils/yaml-validator.js .aiox-core/data/entity-registry.yaml .aiox-core/development/scripts/workflow-validator.js 

## 2026-04-17 16:21
**fix: remove hamburger menu, move ProfileBubble to nav corner** `703eeb0`
Files (2): src/app/globals.css src/components/Header.tsx 

## 2026-04-16 14:02
**chore: add OG image 1200x630 and update metadata references** `4077430`
Files (3): public/og-image.png src/app/layout.tsx src/app/page.tsx 

## 2026-04-16 13:45
**chore: update favicon to gold on black with centered padding** `f851e34`
Files (2): src/app/apple-icon.png src/app/icon.png 

## 2026-04-16 13:32
**chore: update site description to new positioning copy** `e63138d`
Files (2): src/app/layout.tsx src/app/page.tsx 

## 2026-04-16 12:58
**chore: update site tagline to "Um Culto à sua Inteligência"** `34f040e`
Files (2): src/app/layout.tsx src/app/page.tsx 

## 2026-04-16 08:32
**fix(profile): dropdown repositions to left when near viewport edge (mobile fix)** `a1763e8`
Files (1): src/components/ProfileBubble.tsx 

## 2026-04-15 17:45
**feat(auth): sync avatar via Supabase Storage across Racionalistas and Oktal** `250e35f`
Files (1): src/components/ProfileBubble.tsx 

## 2026-04-15 15:19
**feat(auth): implement shared Supabase auth with ProfileBubble** `ad869fa`
Files (10): docs/guia.html package-lock.json package.json src/app/api/auth/callback/route.ts src/app/api/auth/logout/route.ts src/app/login/page.tsx src/components/Header.tsx src/components/ProfileBubble.tsx 

## 2026-04-15 11:00
**docs: remove Jerzy Gregorek quote and update CLAUDE.md** `837f4e6`
Files (2): CLAUDE.md src/app/page.tsx 

## 2026-04-12 09:54
**feat(seo): comprehensive SEO implementation across all pages** `c7f97fd`
Files (7): src/app/forum/page.tsx src/app/layout.tsx src/app/page.tsx src/app/robots.ts src/app/sitemap.ts src/app/wiki/[slug]/page.tsx src/app/wiki/page.tsx 

## 2026-04-11 22:05
**fix: syntax error in array definition that broke vercel build** `7643e31`
Files (1): src/lib/wiki-content.ts 

## 2026-04-11 21:57
**feat(forum): create skeleton layout inspired by LessWrong** `82dc0a8`
Files (1): src/app/forum/page.tsx 

## 2026-04-11 21:04
**chore: reorder mental models to show the most famous and impactful ones first** `18108a8`
Files (1): src/lib/wiki-content.ts 

## 2026-04-11 20:59
**fix: restore completely broken 'example' section (which powers Caso de Estudo UI) parsing bullet points from base markdown and inserting new case studies into it** `b135dba`
Files (1): src/lib/wiki-content.ts 

## 2026-04-11 20:46
**fix: restore full length of truncated case studies** `508f93b`
Files (1): src/lib/wiki-content.ts 

## 2026-04-11 20:35
**feat: generate and append real 'Caso de Estudo Comprovado' to all 40 mental models and fix previous string escape corruption** `27e947a`
Files (1): src/lib/wiki-content.ts 

## 2026-04-11 20:12
**fix: replace generated content with canonical user-provided content for last 6 models** `16d1bf1`
Files (1): src/lib/wiki-content.ts 

## 2026-04-11 20:10
**feat: generate and integrate detailed content for the last 6 mental models** `5294d47`
Files (1): src/lib/wiki-content.ts 

## 2026-04-11 20:07
**chore: update wiki models 11 to 35 with rich HTML structure** `021dfc4`
Files (1): src/lib/wiki-content.ts 

## 2026-04-11 19:38
**feat(wiki): apply rich formatting to first 10 mental models** `5c70030`
Files (2): src/app/wiki/[slug]/page.tsx src/lib/wiki-content.ts 

## 2026-04-11 19:29
**feat(wiki): add 40 mental models catalog** `11cab79`
Files (3): scratch_parser.js src/app/wiki/[slug]/page.tsx src/lib/wiki-content.ts 

## 2026-04-11 19:10
**fix(ui): add mobile hamburger menu to Header** `a5eced8`
Files (5): src/app/globals.css src/app/page.tsx src/app/wiki/[slug]/page.tsx src/app/wiki/page.tsx src/components/Header.tsx 

## 2026-04-10 18:14
**docs: consolida todos os arquivos de documentacao na mesma pasta** `136f461`
Files (2): docs/racionalistas-guia-usuario.html docs/racionalistas-hub-landing.html 

## 2026-04-10 18:05
**docs: atualiza status do sprint marcando Wiki e refactoring visual como concluidos e elabora roadmap geral** `69c80d4`
Files (2): docs/roadmap.md docs/sprint-lancamento-maio-2026.md 

## 2026-04-10 17:57
**fix(wiki): remove label desnecessaria de codigo interno no cabecalho** `ceb873a`
Files (1): src/app/wiki/[slug]/page.tsx 

## 2026-04-10 17:53
**fix(nav): converte o logo da barra de navegacao em um link para a raiz (home)** `d20434d`
Files (3): src/app/page.tsx src/app/wiki/[slug]/page.tsx src/app/wiki/page.tsx 

## 2026-04-10 17:51
**feat(wiki): adiciona artigos hiperdetalhados para os 13 modelos mentais** `71608c2`
Files (2): src/app/wiki/[slug]/page.tsx src/lib/wiki-content.ts 

## 2026-04-10 17:35
**refactor(wiki): espelha layout estrito da landing page em todo o diretorio** `d16db6d`
Files (3): src/app/wiki/[slug]/page.tsx src/app/wiki/layout.tsx src/app/wiki/page.tsx 

## 2026-04-10 17:30
**fix(wiki): remove dependencia do plugin typography e refatora layout de grids** `5ba7100`
Files (3): src/app/wiki/[slug]/page.tsx src/app/wiki/layout.tsx src/app/wiki/page.tsx 

## 2026-04-10 17:25
**feat(nav): adiciona link temporário para o fórum na navbar** `c10cc16`
Files (1): src/app/page.tsx 

## 2026-04-10 17:23
**fix(wiki): remove conflit com globals.css na navegação e usa grid na listagem** `c4a4e61`
Files (2): src/app/wiki/layout.tsx src/app/wiki/page.tsx 

## 2026-04-10 17:19
**refactor(wiki): redesenha layout e componentes para estetica wikipedia com infobox e navegação lateral** `e564f98`
Files (3): src/app/wiki/[slug]/page.tsx src/app/wiki/layout.tsx src/app/wiki/page.tsx 

## 2026-04-10 17:10
**feat: cria estrutura da Wiki de modelos mentais e adiciona doc de sprint** `8e645f2`
Files (5): docs/sprint-lancamento-maio-2026.md src/app/page.tsx src/app/wiki/[slug]/page.tsx src/app/wiki/page.tsx src/lib/wiki-content.ts 

## 2026-04-06 22:57
**feat(ui): update manifesto copy, add quote, and set favicon on navbar** `4844a59`
Files (6): .aiox-core/core-config.yaml docs/manifesto-draft.md squads/opb squads/xsquads squads/zero-to-one src/app/page.tsx 

## 2026-04-03 18:19
**feat: add animated particle network background (Oktal style) mapped to Racionalistas colors** `3fb016c`
Files (2): src/app/layout.tsx src/components/ParticleBG.tsx 

## 2026-04-02 20:05
**copy: translate pattern matching to pt-br for accessibility** `8605b29`
Files (1): src/app/page.tsx 

## 2026-04-02 19:22
**feat: add Asperger icon as favicon** `eb9e786`
Files (3): src/app/apple-icon.png src/app/favicon.ico src/app/icon.png 

## 2026-04-02 14:42
**chore: setup claude engineering partner structure** `bf755f2`
Files (3): CLAUDE.local.md claude mcp.json 

## 2026-04-02 14:36
**chore: remove hub from app name** `ccef08d`
Files (1): package.json 

## 2026-04-02 14:30
**Initial commit with God Mode and Next.js** `fb035a4`
Files (0): 
