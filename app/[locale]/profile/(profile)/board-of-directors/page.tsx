"use client";

import { inter } from "@/app/font";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

type Locale = "en" | "id";

export default function BoardOfDirectorsPage() {
  const pathname = usePathname();
  const t = useTranslations("profile.boardOfDirectors");
  const tNav = useTranslations("common");

  const locale = useMemo(() => {
    const segments = pathname.split("/");
    const localeCode = segments[2] as Locale;
    return localeCode === "en" || localeCode === "id" ? localeCode : "en";
  }, [pathname]);
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#353185]">
          <Image
            alt="foto61"
            fill
            className="w-full h-full object-cover"
            style={{ transform: "translateX(100px)", objectPosition: "center" }}
            src="/images/bodimage2.webp"
          />
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
                <span className="absolute inset-0 bg-[#f4c41c] rounded-lg lg:rounded-[8px] border-[2px] lg:border-[3px] border-[#f4c41c] left-[5px] -right-[4px] -top-[2px] lg:-top-[4px] bottom-[4px] lg:bottom-[5px]"></span>
                <span className="relative z-10 text-white px-1 lg:px-[4px]">
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

      <div className="bg-white relative">
        {/* Director 1 - Oscar Andrew Sutjadi */}
        <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px] pt-12 lg:pt-[120px] pb-12 lg:pb-[100px] z-10">
          <div className="flex lg:flex-row flex-col gap-8 lg:gap-[80px] items-center">
            {/* Photo */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="bg-[#d9d9d9] h-[320px] w-full lg:h-[380px] lg:w-[320px] rounded-2xl lg:rounded-[24px] overflow-hidden">
                <Image
                  alt="Oscar Andrew Sutjadi"
                  className="h-full w-full object-cover object-center"
                  src="/images/9df419339c9f64ff9330860ae144cbfc48a09c52.webp"
                  width={320}
                  height={380}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 lg:gap-[40px] flex-1">
              {/* Name and Title */}
              <div className="flex flex-col gap-2">
                <h2 className="font-league-spartan font-semibold text-[28px] lg:text-[42px] leading-tight tracking-tight lg:tracking-[-1.68px] text-[#353185]">
                  {t("director1.name")}
                </h2>
                <p className="font-inter text-[15px] lg:text-[18px] leading-relaxed tracking-tight text-[#121212]">
                  {t("director1.title")}
                </p>
              </div>

              <div className="font-inter text-[14px] lg:text-[16px] leading-relaxed tracking-tight text-[#414141]">
                <p className="mb-4">"{t("director1.description1")}"</p>
              </div>

              <div className="flex gap-3 lg:gap-4 items-center flex-wrap">
                <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                  <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-[8.33%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          d="M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z"
                          fill="#353185"
                          stroke="#353185"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M7.00001 11L10 14L16 8.00001"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                    {t("director1.tags.leadership")}
                  </p>
                </div>

                <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                  <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-[8.33%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          d="M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z"
                          fill="#353185"
                          stroke="#353185"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M7.00001 11L10 14L16 8.00001"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                    {t("director1.tags.businessDevelopment")}
                  </p>
                </div>

                <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                  <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-[8.33%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          d="M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z"
                          fill="#353185"
                          stroke="#353185"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M7.00001 11L10 14L16 8.00001"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                    {t("director1.tags.strategy")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Director 2 - Stephanus Ferdinand Santoso */}
        <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px] pb-12 lg:pb-[120px] z-10">
          <div className="flex lg:flex-row flex-col-reverse gap-8 lg:gap-[80px] items-center">
            {/* Content */}
            <div className="flex flex-col gap-6 lg:gap-[40px] flex-1">
              {/* Name and Title */}
              <div className="flex flex-col gap-2">
                <h2 className="font-league-spartan font-semibold text-[28px] lg:text-[42px] leading-tight tracking-tight lg:tracking-[-1.68px] text-[#353185]">
                  {t("director2.name")}
                </h2>
                <p className="font-inter text-[15px] lg:text-[18px] leading-relaxed tracking-tight text-[#121212]">
                  {t("director2.title")}
                </p>
              </div>

              <div className="font-inter text-[14px] lg:text-[16px] leading-relaxed tracking-tight text-[#414141]">
                <p className="mb-4">"{t("director2.description1")}"</p>
              </div>

              <div className="flex gap-3 lg:gap-4 items-center flex-wrap">
                <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                  <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-[8.33%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          d="M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z"
                          fill="#353185"
                          stroke="#353185"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M7.00001 11L10 14L16 8.00001"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                    {t("director2.tags.operations")}
                  </p>
                </div>

                <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                  <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-[8.33%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          d="M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z"
                          fill="#353185"
                          stroke="#353185"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M7.00001 11L10 14L16 8.00001"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                    {t("director2.tags.engineering")}
                  </p>
                </div>

                <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                  <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-[8.33%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          d="M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z"
                          fill="#353185"
                          stroke="#353185"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M7.00001 11L10 14L16 8.00001"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                    {t("director2.tags.management")}
                  </p>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="bg-[#d9d9d9] h-[320px] w-full lg:h-[380px] lg:w-[320px] rounded-2xl lg:rounded-[24px] overflow-hidden">
                <Image
                  alt="Stephanus Ferdinand Santoso"
                  className="h-full w-full object-cover object-center"
                  src="/images/3b1d8efcfeab01eb8192e7678f2036b37ecbdb0e.webp"
                  width={320}
                  height={380}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px] pb-12 lg:pb-[80px] z-10">
          <div className="flex gap-3 lg:gap-6 items-center justify-center">
            {/* Back Button */}
            <Link
              href={`/${locale}/profile/awards-certification`}
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
              href={`/${locale}/profile/gallery`}
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
    </>
  );
}
