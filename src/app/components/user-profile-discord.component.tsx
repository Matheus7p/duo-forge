"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useState } from "react";

import { SignOutLabel } from "./sign-out-label.component";

interface IUserProfileDiscord {
  avatarUrl: string;
}
export const UserProfileDiscord = ({ avatarUrl }: IUserProfileDiscord): ReactNode => {
  const [ isHover, setIsHover ] = useState<boolean>(false);  
  return (
    <div 
      className="flex flex-row justify-center items-center gap-4 cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: isHover ? "auto" : 0, opacity: isHover ? 1 : 0}}>
        <SignOutLabel />
      </motion.div>
      <motion.div>
        <Image src={avatarUrl} alt={""} width={50} height={50} className="rounded-full"/>
      </motion.div>
    </div>
  );
};
