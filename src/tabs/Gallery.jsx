import { useEffect, useState } from 'react';

import * as ImageService from 'service/image-service';
import { SearchForm, GaleryList } from 'components';

export const Gallery = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    ImageService.getImages(query, page).then(({ photos, total_results }) => {
      setPhotos(prevstate => [...prevstate, ...photos]);
    });
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />

      <GaleryList photos={photos} />

      {/* <Text textAlign="center">Sorry. There are no images ... 😭</Text> */}
    </>
  );
};
