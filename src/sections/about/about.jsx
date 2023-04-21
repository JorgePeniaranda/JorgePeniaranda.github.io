import Points from '../../components/points/points'
import './about.scss'
import Card from './components/card/card'
import { Fade, Flip } from 'react-reveal';
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Typed from 'react-typed';

const About = props => {
    const typedRefs = useRef([]);
    const { ref } = useInView({
      threshold: 0.5,
      onChange: () => {
        typedRefs.current.forEach(typedRef => {
          typedRef.typed.reset();
        });
      },
    });

    return (
      <section className="sections" id='About'>
        <h1>About me</h1>
        <div className="infoContainer">
          <table>
            <tbody>
              <tr>
                <Flip left><td>Full Name</td></Flip>
                <td>:</td>
                <td ref={ref}>
                  <Typed
                    strings={['Jorge Peñaranda']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop={false}
                    showCursor={false}
                    ref={el => (typedRefs.current[0] = el)}
                  />
                </td>
              </tr>
              <tr>
                <Flip left><td>Age</td></Flip>
                <td>:</td>
                <td ref={ref}>
                  <Typed
                    strings={['17']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop={false}
                    showCursor={false}
                    ref={el => (typedRefs.current[1] = el)}
                  />
                </td>
              </tr>
              <tr>
                <Flip left><td>Birthday</td></Flip>
                <td>:</td>
                <td ref={ref}>
                  <Typed
                    strings={['May 31, 2005']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop={false}
                    className="typed-text"
                    showCursor={false}
                    ref={el => (typedRefs.current[2] = el)}
                  />
                </td>
              </tr>
              <tr>
                <Flip left><td>Nationality</td></Flip>
                <td>:</td>
                <td ref={ref}>
                  <Typed
                    strings={['Argentine']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop={false}
                    showCursor={false}
                    ref={el => (typedRefs.current[3] = el)}
                  />
                </td>
              </tr>
              <tr>
                <Flip left><td>Languages</td></Flip>
                <td>:</td>
                <td ref={ref}>
                  <Typed
                    strings={['Spanish, English']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop={false}
                    showCursor={false}
                    ref={el => (typedRefs.current[4] = el)}
                  />
                </td>
              </tr>
              <tr>
                <Flip left><td>Education</td></Flip>
                <td>:</td>
                <td ref={ref}>
                  <Typed
                    strings={['Currently in high school tech program for computer science.']}
                    typeSpeed={20}
                    backSpeed={20}
                    loop={false}
                    showCursor={false}
                    ref={el => (typedRefs.current[5] = el)}
                  />
                </td>
              </tr>
              <tr>
                <Flip left><td>Email</td></Flip>
                <td>:</td>
                <td ref={ref}>
                  <Typed
                    strings={['contacto@jorgepeniaranda.com']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop={false}
                    showCursor={false}
                    ref={el => (typedRefs.current[6] = el)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Fade bottom>
            <a href="https://linktr.ee/jorgepeniaranda" target='_blank' rel="noreferrer">More about me</a>
          </Fade>
        </div>
        <div className='cardList'>
          <Card number={3} plus={true} text="Years Experience"/>
          <Card number={5} plus={true} text="Happy Clients"/>
          <Card number={10} plus={true} text="Projects"/>
          <Card number={72} text="Number of times I've forgotten a semicolon"/>
        </div>
        <Points href={props.index} step={2} lightMode/>
      </section>
    );
  }
  
  export default About;