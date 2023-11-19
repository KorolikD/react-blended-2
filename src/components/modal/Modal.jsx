import { Backdrop } from 'components/Backdrop/Backdrop';
import { useState } from 'react';
import { useEffect } from 'react';

export const Modal = ({ currentImg, photos, setShowModal }) => {
  const [index, setIndex] = useState(currentImg);
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        setShowModal(false);
      }
      if (evt.keyCode === 37) {
        previousPhoto();
      } else if (evt.keyCode === 39) {
        nextPhoto();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleClick = evt => {
    if (evt.target === evt.currentTarget) {
      setShowModal(false);
    }
  };

  const nextPhoto = () => {
    setIndex(prevIndex => (prevIndex + 1 >= photos.length ? 0 : prevIndex + 1));
  };
  const previousPhoto = () => {
    setIndex(prevIndex =>
      prevIndex - 1 < 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <Backdrop onClick={handleClick}>
      <button style={{ color: 'white' }} onClick={previousPhoto}>
        LEFT
      </button>
      <img src={photos[index].src.large} alt="" width="50%" />
      <button style={{ color: 'red' }} onClick={nextPhoto}>
        RIGHT
      </button>
    </Backdrop>
  );
};
