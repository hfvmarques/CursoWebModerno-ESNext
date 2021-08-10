// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
const grupoTeste = ['Maria', 'Rafaela', grupoA] // não é a mesma coisa que a linha de cima
console.log(grupoFinal)
console.log(grupoTeste)
