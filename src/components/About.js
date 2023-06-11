import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className='about about-h1'>
      <Helmet>
        <title>Mridul Bagla</title>
        <meta name="description" content="Hi there! I'm Mridul Bagla, a skilled Data Analyst and Web Developer with experience in the finance industry. I am currently working at India Shelter Finance Corporation, where I use my analytical skills to extract insights from complex data sets and help drive business decisions. In addition, I am also a proficient web developer with a knack for creating sleek and functional websites that enhance user experience." />
        {/* Other meta tags */}
      </Helmet>
      <h1>
        Hi there! I'm Mridul Bagla, a skilled Data Analyst and Web Developer with experience in the finance industry. I am currently working at India Shelter Finance Corporation, where I use my analytical skills to extract insights from complex data sets and help drive business decisions. In addition, I am also a proficient web developer with a knack for creating sleek and functional websites that enhance user experience.
      </h1>
      <br />
      <h1>
        I have a strong background in data analysis and programming languages such as Python and SQL. With my expertise in data visualization tools like Power BI, I have helped my team identify key trends and patterns in data, leading to improved operational efficiency and cost savings.
      </h1>
      <br />
      <h1>
        In my free time, I enjoy exploring new technologies and honing my skills in web development. I am passionate about creating clean, responsive, and user-friendly websites that deliver a seamless user experience.
      </h1>
      <br />
      <h1>
        If you're interested in connecting with me or learning more about my skills and experience, feel free to reach out. I'm always open to new opportunities and collaborations
      </h1>
    </div>
  );
}
