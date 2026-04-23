-- ==============================================================
-- SEED — dados iniciais do fórum
-- Execute: npx supabase db seed (ou cole no SQL Editor do dashboard)
-- ==============================================================

-- ----------------------------------------------------------------
-- 15 TAGS CURADAS
-- ----------------------------------------------------------------
insert into public.tags (slug, name, description) values
  ('inversao',            'Inversão',                 'Pensar pelo avesso: identificar como falhar para evitar falhar'),
  ('primeiros-principios','Primeiros Princípios',      'Raciocinar a partir das premissas fundamentais, sem analogias'),
  ('bayesianismo',        'Bayesianismo',              'Atualizar crenças com evidências; calibração de probabilidades'),
  ('vieses-cognitivos',   'Vieses Cognitivos',         'Heurísticas que sistematicamente distorcem o julgamento'),
  ('teoria-dos-jogos',    'Teoria dos Jogos',          'Equilíbrios, estratégias e dilemas em interações estratégicas'),
  ('incentivos',          'Incentivos',                'Estrutura de recompensas que governa comportamentos e sistemas'),
  ('sunk-cost',           'Sunk Cost',                 'Custo afundado e por que ele não deve guiar decisões futuras'),
  ('expected-value',      'Expected Value',            'Valor esperado e tomada de decisão probabilística'),
  ('segunda-ordem',       'Pensamento de 2ª Ordem',   'Consequências das consequências; efeitos indiretos e de longo prazo'),
  ('caudas-gordas',       'Caudas Gordas',             'Distribuições com eventos extremos: Black Swans e Antifragilidade'),
  ('lei-de-goodhart',     'Lei de Goodhart',           'Quando uma métrica vira meta, ela deixa de ser boa métrica'),
  ('assimetria-de-risco', 'Assimetria de Risco',       'Upside e downside não-simétricos; optionalidade e estratégia barbell'),
  ('falsificabilidade',   'Falsificabilidade',         'Popper: afirmações que podem ser refutadas e como construí-las'),
  ('principio-da-caridade','Princípio da Caridade',   'Interpretar o argumento do outro em sua versão mais forte e racional'),
  ('modelos-mentais',     'Modelos Mentais',           'Frameworks interdisciplinares para mapear e entender a realidade')
on conflict (slug) do nothing;
