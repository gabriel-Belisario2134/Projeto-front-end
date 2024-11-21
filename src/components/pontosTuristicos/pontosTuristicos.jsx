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
          <h3 className="pontos-turisticos-subtitle">1. Monte Fuji</h3>
          <p className="pontos-turisticos-text">
            O Monte Fuji é o pico mais alto do Japão, com 3.776 metros de altura. Ele é um símbolo icônico do país, conhecido por sua beleza e sua importância espiritual. Durante a temporada de verão, muitas pessoas fazem a famosa caminhada até o topo. Além disso, o Monte Fuji é cercado por belos lagos e áreas de recreação ao redor.
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
            src="https://www.bing.com/images/search?view=detailV2&ccid=MSTm4Uc1&id=39B63839ABDB8E59D3B94F6E0CE0E08F550CB64A&thid=OIP.MSTm4Uc1YcZMmOrrAjFGrAHaEK&mediaurl=https%3a%2f%2fastelus.com%2fwp-content%2fviajes%2fEl-monte-Fuji-la-montana-mas-alta-de-Japon.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3124e6e1473561c64c98eaeb023146ac%3frik%3dSrYMVY%252fg4AxuTw%26pid%3dImgRaw%26r%3d0&exph=1350&expw=2400&q=monte+fuji&simid=608024089937774624&FORM=IRPRST&ck=052B8A8C2480992C4FBA645CC629D7D3&selectedIndex=2&itb=0" 
            alt="Monte Fuji" 
            className="pontos-turisticos-image" 
          />
        </section>

        <section className="pontos-turisticos-item">
          <h3 className="pontos-turisticos-subtitle">2. Templo Kinkaku-ji (Pavilhão Dourado)</h3>
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
            src="https://www.bing.com/images/search?view=detailV2&ccid=YhldGzaM&id=052C5CD37CF5E9ED2640299F6FA64F7A808F215E&thid=OIP.YhldGzaMZqXjT9AdCL6RRAHaFj&mediaurl=https%3a%2f%2fcdn.japanbyjapan.com%2fuploads%2f2914%2f8820%2f7438%2fGolden_Pavilion-1.JPG&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.62195d1b368c66a5e34fd01d08be9144%3frik%3dXiGPgHpPpm%252bfKQ%26pid%3dImgRaw%26r%3d0&exph=2448&expw=3264&q=templo+kinkakum&simid=608009555751107141&FORM=IRPRST&ck=8C57A1FA82405175E2677D25DBC1C4E8&selectedIndex=1&itb=0" 
            alt="Templo Kinkaku-ji" 
            className="pontos-turisticos-image" 
          />
        </section>

        <section className="pontos-turisticos-item">
          <h3 className="pontos-turisticos-subtitle">3. Templo de Todaiji</h3>
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
            src="https://www.bing.com/images/search?view=detailV2&ccid=ara250Ff&id=A1F1C25A8A6F3418DD0B81D75084FA40006A0578&thid=OIP.ara250FfHrfTSSOQIuMuuAHaEz&mediaurl=https%3a%2f%2fwww.italiajapan.net%2fimg%2fs68%2fi9%2ftodaiji_70137405.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6ab6b6e7415f1eb7d349239022e32eb8%3frik%3deAVqAED6hFDXgQ%26pid%3dImgRaw%26r%3d0&exph=973&expw=1500&q=templo+todaiji&simid=608029355553864834&FORM=IRPRST&ck=A67792E5E83996C204451C6443F56C4E&selectedIndex=0&itb=0" 
            alt="Templo de Todaiji" 
            className="pontos-turisticos-image" 
          />
        </section>

        <section className="pontos-turisticos-item">
          <h3 className="pontos-turisticos-subtitle">4. Ilha de Miyajima</h3>
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
            src="https://www.bing.com/images/search?q=ilha%20de%20miyajima&FORM=IQFRBA&id=A5FF1E4AD8EC89435329DF227DA6AD4FD7C7C84A" 
            alt="Ilha de Miyajima" 
            className="pontos-turisticos-image" 
          />
        </section>

        <section className="pontos-turisticos-item">
          <h3 className="pontos-turisticos-subtitle">5. Distrito de Shibuya (Tóquio)</h3>
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
            src="https://www.bing.com/images/search?view=detailV2&ccid=MtAhrcbv&id=E552C0A395AE3A3E7C5611FF1833E15DD9718CA8&thid=OIP.MtAhrcbv8InEWFg_4KAXbAHaE8&mediaurl=https%3a%2f%2ftwomonkeystravelgroup.com%2fwp-content%2fuploads%2f2020%2f02%2fThings-To-Do-in-Shibuya-Japan8.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.32d021adc6eff089c458583fe0a0176c%3frik%3dqIxx2V3hMxj%252fEQ%26pid%3dImgRaw%26r%3d0&exph=1668&expw=2500&q=shibuya&simid=607991869107873782&FORM=IRPRST&ck=2956B0175EDB3E27F2C0FA62ECAD3BCD&selectedIndex=0&itb=0" 
            alt="Distrito de Shibuya" 
            className="pontos-turisticos-image" 
          />
        </section>
      </main>
    </div>
  );
};

export default PontosTuristicos;
