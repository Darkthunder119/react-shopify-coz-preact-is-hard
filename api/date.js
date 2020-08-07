module.exports = (req, res) => {
      const { name } = req.query
      const date = new Date();
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' ,hour: 'numeric', minute:'numeric', timeZoneName:'short' };
    res.status(200).send(`Hello ${name}!, the date is ${date.toLocaleDateString('en-EN', options)}`)
  }