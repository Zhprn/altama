"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

type Locale = "en" | "id";

export default function BrandSection() {
  const router = useRouter();

  const pathname = usePathname();
  const t = useTranslations("home.brandSection");

  const locale = useMemo(() => {
    const segments = pathname.split("/");
    const localeCode = segments[2] as Locale;
    return localeCode === "en" || localeCode === "id" ? localeCode : "en";
  }, [pathname]);

  return (
    <div className="relative w-full bg-white py-10 pb-24 lg:py-12 lg:pb-32 overflow-hidden">
      {/* Top Section: Our Brand */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px] mb-16 lg:mb-28">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-[28px] lg:text-[40px] font-['League_Spartan'] font-bold leading-tight tracking-tight lg:tracking-[-1.6px] mb-2">
            <span className="text-[#121212]">{t("our")} </span>
            <span className="text-[#353185]">{t("brand")}</span>
          </h2>
          <p className="text-[#414141] text-[14px] lg:text-[18px] font-['Inter'] leading-relaxed lg:leading-[103.33%] tracking-tight lg:tracking-[-0.72px] opacity-75">
            {t("description")}
          </p>
        </div>

        {/* Brand Logos */}
        <div className="relative flex flex-wrap items-center justify-center gap-3 lg:gap-4">
          {/* Left Decorative Element */}
          <div className="hidden lg:block absolute left-[50px] top-[-80px] w-[220px] h-[220px] opacity-20 pointer-events-none">
            <Image
              fill
              alt="left decoration"
              sizes="220px"
              className="w-full h-full object-contain"
              src="/images/e7afaee15ca51803cd3113d30286e40abfdf9c69.webp"
            />
          </div>

          {/* Tekiro */}
          <a
            href="https://tekiro.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[150px] lg:max-w-[250px] h-[60px] lg:h-[80px] bg-[#f1f0fa] border border-[rgba(53,49,133,0.42)] rounded-2xl flex items-center justify-center px-6 py-3 hover:shadow-lg transition-shadow relative z-10"
          >
            <Image
              width={250}
              height={80}
              alt="Rexco"
              sizes="250px"
              className="max-w-full max-h-full object-contain"
              src="/images/tekiroo.webp"
            />
          </a>

          {/* RYU */}
          <a
            href="https://ryupowertools.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[150px] lg:max-w-[250px] h-[60px] lg:h-[80px] bg-[#f1f0fa] border border-[rgba(53,49,133,0.42)] rounded-2xl flex items-center justify-center py-3 hover:shadow-lg transition-shadow relative z-10"
          >
            <Image
              width={240}
              height={80}
              alt="RYU"
              sizes="250px"
              className="max-w-full max-h-full object-contain"
              src="/images/ryu.webp"
            />
          </a>

          {/* Rexco */}
          <a
            href="https://rexco-solution.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[150px] lg:max-w-[250px] h-[60px] lg:h-[80px] bg-[#f1f0fa] border border-[rgba(53,49,133,0.42)] rounded-2xl flex items-center justify-center py-3 hover:shadow-lg transition-shadow relative z-10"
          >
            <Image
              width={450}
              height={85}
              alt="Tekiro"
              sizes="450px"
              className="max-w-full max-h-full object-contain"
              src="/images/rexcoo.webp"
            />
          </a>

          {/* Right Decorative Element */}
          <div className="hidden lg:block absolute right-[50px] top-[-80px] w-[220px] h-[220px] opacity-20 pointer-events-none scale-x-[-1]">
            <Image
              fill
              alt=""
              sizes="220px"
              className="w-full h-full object-contain"
              src="/images/e7afaee15ca51803cd3113d30286e40abfdf9c69.webp"
            />
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px]">
        <div className="flex lg:flex-row flex-col items-start justify-between gap-8 lg:gap-12">
          {/* Left: Content */}
          <div className="flex-1 max-w-full lg:max-w-[580px]">
            <div className="mb-6 lg:mb-8">
              <h2 className="text-[26px] lg:text-[40px] font-['League_Spartan'] font-semibold leading-tight tracking-tight lg:tracking-[-1.6px] mb-3 lg:mb-5">
                <span className="text-[#121212]">{t("awardTitle1")} </span>
                <span className="text-[#353185]">{t("awardTitle2")}</span>
                <br />
                <span className="text-[#121212]">{t("awardTitle3")}</span>
              </h2>
              <p className="text-[#414141] text-[14px] lg:text-[18px] font-['Inter'] leading-relaxed lg:leading-[103.33%] tracking-tight lg:tracking-[-0.72px] opacity-75 max-w-full lg:max-w-[480px]">
                {t("awardDescription")}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 mb-6 lg:mb-10 max-w-full lg:max-w-[480px]">
              <div className="bg-[#f1f0fa] border border-[rgba(53,49,133,0.32)] rounded-xl px-4 py-3 flex-1">
                <p className="text-[#29266e] text-[28px] lg:text-[32px] font-['Inter'] font-bold leading-none tracking-tight lg:tracking-[-1.28px] mb-1">
                  7
                </p>
                <p className="text-[#29266e] text-[14px] lg:text-[16px] font-['Inter'] leading-relaxed tracking-tight lg:tracking-[-0.64px] opacity-75">
                  {t("stat1")}
                </p>
              </div>

              <div className="bg-[#f1f0fa] border border-[rgba(53,49,133,0.42)] rounded-xl px-4 py-3 flex-1">
                <p className="text-[#29266e] text-[28px] lg:text-[32px] font-['Inter'] font-bold leading-none tracking-tight lg:tracking-[-1.28px] mb-1">
                  3
                </p>
                <p className="text-[#29266e] text-[14px] lg:text-[16px] font-['Inter'] leading-relaxed tracking-tight lg:tracking-[-0.64px] opacity-75">
                  {t("stat2")}
                </p>
              </div>
            </div>

            {/* Read More Button */}

            <button
              onClick={() =>
                router.push(`/${locale}/profile/awards-certification`)
              }
              className="w-full lg:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#353185] rounded-full hover:bg-[#2a2667] transition-colors"
            >
              <p className="text-white text-[15px] lg:text-[18px] font-['Inter'] font-semibold tracking-tight">
                Read More
              </p>
              <div className="w-4 lg:w-5 h-4 lg:h-5 rotate-90">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M17 14L12 9L7 14"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Right: Award Image with Progress */}
          <div className="relative w-full lg:w-auto">
            <div className="w-full lg:w-[480px] h-[280px] lg:h-[340px] rounded-2xl lg:rounded-[32px] overflow-hidden bg-[#d9d9d9]">
              <Image
                fill
                alt="Awards"
                sizes="480px"
                className="w-full h-full object-cover"
                src="/images/1db5c4c5bdf0a4ba8223ceec75456d821b779bb7.webp"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Yellow Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-[10px] lg:h-[20px] xl:h-[40px] overflow-hidden">
        <Image
          fill
          alt=""
          sizes="100vw"
          className="w-full object-top object-cover"
          src="/images/yellow-gif.gif"
        />
      </div>
    </div>
  );
}
