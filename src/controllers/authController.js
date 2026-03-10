const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {

    console.log("BODY RECEBIDO:", req.body)
  
    try {

    const { name, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
      name,
      email,
      password: hashedPassword
    })

    await user.save()

    res.status(201).json({ message: "Usuário criado" })

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

}

exports.login = async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" })
    }

    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return res.status(401).json({ error: "Senha inválida" })
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.json({ token })

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

}