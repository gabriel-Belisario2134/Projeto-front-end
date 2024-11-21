import React from 'react';
import './pontosTuristicos.css';

const PontosTuristicos = () => {
  return (
    <div className="pontos-turisticos-container">
      <main className="pontos-turisticos-main">
        <h2 className="pontos-turisticos-title">Pontos Turísticos do Japão</h2>
        <p className="pontos-turisticos-description">
          Explore os pontos turísticos mais famosos do Japão, como o Monte Fuji, templos históricos, e mais!
        </p>
        
        <section className="pontos-turisticos-item">
          <h3 className="pontos-turisticos-subtitle">Monte Fuji (富士山)</h3>
          <p className="pontos-turisticos-text">
          O Monte Fuji (富士山, Fujisan) é o ponto mais alto do Japão e um dos símbolos mais reconhecidos do país, tanto cultural quanto geograficamente. Localizado na fronteira entre as províncias de Yamanashi e Shizuoka, a cerca de 100 quilômetros a sudoeste de Tóquio, o Monte Fuji é um vulcão ativo e sagrado, que tem um grande significado espiritual, cultural e artístico no Japão.

Características:
Altura:
O Monte Fuji tem uma altura de 3.776 metros, o que o torna o pico mais alto do Japão. Sua forma quase perfeita, com um cume simetricamente cônico e coberto de neve, é uma das suas principais características e o torna uma das montanhas mais reconhecíveis do mundo.
Vulcão Ativo:
O Fuji é um vulcão do tipo estratovulcão, com várias erupções documentadas ao longo da história. A última erupção ocorreu em 1707, durante o período Edo, conhecida como a erupção Hōei. Embora o vulcão esteja inativo atualmente, ele é monitorado por cientistas devido ao risco de uma possível erupção futura.
Paisagem e Ecossistema:
A montanha é cercada por belos lagos, como o Lago Kawaguchi e o Lago Yamanaka, além de florestas e prados. As áreas ao redor do Monte Fuji são populares para caminhadas, camping e turismo natural. O clima na montanha varia, com áreas mais baixas apresentando uma vegetação de floresta temperada, enquanto as partes mais altas têm um ecossistema alpino, com neve no inverno.
          </p>
          <a 
            href="https://pt.wikipedia.org/wiki/Montanha_Fuji" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pontos-turisticos-link"
          >
            Saiba mais sobre o Monte Fuji
          </a>
          <br />
          <img 
            src="./imagens/pontos1.jpg" 
            alt="Monte Fuji" 
            className="pontos-turisticos-image" 
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </section>

        <section className="pontos-turisticos-item">
          <h3 className="pontos-turisticos-subtitle">Templo Kinkaku-ji (Pavilhão Dourado)</h3>
          <p className="pontos-turisticos-text">
            O Kinkaku-ji, também conhecido como Pavilhão Dourado, é um dos templos mais famosos de Kyoto. O templo é coberto com folhas de ouro e reflete maravilhosamente em um lago sereno ao seu redor. Ele foi originalmente construído como uma villa de descanso para um shogun, mas foi transformado em templo budista após sua morte.
          </p>
          <a 
            href="https://pt.wikipedia.org/wiki/Kinkaku-ji" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pontos-turisticos-link"
          >
            Saiba mais sobre o Templo Kinkaku-ji
          </a>
          <br />
          <img 
            src="./imagens/arte3.jpg" 
            alt="Templo Kinkaku-ji" 
            className="pontos-turisticos-image" 
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </section>

        <section className="pontos-turisticos-item">
          <h3 className="pontos-turisticos-subtitle">Templo de Todaiji</h3>
          <p className="pontos-turisticos-text">
            O Templo de Todaiji, localizado em Nara, é um dos maiores templos de madeira do mundo e abriga uma estátua gigantesca de Buda (Daibutsu). O templo é um Patrimônio Mundial da Humanidade da UNESCO e atrai milhares de visitantes todos os anos, principalmente devido ao seu imenso tamanho e sua impressionante arquitetura.
          </p>
          <a 
            href="https://pt.wikipedia.org/wiki/Todaiji" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pontos-turisticos-link"
          >
            Saiba mais sobre o Templo de Todaiji
          </a>
          <br />
          <img 
            src="./imagens/pontos2.jpg" 
            alt="Templo de Todaiji" 
            className="pontos-turisticos-image" 
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </section>

        <section className="pontos-turisticos-item">
          <h3 className="pontos-turisticos-subtitle">Ilha de Miyajima</h3>
          <p className="pontos-turisticos-text">
            A Ilha de Miyajima, localizada perto de Hiroshima, é famosa pelo grande torii flutuante, que é a entrada do Santuário Itsukushima. A ilha é conhecida por sua paisagem deslumbrante, templos históricos, e pela população de cervos selvagens que circulam pela região.
          </p>
          <a 
            href="https://pt.wikipedia.org/wiki/Ilha_de_Miyajima" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pontos-turisticos-link"
          >
            Saiba mais sobre a Ilha de Miyajima
          </a>
          <br />
          <img 
            src="./imagens/pontos3.jpg" 
            alt="Ilha de Miyajima" 
            className="pontos-turisticos-image" 
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </section>

        <section className="pontos-turisticos-item">
          <h3 className="pontos-turisticos-subtitle">Distrito de Shibuya (Tóquio)</h3>
          <p className="pontos-turisticos-text">
            O distrito de Shibuya em Tóquio é famoso por seu cruzamento movimentado, considerado um dos mais movimentados do mundo. Shibuya é um centro de moda e entretenimento, e você pode encontrar uma infinidade de lojas, restaurantes e entretenimento por toda a área. A estátua de Hachiko, o cão fiel, também é um ponto turístico popular no local.
          </p>
          <a 
            href="https://pt.wikipedia.org/wiki/Shibuya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pontos-turisticos-link"
          >
            Saiba mais sobre Shibuya
          </a>
          <br />
          <img 
            src="./imagens/pontos4.jpg" 
            alt="Distrito de Shibuya" 
            className="pontos-turisticos-image" 
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </section>
      </main>
    </div>
  );
};

export default PontosTuristicos;
