export default function Banner() {
  return (
    <section className='banner'>
      <div className='banner-heading'>
        <h1>Hi, I'm Mridul👋</h1>
        <br />
        <p>A front-end developer.I am in love with Web development.</p>
        <div className='button'>
          <a href='mailto:mriravbagla@gmail.com' className='hire'>
            Hire Me!
          </a>
          <a
            className='hire resume'
            target='_blank'
            href='https://drive.google.com/file/d/1Z77tgiMkusIeQu8SU61-uSVxcACS64AG/view?usp=share_link'
            rel="noreferrer"
            download
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
