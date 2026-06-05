# AgroOrbital Cloud

Aplicação web acadêmica que representa uma solução de cloud computing conectada à Indústria Espacial.

## Produto

**AgroOrbital Cloud** é uma plataforma de monitoramento agrícola que simula o uso de dados orbitais/satélites para identificar saúde da plantação, risco de seca e necessidade de ação em áreas rurais.

## Conexão com a Indústria Espacial

A solução utiliza o conceito de sensoriamento remoto por satélites. Os dados orbitais são processados em cloud e exibidos em um dashboard para apoiar produtores rurais.

## ODS conectado

- ODS 2 — Fome Zero e Agricultura Sustentável.
- ODS 13 — Ação contra a Mudança Global do Clima.

## Arquitetura AWS sugerida

- AWS Amplify Hosting: hospedagem da aplicação web e CI/CD via GitHub.
- AWS Lambda: processamento simulado dos dados orbitais.
- Amazon API Gateway: endpoint para consulta dos dados.
- Amazon S3: armazenamento de arquivos simulados, relatórios ou imagens.
- AWS Systems Manager Parameter Store: armazenamento de parâmetros.
- AWS KMS: criptografia de parâmetros sensíveis.
- IAM Roles: permissões com menor privilégio.
- Amazon CloudWatch: logs e alarmes.
- AWS Budgets: controle de custos.

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como gerar build

```bash
npm run build
```

## Deploy no AWS Amplify

1. Suba este projeto para um repositório GitHub.
2. Acesse o AWS Amplify.
3. Clique em **Deploy an app**.
4. Conecte o GitHub.
5. Selecione o repositório e a branch `main`.
6. Confirme o arquivo `amplify.yml`.
7. Aguarde o deploy.
8. Copie a URL pública gerada pelo Amplify e coloque no relatório.

## Evidências recomendadas para o relatório

- Print do repositório GitHub.
- Print do deploy no AWS Amplify.
- Print da URL pública.
- Print da aplicação aberta.
- Print do dashboard.
- Print do Parameter Store.
- Print do KMS.
- Print das IAM Roles.
- Print do CloudWatch Logs.
- Print do AWS Budget.
