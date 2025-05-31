import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: videoSrc === smallHeroVideo ? 2.4 : 1.2,
      y: 20,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: videoSrc === smallHeroVideo ? 2.4 : 1.2,
      y: "-50",
    });
  });
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo);
    } else {
      setvideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);
  return (
    <>
      <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p id="hero" className="hero-title">
            iPhone 15 Pro
          </p>
          <div className="md:w-10/12 w-9/12">
            <video
              className="pointer-events-none"
              autoPlay
              muted
              playsInline={true}
              key={videoSrc}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-10"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="font-normal text-xl">
            {" "}
            From $999 or $41.62/mo. for 24 mo.
          </p>
        </div>
      </section>
    </>
  );
};
export default Hero;
