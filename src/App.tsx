import './App.css';
import {
  MessageCircle,
  Phone,
  CheckCircle,
  Smartphone,
  MapPin,
  Scale,
  FileText,
  ShieldCheck,
  Lock,
  ShoppingBag,
  CreditCard,
  Users,
  ChevronDown,
  Layout,
  BadgeCheck,
  Star
} from 'lucide-react';

function App() {
  const whatsappNumber = "5564999999999"; // Placeholder
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="app">
      {/* Jurisly Header/Banner */}
      <header className="jurisly-header">
        <div className="container header-container">
          <div className="logo-jurisly">
            <span className="logo-icon"><ShieldCheck /></span>
            <span className="logo-text">JURISLY <span className="logo-sub">Recomenda</span></span>
          </div>
          <div className="verified-badge">
            <BadgeCheck size={18} />
            <span>Escritório Verificado</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="endorsement-tag">
              <Star size={16} fill="currentColor" />
              <span>Indicação Premium Jurisly</span>
            </div>
            <h1 className="brand-name">SOUZA & BORGES ADVOGADOS ASSOCIADOS</h1>
            <h2 className="hero-headline">
              A escolha certa se você busca segurança jurídica e atendimento humanizado.
            </h2>
            <p className="hero-sub">
              A <strong>Jurisly</strong> analisou e recomenda este escritório para casos de Direito Digital, Consumidor, Bancário e Previdenciário.
              Garantia de registro na OAB e CNPJ ativo.
            </p>

            <ul className="hero-list">
              <li><CheckCircle className="icon-sm" /> <strong>Verificado:</strong> CNPJ e registro na OAB validados pela Jurisly</li>
              <li><CheckCircle className="icon-sm" /> <strong>Especialidade:</strong> Expertise comprovada em recuperação de Instagram e BPC</li>
              <li><CheckCircle className="icon-sm" /> <strong>Atendimento:</strong> Nota máxima em clareza e transparência</li>
              <li><CheckCircle className="icon-sm" /> <strong>Segurança:</strong> Estrutura física e digital auditada</li>
            </ul>

            <div className="hero-actions">
              <a href={whatsappLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Falar com o escritório agora
              </a>
              <p className="cta-trust-text"><small>Conexão direta e segura monitorada pela Jurisly</small></p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Jurisly Recommends */}
      <section className="why-us">
        <div className="container">
          <div className="section-header">
            <h2>Por que a Jurisly recomenda este escritório?</h2>
            <p>Nossa equipe avaliou critérios rigorosos de qualidade técnica, atendimento ao cliente e regularidade legal.</p>
          </div>

          <div className="grid-4">
            <div className="card-feature">
              <BadgeCheck size={32} className="feature-icon" />
              <h3>Regularidade Total</h3>
              <p>Confirmamos a regularidade da Sociedade Simples Pura inscrita no CNPJ 53.266.530/0001-42.</p>
            </div>
            <div className="card-feature">
              <FileText size={32} className="feature-icon" />
              <h3>Transparência</h3>
              <p>O escritório se destaca por explicar, passo a passo, todas as possibilidades reais do caso.</p>
            </div>
            <div className="card-feature">
              <Smartphone size={32} className="feature-icon" />
              <h3>Modernidade</h3>
              <p>Estrutura pronta para atender online com a mesma eficácia do presencial.</p>
            </div>
            <div className="card-feature">
              <ShieldCheck size={32} className="feature-icon" />
              <h3>Ética Comprovada</h3>
              <p>Histórico de atuação pautado no respeito absoluto às normas da OAB e ao cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="areas" id="areas">
        <div className="container">
          <h2 className="section-title text-center">Especialidades validadas</h2>
          <p className="text-center section-subtitle">A Jurisly identificou alta performance técnica nas seguintes áreas:</p>

          <div className="grid-2">
            <div className="card-area">
              <div className="card-area-header">
                <Lock size={28} />
                <h3>Conta de Instagram hackeada</h3>
              </div>
              <p>Equipe especializada em recuperação de contas, atuando com agilidade na coleta de provas e medidas judiciais urgentes.</p>
            </div>

            <div className="card-area">
              <div className="card-area-header">
                <Users size={28} />
                <h3>BPC para Autistas</h3>
              </div>
              <p>Alto índice de aprovação administrativa e judicial, com suporte humanizado às famílias atípicas.</p>
            </div>

            <div className="card-area">
              <div className="card-area-header">
                <ShoppingBag size={28} />
                <h3>Direito do Consumidor</h3>
              </div>
              <p>Combate abusos em compras online e serviços, focado na rápida resolução de conflitos.</p>
            </div>

            <div className="card-area">
              <div className="card-area-header">
                <CreditCard size={28} />
                <h3>Dívidas Bancárias</h3>
              </div>
              <p>Análise técnica detalhada de contratos para identificar juros abusivos e renegociar dívidas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="steps">
        <div className="container">
          <h2 className="section-title text-center">Como funciona o atendimento parceiro Jurisly</h2>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Contato Verificado</h3>
              <p>Você inicia o contato através dos canais oficiais validados pela nossa plataforma.</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Análise Especializada</h3>
              <p>A equipe da Souza & Borges receberá seu caso e fará uma triagem técnica inicial.</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Transparência</h3>
              <p>Você receberá um diagnóstico claro e uma proposta de honorários justa e formal.</p>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3>Solução</h3>
              <p>Seu caso será conduzido com a segurança e seriedade que a Jurisly exige de seus parceiros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="jurisly-badge-large">
              <span>Parceiro Oficial Jurisly</span>
            </div>
            <h2>Sobre a SOUZA & BORGES ADVOGADOS ASSOCIADOS</h2>
            <p>
              Selecionamos este escritório por sua excelência. Sediado em Morrinhos/GO (Rua 7 de Setembro, nº 655),
              mas com capacidade tecnológica para atender todo o Brasil.
            </p>
            <p>
              Ao contratar um escritório com o selo <strong>Jurisly Recomenda</strong>, você tem a certeza de estar lidando
              com profissionais que passaram por nossa curadoria de qualidade, ética e organização.
            </p>

            <div className="contact-details">
              <div className="contact-row">
                <MapPin size={20} />
                <span>Escritório Físico: Rua 7 de Setembro, nº 655, Centro, Morrinhos/GO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="location-info">
        <div className="container">
          <div className="info-box">
            <Layout size={32} className="mb-4" />
            <h2>Dúvidas Comuns sobre a Indicação</h2>

            <div className="faq-mini">
              <details>
                <summary>É seguro contratar um advogado online? <ChevronDown size={16} /></summary>
                <p>Sim. A Jurisly verifica o registro na OAB e a existência legal do escritório para garantir sua segurança.</p>
              </details>
              <details>
                <summary>A Jurisly cobra por essa indicação? <ChevronDown size={16} /></summary>
                <p>Não. Nossa missão é conectar você aos melhores profissionais. Os honorários são tratados diretamente com o escritório.</p>
              </details>
              <details>
                <summary>O atendimento é igual ao presencial? <ChevronDown size={16} /></summary>
                <p>Sim. A Souza & Borges utiliza ferramentas de videoconferência certificadas para garantir a mesma proximidade e sigilo.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-final" id="contato">
        <div className="container">
          <div className="cta-box">
            <h2>Não arrisque seus direitos.</h2>
            <p>Conte com a segurança de um escritório verificado pela Jurisly.</p>

            <div className="cta-buttons">
              <a href={whatsappLink} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={24} />
                Iniciar Atendimento Seguro
              </a>
              <div className="secondary-links">
                <span className="secure-badge"><Lock size={14} /> Dados protegidos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Esta página é uma publicação da <strong>Jurisly</strong>, plataforma de conexão jurídica, em parceria com SOUZA & BORGES ADVOGADOS ASSOCIADOS.</p>
          <p className="footer-legal">CNPJ do Escritório Parceiro: 53.266.530/0001-42</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
