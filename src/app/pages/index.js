/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import graphql from '../lib/graphql';
// eslint-disable-next-line import/extensions
import getAllProducts from '../lib/graphql/queries/getAllProducts';

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
