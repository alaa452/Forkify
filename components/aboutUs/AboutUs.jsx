
import React from 'react';
import './AboutUs.css';
import image from './images/image.avif';
import image2 from './images/image2.avif';
import image3 from './images/image3.avif';
import image1 from './images/image1.avif';

export default function AboutUs() {
    return (
        <section className='about'>

            <div className='aboutTop'>

                <div className='leftAbout'>
                    <p className='smallTitle'>ABOUT US</p>

                    <h1 className='mainTitle'>
                        Cooking Made Simple & Delicious
                    </h1>

                    <p className='description1'>
                        Welcome to Forkify — your modern recipe platform for discovering
                        delicious meals from around the world. We help food lovers explore
                        easy recipes, improve cooking skills, and enjoy homemade meals every day.
                    </p>

                    <button className='aboutButton'>Explore Recipes</button>
                </div>

                <div className='rightAbout'>
                    <img
                        src={image}
                        alt='food'
                        className='mainImage'
                    />
                </div>

            </div>


            <div className='aboutCards'>

                <div className='aboutCard'>
                    <img
                        src={image1}
                        alt='pizza'
                    />
                    <h3>Fresh Recipes</h3>
                    <p>
                        Discover hundreds of tasty and easy recipes for every occasion.
                    </p>
                </div>

                <div className='aboutCard'>
                    <img
                        src={image2}
                        alt='burger'
                    />
                    <h3>Fast Cooking</h3>
                    <p>
                        Learn quick cooking ideas that save time and taste amazing.
                    </p>
                </div>

                <div className='aboutCard'>
                    <img
                        src={image3}
                        alt='pasta'
                    />
                    <h3>Healthy Meals</h3>
                    <p>
                        Enjoy balanced meals made with fresh and healthy ingredients.
                    </p>
                </div>

            </div>

        </section>
    )
}
