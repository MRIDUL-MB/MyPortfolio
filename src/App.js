import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Card from './components/Card';
import Wave from './components/Wave';
import dataList from './components/Data';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Wave color='#daedfb' />
      <div id='about'>
        <h2 className='project-title'>About</h2>
        <About />
      </div>
      <div>
        <h2 className='project-title'>Skills</h2>
        <Skills />
      </div>
      <div id='projects'>
        <h2 className='project-title'>Projects</h2>
        <section className='card-frame'>
          {dataList.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </section>
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#daedfb'
          fill-opacity='1'
          d='M0,160L26.7,144C53.3,128,107,96,160,80C213.3,64,267,64,320,90.7C373.3,117,427,171,480,165.3C533.3,160,587,96,640,80C693.3,64,747,96,800,128C853.3,160,907,192,960,186.7C1013.3,181,1067,139,1120,138.7C1173.3,139,1227,181,1280,208C1333.3,235,1387,245,1413,250.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
        ></path>
      </svg>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
