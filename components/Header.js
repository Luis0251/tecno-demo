import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import InventoryIcon from "@mui/icons-material/Inventory";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export const Header = () => {
  const headerMenu = [
    {
      id: 1,
      name: "Ride",
      icon: <DirectionsCarIcon />,
    },
    { id: 2, name: "Package", icon: <InventoryIcon /> },
  ];
  return (
    <div className="p-4 pb-3 pl-10 border-b-[4px] border-gray-200 flex justify-between items-center">
      <div className="flex gap-24 items-center">
        <Image src={"/bannerlogo.jpg"} alt="banner" width={70} height={70} />
        <div className="flex gap-6 items-center">
          {headerMenu.map((item) => (
            <div className="flex gap-2 items-center">
              {item.icon}
              <h2 className="text-[14px] font-medium">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <UserButton />
    </div>
  );
};
