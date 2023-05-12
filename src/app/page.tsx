import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import{AiFillGithub} from 'react-icons/ai'
export default function Home() {
  return (
   <div className="main">
<div className="overlap">
<img src="/images/shawal.jpg"/>
<h1>Shawaal Nadeem</h1>
<h3> Software Engineer</h3>
<br/>
<p>Bachelor of Science in Computer Science, University of Central Punjab(2021-2025)</p>
<p>Web 3.O & Metaverse, PIAIC (2023-2024)</p>
<br/>
<h5>CONTACT ME</h5>
<div className='icons'>
<a href='mailto:hafizshawalnadeem@gmail.com'><FaEnvelope style={{color:'white',cursor:'pointer'}} size={25} /></a>
<FaTwitter style={{color:'white',cursor:'pointer',marginLeft:'20px'}} size={25} />
<FaLinkedin style={{color:'white',cursor:'pointer',marginLeft:'20px'}} size={25} />
<AiFillGithub style={{color:'white',cursor:'pointer',marginLeft:'20px'}} size={25} />
</div>

</div>
<div className="about-section">
<h2>ABOUT ME</h2>
<p>My technical skills include proficiency in programming languages such as Typescript, Javascript, Python and C++, as well as experience with database management and web development. In addition, I have developed strong communication and leadership skills through various group projects and extracurricular activities.</p>
<br/>
<p>When I'm not working, I enjoy hiking, reading, and spending time with my friends and family. I believe that my determination, can-do attitude, and hard work make me a true asset to any team, and I am excited to bring these qualities to a new opportunity.</p>
</div>

   </div>
  )
}
