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
          src="https://www.bing.com/images/search?view=detailV2&ccid=ChGV1ik7&id=BF7D76BEF5DC7E52D0F4CC0C524E6C14D26407E0&thid=OIP.ChGV1ik7oY1aJrmRcsKzfwHaFj&mediaurl=https%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fc3%2fHatsune_Miku_nihonga_style_painting.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.331a5162327306e95e387d5057d50d5d%3frik%3dV2T1UwXHke1swg%26pid%3dImgRaw%26r%3d0&exph=1536&expw=1024&q=pintura+nihonga&simid=608050135249219331&FORM=IRPRST&ck=7774A72C6F9E32050744CA2F09D97064&selectedIndex=0&itb=0"
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
          src="https://www.bing.com/images/search?view=detailV2&ccid=ZdTRw1%2fK&id=3C2F87C4EC08BC9051D55F035A9A5680564B98D4&thid=OIP.ZdTRw1%2fKfFY_iJxl6rP88QHaFj&mediaurl=https%3a%2f%2fmedia.timeout.com%2fimages%2f105211123%2f750%2f422%2fimage.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d9ebdff0b72f67bb7007b1f7a38a13fb%3frik%3dXxxo2p2%252fb6dqgQ%26pid%3dImgRaw%26r%3d0&exph=422&expw=750&q=ceramica+raku&simid=608054777481932609&FORM=IRPRST&ck=9C0F05C34DA4F5289F9F6349816E8A37&selectedIndex=0&itb=0"
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
          src="https://www.bing.com/images/search?view=detailV2&ccid=2cScpPSt&id=8BBEB17961B16F707B0D12B0A30250D1D8C28F11&thid=OIP.2cScpPStht5hjtZfUt1j5AHaFj&mediaurl=https%3a%2f%2fwww.japan.travel%2fwp-content%2fuploads%2f2019%2f05%2fkinkakuji-golden-pavilion.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.82acb1f4670133d5a3c81cc12472b6fc%3frik%3d1X1pWnt78eVuHg%26pid%3dImgRaw%26r%3d0&exph=683&expw=1024&q=templo+kinkaku-ji&simid=608050968017657520&FORM=IRPRST&ck=6DA1A7BE3E9A0B87B22DAF25E423A401&selectedIndex=0&itb=0"
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
          src="https://www.bing.com/images/search?view=detailV2&ccid=xONWkh9m&id=CB6029D429D5FCE5C050B4B4FB4897D0B0A6F46A&thid=OIP.xONWkh9mRqa-oA-V-Vip0gHaFj&mediaurl=https%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f7%2f7e%2fHimeji_Castle_2015.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.825a25bfa0fd3e7423465b0f3b71e603%3frik%3dSTtTfp%252fENrJpbg%26pid%3dImgRaw%26r%3d0&exph=568&expw=850&q=castelo+de+himeji&simid=608053112279220943&FORM=IRPRST&ck=69B4ED3A66F0A79850F17C1D8034B32F&selectedIndex=0&itb=0"
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
