import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
    "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
    "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
  ];
  // This tells which image is currently active
  const [active, setActive] = useState(0);

  useEffect(() => {
    // This will change the image automatically every 3 seconds
    const i = setInterval(() => {
      loadNextImage();
    }, 3000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const loadNextImage = () => {
    // This will change the image to the next image in the array
    // If the current image is the last image, then it will go to the first image
    // This is done by taking the remainder of the division by the length of the array
    // This way the image will go back to the first image after the last image
    setActive((active) => (active + 1) % images.length);
  };
  const loadPrevImage = () => {
    // This will change the image to the previous image in the array
    // If the current image is the first image, then it will go to the last image
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
  };

  return (
    <div>
      <div className="m-2 p-2 flex justify-center items-center">
      {/* This is for prev arrow */}
        <img
          onClick={loadPrevImage}
          className="w-20 h-20 cursor-pointer"
          alt="left arrow"
          src="https://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"
        />
        <img className="w-[800px]" src={images[active]} alt="wallpaper" />
        {/* This is for next arrow */}
        <img
          onClick={loadNextImage}
          className="w-20 h-20 cursor-pointer"
          alt="right arrow"
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        />
      </div>
    </div>
  );
};
export default ImageSlider;
