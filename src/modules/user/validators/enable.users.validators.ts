import { celebrate, Segments, Joi } from 'celebrate';

export const userEnableValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
  [Segments.BODY]: {
    isActive: Joi.boolean().required(),
  },
});
