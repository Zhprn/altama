"use client";

import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

type Locale = "en" | "id";

export default function LocationSection() {
  const pathname = usePathname();
  const t = useTranslations("home.locationSection");

  const locale = useMemo(() => {
    const segments = pathname.split("/");
    const localeCode = segments[2] as Locale;
    return localeCode === "en" || localeCode === "id" ? localeCode : "en";
  }, [pathname]);
  return (
    <div className="relative w-full bg-white py-10 lg:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px]">
        {/* Title */}
        <h2 className="text-center text-[26px] lg:text-[40px] font-['League_Spartan'] font-bold leading-tight tracking-tight lg:tracking-[-1.6px] mb-6 lg:mb-16">
          <span className="text-[#121212]">{t("our")}</span>
          <span className="text-[#353185]"> {t("location")}</span>
        </h2>

        {/* Content */}
        <div className="bg-[#fafafa] rounded-2xl lg:rounded-[32px] p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-10 w-full lg:w-fit mx-auto">
          {/* Left: Map */}
          <div className="relative w-full lg:w-[550px] h-[260px] lg:h-auto bg-[#e6e5e5] rounded-xl lg:rounded-[24px] overflow-hidden flex-shrink-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9396753839547!2d106.78842507499477!3d-6.1384799937944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1de3c3fdb571%3A0x7e8d9c8a7e8d9c8a!2sJl.%20Bandengan%20Utara%20No.85A%2C%20RT.3%2FRW.16%2C%20Penjaringan%2C%20Kec.%20Penjaringan%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014440!5e0!3m2!1sen!2sid!4v1734451200000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl lg:rounded-[24px] absolute inset-0"
            />

            {/* Address Card - Overlay on map */}
            <div className="absolute left-3 lg:left-6 bottom-3 lg:bottom-6 right-3 lg:right-auto bg-gradient-to-br from-[rgba(252,252,252,0.96)] to-[rgba(242,242,242,0.96)] backdrop-blur-sm border border-[#353185] rounded-xl lg:rounded-[16px] p-3 lg:p-3 max-w-full lg:max-w-[480px] shadow-lg">
              <p className="text-[#353185] text-[12px] lg:text-[18px] font-['Inter'] leading-relaxed lg:leading-[1.292] tracking-tight lg:tracking-[-0.72px] text-center">
                Jl. Bandengan Utara 85A No. 8-9, RT.3/RW.16, Penjaringan,
                Kecamatan Penjaringan, Jakarta, DKI Jakarta 14440
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-[480px] flex flex-col gap-4 lg:gap-6">
            {/* Name and Email Row */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
              <div className="flex-1">
                <label className="block text-[#121212] text-[14px] lg:text-[16px] font-['Inter'] tracking-tight mb-2">
                  {t("yourName")}
                </label>
                <input
                  type="text"
                  placeholder={t("yourNamePlaceholder")}
                  className="w-full bg-[#efefef] rounded-full px-4 lg:px-5 py-3 lg:py-4 text-[#a7a7a7] text-[14px] lg:text-[16px] font-['Inter'] tracking-tight outline-none focus:ring-2 focus:ring-[#353185]"
                />
              </div>

              <div className="flex-1">
                <label className="block text-[#121212] text-[14px] lg:text-[16px] font-['Inter'] tracking-tight mb-2">
                  {t("emailAddress")}
                </label>
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="w-full bg-[#efefef] rounded-full px-4 lg:px-5 py-3 lg:py-4 text-[#a7a7a7] text-[14px] lg:text-[16px] font-['Inter'] tracking-tight outline-none focus:ring-2 focus:ring-[#353185]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[#121212] text-[14px] lg:text-[16px] font-['Inter'] tracking-tight mb-2">
                {t("message")}
              </label>
              <textarea
                placeholder={t("messagePlaceholder")}
                rows={4}
                className="w-full bg-[#efefef] rounded-2xl lg:rounded-[24px] px-4 lg:px-5 py-3 lg:py-4 text-[#a7a7a7] text-[14px] lg:text-[16px] font-['Inter'] tracking-tight outline-none resize-none focus:ring-2 focus:ring-[#353185]"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#353185] rounded-full px-5 py-3 lg:py-3 text-white text-[15px] lg:text-[18px] font-['Inter'] font-semibold tracking-tight text-center hover:bg-[#2d2870] transition-colors">
              {t("sendMessage")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
