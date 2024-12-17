const usuarios = []
export default function form(req, res) {
  if(req.method === "POST"){
    const usuario = JSON.parse(req.body)
    usuarios.push(usuario)
    res.status(200).send()
  }

  if(req.method === "GET")
  res.status(200).json(usuarios);
}
