import React from 'react';
import { Grid, GridItem, CardItem } from 'components';

export const GaleryList = ({ photos, handleUrl }) => {
  return (
    <Grid>
      {photos.map(item => (
        <GridItem key={item.id}>
          <CardItem color={item.avg_color}>
            <img
              src={item.src.small}
              alt={item.alt}
              onClick={() => {
                handleUrl(item.src.large);
              }}
            />
          </CardItem>
        </GridItem>
      ))}
    </Grid>
  );
};
