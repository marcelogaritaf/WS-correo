const { response, request } = require("express");
const nodeMailer = require("nodemailer");

const mailSent = (req = request, resp = response) => {
  let body = req.body;

  let config = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    post: 587,
    auth: {
      user: "sistemaseguimientocmh@gmail.com",
      pass: "obta pnuv plmx guvn",
    },
  });

  const opciones = {
    from: "Sistema de seguimiento",
    subject: body.asunto,
    to: body.email,
    text: body.mensaje,
    attachment: body.archivo,
  };

  config.sendMail(opciones, function (error, result) {
    if (error) return resp.json({ ok: false, msg: error });
    return resp.json({
      ok: true,
      msg: result,
    });
  });
};

module.exports = {
  mailSent,
};
