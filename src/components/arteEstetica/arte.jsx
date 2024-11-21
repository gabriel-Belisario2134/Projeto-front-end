import React from 'react';
import './Arte.css'; // Certifique-se de adicionar um arquivo CSS com estilo adequado.

const Arte = () => {
  return (
    <div className="arte-container">
    
      <section className="arte-section">
        <h2 className="arte-section-title">Pintura Japonesa</h2>
        <p className="arte-section-text">
          A pintura japonesa é uma das formas artísticas mais antigas e refinadas do Japão. Os artistas japoneses usaram técnicas como a pintura em pergaminho e a pintura de paisagens e flores, frequentemente em harmonia com a natureza.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Pintura_do_Jap%C3%A3o" target="_blank" rel="noopener noreferrer" className="arte-link">
          Saiba mais sobre a pintura japonesa
        </a>
        <br />
        <img
          src=""
          alt="Pintura Japonesa"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </section>

      <section className="arte-section">
        <h2 className="arte-section-title">Escultura Japonesa</h2>
        <p className="arte-section-text">
          A escultura japonesa tem uma longa história, com destaque para as figuras de Buda e os deuses do xintoísmo. As esculturas são frequentemente feitas de madeira ou bronze e têm uma forte conexão com o budismo e outras religiões.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Escultura_do_Jap%C3%A3o" target="_blank" rel="noopener noreferrer" className="arte-link">
          Saiba mais sobre a escultura japonesa
        </a>
        <br />
        <img
          src=""
          alt="Escultura Japonesa"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </section>

      <section className="arte-section">
        <h2 className="arte-section-title">Cerâmica Japonesa</h2>
        <p className="arte-section-text">
          A cerâmica japonesa, especialmente a cerâmica de Kyoto e a cerâmica raku, é famosa por sua beleza e funcionalidade. As peças de cerâmica são muitas vezes usadas em cerimônias do chá e têm uma longa tradição.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Cer%C3%A2mica_do_Jap%C3%A3o" target="_blank" rel="noopener noreferrer" className="arte-link">
          Saiba mais sobre a cerâmica japonesa
        </a>
        <br />
        <img
          src=""
          alt="Cerâmica Japonesa"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </section>
    </div>
  );
};

export default Arte;

