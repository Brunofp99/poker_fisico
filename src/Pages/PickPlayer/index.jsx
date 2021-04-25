import React from 'react'
import { Container, Title, Cards, Button } from './style'
import Card from '../../Components/Card'
import { Link } from 'react-router-dom'

function pickPages() {
  const fisicos = [
    {
      id: 1,
      name: 'Albert Einsten',
      image: 'https://imagensemoldes.com.br/wp-content/uploads/2020/10/Sticker-Albert-Einstein-PNG.png'
    },
    {
      id: 2,
      name: 'Marie Curie',
      image: 'https://img1.gratispng.com/20180630/yby/kisspng-deviantart-digital-art-fan-art-marie-curie-5b37a6e7347416.4136773715303738632149.jpg'
    },
    {
      id: 3,
      name: 'higgs',
      image: 'https://pbs.twimg.com/media/D760gO1W4AIu5wd.jpg'
    },
    {
      id: 4,
      name: 'Cesar Lattes',
      image: 'data:image/jpeg;base64,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'
    },
    {
      id: 5,
      name: 'Mileva',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mileva_Maric_1912.jpg/1200px-Mileva_Maric_1912.jpg'
    },
    {
      id: 6,
      name: 'François Englert',
      image: 'https://cdn.britannica.com/43/172143-050-CDB92B7E/Francois-Englert-2012.jpg'
    },
  ]


  return (
    <Container>
      <Title>Escolha o seu físico</Title>
      <Cards>
        {
          fisicos.map(
            (fisico, i) =>(
              <>
                <Card image={fisico.image} name={fisico.name}></Card>
              </>
            )
          )
        }
      </Cards>
      <Link to="/game" id="link">
        <Button>Jogar</Button>
      </Link>
    </Container>
  )
}

export default pickPages