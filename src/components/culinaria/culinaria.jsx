import React from "react";
import './culinaria.css';

const Culinaria = () => {
    return (
        <div className="paginaCulinaria">
            <h1 className="tituloPrincipal">Culinária</h1>

            <p className="subtitulo">
                Pratos típicos do Japão para conhecer as histórias e para fazer em casa!
            </p>

            <section className="receitas">
                {/* Receita 1 */}
                <div className="receita">
                    <h3>Sushi (寿司)</h3>
                    <img
                        src="/imagens/hossomaki.jpg"
                        alt="Sushi"
                        className="receitaImg"
                    />
                    <p>
                        O sushi é um dos pratos mais emblemáticos do Japão. Sua origem remonta ao século 8, como uma técnica de conservação de peixe, onde o peixe era fermentado com arroz para preservá-lo. O sushi como o conhecemos hoje, com peixe fresco e arroz temperado com vinagre, se desenvolveu durante o período Edo (1603-1868), e se popularizou no Japão e no mundo inteiro.
                    </p>
                    <h3>Receita</h3>
                    <ol className="ingredientes">
                        <li>2 xícaras de arroz para sushi</li>
                        <li>2 ½ xícaras de água</li>
                        <li>2 colheres de sopa de vinagre de arroz</li>
                        <li>1 colher de sopa de açúcar</li>
                        <li>1 colher de chá de sal</li>
                        <li>Algas nori (folhas)</li>
                        <li>Peixe fresco (atum, salmão ou outro de sua escolha)</li>
                        <li>Wasabi e molho de soja</li>
                    </ol>
                    <h3>Modo de Preparo</h3>
                    <p>Lave bem o arroz até que a água saia limpa. Cozinhe o arroz em uma panela de arroz ou em uma panela comum com a água.
                        Em uma tigela pequena, misture o vinagre de arroz, açúcar e sal. Aqueça até dissolver completamente.
                        Após o arroz estar pronto, coloque-o em uma tigela grande e adicione a mistura de vinagre, mexendo delicadamente.
                        Deixe o arroz esfriar à temperatura ambiente.
                        Corte o peixe em tiras finas e prepare as folhas de nori.
                        Coloque uma camada fina de arroz sobre o nori, adicione o peixe e enrole com a ajuda de uma esteira de bambu.
                        Sirva com molho de soja e wasabi.
                    </p>
                </div>

                {/* Receita 2 */}
                <div className="receita">
                    <h3>Ramen (ラーメン)</h3>
                    <img
                        src="/imagens/ramen.jpg"
                        alt="Ramen"
                        className="receitaImg"
                    />
                    <p>
                        O ramen é uma sopa de macarrão que se originou na China, mas foi adotada e adaptada pelos japoneses, tornando-se um prato nacional. Durante o período pós-guerra no Japão, o ramen se tornou popular por ser uma comida rápida, acessível e deliciosa. Cada região do Japão tem sua própria variação de ramen, com diferentes caldos e acompanhamentos.
                    </p>
                    <h3>Receita</h3>
                    <ol className="ingredientes">
                        <li>200g de macarrão de ramen</li>
                        <li>1 litro de caldo de galinha ou porco</li>
                        <li>2 colheres de sopa de pasta de miso</li>
                        <li>1 dente de alho picado</li>
                        <li>1 ovo cozido</li>
                        <li>Fatias de carne de porco (chashu)</li>
                        <li>Cebolinha fatiada</li>
                        <li>Algas nori</li>
                        <li>Molho de soja</li>
                    </ol>
                    <h3>Modo de Preparo</h3>
                    <p>Cozinhe o macarrão de ramen conforme as instruções da embalagem.
                        Em uma panela, adicione o caldo de galinha ou porco e leve ao fogo médio. Se desejar, adicione a pasta de miso para enriquecer o sabor.
                        Adicione o alho picado ao caldo e cozinhe por mais alguns minutos.
                        Coloque o macarrão cozido em uma tigela e despeje o caldo quente sobre ele.
                        Decore com fatias de carne de porco, ovo cozido, cebolinha e algas nori.
                        Sirva imediatamente.
                    </p>
                </div>

                {/* Receita 3 */}
                <div className="receita">
                    <h3>Tempura (天ぷら)</h3>
                    <img
                        src="/imagens/tempura.jpg"
                        alt="Tempura"
                        className="receitaImg"
                    />
                    <p>
                        A tempura é um prato de fritura leve que se tornou popular no Japão no período Edo. Originalmente trazida pelos missionários portugueses, os japoneses a adaptaram para usar ingredientes locais e criar uma massa leve e crocante, perfeita para vegetais e frutos do mar.
                    </p>
                    <h3>Receita</h3>
                    <ol className="ingredientes">
                        <li>500g de camarões descascados</li>
                        <li>1 xícara de farinha de trigo</li>
                        <li>1 xícara de água gelada</li>
                        <li>1 gema de ovo</li>
                        <li>Vegetais variados (batata-doce, abóbora, berinjela, etc.)</li>
                        <li>Óleo para fritura</li>
                        <li>Molho de tempura (tentsuyu)</li>
                    </ol>
                    <h3>Modo de Preparo</h3>
                    <p>Prepare os ingredientes, cortando-os em pedaços pequenos.
                        Em uma tigela, bata o ovo e adicione a água gelada. Misture bem.
                        Adicione a farinha de trigo à mistura, mexendo até que fique uma massa mais grossa e pegajosa.
                        Aqueça o óleo em uma frigideira ou wok.
                        Mergulhe os ingredientes na massa de tempura e frite-os até ficarem dourados e crocantes.
                        Retire e escorra em papel toalha.
                        Sirva com molho de soja ou molho tare.
                    </p>
                </div>

                {/* Receita 4 */}
                <div className="receita">
                    <h3>Onigiri (おにぎり)</h3>
                    <img
                        src="/imagens/oniguiri.png"
                        alt="Onigiri"
                        className="receitaImg"
                    />
                    <p>
                        O onigiri é um lanche tradicional japonês, feito com arroz moldado em formato triangular ou redondo, muitas vezes recheado com ingredientes como umeboshi (ameixa em conserva), salmão grelhado ou atum com maionese, e envolto em algas nori.
                    </p>
                    <h3>Receita</h3>
                    <ol className="ingredientes">
                        <li>2 xícaras de arroz japonês</li>
                        <li>2 ½ xícaras de água</li>
                        <li>Sal a gosto</li>
                        <li>Algas nori</li>
                        <li>Recheios de sua preferência (umeboshi, salmão, atum, etc.)</li>
                    </ol>
                    <h3>Modo de Preparo</h3>
                    <p>Cozinhe o arroz japonês e deixe esfriar um pouco.
                        Com as mãos umedecidas e levemente salgadas, molde o arroz em forma triangular ou redonda.
                        Insira o recheio escolhido no centro do onigiri enquanto estiver moldando.
                        Se desejar, envolva o onigiri com uma folha de nori.
                        Sirva como lanche ou acompanhando uma refeição.</p>
                </div>
            </section>
        </div>
    );
}

export default Culinaria;
