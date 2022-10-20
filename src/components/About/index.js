import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'


const About = () => {
    return (
        <>
          <div className="container about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
                I'm a junior at UNC Chapel Hill studying Computer Science and Statistics
                looking for opportunities to work with the latest
                technologies on challenging and diverse projects.
              </p>
              <p align="LEFT">
              During my time at UNC, I have gained experience in web development through joining clubs. In my freshman year, I was a part of the Web Dev Club at UNC, where I completed their semester-long education curriculum in the Fall. 
              The following semester, I helped create a website for a local coffee shop, Meantime Coffee. In my sophomore year, I worked with CS for Social Good to design a web app for a non-profit organization PORCH that streamlines the food donation process in the Chapel Hill area. 
            
              </p>
              <p>
              As someone with a curious mind, I have always wanted to dig deeper into the studies of computer science that go beyond the scope of my classes. 
              I am always looking for relevant experience, as well as making a lasting impact on people and society.
              </p>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}


export default About
