import Trabajador from '../models/Trabajador.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


//login

export const login = async (req, res) => {


  try {
    const { email, password } = req.body;


    const trabajador = await Trabajador.findOne({ email });
    console.log(trabajador)

    if (!trabajador) {
      return res
        .status(404)
        .json({ success: false, error: { message: 'User not found' } });
    }

    const isCorrectPassword = await bcrypt.compare(password, trabajador.password);
    console.log(isCorrectPassword)
    if (isCorrectPassword) {
      const { password, role, ...rest } = trabajador._doc

      //create token jwt
      const token = jwt.sign({ is: trabajador._ide, role: trabajador.role }, process.env.JWT_SECRET_KEY, { expiresIn: '15d' })

      //set token in the browser cookies and send the response to the client
      res.cookie('accesToken', token, { httpOnly: true, expires: token.expiresIn }).status(200).json({ token, success: true, succes: { message: 'succesfully login' }, data: { ...rest } });
    } else {
      return res.status(500).json({ success: false, error: { message: 'usuario o contraseña incorrecto' } });
    }

    //   await res.status(200).json({ success: true, data: rest });
  } catch (error) {
    return res.status(500).json({ success: false, error: { message: 'Failed to login' } });
  }
};