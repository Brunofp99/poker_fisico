import React from 'react';
import RulesImage from '../../Images/Rules.PNG';
import { Link } from 'react-router-dom';
import './style.css';
import { Col, Container, Row, Button } from 'react-bootstrap';

function index() {
  return (
    <Container>
      <Col md='auto'></Col>
      <Col md='auto'>
        <Row>
          <Col md={3}></Col>
          <Col md='auto'>
            <h1>Poker de Partículas elementares</h1>
          </Col>
          <Col md='auto'></Col>
        </Row>
        <Row>
        <Col md={2}></Col>
          <p>
            — O poker de partículas elementares é um jogo, 
            que inicialmente foi idealizado e desenvolvido na versão física 
            pelo Professor Doutor Hélio Takai. Nesta versão digital Beta, 
            o jogo está sendo desenvolvido pelo professor Francisco Amaral, 
            o qual faz parte do <b>Grupo de Extensão, Divulgação e Pesquisa em Física – GEDEP </b>  
            e pelo graduando em Ciência da Computação e Desenvolvedor Pleno Bruno Falce Pretende-se com este jogo, 
            ensinar física de partículas elementares para alunos do ensino 
            médio de uma forma lúdica.
          </p>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md='auto'>
            <h2>Objetivo do jogo:</h2>
          </Col>
          <Col md='auto'></Col>
        </Row>
        <ol>
          <li> Combinar partículas elementares para formar bárions, mésons ou um átomo de hidrogênio.</li>
          <li> Formar a combinação de cartas de maior valor utilizando até cinco cartas, sendo pelo menos uma da própria mão.</li>
        </ol>
        <Row>
          <Col md={4}></Col>
          <Col md='auto'>
            <h2>Cartas Comunitárias</h2>
          </Col>
          <Col md='auto'></Col>
        </Row>
        <p>Cinco cartas que podem ser utilizadas por todos os jogadores. Elas são abertas na seguinte sequência: </p>
        <p><b>Flop:</b> três cartas são abertas de uma só vez no início do jogo;</p>
        <p><b>Turn: </b> carta aberta no segundo turno;</p>
        <p><b>River: </b> carta aberta no terceiro turno.</p>
        <Row>
          <Col md={4}></Col>
          <Col md='auto'>
            <h2>Primeiro turno (rodada inicial):</h2>
          </Col>
          <Col md='auto'></Col>
        </Row>
        <p>São distribuídas duas cartas fechadas a cada um dos jogadores da mesa e viradas as três primeiras cartas comunitárias (<b>flop</b>). </p>
        <p>A seguir, começando pelo(a) jogador(a) à esquerda do dealer, começa a primeira rodada de apostas. </p>
        <p>Os jogadores têm 3 opções de ação:</p>
        <ol type="a">
          <li><b>Pagar</b> (pingar): pagar o valor da aposta;</li>
          <li><b>Aumentar</b>: aumentar a aposta, colocando na mesa o valor que deseja. </li>
          <li><b>Correr</b>: desistir da mão;</li>
        </ol>
        <Row>
          <Col md={4}></Col>
          <Col md='auto'>
            <h2>Segundo Turno:</h2>
          </Col>
          <Col md='auto'></Col>
        </Row>
        <p>A quarta carta comunitária é virada (<b>turn</b>).</p>
        <p>A seguir os jogadores reavaliam seus jogos e começam a segunda rodada de apostas. Os jogadores têm 4 opções de ação:</p>
        <ol type="a">
          <li><b>Aumentar</b>: aumentar a aposta, colocando na mesa o valor que deseja.</li>
          <li><b>Manter</b>(mesa): o jogador mantém a aposta do turno anterior (caso a aposta ainda não tenha sido aumentada)</li>
          <li><b>Pagar</b>: pagar o valor da aposta (caso já tenha sido aumentada);</li>
          <li><b>Correr</b>: desistir da mão;</li>
        </ol>
        <Row>
          <Col md={4}></Col>
          <Col md='auto'>
            <h2>Terceiro Turno:</h2>
          </Col>
          <Col md='auto'></Col>
        </Row>
        <p>A quarta carta comunitária é virada (<b>river</b>).</p>
        <p>A seguir os jogadores reavaliam seus jogos e começam a terceira rodada de apostas. Os jogadores têm novamente 4 opções de ação:</p>
        <ol type="a">
          <li><b>Aumentar</b>: aumentar a aposta, colocando na mesa o valor que deseja.</li>
          <li><b>Manter</b>(mesa): o jogador mantém a aposta do turno anterior (caso a aposta ainda não tenha sido aumentada)</li>
          <li><b>Pagar</b>: pagar o valor da aposta (caso já tenha sido aumentada);</li>
          <li><b>Correr</b>: desistir da mão;</li>
        </ol>
        <Row>
          <Col md={4}></Col>
          <Col md='auto'>
            <h2>Conclusão:</h2>
          </Col>
          <Col md='auto'></Col>
        </Row>
        <p>Após o fim do terceiro turno o(a) último(a) jogador(a) a 
          aumentar a aposta, mostra suas cartas e revela o seu jogo, 
          lembrando que pelo menos uma as cartas da sua mão deve ser 
          utilizada. <br />
          Na mesma sequência das apostas, cada jogador(a) mostra suas 
          cartas e revela o seu jogo ou desiste (corre) e esconde suas 
          cartas. <br />
          Aquele que tiver o conjunto de cartas de maior valor leva todas 
          as apostas da mesa (pote). <br />
        </p>
        {/*------------------------ <h1>TABELA</h1> --------------------*/}
        <img src={RulesImage} alt="regras" />
        <h2>Ordem de importância</h2>
        <p>Atomic Flush = Próton (uud) + Elétron (e)</p>
        <p>Cosmic Flush = Bárion + Méson</p>
        <p>1 Bárion</p>
        <p>2 Mésons</p>
        <p>1 Méson</p>
        <p>Tau (o tau ganha do tau +)</p>
        <p>Múon (o múon ganha do múon +)</p>
        <p>Elétron (o elétron ganha do elétron +)</p>
        <p>Neutrinos (na mesma ordem dos léptons acima)</p>
        <p>
          <b>
            Em caso de empate (dois jogadores formarem um bárion cada um, 
            por exemplo) ganha quem tiver o conjunto menos massivo.
          </b>
        </p>
        <Row>
          <Col md={5}></Col>
          <Col md='auto'>
            <Link to="/game">
              <Button variant="primary">Vamos jogar!</Button>
            </Link>
          </Col>
          <Col md='auto'></Col>
        </Row>
        
      </Col>
      <Col md='auto'></Col>
    </Container>
  )
}

export default index
