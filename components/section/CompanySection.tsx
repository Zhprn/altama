"use client";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

type Locale = "en" | "id";

export default function CompanySection() {
  const pathname = usePathname();
  const t = useTranslations("home.companySection");

  const locale = useMemo(() => {
    const segments = pathname.split("/");
    const localeCode = segments[2] as Locale;
    return localeCode === "en" || localeCode === "id" ? localeCode : "en";
  }, [pathname]);

  const categories = [t("category1"), t("category2"), t("category3")];

  return (
    <div className="relative w-full bg-white py-10 lg:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-4">
          {/* Left: Image */}
          <div className="relative w-full lg:w-[480px] h-[260px] lg:h-[400px] rounded-2xl lg:rounded-[28px] overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-[#d9d9d9] rounded-2xl lg:rounded-[40px]" />
            <div className="absolute w-full h-full lg:w-[960px] lg:h-[640px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                alt="PT Altama Surya Anugerah"
                className="w-full h-full object-cover"
                fill
                sizes="100vw"
                src="/images/65a062ebe15f383953d6a1988ebb49073df36349.webp"
              />
            </div>

            {/* Gallery Button */}
            <div className="absolute left-1/2 bottom-4 lg:bottom-[40px] -translate-x-1/2 flex items-center gap-2 px-3 pr-4 py-2 bg-[rgba(255,255,255,0.90)] backdrop-blur-xl rounded-full border border-[#353185]">
              <div className="w-6 lg:w-[28px] h-6 lg:h-[28px] bg-[#353185] rounded-full flex items-center justify-center">
                <ImageIcon className="w-3 lg:w-[14px] h-3 lg:h-[14px] text-white" />
              </div>
              <Link
                href={`/${locale}/profile/gallery`}
                className="text-[#353185] text-[13px] lg:text-[15px] font-['Inter'] font-medium tracking-tight"
              >
                {t("seeOurGallery")}
              </Link>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 max-w-full lg:max-w-[550px] w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 lg:px-4 py-1.5 rounded-full border border-[#121212] mb-4 lg:mb-5">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg
                  className="w-[14px] h-[12px]"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    d="M6.70242 1.15556C7.59197 -0.385185 9.81584 -0.385185 10.7054 1.15556L17.0947 12.2222C17.9843 13.763 16.8723 15.6889 15.0932 15.6889H2.31456C0.535465 15.6889 -0.576469 13.763 0.313078 12.2222L6.70242 1.15556Z"
                    fill="#353185"
                  />
                </svg>
              </div>
              <p className="text-[#353185] text-[12px] lg:text-[15px] font-['Inter'] font-medium tracking-tight">
                {t("badge")}
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-[24px] lg:text-[32px] font-['League_Spartan'] font-semibold leading-tight lg:leading-[0.93] tracking-tight lg:tracking-[-1.28px] mb-3 lg:mb-4">
              <span className="text-[#353185]">PT Altama Surya Anugerah</span>
              <span className="text-[#121212]"> {t("heading")}</span>
            </h2>

            {/* Description */}
            <p className="text-[#414141] text-[14px] lg:text-[15px] font-['Inter'] leading-relaxed lg:leading-[103.33%] tracking-tight lg:tracking-[-0.6px] opacity-75 mb-5 lg:mb-8">
              {t("description")}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 lg:gap-5 mb-6 lg:mb-8">
              {categories.map((category) => (
                <div
                  key={category}
                  className="flex items-center gap-1.5 px-2 pr-3 py-1.5 bg-[#ebebf5] rounded-full"
                >
                  <div className="w-5 h-5 bg-[#353185] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12L10 17L19 8"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                  <p className="text-[#353185] text-[13px] lg:text-[13px] font-['Inter'] font-medium tracking-tight">
                    {category}
                  </p>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <Link
              href={`/${locale}/profile/company-overview`}
              className="w-full lg:w-auto flex items-center justify-center gap-2 px-6 lg:px-5 py-3 lg:py-2.5 bg-[#353185] rounded-full hover:bg-[#2a2667] transition-colors"
            >
              <p className="text-white text-[15px] lg:text-[15px] font-['Inter'] font-medium tracking-tight">
                {t("readMore")}
              </p>
              <div className="w-4 h-4 rotate-90">
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
