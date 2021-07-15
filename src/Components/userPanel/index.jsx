import React from 'react'
import { Container } from './style'
import { useController } from '../../Providers/Controller'

function UserPanel({ret = 0}) {
  // const [state, setstate] = useState(ret)

  let valueLhcb

  const { data } = useController()

  const lhcbStorage = localStorage.getItem("lhcb");

  if (lhcbStorage) {
    const dataStorage = JSON.parse(lhcbStorage)
    valueLhcb = dataStorage.lhcb
  }else{
    valueLhcb = data.lhcb
    localStorage.setItem('lhcb', JSON.stringify({lhcb: data.lhcb}))
  }

  return (
    <Container>
      <label htmlFor="">LHCb</label>
        <div className="break" style={{'flex-basis': '100%', 'height': '1px', 'background-color': '#F7F7F7',  'box-shadow': '5px 1px 17px #ffffff'}}></div>
      <label htmlFor="">{valueLhcb > 0 ? valueLhcb : 0}</label>
    </Container>
  )
}

export default UserPanel
