import ImageHome from "./banner.png";
const Home = () => {
  return (
    <div>
      <div>
        <img src={ImageHome} className='img-fluid'alt='Banner' />
      </div>
    </div>
  );
};

export default Home;