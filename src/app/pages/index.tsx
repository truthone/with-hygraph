import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Grid } from '@chakra-ui/layout';
/* eslint-disable import/no-unresolved */
import ProductCard from '../../components/ProductCard';
// eslint-disable-next-line import/extensions
import getAllProducts from '../../lib/graphql/getAllProducts';

// eslint-disable-next-line import/prefer-default-export
export const getStaticProps = async () => {
  const { products } = await graphql.request(getAllProducts);
  return {
    revalidate: 60,
    props: {
      products,
    },
  };
};

export default function Home(props) {
  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)" gap="5">
      {props.products.map((product: {
        id: string,
      }) => {
        <ProductCard key={product.id} {...product} />;
      })}
    </Grid>
  );
}
