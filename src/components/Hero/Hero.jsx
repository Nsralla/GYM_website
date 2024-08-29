import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

export default function Hero() {
    return (

        <div className='hero'>

            <div className="left-h">
                <Header/>
{/* The best ad */}
                <div className="the-best-ad">
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>
{/* HERO HEADING */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>SHAPE</span>
                        <span>YOUR</span>
                    </div>
                    <div><span>Ideal body</span></div>
                    <div><span>In here we will help you to shape and build your ideal body live up your life to fullest</span></div>
                </div>
                {/* Figures  */}
                <div className="figures">
                    <div><span>+140</span><span>Expert coaches</span></div>
                    <div><span>+978</span><span>members joined</span></div>
                    <div><span>+50</span><span>Fitness programs</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className='btn'>Join us</button>
                    <button className='btn'>Learn more</button>
                    </div>
            </div> 


{/*RIGHT SIDE  */}
            <div className="right-h">
                <button className="btn">Join Now</button>


                <div className="hear-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                {/* hero images */}
                <img className='hero-image' src={hero_image} alt="" />
                <img className='hero-image-back' src={hero_image_back} alt="" />

                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>
                            Calories Burned
                        </span>
                        <span>
                            220Kcal
                        </span>
                        </div>
                </div>
            </div>
        </div>
    )
}
