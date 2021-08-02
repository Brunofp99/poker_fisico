import React from 'react'
import cartas from '../../Images'
import { atomic, meson, barion, leptons, neutrinos, empty, coringa } from '../Combinations' // proxima versão

function startCheckWinner(){
  const lhcb  = JSON.parse(localStorage.getItem("cards"))
  const alice = JSON.parse(localStorage.getItem("cardsCompetitorsALICE"))
  const atlas = JSON.parse(localStorage.getItem("cardsCompetitorsATLAS"))
  const cms   = JSON.parse(localStorage.getItem("cardsCompetitorsCMS"))
  const table = JSON.parse(localStorage.getItem("cardsTable"))
  
  let lhcbSiglas  = []
  let aliceSiglas  = []
  let atlasSiglas  = []
  let cmsSiglas  = []
  let tableSiglas  = []

  let ganhador = ''

  console.log(lhcb);
  
  cartas.forEach( (el, i, array)=>{
    if ((el.id === lhcb.cardOne || el.id === lhcb.cardTwo) && (lhcbSiglas.length < 2)) {
      lhcbSiglas.push(el.sigla)
      
    }
    else if ((el.id === alice.cardOne || el.id === alice.cardTwo) && (aliceSiglas.length < 2)) {
      aliceSiglas.push(el.sigla)
      
    }
    else if ((el.id === atlas.cardOne || el.id === atlas.cardTwo) && (atlasSiglas.length < 2)) {
      atlasSiglas.push(el.sigla)
      
    }
    else if ((el.id === cms.cardOne || el.id === cms.cardTwo) && (cmsSiglas.length < 2)) {
      cmsSiglas.push(el.sigla)
      
    }
    else if ((el.id === table.cardTableOne || el.id === table.cardTableTwo || el.id === table.cardTableTree || el.id === table.cardTableFour || el.id === table.cardTableFive ) && (cmsSiglas.length < 5)) {
      tableSiglas.push(el.sigla)
      
    }
  })

  // testar apenas as 4 melhore e depois as 4 menores
  let verificacaoEsquerdaTable = ''
  let verificacaoDireitaTable = ''
  let result = ''
  
  
//lhcb
let resultLHCb
lhcbSiglas.forEach((el, i, array) =>{
    let controllerEsquerda = lhcbSiglas[0] + lhcbSiglas[1]
    let controllerDireita = lhcbSiglas[1] + lhcbSiglas[0]

    tableSiglas.forEach((elt, index, arrayTable) =>{
      verificacaoEsquerdaTable = el + elt
      verificacaoDireitaTable = elt + el

      if( meson.includes( verificacaoEsquerdaTable ) || meson.includes( verificacaoDireitaTable ) || meson.includes( controllerDireita ) || meson.includes( controllerEsquerda ) ){
        resultLHCb = 'menor'
      }else{
        arrayTable.forEach((elta, indext, arrayT)=>{
          let controllerEsquerdaTableOne = controllerEsquerda + elta
          let controllerDireitaTableOne = elta + controllerEsquerda
          let controllerEsquerdaTableTwo = controllerDireita + elta
          let controllerDireitaTableTwo = elta + controllerDireita
          let controllerEsquerdaTableTree  
          let controllerDireitaTableTree  
          let controllerEsquerdaTableFour  
          let controllerDireitaTableFour  
          let controllerEsquerdaTableFive  
          let controllerDireitaTableFive  

          if (indext !== index) {
            controllerEsquerdaTableTree = elt + elta + lhcbSiglas[0]
            controllerDireitaTableTree = elt + elta + lhcbSiglas[1]
            controllerEsquerdaTableFour = lhcbSiglas[0] + elta + elt
            controllerDireitaTableFour = lhcbSiglas[1] + elta +  elt
            controllerEsquerdaTableFive = elta + lhcbSiglas[0] + elt
            controllerDireitaTableFive = elta + lhcbSiglas[1] +  elt

            if (barion.includes(controllerEsquerdaTableOne) ||
              barion.includes(controllerDireitaTableOne) ||
              barion.includes(controllerEsquerdaTableTwo) ||
              barion.includes(controllerDireitaTableTwo) ||
              barion.includes(controllerEsquerdaTableTree) ||
              barion.includes(controllerDireitaTableTree) ||
              barion.includes(controllerEsquerdaTableFour) ||
              barion.includes(controllerDireitaTableFour) ||
              barion.includes(controllerEsquerdaTableFive) ||
              barion.includes(controllerDireitaTableFive)) {
              resultLHCb = 'maior'
            }
          }

        })
      }
    })
  })

  
//alice
let resultAlice
aliceSiglas.forEach((el, i, array) =>{
    let controllerEsquerda = aliceSiglas[0] + aliceSiglas[1]
    let controllerDireita = aliceSiglas[1] + aliceSiglas[0]

    tableSiglas.forEach((elt, index, arrayTable) =>{
      verificacaoEsquerdaTable = el + elt
      verificacaoDireitaTable = elt + el

      if( meson.includes( verificacaoEsquerdaTable ) || meson.includes( verificacaoDireitaTable ) || meson.includes( controllerDireita ) || meson.includes( controllerEsquerda ) ){
        resultAlice = 'menor'
      }else{
        arrayTable.forEach((elta, indext, arrayT)=>{
          let controllerEsquerdaTableOne = controllerEsquerda + elta
          let controllerDireitaTableOne = elta + controllerEsquerda
          let controllerEsquerdaTableTwo = controllerDireita + elta
          let controllerDireitaTableTwo = elta + controllerDireita
          let controllerEsquerdaTableTree  
          let controllerDireitaTableTree  
          let controllerEsquerdaTableFour  
          let controllerDireitaTableFour  
          let controllerEsquerdaTableFive  
          let controllerDireitaTableFive  

          if (indext !== index) {
            controllerEsquerdaTableTree = elt + elta + aliceSiglas[0]
            controllerDireitaTableTree = elt + elta + aliceSiglas[1]
            controllerEsquerdaTableFour = aliceSiglas[0] + elta + elt
            controllerDireitaTableFour = aliceSiglas[1] + elta +  elt
            controllerEsquerdaTableFive = elta + aliceSiglas[0] + elt
            controllerDireitaTableFive = elta + aliceSiglas[1] +  elt

            if (barion.includes(controllerEsquerdaTableOne) ||
              barion.includes(controllerDireitaTableOne) ||
              barion.includes(controllerEsquerdaTableTwo) ||
              barion.includes(controllerDireitaTableTwo) ||
              barion.includes(controllerEsquerdaTableTree) ||
              barion.includes(controllerDireitaTableTree) ||
              barion.includes(controllerEsquerdaTableFour) ||
              barion.includes(controllerDireitaTableFour) ||
              barion.includes(controllerEsquerdaTableFive) ||
              barion.includes(controllerDireitaTableFive)) {
              resultAlice = 'maior'
            }
          }

        })
      }
    })
  })

  
//atlas
let resultAtlas
atlasSiglas.forEach((el, i, array) =>{
    let controllerEsquerda = atlasSiglas[0] + atlasSiglas[1]
    let controllerDireita = atlasSiglas[1] + atlasSiglas[0]

    tableSiglas.forEach((elt, index, arrayTable) =>{
      verificacaoEsquerdaTable = el + elt
      verificacaoDireitaTable = elt + el

      if( meson.includes( verificacaoEsquerdaTable ) || meson.includes( verificacaoDireitaTable ) || meson.includes( controllerDireita ) || meson.includes( controllerEsquerda ) ){
        resultAtlas = 'menor'
      }else{
        arrayTable.forEach((elta, indext, arrayT)=>{
          let controllerEsquerdaTableOne = controllerEsquerda + elta
          let controllerDireitaTableOne = elta + controllerEsquerda
          let controllerEsquerdaTableTwo = controllerDireita + elta
          let controllerDireitaTableTwo = elta + controllerDireita
          let controllerEsquerdaTableTree  
          let controllerDireitaTableTree  
          let controllerEsquerdaTableFour  
          let controllerDireitaTableFour  
          let controllerEsquerdaTableFive  
          let controllerDireitaTableFive  

          if (indext !== index) {
            controllerEsquerdaTableTree = elt + elta + atlasSiglas[0]
            controllerDireitaTableTree = elt + elta + atlasSiglas[1]
            controllerEsquerdaTableFour = atlasSiglas[0] + elta + elt
            controllerDireitaTableFour = atlasSiglas[1] + elta +  elt
            controllerEsquerdaTableFive = elta + atlasSiglas[0] + elt
            controllerDireitaTableFive = elta + atlasSiglas[1] +  elt

            if (barion.includes(controllerEsquerdaTableOne) ||
              barion.includes(controllerDireitaTableOne) ||
              barion.includes(controllerEsquerdaTableTwo) ||
              barion.includes(controllerDireitaTableTwo) ||
              barion.includes(controllerEsquerdaTableTree) ||
              barion.includes(controllerDireitaTableTree) ||
              barion.includes(controllerEsquerdaTableFour) ||
              barion.includes(controllerDireitaTableFour) ||
              barion.includes(controllerEsquerdaTableFive) ||
              barion.includes(controllerDireitaTableFive)) {
              resultAtlas = 'maior'
            }
          }

        })
      }
    })
  })

  
//cms
let resultCms
cmsSiglas.forEach((el, i, array) =>{
    let controllerEsquerda = cmsSiglas[0] + cmsSiglas[1]
    let controllerDireita = cmsSiglas[1] + cmsSiglas[0]

    tableSiglas.forEach((elt, index, arrayTable) =>{
      verificacaoEsquerdaTable = el + elt
      verificacaoDireitaTable = elt + el

      if( meson.includes( verificacaoEsquerdaTable ) || meson.includes( verificacaoDireitaTable ) || meson.includes( controllerDireita ) || meson.includes( controllerEsquerda ) ){
        resultCms = 'menor'
      }else{
        arrayTable.forEach((elta, indext, arrayT)=>{
          let controllerEsquerdaTableOne = controllerEsquerda + elta
          let controllerDireitaTableOne = elta + controllerEsquerda
          let controllerEsquerdaTableTwo = controllerDireita + elta
          let controllerDireitaTableTwo = elta + controllerDireita
          let controllerEsquerdaTableTree  
          let controllerDireitaTableTree  
          let controllerEsquerdaTableFour  
          let controllerDireitaTableFour  
          let controllerEsquerdaTableFive  
          let controllerDireitaTableFive  

          if (indext !== index) {
            controllerEsquerdaTableTree = elt + elta + cmsSiglas[0]
            controllerDireitaTableTree = elt + elta + cmsSiglas[1]
            controllerEsquerdaTableFour = cmsSiglas[0] + elta + elt
            controllerDireitaTableFour = cmsSiglas[1] + elta +  elt
            controllerEsquerdaTableFive = elta + cmsSiglas[0] + elt
            controllerDireitaTableFive = elta + cmsSiglas[1] +  elt

            if (barion.includes(controllerEsquerdaTableOne) ||
              barion.includes(controllerDireitaTableOne) ||
              barion.includes(controllerEsquerdaTableTwo) ||
              barion.includes(controllerDireitaTableTwo) ||
              barion.includes(controllerEsquerdaTableTree) ||
              barion.includes(controllerDireitaTableTree) ||
              barion.includes(controllerEsquerdaTableFour) ||
              barion.includes(controllerDireitaTableFour) ||
              barion.includes(controllerEsquerdaTableFive) ||
              barion.includes(controllerDireitaTableFive)) {
              resultCms = 'maior'
            }
          }

        })
      }
    })
  })

  if ( resultLHCb === 'maior' ) {
    let pot = parseInt(localStorage.getItem('pot'))
    let lhcbPot = JSON.parse(localStorage.getItem('lhcb'))
    let total = 0

    if (lhcbPot.lhcb > 0) {
      total = lhcbPot.lhcb + pot
    }

    localStorage.setItem('lhcb', JSON.stringify({lhcb: total}))
  }

 return result

}

