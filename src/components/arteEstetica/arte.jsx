import React from 'react';
import './Arte.css'; // Certifique-se de adicionar um arquivo CSS com estilo adequado.

const Arte = () => {
  return (
    <div className="arte-container">
      <header className="arte-header">
        <h1 className="arte-title">A Arte e Arquitetura Tradicional do Japão</h1>
        <p className="arte-subtitle">
          Explore as formas de expressão artística e a arquitetura que definem a rica herança cultural japonesa.
        </p>
      </header>

      {/* Seção de Arte */}
      <section className="arte-section">
        <h2 className="arte-section-title">Exemplo 1: Pintura Nihonga</h2>
        <p className="arte-section-text">
          A pintura Nihonga é uma forma tradicional de arte japonesa que usa técnicas e materiais autênticos do Japão, como tinta à base de pedras e papel de arroz. Uma das suas características é a mistura de elementos da pintura ocidental com as técnicas orientais, resultando em obras vibrantes e detalhadas.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Nihonga" target="_blank" rel="noopener noreferrer" className="arte-link">
          Saiba mais sobre a pintura Nihonga
        </a>
        <br />
        <img
          src=''
          alt="Exemplo de pintura Nihonga"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </section>

      <section className="arte-section">
        <h2 className="arte-section-title">Exemplo 2: Cerâmica Raku</h2>
        <p className="arte-section-text">
          A cerâmica raku é uma técnica de queima cerâmica originária do Japão, utilizada tradicionalmente em utensílios para a cerimônia do chá. Suas características incluem formas simples e técnicas de queima únicas, que resultam em peças de aspecto rústico e orgânico.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Raku" target="_blank" rel="noopener noreferrer" className="arte-link">
          Saiba mais sobre a cerâmica raku
        </a>
        <br />
        <img
         src=''
          alt="Exemplo de cerâmica raku"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </section>

      {/* Seção de Arquitetura */}
      <section className="arte-section">
        <h2 className="arte-section-title">Exemplo 1: Templo Kinkaku-ji (Pavilhão Dourado)</h2>
        <p className="arte-section-text">
          O Kinkaku-ji é um templo budista em Kyoto, famoso por sua arquitetura tradicional e pelo fato de seu pavilhão ser coberto com folhas de ouro. O templo está situado em belos jardins que representam a harmonia entre a natureza e a criação humana.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Kinkaku-ji" target="_blank" rel="noopener noreferrer" className="arte-link">
          Saiba mais sobre o Templo Kinkaku-ji
        </a>
        <br />
        <img
          src=''
          alt="Templo Kinkaku-ji"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </section>

      <section className="arte-section">
        <h2 className="arte-section-title">Exemplo 2: Castelo de Himeji</h2>
        <p className="arte-section-text">
          O Castelo de Himeji é um dos castelos mais famosos do Japão e é conhecido por sua arquitetura militar refinada e beleza estética. Com suas paredes brancas e torres, o castelo simboliza a força e a elegância da arquitetura feudal japonesa.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Castelo_de_Himeji" target="_blank" rel="noopener noreferrer" className="arte-link">
          Saiba mais sobre o Castelo de Himeji
        </a>
        <br />
        <img
          src=''
          alt="Castelo de Himeji"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </section>

      <footer className="arte-footer">
        <p className="arte-footer-text">© 2024 Cultura Japonesa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Arte;
