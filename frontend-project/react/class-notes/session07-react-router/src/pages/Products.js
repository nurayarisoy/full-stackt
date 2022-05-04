import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Products = () => {
    const navigate = useNavigate()


    // navigate('/welcome')
    // navigate(-1)
    // navigate(1)
    // navigate('/welcome', {replace: true})

    return (
        <div>
             <h1>Products Page</h1>
             <ul>
                 <li>
                     <Link to='/products/p1' >A Book1</Link>
                 </li>
                 <li>
                     <Link to='/products/p2' >A Book2</Link>
                 </li>
                 <li>
                     <Link to='/products/p3' >A Book3</Link>
                 </li>
             </ul>

        </div>
    )
}

export default Products
