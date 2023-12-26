"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        href="https://thecodedealer.com"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <span className="pr-2"></span>
        <Image src="logo-white.svg" width={94} height={94} alt="" />
      </Link>
    </div>
  );
}

export default Footer;
