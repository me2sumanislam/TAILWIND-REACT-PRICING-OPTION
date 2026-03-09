import React from "react";
import PricingFuture from "./PricingFuture";

function PricingCard({pricing}) {

  const { name, price, description, features} = pricing;

  return (
    // card  header
    <div className="border bg-amber-600 rounded-2xl p-4">
      <div>
        <h1 className="text-5xl">{name}</h1>
        <h4 className="text-3xl">{price}</h4>
      </div>
      {/* card body */}
      <div className="bg-amber-400 p-4 rounded-2xl mt-10">
        <p>{description}</p>

        {
          features.map((feature, index) => <PricingFuture 
          key={index}
         feature={feature} ></PricingFuture>)
        }

      </div>
    </div>
  );
}

export default PricingCard;
