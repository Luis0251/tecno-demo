import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div>
        <Image
          src="/banner.jpg"
          alt="banner"
          width={900}
          height={500}
          className="object-contain h-full w-full"
        />
        <div className="absolute top-20 right-0">
          <SignIn />
        </div>
      </div>
    </>
  );
}
