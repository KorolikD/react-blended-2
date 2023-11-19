import React from 'react';
import { Grid, GridItem, CardItem } from 'components';

export const GaleryList = ({ photos }) => {
  return (
    <Grid>
      {photos.map(item => (
        <GridItem key={item.id}>
          <CardItem color={item.avg_color}>
            <img src={item.src.large} alt={item.alt} />
          </CardItem>
        </GridItem>
      ))}
    </Grid>
  );
};
