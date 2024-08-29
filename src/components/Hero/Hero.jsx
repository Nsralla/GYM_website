import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'; 

export default function Hero() {
    const transition = {type:'spring',duration:3 };
    return (

        <div className='hero' id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>
{/* The best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{left:'238px'}}
                        whileInView={{left:'9px'}}
                        transition={{...transition,type:'tween'}}                    >
                    
                    </motion.div>
                    <span>The best fitness club in the town</span>
                </div>
{/* HERO HEADING */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>SHAPE </span>
                        <span>YOUR</span>
                    </div>
                    <div><span>Ideal body</span></div>
                    <div className='mot'><span>In here we will help you to shape and build your ideal body live up your life to fullest</span></div>
                </div>
                {/* Figures  */}
                <div className="figures">
                    <div><span><NumberCounter start={100} end={140} delay="4" preFix="+"/></span><span>Expert coaches</span></div>

                    <div><span><NumberCounter start={600} end={978} delay="4" preFix="+"/></span><span>members joined</span></div>

                    <div><span><NumberCounter start={20} end={50} delay="4" preFix="+"/></span><span>Fitness programs</span>
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


                <motion.div
                initial={{right:'-1rem'}}
                whileInView={{right:'4rem'}}
                transition={transition} className="hear-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero images */}
                <img className='hero-image' src={hero_image} alt="" />
                <motion.img
                initial={{right:'12rem'}}
                whileInView={{right:'20rem'}}
                transition={transition}
                 className='hero-image-back' src={hero_image_back} alt="" />

                {/* calories */}
                <motion.div
                initial={{left:'-1rem'}} 
                whileInView={{left:'-20rem'}}
                transition={{...transition,type:'tween'}}
                className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>
                            Calories Burned
                        </span>
                        <span>
                            220Kcal
                        </span>
                        </div>
                </motion.div>
            </div>
        </div>
    )
}
