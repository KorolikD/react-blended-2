import { Backdrop } from 'components/Backdrop/Backdrop';
import { useEffect } from 'react';

export const Modal = ({ url, handleUrl }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        handleUrl('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleClick = evt => {
    if (evt.target === evt.currentTarget) {
      handleUrl('');
    }
  };

  return (
    <Backdrop onClick={handleClick}>
      <img src={url} alt="" />
    </Backdrop>
  );
};
