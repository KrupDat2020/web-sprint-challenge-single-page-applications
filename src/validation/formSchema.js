import * as yup from 'yup';

export default yup.object().shape({
    username:yup
    .string()
    .required("username is required")
    .min(2, "username must be at least 2 chars")
    size: yup
    .string()
    .oneOf(["small", "medium", "large", "xlarge"]),
   topping: yup.string().oneOf(["pepperoni", "sausage", "mushroom", "peppers"]),
   special: yup
  .string()
  .special("please put any special needs here")
});