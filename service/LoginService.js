'use strict';

const {MongoClient} = require('mongodb');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const uri = "mongodb+srv://cajamarcap:2002pamelak@cluster0.k2uggj5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);



/**
 * Change
 * Cambio de clave.
 *
 * body RequestChangePassword Cambio de clave
 * no response value expected for this operation
 **/
exports.loginChange_passwordPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Authentication
 * Autenticacion de usuario.
 *
 * body RequestLogin Usuario a ser creado
 * no response value expected for this operation
 **/
exports.loginPOST = async function(login) {
  // const passwordEncriptado = obtenermd5(login.Password);

  // Obtén el usuario de la colección (simulado)
  const db = client.db('WebServices');
  const collection = db.collection('Users');
  const usuario = collection.findOne(u => u.User.toLowerCase() === login.User.toLowerCase());

  if (!usuario) {
      return null;
  }

  // const userPassEncriptado = obtenermd5(usuario.Password);

  // if (userPassEncriptado !== passwordEncriptado) {
  //     return null;
  // }

  // const key = Buffer.from(claveSecreta, 'base64');

  // const token = jwt.sign(
  //     {
  //         name: usuario.User,
  //         role: usuario.Channel
  //     },
  //     key,
  //     {
  //         expiresIn: '7d',
  //         algorithm: 'HS256'
  //     }
  // );

  // const usuariologinrespuesta = {
  //     Token: token,
  //     Users: usuario
  // };

  return usuario;
}

// exports.obtenermd5 = async function (valor) {
//   const hash = crypto.createHash('md5');
//   hash.update(valor);
//   return hash.digest('hex');
// }


/**
 * Recovery
 * Recuperacion de usuario.
 *
 * body RequestRecoveryPassword Recuperación de clave
 * no response value expected for this operation
 **/
exports.loginRecovery_passwordPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}





