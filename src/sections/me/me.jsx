import Nav from '../../components/navbar/nav'
import Points from '../../components/points/points'
import './me.scss'
/* import Profile from './assets/profilePhoto.png' */
import { Flip, Bounce, Fade } from 'react-reveal'
import Pulse from 'react-reveal/Pulse';

const Me = props => {
    return (
      <section className="sections" id='Me'>
        <Nav href={props.index}/>
        <div className='container'>
          <div id='presentation'>
            {/* <Bounce top><span><img src={Profile} alt="Jorge Peñaranda" /></span></Bounce> */}
            <Bounce top><span><img src="https://i.pinimg.com/564x/5d/32/47/5d3247875e2ca9b0cb7c915172c4cc10.jpg" alt="stock profile" /></span></Bounce>
            <Fade top><p>Hello, I’am <br/>Jorge<br/>Peñaranda<Pulse delay={700} duration={500}><span>Web Developer</span></Pulse></p></Fade>
          </div>
          <div id='media'>
            <Flip right delay={300}>
              <a href="https://www.linkedin.com/in/JorgePeniaranda/" target='_blank' rel="noreferrer">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.0372 0H2.95278C1.32278 0 0 1.29167 0 2.88222V37.1139C0 38.7067 1.32278 40 2.95278 40H37.0372C38.6683 40 40 38.7067 40 37.1139V2.88222C40 1.29167 38.6683 0 37.0372 0ZM11.8633 34.0856H5.92778V14.9972H11.8633V34.0856ZM8.89556 12.3872C6.99389 12.3872 5.45667 10.8461 5.45667 8.94611C5.45667 7.04889 6.99389 5.50778 8.89556 5.50778C10.7928 5.50778 12.3339 7.04889 12.3339 8.94611C12.3339 10.8461 10.7928 12.3872 8.89556 12.3872ZM34.0833 34.0856H28.1572V24.8033C28.1572 22.5889 28.1139 19.7417 25.0733 19.7417C21.9856 19.7417 21.515 22.1533 21.515 24.6428V34.0861H15.5844V14.9972H21.2761V17.6039H21.3572C22.1494 16.1039 24.085 14.5211 26.9717 14.5211C32.975 14.5211 34.0839 18.4733 34.0839 23.615L34.0833 34.0856Z" fill="#0A0A0A"/>
              </svg>
              </a>
            </Flip>
            <Flip right delay={250}>
              <a href="https://es.stackoverflow.com/users/323572/jorgepeniaranda" target='_blank' rel="noreferrer">
              <svg width="40" height="52" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.2745 46.8731H3.7259L3.86014 29.7785L0.0212595 29.7421L0 51.0248H33.3187V29.8417H29.2745V46.8731Z" fill="#0A0A0A"/>
                <path d="M6.2807 39.8488H26.2933V44.1055H6.2807V39.8488Z" fill="#0A0A0A"/>
                <path d="M6.75029 32.1852L26.7767 34.1186L26.3572 38.4634L6.33082 36.53L6.75029 32.1852Z" fill="#0A0A0A"/>
                <path d="M8.58223 23.5182L27.9447 28.9825L26.7595 33.1821L7.39705 27.7178L8.58223 23.5182Z" fill="#0A0A0A"/>
                <path d="M13.2769 13.724L30.4987 24.1255L28.2421 27.8618L11.0203 17.4604L13.2769 13.724Z" fill="#0A0A0A"/>
                <path d="M31.2425 23.3451L19.5252 6.99043L23.073 4.44866L34.7902 20.8033L31.2425 23.3451Z" fill="#0A0A0A"/>
                <path d="M32.3777 0.719604L36.6822 -6.90336e-05L39.9999 19.8438L35.6954 20.5635L32.3777 0.719604Z" fill="#0A0A0A"/>
              </svg>
              </a>
            </Flip>
            <Flip right delay={200}>
              <a href="https://www.instagram.com/jorgepeniaranda/" target='_blank' rel="noreferrer">
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.9783 17.66C29.9783 23.1706 25.5111 27.6378 20.0006 27.6378C14.49 27.6378 10.0228 23.1706 10.0228 17.66C10.0228 16.1073 10.3878 14.6434 11.02 13.3334H0V36.6667C0 38.8056 1.75 40.5556 3.88889 40.5556H36.1111C38.25 40.5556 40 38.8056 40 36.6667V13.3334H28.9806C29.6133 14.6434 29.9783 16.1073 29.9783 17.66Z" fill="#0A0A0A"/>
                <path d="M36.1111 0H3.88889C1.75 0 0 1.75 0 3.88889V11.6667H12.0361C13.8572 9.25056 16.7417 7.68222 20 7.68222C23.2583 7.68222 26.1428 9.25056 27.9639 11.6667H40V3.88889C40 1.75 38.25 0 36.1111 0ZM3.19778 9.84223H1.75V4.23389C1.75 3.25278 2.34778 2.41222 3.19833 2.055L3.19778 9.84223ZM5.57 9.84223H4.19833V1.87111H5.57V9.84223ZM7.94167 9.84223H6.57V1.87111H7.94167V9.84223ZM10.3117 4.23389V7.47945V9.84223H8.94167V1.87111H10.3117V4.23389ZM37.9728 7.47945C37.9728 8.785 36.915 9.84223 35.6111 9.84223H31.7728C30.4683 9.84223 29.4106 8.785 29.4106 7.47945V4.23389C29.4106 2.92833 30.4683 1.87111 31.7728 1.87111H35.6111C36.9156 1.87111 37.9728 2.92833 37.9728 4.23389V7.47945Z" fill="#0A0A0A"/>
                <path d="M20.0005 26.4711C24.8538 26.4711 28.7882 22.535 28.7882 17.6828C28.7882 12.83 24.8543 8.89392 20.0005 8.89392C15.146 8.89392 11.2116 12.83 11.2116 17.6828C11.2116 22.5345 15.146 26.4711 20.0005 26.4711ZM19.9999 10.6806C23.8666 10.6806 27.0021 13.8156 27.0021 17.6828C27.0021 21.5495 23.8671 24.685 19.9999 24.685C16.1327 24.685 12.9977 21.55 12.9977 17.6828C12.9982 13.815 16.1332 10.6806 19.9999 10.6806Z" fill="#0A0A0A"/>
              </svg>
              </a>
            </Flip>
            <Flip right>
              <a href="https://github.com/jorgepeniaranda" target='_blank' rel="noreferrer">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.999 0C8.95436 0 0 8.95487 0 20.001C0 28.8374 5.72923 36.3338 13.6774 38.9769C14.6785 39.162 15.0426 38.5462 15.0426 38.0144C15.0426 37.5405 15.0251 36.2836 15.0164 34.6128C9.45282 35.8226 8.27897 31.9313 8.27897 31.9313C7.36923 29.621 6.05795 29.0067 6.05795 29.0067C4.24205 27.7667 6.1959 27.7908 6.1959 27.7908C8.20308 27.9328 9.25949 29.8513 9.25949 29.8513C11.0431 32.9077 13.941 32.0231 15.08 31.5144C15.261 30.2195 15.779 29.34 16.3497 28.839C11.9092 28.3344 7.24051 26.6185 7.24051 18.9549C7.24051 16.7708 8.01949 14.9851 9.29846 13.5867C9.09385 13.0831 8.40615 11.0497 9.49487 8.29487C9.49487 8.29487 11.1738 7.75743 14.9954 10.3467C16.5897 9.90102 18.301 9.67846 20.0021 9.67179C21.7005 9.67897 23.4123 9.90102 25.0087 10.3467C28.8277 7.75743 30.5041 8.29487 30.5041 8.29487C31.5954 11.0497 30.9082 13.0831 30.7031 13.5867C31.9851 14.9851 32.7585 16.7708 32.7585 18.9549C32.7585 26.6364 28.0831 28.3287 23.6277 28.822C24.3446 29.44 24.9846 30.6631 24.9846 32.5292C24.9846 35.2015 24.9605 37.3579 24.9605 38.0138C24.9605 38.5497 25.32 39.1728 26.3354 38.9744C34.2749 36.3256 40 28.8349 40 20.001C40 8.95487 31.0456 0 19.999 0Z" fill="#0A0A0A"/>
                </svg>
              </a>
            </Flip>
          </div>
          <Points href={props.index} step={1}/>
          <div id="wave">
            <svg width="1920" preserveAspectRatio="none" height="178" viewBox="0 0 1920 178" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-5 82L59.1667 98C123.333 114 251.667 146 380 140.7C508.333 135 636.667 93 765 92.7C893.333 93 1021.67 135 1150 119.3C1278.33 103 1406.67 29 1535 7.29998C1663.33 -14 1791.67 18 1855.83 34L1920 50V178H1855.83C1791.67 178 1663.33 178 1535 178C1406.67 178 1278.33 178 1150 178C1021.67 178 893.333 178 765 178C636.667 178 508.333 178 380 178C251.667 178 123.333 178 59.1667 178H-5V82Z" fill="#0A0A0A"/>
            </svg>
          </div>
        </div>
      </section>
    );
  }
  
  export default Me;
