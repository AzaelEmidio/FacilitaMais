# ERS — versão 1.0

## Problema
Centralizar aplicações pessoais e seus eventos financeiros, sem executar transações bancárias ou recomendar investimentos.

## Atores
Visitante: registo e login. Utilizador: apenas os seus próprios investimentos, movimentos, pagamentos e perfil.

## MVP
RF01 contas e sessões; RF02 criar/listar/consultar/editar investimentos das nove categorias; RF03 juros simples ilustrativos quando dados suficientes; RF04 pagamentos manuais e histórico; RF05 contagem de dias; RF06 dashboard separado por moeda; RF07 movimentos imutáveis; RF08 notificações configuráveis adiadas para fase 2.

## Regras
R01 investimento pertence a um utilizador; R02 vencimento opcional; R03 montante positivo; R04 previsão não é receita realizada; R05 variáveis não garantidas; R06 capital e rendimento separados; R07 liquidação de pagamento cria um movimento atómico; R08 não eliminar movimentos; R09 não somar moedas; R10 não presumir impostos; R11 não considerar vencimento como liquidação.

## Não funcionais
Autenticação segura, validação Zod, isolamento por proprietário, Decimal monetário, tratamento centralizado de erros, arquitetura modular, interface responsiva e persistência PostgreSQL.

## Critérios de aceitação
Conta registada, login/logout, registo de investimento sem vencimento, rejeição de montantes inválidos, 404 para recurso alheio, juros simples 500000 x 12% x 1 = 60000 bruto, moedas distintas separadas, histórico preservado, pagamento previsto distinto de liquidado.

## Limitações documentadas
A previsão ACT/365 FIXED é ilustrativa e não substitui contrato; valores líquidos desconhecidos se impostos/comissões desconhecidos. Dashboard não calcula património atual sem avaliações. Operações de edição de investimentos ainda requerem políticas de imutabilidade contratual após movimentos. Notificações, projeções compostas e conversão cambial são pós-MVP.
