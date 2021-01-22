import { celebrate, Joi, Segments } from 'celebrate';

export const signinValidator = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});
