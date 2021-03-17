const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="about-info">
        <h4>
          I am<span> Chousin Rahit</span>
        </h4>
        <p className="about-text"></p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p className="address">Address</p>
          </div>
          <div className="right-section">
            <p>: K Chousin Rahit</p>
            <p>: 24</p>
            <p>: Indian</p>
            <p>: English, Hindi, Kannada, Telugu</p>
            <p>: Alur, Bengaluru</p>
          </div>
        </div>
        <button className="btn">Download Cv</button>
      </div>
    </div>
  );
};

export default ImageSection;
