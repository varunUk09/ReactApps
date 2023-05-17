import { useState } from "react";

const images = [
  "https://as2.ftcdn.net/v2/jpg/02/66/72/41/1000_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
  "https://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSSWjQgzGpzlu6Dia0uFlC7vHrnR_wPUvjSKKJ2JR&s",
  "https://thumbs.dreamstime.com/b/big-lion-lying-savannah-grass-35172905.jpg",
  "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg",
  "https://cdn.pixabay.com/photo/2017/01/28/17/43/fish-2016013_640.jpg",
];
export default function App() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      {selected && (
        <div className='modal'>
          <img src={selected} />
          <button
            className='close'
            onClick={() => {
              setSelected(null);
            }}>
            Close
          </button>
        </div>
      )}
      <div className='gallery'>
        {images.map((image, idx) => {
          return (
            <img
              src={image}
              key={idx}
              onClick={() => {
                setSelected(image);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
