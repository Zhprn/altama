"use client";

import { League_Spartan } from "next/font/google";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

type Locale = "en" | "id";

const leagueSpartan = League_Spartan({
  variable: "--font-league_spartan",
  subsets: ["latin"],
  display: "swap",
});

const backgroundImages = [
  "/images/0c1d2a3b7eb424e2f5d2bfe8c72d39db643b8338.webp",
  "/images/home2.webp",
  "/images/carousel-3.webp",
];

export default function HeroSection() {
  const pathname = usePathname();
  const t = useTranslations("hero");

  const locale = useMemo(() => {
    const segments = pathname.split("/");
    const localeCode = segments[1] as Locale;
    return localeCode === "en" || localeCode === "id" ? localeCode : "en";
  }, [pathname]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[800px]  bg-[#353185] overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              alt={`hero-bg-${index}`}
              fill
              sizes="100vw"
              className="w-full h-full object-cover"
              src={src}
              priority={index === 0}
            />
          </div>
        ))}
        {/* Gradient overlay - darker on mobile for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(53,49,133,0.92)] via-[rgba(53,49,133,0.88)] to-[rgba(53,49,133,0.85)] lg:bg-linear-to-r lg:from-[rgba(53,49,133,0.85)] lg:via-[rgba(53,49,133,0.5)] lg:via-35% lg:to-transparent lg:to-60%" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-360 mx-auto px-5 lg:px-[80px] h-full flex flex-col gap-10 justify-center ">
        {/* Badge with purple background */}
        <div>
          <div className="inline-flex mb-5 lg:mb-[35px] px-4 lg:px-4 py-2 lg:py-2 rounded-full lg:rounded-[26px] bg-[#353185] border border-[#403BA0] w-fit">
            <p
              className={`${leagueSpartan.className} text-white font-league-spartan text-[13px] lg:text-[18px] tracking-tight lg:tracking-[-0.56px]`}
            >
              #AltamaGueBanget
            </p>
          </div>
          {/* Brand Logos - aligned with content */}
          <div className="relative flex flex-wrap items-center justify-start gap-1 sm:gap-2">
            {/* Tekiro */}
            <a
              href="https://tekiro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10"
            >
              <Image
                width={150}
                height={40}
                alt="Tekiro"
                sizes="100px"
                className="max-w-full max-h-full object-cover"
                src="/images/tekiroo.webp"
              />
            </a>
            {/* Rexco */}
            <a
              href="https://rexco-solution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-1 hover:shadow-lg transition-shadow relative z-10"
            >
              <Image
                width={150}
                height={40}
                alt="Rexco"
                sizes="100px"
                className="max-w-full max-h-full object-cover"
                src="/images/rexco-white.webp"
              />
            </a>

            {/* RYU */}
            <a
              href="https://ryupowertools.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[90px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10"
            >
              <Image
                width={250}
                height={40}
                alt="RYU"
                sizes="100px"
                className="max-w-full max-h-full object-cover"
                src="/images/ryu.webp"
              />
            </a>
          </div>
        </div>

        <div>
          {/* Main Heading with yellow background on INNOVATION */}
          <h1
            className={`${leagueSpartan.className} text-white font-league-spartan font-bold text-[34px] lg:text-[54px] leading-[1.15] lg:leading-[1.2] tracking-tight lg:tracking-[-1.68px] max-w-full lg:max-w-[580px] mb-4 lg:mb-4`}
          >
            {t("line1")}
            <br />
            <span className="relative inline-block my-1 lg:my-0.5">
              <span className="absolute inset-0 bg-[#f4c41c] rounded-lg lg:rounded-[8px] border-[2px] lg:border-[3px] border-[#f4c41c] -left-[4px] -right-[4px] -top-[2px] lg:-top-[4px] bottom-[4px] lg:bottom-[5px]"></span>
              <span className="relative z-10 text-white px-1 lg:px-[4px]">
                {t("line2")}
              </span>
            </span>{" "}
            {t("line3")}
            <br />
            {t("line4")}
          </h1>

          {/* Subtitle */}
          <p className="text-[#e4e4e4] text-[15px] lg:text-[18px] font-['Inter'] leading-relaxed lg:leading-[1.4] tracking-tight lg:tracking-[-0.64px] max-w-full lg:max-w-[520px]">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
}
