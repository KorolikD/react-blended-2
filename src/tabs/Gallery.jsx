import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import * as ImageService from 'service/image-service';
import { SearchForm, GaleryList, Text, Button } from 'components';
import { Loader } from 'components/Loader/Loader';

export const Gallery = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoader(true);
    ImageService.getImages(query, page)
      .then(({ photos, total_results }) => {
        if (photos.length === 0) {
          setIsEmpty(true);
          return;
        }
        setPhotos(prevstate => [...prevstate, ...photos]);
        setIsLoadMore(page < Math.ceil(total_results / 15));
      })
      .catch(error => setError(error.message))

      .finally(setLoader(false));
  }, [query, page, id]);

  const handleSubmit = query => {
    setQuery(query);
    setIsEmpty(false);
    setPage(1);
    setPhotos([]);
    setId(nanoid());
    setError(false);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {loader && <Loader />}
      <GaleryList photos={photos} />
      {isEmpty && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
      {error && <Text textAlign="center">Sorry. {error} ... 😭</Text>}
      {isLoadMore && <Button onClick={loadMore}>Load more</Button>}
    </>
  );
};
