export default function handler(req, res) {
  res.status(200).json([
    { id: numeroAleaorio(), nome: 'caneta', preco: 2 },
    { id: numeroAleaorio(), nome: 'caderno', preco: 5 },
    { id: numeroAleaorio(), nome: 'lapis', preco: 1.5 },
    { id: numeroAleaorio(), nome: 'tesoura', preco: 3 }
  ])
}

function numeroAleaorio(min = 1, max = 100000) {
  return parseInt(Math.random() * (max - min)) + min
}
