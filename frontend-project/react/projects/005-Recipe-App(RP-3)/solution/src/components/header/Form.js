import React from 'react'
import { FormContainer,FoodInput,Button,Select } from './HeaderStyles'

const Form = ({ setQuery, query, getData, mealTypes, setMeal, meal}) => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        getData()
    }


    return (
        <FormContainer onSubmit={handleSubmit}>
            <FoodInput
            type="text"
            placeholder="Search"
            onChange={(e)=>setQuery(e.target.value)}/>
            <Button onClick={getData}>Search</Button>
            <Select
            name="mealTypes"
            id="mealTypes"
            onChange={(e)=>setMeal(e.target.value)}
            >
               {mealTypes?.map((item,index)=>(
                  <option key={index} value={item.toLowerCase()}>
                      {item}
                  </option> 
               ))} 

            </Select>
        </FormContainer>
    )
}

export default Form
