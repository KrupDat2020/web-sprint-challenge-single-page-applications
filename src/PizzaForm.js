import React from 'react';

export default function PizzaForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target; 
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-group submit">
                <h2>Add some Toppings</h2>
                <button disabled={disabled}>Submit</button>

                <div className="errors">
                    <div>{errors.username}</div>
                    <div>{errors.size}</div>
                    <div>{errors.special}</div>
                    <div>{errors.toppings}</div>
                </div>
            </div>

            <div className="form-group inputs">
                <h4>Please Enter Your Information</h4>

                <label>
                    Username:
                    <input
                       value={values.username}
                       onChange={onChange}
                       name="username"
                       type="text"
                       placeholder="please enter your name"
                       />
                </label>

                <label id="size-dropdown">
                   <select onChange={onChange} value={values.size} name="size">
                       <option value="">--Select an Option--</option>
                       <option value="small">Small</option>
                       <option value="medium">Medium</option>
                       <option value="large">Large</option>
                       <option value="xlarge">Extra Large</option>
                   </select>
                </label>

                <label id="special-text">
                <input
                  value={values.special}
                  onChange={onChange}
                  name="special"
                  type="text"
                  placeholder="please enter any special requests"
                  />
                </label>

                <label>
                    Pepperoni
                    <input
                    type="checkbox"
                    name="pepperoni"
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Sausage
                    <input
                    type="checkbox"
                    name="sausage"
                    checked={values.sausage}
                    onChange={onChange}
                    />
                 </label>
                 <label>
                     Mushroom
                     <input
                     type="checkbox"
                     name="mushroom"
                     checked={values.mushroom}
                     onChange={onChange}
                     />
                 </label>
                 <label>
                     Peppers
                     <input
                     type="checkbox"
                     name="peppers"
                     checked={values.peppers}
                     onChange={onChange}
                     />
                 </label>
            </div>
        </form>
    );
}