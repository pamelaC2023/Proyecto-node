'use strict';

var utils = require('../utils/writer.js');
var Login = require('../service/LoginService');

module.exports.loginChange_passwordPOST = function loginChange_passwordPOST (req, res, next, body) {
  Login.loginChange_passwordPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginPOST = async function loginPOST (req, res, next, body) {
  var respuestaLogin = await Login.loginPOST(body);
  if (!respuestaLogin || !respuestaLogin.Users || !respuestaLogin.Token) {
    const errorResponse = {
        StatusCode: 404,
        IsSucces: false,
        ErrorMessages: ['El nombre de usuario o password inexistentes']
    };
    return res.status(404).json(errorResponse);
}

  const successResponse = {
      StatusCode: 200,
      IsSucces: true,
      Result: respuestaLogin
  };

  return res.status(200).json(successResponse);
};

module.exports.loginRecovery_passwordPOST = function loginRecovery_passwordPOST (req, res, next, body) {
  Login.loginRecovery_passwordPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
