import React, { useState } from "react";
import PizzaForm from './PizzaForm';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';



  const initialFormValues = {
    username: "",
    size: "",
    special: "",
    pepperoni: false,
    sausage: false,
    mushroom: false,
    peppers: false,
  };

  const initialFormErrors = {
    username: "",
    size: "",
    special: "",
  };

  const initialPizza = [];
  const initialDisabled = true;

export default function App() {
  const [pizza, setPizza] = useState(initialPizza);
  const[formValues, setFormValues] = useState(initialFormValues);
  const[formErrors, setFormErrors] = useState(initialFormErrors);
  const[disabled, setDisabled] = useState(initialDisabled);

  const getPizza = () => {
    axios
    .get("")
    .then((res) => {
      setPizza([res.data]);
  })
  .catch((err) => {
    console.log(err);
  });
};

const inputChange = (name, value) => {
  yup
  .reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors({
        [name]: err.errors[0],
      })
    });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  });

  const formSubmit = () => {
    const newPizza = {
      username: formValues.username.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      pepperoni: formValues.pepperoni.trim(),
      sausage: formValues.sausage.trim(),
      mushroom: formValues.mushroom.trim(),
      peppers: formValues.peppers.trim(),
    };
  };
};
return (
  <div className="container">
    <h1>Lambda Eats</h1>
    <p>You can remove this code and create your own header</p>

    <PizzaForm
    values= {formValues}
    change= {inputChange}
    submit= {formSubmit}
    disabled= {disabled}
    errors= {formErrors}
    />

    {pizzas.map((pizza) => {
      return <Pizza key= {pizza.id} details= {pizza} />
      })}
  </div>
);
}
