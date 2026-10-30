# Agenda de Investimentos Pessoais

MVP académico: React + Vite + TypeScript + Tailwind CSS + React Router + Recharts; Express + TypeScript + Zod + Prisma + PostgreSQL; Vitest + Supertest.

## Pré-requisitos
Node.js 22, npm e PostgreSQL acessível. Crie uma base de dados vazia e um utilizador com permissões adequadas.

## Arranque

```bash
cd backend
cp .env.example .env
# Editar DATABASE_URL, SESSION_SECRET (aleatório com pelo menos 32 caracteres) e FRONTEND_ORIGIN
npm install
npm run db:generate
npm run db:migrate -- --name init
npm test
npm run dev
```

Noutro terminal:

```bash
cd frontend
npm install
npm run dev
```

Abrir http://localhost:5173. A API usa a porta 3000 por omissão. Não versionar `.env` nem dados pessoais. Executar migrations com acesso à base de dados. Os ficheiros de migração gerados devem ser versionados após validação.

## Âmbito e limites

Inclui contas, sessões persistidas, investimentos, movimentos, pagamentos, liquidação atómica, dashboard por moeda, agenda e teste de juros simples. Juros simples com previsão ilustrativa ACT/365 FIXED: confirmar convenção contratual antes de uso real. Não calcula automaticamente juros compostos nem retornos variáveis; não integra bancos nem cotações. Não trata esta aplicação como aconselhamento financeiro.

O dashboard mostra capital inicialmente aplicado e rendimentos recebidos; não apresenta o valor atual da carteira sem avaliações suficientes. O modelo Valuation está preparado para a fase seguinte, mas ainda não existe interface de inserção de avaliações. O modelo de transações suporta movimentos, porém não calcula custo médio, saldo de unidades, ganhos realizados ou património líquido. O registo inicial de um investimento NÃO cria automaticamente uma transação BUY, evitando contabilização dupla. A liquidação é feita pelo endpoint POST /api/investments/:id/payments/:paymentId/settle. O frontend do MVP ainda não expõe essa operação. A edição parcial de investimento deve ser limitada a alterações compatíveis com operações já registadas numa fase de endurecimento.

## Segurança e produção

Cookie HttpOnly, SameSite=Lax, Secure em produção; sessão persistida com token aleatório e hash SHA-256 com segredo; Argon2 para passwords; limite básico de pedidos de autenticação; helmet; CORS restrito; validação Zod; recursos sempre filtrados por proprietário. Para implantação entre origens/sites distintos, rever estratégia de cookies e proteção CSRF. Configurar HTTPS, backups, observabilidade, gestão de segredos, rotação/expiração de sessões e limites de tráfego em infraestrutura. Não publicar como produto financeiro sem auditoria de segurança e regras financeiras.

## Documentação
Consultar `docs/requisitos/ERS.md`, `docs/arquitetura/decisoes.md` e `docs/diagramas/modelos.md`.
