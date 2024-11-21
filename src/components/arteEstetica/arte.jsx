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
        <h2 className="arte-section-title">Pintura Nihonga (日本画)</h2>
        <p className="arte-section-text">
        Nihonga é um estilo de pintura tradicional japonesa criado no período Meiji (1868-1912) para preservar a arte local diante da ocidentalização. Utiliza materiais naturais como pigmentos minerais, cola animal (nikawa), e superfícies como papel washi ou seda. Os temas incluem natureza, paisagens e elementos espirituais, com estilo minimalista e composição que valoriza espaços vazios (ma). É caracterizada por detalhes precisos, camadas translúcidas e um vínculo forte com a cultura japonesa. Grandes artistas do estilo incluem Yokoyama Taikan e Hishida Shunsō.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Nihonga" target="_blank" rel="noopener noreferrer" className="arte-link">
          Saiba mais sobre a pintura Nihonga
        </a>
        <br />
        <img
          src="./imagens/arte1.jpg"
          alt="Exemplo de pintura Nihonga"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </section>

      <section className="arte-section">
        <h2 className="arte-section-title">Cerâmica Raku</h2>
        <p className="arte-section-text">
        A cerâmica Raku é um estilo tradicional de cerâmica japonesa que se originou no século 16, durante o período Momoyama. O nome "Raku" significa "prazer" ou "conforto", refletindo a filosofia de criar peças que promovem bem-estar e uma experiência única.Características:Técnica de queima rápida: As peças são retiradas do forno enquanto ainda estão quentes e colocadas em materiais como folhas secas ou palha, criando reações químicas que resultam em efeitos de cor e textura únicos.Acabamento irregular: O processo de resfriamento rápido e a exposição ao ar criam fissuras, mudanças de cor e brilhos metálicos nas peças. Estilo artesanal: A cerâmica Raku é frequentemente feita à mão e não é produzida em grande escala, o que confere a cada peça um caráter único.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Raku" target="_blank" rel="noopener noreferrer" className="arte-link">
          Saiba mais sobre a cerâmica raku
        </a>
        <br />
        <img
          src="./imagens/arte2.jpg"
          alt="Exemplo de cerâmica raku"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </section>

      {/* Seção de Arquitetura */}
      <section className="arte-section">
        <h2 className="arte-section-title">Templo Kinkaku-ji (Pavilhão Dourado)</h2>
        <p className="arte-section-text">
        O Kinkaku-ji, também conhecido como Pavilhão Dourado, é um dos templos mais famosos do Japão, localizado em Kyoto. Seu nome formal é Templo Zen de Rokuon-ji, e foi originalmente construído no século 14 como uma villa de descanso do shogunato Ashikaga, Ashikaga Yoshimitsu.

Características:
Pavilhão Dourado: O templo é conhecido por seu impressionante edifício revestido de folhas de ouro em sua parte superior, que brilha intensamente à luz do sol. Essa cobertura dourada simboliza a pureza do Buda e é um dos maiores atrativos do templo.
Arquitetura e Estilo: O Kinkaku-ji segue o estilo arquitetônico Zen e é composto por três andares, cada um com um estilo arquitetônico distinto:
O primeiro andar é de estilo shinden-zukuri (palácio nobre), com madeira exposta e elementos tradicionais japoneses.
O segundo andar é de estilo buke-zukuri (residencial dos samurais), com um design mais simples e austero.
O terceiro andar é de estilo kannon (inspirado no Buda da compaixão), revestido de folhas de ouro e com uma estátua do Buda Amida.
Jardim e Lago: O templo está cercado por um lindo jardim zen e um lago, chamado Kyoko-chi, que reflete a imagem do pavilhão, criando um ambiente sereno e harmonioso.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Kinkaku-ji" target="_blank" rel="noopener noreferrer" className="arte-link">
          Saiba mais sobre o Templo Kinkaku-ji
        </a>
        <br />
        <img
          src="./imagens/arte3.jpg"
          alt="Templo Kinkaku-ji"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </section>

      <section className="arte-section">
        <h2 className="arte-section-title">Castelo de Himeji  (姫路城)</h2>
        <p className="arte-section-text">
        O Castelo de Himeji (姫路城, Himeji-jō) é um dos castelos mais emblemáticos e bem preservados do Japão, localizado na cidade de Himeji, na província de Hyogo. Considerado um exemplo icônico da arquitetura de castelos japoneses, é conhecido por sua imponência e beleza, além de ser um Patrimônio Mundial da Humanidade da UNESCO desde 1993.

Características Principais:
Arquitetura:

O castelo é famoso por sua aparência branca e imponente, o que lhe rendeu o apelido de "Castelo da Garça Branca" (Shirasagi-jō), devido à sua estrutura esbelta e coberta por telhas brancas que lembram as penas de uma garça.
A construção segue o estilo tradicional de castelos japoneses, com várias torres (donjon), muralhas e fossos defensivos. O complexo é composto por uma série de edifícios interligados, cada um com funções específicas, e seus altos muros e portões são projetados para dificultar o acesso de inimigos.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Castelo_de_Himeji" target="_blank" rel="noopener noreferrer" className="arte-link">
          Saiba mais sobre o Castelo de Himeji
        </a>
        <br />
        <img
          src="./imagens/arte4.jpg"
          alt="Castelo de Himeji"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </section>
    </div>
  );
};

export default Arte;
