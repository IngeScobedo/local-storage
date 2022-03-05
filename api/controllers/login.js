const login = (req, res) => {
  const { username, password } = req.body
  console.log({ ayno: { username, password } })
  console.log(username, password)
  res.setHeader('username', `${username}`)

  res.status(200).json({
    message: 'Login successful',
    username,
    password
  })
}

module.exports = login
