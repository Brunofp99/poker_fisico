import cartas from '../../Images'
import { atomic, meson, barion, leptons, neutrinos, empty, coringa } from '../Combinations'

function startCheckWinner(){
  const lhcb  = JSON.parse(localStorage.getItem("cards"))
  const alice = JSON.parse(localStorage.getItem("cardsCompetitorsALICE"))
  const atlas = JSON.parse(localStorage.getItem("cardsCompetitorsATLAS"))
  const cms   = JSON.parse(localStorage.getItem("cardsCompetitorsCMS"))
  const table = JSON.parse(localStorage.getItem("cardsTable"))
  
  let lhcbSiglas  = []
  let alicSiglas  = []
  let atlaSiglas  = []
  let cmsCSiglas  = []
  let tableCSiglas  = []
  
  
  
  cartas.forEach( (el, i, array)=>{
    if ((el.id === lhcb.cardOne || el.id === lhcb.cardTwo) && (lhcbSiglas.length < 2)) {
      lhcbSiglas.push(el.sigla)
      console.log(lhcbSiglas);
    }
    else if ((el.id === alice.cardOne || el.id === alice.cardTwo) && (alicSiglas.length < 2)) {
      alicSiglas.push(el.sigla)
      console.log(alicSiglas);
    }
    else if ((el.id === atlas.cardOne || el.id === atlas.cardTwo) && (atlaSiglas.length < 2)) {
      atlaSiglas.push(el.sigla)
      console.log(atlaSiglas);
    }
    else if ((el.id === cms.cardOne || el.id === cms.cardTwo) && (cmsCSiglas.length < 2)) {
      cmsCSiglas.push(el.sigla)
      console.log(cmsCSiglas);
    }
    else if ((el.id === table.cardTableOne || el.id === table.cardTableTwo || el.id === table.cardTableTree || el.id === table.cardTableFour || el.id === table.cardTableFive ) && (cmsCSiglas.length < 5)) {
      tableCSiglas.push(el.sigla)
      console.log(tableCSiglas);
    }
  })
}

export default startCheckWinner