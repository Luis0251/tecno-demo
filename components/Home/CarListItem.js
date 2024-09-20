import Image from "next/image";
import React from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export const CarListItem = ({ img, vehicle, amount, desc, seat }) => {
  return (
    <div>
      <div className="flex items-center justify-between mt-5 ">
        <div className="flex items-center gap-5">
          <Image src={img} alt="car" width={100} height={100} />
          <div>
            <h2 className="font-semibold text-[16px]">
              {vehicle}
              <span>
                <PersonRoundedIcon />
                {seat}
              </span>
            </h2>
            <p className="text-[12px]">{desc}</p>
          </div>
        </div>
        <h2 className="font-semibold text-[12px]">
          ${(amount * 38).toFixed(2)}
        </h2>
      </div>
    </div>
  );
};
