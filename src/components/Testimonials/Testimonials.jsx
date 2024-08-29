import { useState } from 'react';
import {testimonialsData} from '../../data/testimonialsData.js';
import "./Testimonials.css";
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';
import {motion} from 'framer-motion';
export default function Testimonials(){
    const transition = {type:'spring',duration:3 };
    const [index, setIndex] = useState(0);

    function next(){
        setIndex((prev)=>{
            return (prev+1)%testimonialsData.length;
        });
    }
    function back(){
        setIndex((prev)=>{
            return (prev-1+testimonialsData.length)%testimonialsData.length;
        })
    }
    return(
    <div className="Testimonials" id="testimonials">
        <div className="left-t">
            <h1>Testimonials</h1>
            <div>
                <span className='stroke-text'>What They</span>
                <span>Say About Us</span>
            </div>
            
            <div>
                <motion.span
                key={index}
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-100}}
                transition={transition}>
                    {testimonialsData[index].review}
                </motion.span>
            </div>
            <div>
                <span>{testimonialsData[index].name} </span>
                <span> - {testimonialsData[index].status}</span>
            </div>
        </div>
        <div className="right-t">
            <motion.div
                initial={{opacity: 0, x:-100}}
                transition={{...transition,duration:2}}
                whileInView={{opacity:1,x:0}}
            >

            </motion.div>
            <motion.div
                initial={{opacity: 0, x:100}}
                transition={{...transition,duration:2}}
                whileInView={{opacity:1,x:0}}>

            </motion.div>
            
            <motion.img 
                key={index}
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-100}}
                transition={transition}
                className='reviewer-img' src={testimonialsData[index].image} alt="" />

            <div className='controllers'>
                <img onClick={back} src={leftArrow} alt="" />
                <img onClick={next} src={rightArrow} alt="" />
            </div>
        </div>
    </div>);
}