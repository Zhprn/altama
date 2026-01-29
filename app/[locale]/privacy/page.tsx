"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations("privacy.privacy");

  return (
    <>
      <div className="relative w-full h-[150px] lg:h-[350px] bg-[#F9F9F9] mt-10 lg:mt-0">
        <Image
          src="/images/banner_altama.webp"
          alt="Banner Altama"
          fill
          className="object-cover"
        />
      </div>

      <section className="bg-[#FFC300] py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center font-semibold text-xl md:text-2xl mb-8">
            {t("title")}
          </h1>

          <p className=" text-sm md:text-base leading-relaxed mb-6 text-justify">
            {t("introduction")}
          </p>

          <div className="mb-6">
            <h2 className=" font-semibold text-base md:text-lg mb-2">
              {t("dataUser")}
            </h2>
            <ol className="list-decimal list-inside text-[#121212] text-sm md:text-base ml-4 space-y-1">
              <li>{t("dataItems.cvAndApplication")}</li>
              <li>{t("dataItems.email")}</li>
              <li>{t("dataItems.phone")}</li>
            </ol>
          </div>

          <div className="mb-8">
            <h2 className="font-semibold text-base md:text-lg mb-2">
              {t("content")}
            </h2>
            <ol className="list-decimal list-inside text-sm md:text-base ml-4 space-y-1">
              <li>{t("contentItems.brand")}</li>
              <li>{t("contentItems.career")}</li>
              <li>{t("contentItems.contactUs")}</li>
            </ol>
          </div>

          <p className="text-[#121212] text-sm md:text-base leading-relaxed text-justify">
            {t("closing")}
          </p>
        </div>
      </section>

      <section className="w-full p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="relative w-full lg:w-2/3 h-[300px] lg:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9396753839547!2d106.78842507499477!3d-6.1384799937944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1de3c3fdb571%3A0x7e8d9c8a7e8d9c8a!2sJl.%20Bandengan%20Utara%20No.85A%2C%20RT.3%2FRW.16%2C%20Penjaringan%2C%20Kec.%20Penjaringan%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014440!5e0!3m2!1sen!2sid!4v1734451200000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          <div className="w-full lg:w-1/3 bg-[#353185] flex items-center justify-center py-10 lg:py-0 px-6">
            <div className="text-center text-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-[#FFC300]">
                PT. ALTAMA SURYA ANUGERAH
              </h3>
              <div className="space-y-1 text-sm lg:text-base mb-6">
                <p>Jl. Bandengan Utara</p>
                <p>No.85A, RT.3/RW.16,</p>
                <p>Penjaringan, North Jakarta</p>
                <p>Jakarta 14440 Indonesia</p>
              </div>
              <p className="text-sm lg:text-base">Telp : (021) 6680180</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
