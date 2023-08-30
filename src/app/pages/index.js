import React from 'react';
import { Grid } from '@chakra-ui/react'
import ProductCard from '../../components/ProductCard';
import getAllProducts from '../../lib/graphql/getAllProducts';

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
      {props.products.map((product) => {
        <ProductCard key={product.id} {...product} />;
      })}
    </Grid>
  );
}
