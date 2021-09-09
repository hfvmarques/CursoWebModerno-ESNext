function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro!')
      } else {
        resolve(valor)
      }
    } catch (e) {
      reject(e)
    }
  })
}

funcionarOuNao('Testando...', 0.1)
  .then(v => `Valor: ${v}`)
  .then(
    v => consol.log(v),
    err => console.log(`Erro esp.: ${err}`)
  )
  .then(() => console.log('Quase fim!'))
  .catch(err => console.log(`Erro geral: ${err}`))
  .then(() => console.log('Fim!'))
