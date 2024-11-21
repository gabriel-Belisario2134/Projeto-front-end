import React from 'react';
import './tradicoesFestivais.css';

const TradicoesFestivais = () => {
  return (
    <div className="tradicoes-festivais-container">
      <main className="tradicoes-festivais-main">
        <h2 className="tradicoes-festivais-title">Tradições e Festivais do Japão</h2>
        <p className="tradicoes-festivais-description">
          O Japão é famoso por suas tradições e festivais, que são celebrados com grande reverência e alegria. Abaixo, você encontrará algumas das tradições e festivais mais importantes do país.
        </p>

        <section className="tradicoes-festivais-item">
          <h3 className="tradicoes-festivais-subtitle">Hanami (Observação das Cerejeiras)</h3>
          <p className="tradicoes-festivais-text">
            O Hanami é uma tradição anual em que as pessoas se reúnem para observar a florada das cerejeiras (sakura) na primavera. Durante este período, as famílias fazem piqueniques sob as árvores floridas, refletindo sobre a efemeridade da vida.
          </p>
          <a 
            href="https://pt.wikipedia.org/wiki/Hanami" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tradicoes-festivais-link"
          >
            Saiba mais sobre Hanami
          </a>
          <br />
          <img 
            src="./imagens/Festival1.png" 
            alt="Hanami - Observação das cerejeiras" 
            className="tradicoes-festivais-image"
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </section>

        <section className="tradicoes-festivais-item">
          <h3 className="tradicoes-festivais-subtitle">Tanabata (Festival das Estrelas)</h3>
          <p className="tradicoes-festivais-text">
            O Tanabata é um festival baseado em uma lenda chinesa, onde dois amantes, Orihime e Hikoboshi, podem se encontrar uma vez por ano. Durante o festival, as pessoas escrevem seus desejos em pedaços de papel e os penduram em ramos de bambu.
          </p>
          <a 
            href="https://pt.wikipedia.org/wiki/Tanabata" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tradicoes-festivais-link"
          >
            Saiba mais sobre Tanabata
          </a>
          <br />
          <img 
            src="./imagens/Festival2.png" 
            alt="Tanabata Festival" 
            className="tradicoes-festivais-image"
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </section>

        <section className="tradicoes-festivais-item">
          <h3 className="tradicoes-festivais-subtitle">Obon (Festa dos Espíritos)</h3>
          <p className="tradicoes-festivais-text">
            O Obon é uma celebração que honra os espíritos dos antepassados. Durante o festival, acredita-se que os espíritos retornam à Terra. As famílias realizam rituais e danças chamadas *Bon Odori* para homenagear os mortos.
          </p>
          <a 
            href="https://pt.wikipedia.org/wiki/Obon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tradicoes-festivais-link"
          >
            Saiba mais sobre Obon
          </a>
          <br />
          <img 
            src="./imagens/Festival3.png" 
            alt="Obon Festival" 
            className="tradicoes-festivais-image"
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </section>

        <section className="tradicoes-festivais-item">
          <h3 className="tradicoes-festivais-subtitle">Gion Matsuri (Festival de Gion)</h3>
          <p className="tradicoes-festivais-text">
            O Gion Matsuri é um dos maiores e mais famosos festivais do Japão, realizado em Kyoto. Durante o festival, carros alegóricos desfilam pelas ruas, e várias cerimônias religiosas são realizadas para afastar desastres e trazer prosperidade.
          </p>
          <a 
            href="https://pt.wikipedia.org/wiki/Gion_Matsuri" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tradicoes-festivais-link"
          >
            Saiba mais sobre Gion Matsuri
          </a>
          <br />
          <img 
            src="./imagens/Festival4.png" 
            alt="Gion Matsuri" 
            className="tradicoes-festivais-image"
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </section>

        <section className="tradicoes-festivais-item">
          <h3 className="tradicoes-festivais-subtitle">Setsubun (Festival de Despedida do Inverno)</h3>
          <p className="tradicoes-festivais-text">
            O Setsubun é um festival realizado em fevereiro para marcar a transição do inverno para a primavera. Durante o evento, as famílias jogam feijões de soja torrados para afastar os maus espíritos e trazer boa sorte para o novo ano.
          </p>
          <a 
            href="https://pt.wikipedia.org/wiki/Setsubun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tradicoes-festivais-link"
          >
            Saiba mais sobre Setsubun
          </a>
          <br />
          <img 
            src="./imagens/Festival5.png" 
            alt="Setsubun Festival" 
            className="tradicoes-festivais-image"
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </section>
      </main>
    </div>
  );
};

export default TradicoesFestivais;
