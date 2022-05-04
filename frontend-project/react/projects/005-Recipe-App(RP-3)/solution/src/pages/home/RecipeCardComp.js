import React from 'react'
import { RecipeImage,RecipeCard,RecipeHeader,Button} from './HomeStyle';
import defaultImage from "../../assets/default-image.jpg"
import {useNavigate} from "react-router-dom"
const RecipeCardComp = ({recipe}) => {

    let navigate=useNavigate();
    const moreClick=()=>{
        navigate("/details",{state:{recipe}})
    }

    return (
        <RecipeCard>
        <RecipeHeader>{recipe.label}</RecipeHeader>
        <RecipeImage src={recipe?.image || defaultImage}/>
        <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
    )
}

export default RecipeCardComp
