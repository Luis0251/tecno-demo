import { carListData } from "@/utils/CarListData";
import React, { useEffect } from "react";
import { CarListItem } from "./CarListItem";

export const CarListOptions = () => {
  return (
    <div className="mt-5">
      <h2 className="text-[22px] font-bold">Recommended vehicles</h2>
      {carListData.map((item) => (
        <CarListItem
          vehicle={item.name}
          img={item.image}
          key={item.id}
          amount={item.amount}
          desc={item.desc}
          seat={item.seat}
        />
      ))}
    </div>
  );
};
