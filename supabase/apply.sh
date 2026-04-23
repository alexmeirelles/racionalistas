#!/bin/bash
# Executa as migrations do fórum no Supabase remoto.
#
# OPÇÃO A — via CLI (requer login uma vez):
#   npx supabase login                # abre browser; faça uma vez
#   npx supabase link --project-ref safssycyzlgpruthwebj
#   npx supabase db push
#
# OPÇÃO B — via Supabase Dashboard (sem CLI auth):
#   Abrir: https://supabase.com/dashboard/project/safssycyzlgpruthwebj/sql/new
#   Colar e executar os arquivos na ordem:
#     1. supabase/migrations/20260423000001_forum_core.sql
#     2. supabase/migrations/20260423000002_forum_rls.sql
#     3. supabase/migrations/20260423000003_forum_triggers.sql
#     4. supabase/seed.sql
#
# OPÇÃO C — este script (requer SUPABASE_ACCESS_TOKEN no ambiente):
#   export SUPABASE_ACCESS_TOKEN=seu_token_aqui
#   bash supabase/apply.sh

set -e

PROJECT_REF="safssycyzlgpruthwebj"
MIGRATIONS_DIR="$(dirname "$0")/migrations"
SEED_FILE="$(dirname "$0")/seed.sql"

if [ -z "$SUPABASE_ACCESS_TOKEN" ]; then
  echo "SUPABASE_ACCESS_TOKEN não encontrado."
  echo "Siga a OPÇÃO A ou B no cabeçalho deste script."
  exit 1
fi

echo "Linkando projeto $PROJECT_REF..."
npx supabase link --project-ref "$PROJECT_REF"

echo "Aplicando migrations..."
for f in "$MIGRATIONS_DIR"/*.sql; do
  echo "  → $f"
  npx supabase db execute --file "$f"
done

echo "Aplicando seed..."
npx supabase db execute --file "$SEED_FILE"

echo "✓ Migrations aplicadas com sucesso."
