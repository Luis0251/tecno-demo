import Image from "next/image";
import React from "react";

export const CarListItem = ({ img, vehicle, amount, desc, seat }) => {
  return (
    <div>
      <div>
        <Image src={img} alt="car" width={100} height={100} />
      </div>
    </div>
  );
};