function Winner(){
  let response = startCheckWinner()
  return { winner: response }

  if (response === 'maior') {
    let res = window.confirm("Parabéns você foi o vencedor! deseja jogar mais ?")
    
    if ( res === true ) {
      let pot = parseInt(localStorage.getItem('pot'))
      let lhcbPot = JSON.parse(localStorage.getItem('lhcb'))
      let total = 0

      if (lhcbPot.lhcb > 0) {
        total = lhcbPot.lhcb + pot
      }

      localStorage.setItem('lhcb', JSON.stringify({lhcb: total}))
      localStorage.removeItem('cardsTable')
      localStorage.removeItem('cards')
      localStorage.removeItem('cardsCompetitorsALICE')
      localStorage.removeItem('cardsCompetitorsATLAS')
      localStorage.removeItem('cardsCompetitorsCMS')
      window.location.reload(true)
    }else{
      window.close()
    }
  }else{
    let res = window.confirm("Que pena não foi dessa vez mas tente de novo !")

    if ( res === true ) {
      localStorage.removeItem('cardsTable')
      localStorage.removeItem('cards')
      localStorage.removeItem('cardsCompetitorsALICE')
      localStorage.removeItem('cardsCompetitorsATLAS')
      localStorage.removeItem('cardsCompetitorsCMS')
      window.location.reload(true)
    }else{
      window.close()
    }
  }
}  


export default Winner