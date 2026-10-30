# Arquitetura e decisões

Monólito modular cliente-servidor. React e Vite no frontend; API REST Express com validação Zod, Prisma ORM e PostgreSQL. Controllers HTTP isolados da função pura de juros simples (`financial.ts`). `Decimal` em cálculos; strings decimais no JSON. Datas contratuais são DATE em PostgreSQL. Datas no JSON usam YYYY-MM-DD; instantes de criação usam DateTime. Isolamento de dados: `userId` vem da sessão e não do corpo do pedido. Transações financeiras não são apagadas. Sessão com token aleatório no cookie e hash no banco; logout revoga a sessão.

## Endpoints
POST /api/auth/register, /login, /logout; GET/PATCH /api/users/me; GET/POST /api/investments; GET/PATCH /api/investments/:id; GET/POST /api/investments/:id/transactions; GET/POST /api/investments/:id/payments; POST /api/investments/:id/payments/:paymentId/settle; GET /api/investments/:id/forecast; GET /api/dashboard; GET /api/health.

## Plano incremental
1 ERS; 2 modelos; 3 ambiente e base; 4 autenticação; 5 investimentos e movimentos; 6 agenda e dashboard; 7 interface; 8 testes e revisão de segurança; 9 extensões pós-MVP.
