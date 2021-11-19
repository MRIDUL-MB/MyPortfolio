import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Card from './components/Card';
import dataList from './components/Data';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <div>
        <h2 className='project-title'>Projects</h2>
        <section className='card-frame'>
          {dataList.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
