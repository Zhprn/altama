"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchJobs, JobItem } from "@/lib/career";

type Locale = "en" | "id";

export default function CareerSection() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("home.careerSection");

  const locale = useMemo(() => {
    const segments = pathname.split("/");
    const localeCode = segments[2] as Locale;
    return localeCode === "en" || localeCode === "id" ? localeCode : "en";
  }, [pathname]);

  const {
    data: jobs = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  return (
    <div className="relative w-full bg-gradient-to-b from-[#353185] via-[#605bc3] via-[52.404%] to-[#353185] py-10 lg:py-16 overflow-hidden">
      {/* Decorative Background Lines */}
      <Image
        fill
        sizes="100vw"
        className="absolute inset-0 w-full max-w-[1200px] mx-auto h-full object-cover pointer-events-none opacity-40 lg:opacity-100"
        src="/images/f0b36a6155a50c52be487b4eff0f34ea34014d9f.webp"
        alt=""
      />

      <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px]">
        {/* Title */}
        <h2 className="text-center text-[26px] lg:text-[32px] font-['League_Spartan'] font-bold leading-tight tracking-tight lg:tracking-[-1.6px] mb-6 lg:mb-8">
          <span className="text-white">{t("title1")} </span>
          <span className="text-[#f4c41c]">{t("title2")}</span>
        </h2>

        {/* Search Bar */}
        <div className="flex items-center gap-2 lg:gap-[10px] max-w-full lg:max-w-[580px] mx-auto bg-white rounded-full px-4 py-2 lg:py-2 mb-6 lg:mb-10">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="flex-1 text-[#808080] text-[14px] lg:text-[14px] font-['Inter'] tracking-tight outline-none bg-transparent"
          />
          <button className="w-7 h-7 bg-[#353185] rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 21 21">
              <path
                d="M8.92437 2.58398C7.67027 2.58398 6.44432 2.95587 5.40157 3.65261C4.35882 4.34936 3.54609 5.33967 3.06617 6.49831C2.58624 7.65695 2.46067 8.93189 2.70534 10.1619C2.95 11.3919 3.55391 12.5217 4.4407 13.4085C5.32748 14.2953 6.45732 14.8992 7.68733 15.1439C8.91734 15.3886 10.1923 15.263 11.3509 14.7831C12.5096 14.3031 13.4999 13.4904 14.1966 12.4477C14.8934 11.4049 15.2652 10.179 15.2652 8.92486C15.2651 7.24319 14.597 5.63042 13.4079 4.4413C12.2188 3.25218 10.606 2.58409 8.92437 2.58398Z"
                stroke="white"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <path
                d="M13.6553 13.6562L18.0837 18.0846"
                stroke="white"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-x-[40px] lg:gap-y-[16px] mb-6 lg:mb-12 max-w-full lg:max-w-[900px] mx-auto">
          {isLoading ? (
            <p className="col-span-2 text-white text-center">Loading...</p>
          ) : error ? (
            <p className="col-span-2 text-white text-center">
              Failed to load jobs
            </p>
          ) : jobs.length === 0 ? (
            <p className="col-span-2 text-white text-center">
              No jobs available
            </p>
          ) : (
            jobs.slice(0, 4).map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl lg:rounded-[20px] p-4 lg:p-4 flex flex-col gap-3 lg:h-[140px] lg:justify-between"
              >
                <div>
                  <h3 className="text-[#121212] text-[15px] lg:text-[16px] font-['Inter'] font-semibold leading-tight tracking-tight mb-1.5 lg:mb-2">
                    {job.title}
                  </h3>
                  <p className="text-[#414141] text-[13px] lg:text-[13px] font-['Inter'] leading-relaxed tracking-tight opacity-75">
                    {job.overview}
                  </p>
                </div>

                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#353185] rounded-full px-4 py-2 self-start hover:bg-[#2d2870] transition-colors"
                >
                  <span className="text-white text-[14px] lg:text-[16px] font-['Inter'] font-semibold tracking-tight">
                    Apply Now
                  </span>
                  <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 rotate-90">
                    <svg
                      className="w-full h-full"
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
                </a>
              </div>
            ))
          )}
        </div>

        {/* View All Jobs Button */}
        <div className="flex justify-center">
          <button
            onClick={() => router.push(`/${locale}/career/apply-jobs`)}
            className="w-full lg:w-auto bg-white text-[#353185] rounded-full px-6 lg:px-6 py-3 lg:py-3 text-[15px] lg:text-[16px] font-['Inter'] font-semibold tracking-tight hover:bg-[#f0f0f0] transition-colors"
          >
            {t("viewAllJobs")}
          </button>
        </div>
      </div>
    </div>
  );
}
