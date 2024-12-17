export default function form(req, res) {
    res.status(200).json({
      params: req.query
    })
}
