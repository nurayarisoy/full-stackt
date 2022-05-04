import React from 'react'
import { HeaderContainer, MainHeader } from './HeaderStyles'
import Form from "./Form"
const Header = ({setQuery, query, getData, mealTypes, setMeal, meal }) => {
    return (
        <HeaderContainer>
            <MainHeader>
                Food App
            </MainHeader>
            <Form
             setQuery={setQuery}
             query={query}
             getData={getData}
             mealTypes={mealTypes}
             setMeal={setMeal}
             meal={meal}
            />

        </HeaderContainer>
    )
}

export default Header
