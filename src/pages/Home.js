import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/img01.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

const Home = () => {
    return (
        <motion.div initial='out' animate='in' exit='out' variants={animationOne} transition={transition}>
            <Header />
            <Hero image={Image}
                title={'Experience Nature'}
                description={'Once in a lifetime'} />
        </motion.div>
    )
}

export default Home
