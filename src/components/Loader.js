import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={103}
    viewBox="0 0 400 103"
    backgroundColor="#cfcfcf"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="8" y="39" rx="0" ry="0" width="50" height="30" />
    <rect x="66" y="39" rx="0" ry="0" width="50" height="30" />
    <rect x="125" y="39" rx="0" ry="0" width="50" height="30" />
    <rect x="8" y="24" rx="0" ry="0" width="72" height="8" />
  </ContentLoader>
);

export default Loader;
