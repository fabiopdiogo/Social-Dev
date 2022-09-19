import Joi from "joi";

export const signupSchema = Joi.object({
  firstName: Joi.string().required().max(50).message('O campo "nome" pode ter no máximo {{#limit}} caracteres'),
  lastName: Joi.string().required().max(50).message('O campo "sobrenome" pode ter no máximo {{#limit}} caracteres'),
  user: Joi.string().required().max(30).message('O campo "usuário" pode ter no máximo {{#limit}} caracteres'),
  email: Joi.string().email({ tlds: {allow: false}} ).required().max(100).message('O campo "email" pode ter no máximo {{#limit}} caracteres'),
  password: Joi.string().required().max(50).min(6).message('O campo "senha" precisa ter ter no mínimo {{#limit}} caracteres'),
})