import React from "react";
import { footerLinks } from "../constants/index";
const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="scrren-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: {""}
            <span className="underline text-blue cursor-pointer">
              Find an Apple Store{" "}
            </span>
            or{" "}
            <span className="underline text-blue cursor-pointer">
              other retailer{" "}
            </span>
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            More Or call 000000-040-1893
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row items-center sm:flex-col justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2025 Apple Inc. All rights reserved.
          </p>
          <div className="flex ">
            {footerLinks.map((link, i) => (
              <p
                key={link}
                className="font-semibold text-gray text-xs cursor-pointer"
              >
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
