import { useEffect, useState } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export const Gallery = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) {
      return;
    }
    ImageService.getImages(query, page);
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />

      {/* <Text textAlign="center">Sorry. There are no images ... 😭</Text> */}
    </>
  );
};
