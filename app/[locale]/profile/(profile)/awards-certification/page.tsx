"use client";

import { Inter, League_Spartan } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Locale = "en" | "id";

const leagueSpartan = League_Spartan({
  variable: "--font-league_spartan",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const backgroundImages = [
  "/images/1db5c4c5bdf0a4ba8223ceec75456d821b779bb7.webp",
  "/images/award3.webp",
  "/images/award4.webp",
  "/images/award5.webp",
];

export default function AwardsCertificationPage() {
  const pathname = usePathname();
  const t = useTranslations("profile.awardsCertification");
  const tNav = useTranslations("common");
  const [currentIndex, setCurrentIndex] = useState(0);

  const locale = useMemo(() => {
    const segments = pathname.split("/");
    const localeCode = segments[2] as Locale;
    return localeCode === "en" || localeCode === "id" ? localeCode : "en";
  }, [pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Images Slider */}
        <div className="absolute inset-0 bg-[#353185]">
          {backgroundImages.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out  ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                alt={`hero-bg-${index}`}
                fill
                className="w-full h-full object-cover bg-[#353185] "
                src={src}
                priority={index === 0}
              />
            </div>
          ))}
          {/* Gradient overlay - darker on mobile for better text readability */}
          <div className="absolute inset-0 w-full bg-gradient-to-r from-[#353185] to-[#353185]/20" />
        </div>

        {/* Hero Content - absolutely positioned */}
        <div className="absolute inset-0 max-w-360 mx-auto px-5 lg:px-[80px] h-full flex flex-col gap-10 justify-center">
          <div>
            {/* Brand Logos - aligned with content */}
            <div className="relative flex flex-wrap items-center justify-start gap-1 sm:gap-2">
              {/* Tekiro */}
              <div className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10">
                <Image
                  width={150}
                  height={40}
                  alt="Tekiro"
                  className="max-w-full max-h-full object-cover"
                  src="/images/tekiroo.webp"
                />
              </div>
              {/* Rexco */}
              <div className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-1 hover:shadow-lg transition-shadow relative z-10">
                <Image
                  width={150}
                  height={40}
                  alt="Rexco"
                  className="max-w-full max-h-full object-cover"
                  src="/images/rexco-white.webp"
                />
              </div>

              {/* RYU */}
              <div className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10">
                <Image
                  width={150}
                  height={40}
                  alt="RYU"
                  className="max-w-full max-h-full object-cover"
                  src="/images/ryu.webp"
                />
              </div>
            </div>
          </div>

          <div>
            {/* Main Heading with yellow background on INNOVATION */}
            <h1
              className={`text-white font-league-spartan font-bold text-[34px] lg:text-[54px] leading-[1.15] lg:leading-[1.2] tracking-tight lg:tracking-[-1.68px] max-w-full lg:max-w-[580px] mb-4 lg:mb-4`}
            >
              {t("hero.title")}
              <span className="relative inline-block my-1 lg:my-0.5">
                <span className="absolute inset-0 bg-[#f4c41c] rounded-lg lg:rounded-[8px] border-[2px] lg:border-[3px] border-[#f4c41c] left-[2px] -right-[4px] -top-[2px] bottom-[5px]"></span>
                <span className="relative z-10 text-white px-1 lg:px-[4px] ">
                  {t("hero.highlight")}
                </span>
              </span>
            </h1>

            <p className="text-[#e4e4e4] text-[15px] lg:text-[18px] font-['Inter'] leading-relaxed lg:leading-[1.4] tracking-tight lg:tracking-[-0.64px] max-w-full lg:max-w-[520px]">
              {t("hero.subtitle")}
            </p>
          </div>
          <div className="inline-flex mb-5 lg:mb-[35px] px-4 lg:px-4 py-2 lg:py-2 rounded-full lg:rounded-[26px] bg-[#353185] border border-[#403BA0] w-fit">
            <p
              className={`font-league-spartan text-white text-[13px] lg:text-[18px] tracking-tight lg:tracking-[-0.56px]`}
            >
              {t("hero.tag")}
            </p>
          </div>
        </div>
      </div>
      {/* Awards Details Section - Cards with Navigation */}
      <div className="bg-white py-10">
        {/* Awards Grid Section */}
        <div className="w-full mb-8 lg:mb-12 px-2 lg:px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              breakpoints: {
                "(min-width: 1024px)": { watchDrag: false },
              },
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                <CarouselItem
                  key={num}
                  className="basis-1/3 md:basis-1/5 lg:basis-[11.11%]"
                >
                  <div className="relative aspect-square w-full overflow-hidden group">
                    <Image
                      src={`/images/award_${num}.webp`}
                      alt={`Award ${num}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px]">
          <div className="relative">
            {/* Cards Container */}
            <div className="flex lg:flex-row flex-col gap-4 lg:gap-6 items-stretch justify-center w-full mb-8 lg:mb-12">
              {/* Card 1 - Award Recognition */}
              <div
                className=" overflow-clip rounded-2xl lg:rounded-[24px] w-full lg:w-[532px]"
                style={{
                  backgroundImage:
                    "linear-gradient(46.1211deg, rgb(53, 49, 133) 0%, rgb(96, 91, 195) 99.91%)",
                }}
              >
                <div className="relative h-full w-full px-6 lg:px-8 py-6 lg:py-6 flex flex-col">
                  {/* Icon */}
                  <div className="relative w-10 h-10 mb-4 flex-shrink-0">
                    <svg
                      className="absolute inset-0"
                      fill="none"
                      viewBox="0 0 62 62"
                    >
                      <circle cx="31" cy="31" fill="white" r="31" />
                    </svg>
                    <svg
                      className="absolute inset-[25%]"
                      fill="none"
                      viewBox="0 0 32 32"
                    >
                      <g>
                        <path
                          d="M17.0944 1.90437C16.7654 1.70328 16.3874 1.59687 16.0019 1.59687C15.6163 1.59687 15.2383 1.70328 14.9094 1.90437C13.6894 2.64937 12.9344 2.84937 11.5044 2.81937C10.7194 2.79937 9.98937 3.22437 9.60937 3.91437C8.92437 5.16937 8.36937 5.72437 7.11437 6.40937C6.42437 6.78437 6.00437 7.51937 6.01937 8.30437C6.05437 9.73437 5.84937 10.4894 5.10437 11.7094C4.90328 12.0383 4.79688 12.4163 4.79688 12.8019C4.79688 13.1874 4.90328 13.5654 5.10437 13.8944C5.84937 15.1144 6.04937 15.8694 6.01937 17.2994C5.99937 18.0844 6.42437 18.8144 7.11437 19.1944C8.21937 19.7994 8.77937 20.2994 9.36937 21.2694L6.93437 26.1244C6.63937 26.7194 6.87937 27.4394 7.46937 27.7344L11.7694 29.8844C12.3444 30.1694 13.0444 29.9544 13.3544 29.3944L15.9944 24.6394L18.6344 29.3944C18.9444 29.9544 19.6444 30.1744 20.2194 29.8844L24.5194 27.7344C25.1144 27.4394 25.3544 26.7194 25.0544 26.1244L22.6244 21.2644C23.2094 20.2944 23.7744 19.7944 24.8794 19.1894C25.5694 18.8144 25.9894 18.0794 25.9744 17.2944C25.9394 15.8644 26.1444 15.1094 26.8894 13.8894C27.2994 13.2194 27.2994 12.3744 26.8894 11.7044C26.1444 10.4844 25.9444 9.72937 25.9744 8.29937C25.9944 7.51437 25.5694 6.78437 24.8794 6.40437C23.6244 5.71937 23.0694 5.16437 22.3844 3.90937C22.0094 3.21937 21.2744 2.79937 20.4894 2.81437C19.0594 2.84937 18.3044 2.64437 17.0844 1.89937L17.0944 1.90437ZM15.9994 7.99937C18.6494 7.99937 20.7994 10.1494 20.7994 12.7994C20.7994 15.4494 18.6494 17.5994 15.9994 17.5994C13.3494 17.5994 11.1994 15.4494 11.1994 12.7994C11.1994 10.1494 13.3494 7.99937 15.9994 7.99937Z"
                          fill="#353185"
                        />
                      </g>
                    </svg>
                  </div>

                  <h3
                    className={`${leagueSpartan.className} font-semibold text-[22px] lg:text-[32px] leading-tight text-white tracking-tight lg:tracking-[-1.28px] uppercase mb-3 lg:mb-4`}
                  >
                    {t("awardRecognition.title")}
                  </h3>

                  <p className="font-['Inter'] text-[13px] lg:text-[14px] leading-relaxed text-white tracking-tight max-w-full lg:max-w-[468px]">
                    {t("awardRecognition.description")}
                  </p>
                </div>
              </div>

              {/* Card 2 - International Standard */}
              <div className="bg-[rgba(53,49,133,0.12)] overflow-clip rounded-2xl lg:rounded-[24px] w-full lg:w-[532px]">
                <div className="relative h-full w-full px-6 lg:px-8 py-6 lg:py-6 flex flex-col">
                  {/* Icon */}
                  <div className="relative w-10 h-10 mb-4 flex-shrink-0">
                    <svg
                      className="absolute inset-0"
                      fill="none"
                      viewBox="0 0 62 62"
                    >
                      <circle cx="31" cy="31" fill="#353185" r="31" />
                    </svg>
                    <svg
                      className="absolute inset-[25%]"
                      fill="none"
                      viewBox="0 0 32 32"
                    >
                      <g>
                        <path
                          d="M4 20C4.53043 20 5.03914 20.2107 5.41421 20.5858C5.78929 20.9609 6 21.4696 6 22V26C6 26.5304 5.78929 27.0391 5.41421 27.4142C5.03914 27.7893 4.53043 28 4 28C3.46957 28 2.96086 27.7893 2.58579 27.4142C2.21071 27.0391 2 26.5304 2 26V22C2 21.4696 2.21071 20.9609 2.58579 20.5858C2.96086 20.2107 3.46957 20 4 20ZM12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18V26C14 26.5304 13.7893 27.0391 13.4142 27.4142C13.0391 27.7893 12.5304 28 12 28C11.4696 28 10.9609 27.7893 10.5858 27.4142C10.2107 27.0391 10 26.5304 10 26V18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16ZM20 10C20.5304 10 21.0391 10.2107 21.4142 10.5858C21.7893 10.9609 22 11.4696 22 12V26C22 26.5304 21.7893 27.0391 21.4142 27.4142C21.0391 27.7893 20.5304 28 20 28C19.4696 28 18.9609 27.7893 18.5858 27.4142C18.2107 27.0391 18 26.5304 18 26V12C18 11.4696 18.2107 10.9609 18.5858 10.5858C18.9609 10.2107 19.4696 10 20 10ZM28 4C28.5304 4 29.0391 4.21071 29.4142 4.58579C29.7893 4.96086 30 5.46957 30 6V26C30 26.5304 29.7893 27.0391 29.4142 27.4142C29.0391 27.7893 28.5304 28 28 28C27.4696 28 26.9609 27.7893 26.5858 27.4142C26.2107 27.0391 26 26.5304 26 26V6C26 5.46957 26.2107 4.96086 26.5858 4.58579C26.9609 4.21071 27.4696 4 28 4Z"
                          fill="#E6E6F0"
                        />
                      </g>
                    </svg>
                  </div>

                  <div className="font-['League_Spartan'] font-semibold text-[18px] lg:text-[20px] leading-tight text-[#353185] tracking-tight uppercase mb-3 lg:mb-4">
                    <p className="mb-0.5">{t("internationalStandard.title")}</p>
                    <p>- {t("internationalStandard.iso")}</p>
                  </div>

                  <p className="font-['Inter'] text-[13px] lg:text-[14px] leading-relaxed text-[#414141] tracking-tight max-w-full lg:max-w-[468px]">
                    {t("internationalStandard.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3 lg:gap-6 items-center justify-center">
              {/* Back Button */}
              <Link
                href={`/${locale}/profile/company-overview`}
                className="flex gap-2 items-center justify-center px-5 lg:px-6 py-2.5 lg:py-2.5 rounded-full border-2 border-[#353185] bg-transparent hover:bg-[#353185] transition-all duration-300 group"
              >
                <div className="size-4 lg:size-5 flex items-center justify-center rotate-[90deg] scale-y-[-100%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17 14L12 9L7 14"
                      className="stroke-[#353185] group-hover:stroke-white transition-colors duration-300"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p
                  className={`${inter.className} font-semibold text-[14px] lg:text-[16px] text-[#353185] group-hover:text-white tracking-tight whitespace-nowrap transition-colors duration-300`}
                >
                  {tNav("back")}
                </p>
              </Link>

              {/* Next Button */}
              <Link
                href={`/${locale}/profile/board-of-directors`}
                className="bg-[#353185] flex gap-2 items-center justify-center px-5 lg:px-6 py-2.5 lg:py-2.5 rounded-full hover:bg-[#605bc3] transition-colors"
              >
                <p className="font-inter font-semibold text-[14px] lg:text-[16px] text-white tracking-tight">
                  {tNav("next")}
                </p>
                <div className="size-4 lg:size-5 flex items-center justify-center rotate-[90deg]">
                  <svg
                    className="block size-full"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17 14L12 9L7 14"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
