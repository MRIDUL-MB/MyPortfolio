export default function Wave(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 250'>
      <path
        fill={props.color}
        fill-opacity='1'
        d='M0,32L26.7,37.3C53.3,43,107,53,160,74.7C213.3,96,267,128,320,138.7C373.3,149,427,139,480,144C533.3,149,587,171,640,197.3C693.3,224,747,256,800,240C853.3,224,907,160,960,138.7C1013.3,117,1067,139,1120,149.3C1173.3,160,1227,160,1280,144C1333.3,128,1387,96,1413,80L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z'
      ></path>
    </svg>
  );
}
