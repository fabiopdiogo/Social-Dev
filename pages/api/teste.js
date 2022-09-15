function teste (req, res){
  console.log("entrou")
  res.status(200).json({teste: false})
}

export default teste