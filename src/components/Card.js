export default function Card(props) {
  const { imageUrl, link, title, skills, github } = props.data;

  const skillElement = skills.map((skill, index) => <p key={index}>{skill}</p>);

  return (
    <div className='card-container'>
      <img src={imageUrl} alt='project' />
      <div className='card-icon'>
        <a href={link}>
          <i className='fa-solid fa-share-from-square '></i>
        </a>
      </div>
      <h2 className='card-title'>{title}</h2>
      <div className='skills'>{skillElement}</div>
      <div className='card-footer'>
        <a href={github}>Github</a>
        <a href={link}>Live Preview</a>
      </div>
    </div>
  );
}
