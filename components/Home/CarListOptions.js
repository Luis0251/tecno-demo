import { carListData } from "@/utils/CarListData";
import React, { useEffect, useState } from "react";
import { CarListItem } from "./CarListItem";

export const CarListOptions = ({ distance }) => {
  const [index, setIndex] = useState();
  return (
    <div className="mt-5 p-5 overflow-auto h-[250px]">
      <h2 className="text-[22px] font-bold">Vehiculos recomendados</h2>
      {carListData.map((item) => (
        <div
          className={`cursor-pointer ${
            index === item.id ? "bg-slate-200" : ""
          }`}
          onClick={() => setIndex(item.id)}
        >
          <CarListItem
            vehicle={item.name}
            img={item.image}
            key={item.id}
            amount={item.amount}
            desc={item.desc}
            seat={item.seat}
            distance={distance}
          />
        </div>
      ))}
    </div>
  );
};
