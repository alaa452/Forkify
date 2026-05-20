import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Recipes.css';

export default function Recipes({ recipe = 'pizza' }) {
    const [posts, setPosts] = useState({});
    const [isLoader, setIsLoader] = useState(true);
    const [error, setError] = useState('');

    const getPosts = async () => {
        try {
            const response = await axios.get(`https://forkify-api.jonas.io/api/v2/recipes?search=${recipe}`);
            setPosts(response.data.data);
            console.log(posts);
        }
        catch (error) {
            console.log(error);
        } finally {
            setIsLoader(false);
        }
    }
    useEffect(() => {
        getPosts();
    }, [recipe])

    if (isLoader) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <section className='recipe container'>
            <h2 className='title'>Recipes</h2>
            <div className='cards'>
                {
                    posts.recipes.map((recipe) => {
                        return (
                            <div className='card' key={recipe.id}>
                                <p className='publisher'>{recipe.publisher}</p>
                                <img src={recipe.image_url} alt="img" className='image' />
                                <h3 className='title2'>{recipe.title}</h3>
                            </div>
                        )



                    })
                }
            </div>

        </section>
    )
}
