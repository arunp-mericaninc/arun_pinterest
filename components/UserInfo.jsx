import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Pin_img from "./Pin-docs/Pin_img";

const UserInfo = ({ session }) => {
    const router= useRouter()
    if (session==null) {
        router.push("/")
    }
  return (
    <>
    <div className="flex flex-col items-center mt-4 gap-4">
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={100}
        height={100}
        className="rounded-full"
      />
      <p className="font-semibold text-2xl">{session?.user?.name}</p>
      <span>{session?.user?.email}</span>
      <div className="flex justify-between gap-4">
        <button className="bg-gray-200 p-2 font-semibold rounded-full">
          Share
        </button>
        <button
          onClick={() => handleLogout()}
          className="bg-gray-200 p-2 font-semibold rounded-full"
        >
          Logout
        </button>
      </div>
    </div>
    <div >
      <Pin_img post={post} session={session} />
    </div>
  </>
  );
};

export default UserInfo;
