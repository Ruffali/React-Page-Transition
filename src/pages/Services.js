import Header from '../components/Header'
import Hero from '../components/Hero'
import  Image  from '../images/img03.jpg';
import { motion } from 'framer-motion';
import { animationThree, transition } from '../animations';

const Services = () => {
    return (
        <motion.div initial='out' animate='in' exit='out' variants={animationThree} transition={transition}>
            <Header/>
            <Hero image={Image}
            title={'Look the life'} 
            description={'Our world is amazing'} />
        </motion.div> 
    )
}

export default Services
