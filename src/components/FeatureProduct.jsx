import { useProductContext } from "./context/Productcontext";
import ProductHome from "./ProductHome";

import "./FeatureProducts.css";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <div className="con">
      <div className="intro-data">Check Now!</div>
      <div className="common-heading">Our Feature Services</div>
      <div className=" grid-three-column">
        {featureProducts.map((curElem) => {
          return <ProductHome key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProduct;
