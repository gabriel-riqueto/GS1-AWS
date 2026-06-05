import React from 'react';
import { createRoot } from 'react-dom/client';
import { Satellite, Sprout, ShieldCheck, Activity, Cloud, GitBranch, Database, AlertTriangle, Leaf, RadioTower } from 'lucide-react';
import './styles.css';

const team = [
  'Gabriel Riqueto Reis',
  'Sabrina Flores Varela de Morais',
  'Leonardo Nicastro Mansur Castillo'
];

const regions = [
  { name: 'Fazenda Norte', ndvi: 0.78, risk: 'Baixo', status: 'Saudável', humidity: '64%', recommendation: 'Manter rotina de irrigação.' },
  { name: 'Talhão Central', ndvi: 0.51, risk: 'Médio', status: 'Atenção', humidity: '42%', recommendation: 'Verificar irrigação nas próximas 24h.' },
  { name: 'Fazenda Sul', ndvi: 0.32, risk: 'Alto', status: 'Crítico', humidity: '28%', recommendation: 'Priorizar inspeção e irrigação emergencial.' }
];

function Badge({ children, type }) {
  return <span className={`badge ${type?.toLowerCase() || ''}`}>{children}</span>;
}

function Card({ icon, title, children }) {
  return (
    <section className="card">
      <div className="card-title">{icon}{title}</div>
      <div className="card-content">{children}</div>
    </section>
  );
}

function App() {
  return (
    <main>
      <header className="hero">
        <nav>
          <strong>AgroOrbital Cloud</strong>
          <div>
            <a href="#problema">Problema</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#arquitetura">Arquitetura</a>
          </div>
        </nav>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Cloud Computing + Indústria Espacial</p>
            <h1>Monitoramento agrícola com dados orbitais simulados</h1>
            <p className="subtitle">
              Plataforma web que representa uma solução espacial para acompanhar lavouras, identificar risco de seca e apoiar decisões no agronegócio usando infraestrutura cloud na AWS.
            </p>
            <div className="actions">
              <a className="button" href="#dashboard">Ver dashboard</a>
              <a className="button secondary" href="#arquitetura">Ver arquitetura</a>
            </div>
          </div>
          <div className="orbit-card">
            <Satellite size={58} />
            <h2>Satélite → AWS → Produtor</h2>
            <p>Coleta orbital, processamento em cloud e visualização em dashboard público.</p>
          </div>
        </div>
      </header>

      <section className="section" id="identidade">
        <h2>Identidade do produto</h2>
        <div className="grid three">
          <Card icon={<Leaf />} title="Propósito">
            Apoiar produtores rurais com uma visão rápida sobre saúde da plantação, risco hídrico e necessidade de ação.
          </Card>
          <Card icon={<Sprout />} title="ODS conectado">
            ODS 2 — Fome Zero e Agricultura Sustentável. Também contribui com o ODS 13 — Ação Climática.
          </Card>
          <Card icon={<RadioTower />} title="Equipe">
            {team.map(member => <p key={member}>{member}</p>)}
          </Card>
        </div>
      </section>

      <section className="section split" id="problema">
        <div>
          <h2>Problema espacial resolvido</h2>
          <p>
            Grandes áreas agrícolas são difíceis de acompanhar apenas com inspeções presenciais. A solução simula o uso de dados de satélites para detectar variações de vegetação, baixa umidade e risco de seca antes que o prejuízo aumente.
          </p>
        </div>
        <div className="problem-box">
          <AlertTriangle />
          <strong>Problema principal:</strong>
          <p>Falta de visibilidade rápida sobre áreas remotas ou extensas de cultivo.</p>
        </div>
      </section>

      <section className="section" id="dashboard">
        <h2>Dashboard de monitoramento orbital</h2>
        <p className="section-subtitle">Dados simulados de sensoriamento remoto para representar o funcionamento da solução.</p>
        <div className="dashboard">
          {regions.map(region => (
            <article className="region-card" key={region.name}>
              <div className="region-header">
                <h3>{region.name}</h3>
                <Badge type={region.status}>{region.status}</Badge>
              </div>
              <div className="metric">
                <span>Índice de vegetação orbital</span>
                <strong>{region.ndvi}</strong>
              </div>
              <div className="bar"><div style={{ width: `${region.ndvi * 100}%` }} /></div>
              <div className="metric"><span>Risco de seca</span><strong>{region.risk}</strong></div>
              <div className="metric"><span>Umidade estimada</span><strong>{region.humidity}</strong></div>
              <p className="recommendation">{region.recommendation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="funcionamento">
        <h2>Representação do funcionamento</h2>
        <div className="timeline">
          <div><Satellite /><strong>1. Coleta orbital</strong><p>Satélites capturam imagens e sinais ambientais da área agrícola.</p></div>
          <div><Cloud /><strong>2. Processamento AWS</strong><p>Lambda processa os dados simulados e gera indicadores.</p></div>
          <div><Database /><strong>3. Armazenamento</strong><p>S3 e Parameter Store guardam dados e parâmetros da aplicação.</p></div>
          <div><Activity /><strong>4. Dashboard</strong><p>O produtor visualiza alertas e recomendações pela aplicação web.</p></div>
        </div>
      </section>

      <section className="section" id="arquitetura">
        <h2>Arquitetura cloud na AWS</h2>
        <div className="grid three">
          <Card icon={<GitBranch />} title="CI/CD">
            Deploy automatizado via GitHub conectado ao AWS Amplify. Cada push na branch main publica uma nova versão.
          </Card>
          <Card icon={<ShieldCheck />} title="Segurança">
            IAM Roles com menor privilégio, Parameter Store para parâmetros, SecureString criptografado com KMS.
          </Card>
          <Card icon={<Activity />} title="Monitoramento">
            CloudWatch Logs para execução da API/Lambda e AWS Budgets para controlar gastos da equipe.
          </Card>
        </div>
      </section>

      <footer>
        <strong>AgroOrbital Cloud</strong>
        <p>Solução acadêmica de cloud computing aplicada à Indústria Espacial.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
