"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { SocialIcons } from "@/components/ui/SocialIcons";

type Locale = "en" | "id";

export default function Footer() {
  const pathname = usePathname();

  // Extract locale from URL
  const locale = useMemo(() => {
    const segments = pathname.split("/");
    const localeCode = segments[1] as Locale;
    return localeCode === "en" || localeCode === "id" ? localeCode : "en";
  }, [pathname]);

  const companyLinks = [
    { name: "About", url: `/${locale}/profile/company-overview` },
    { name: "Career", url: `/${locale}/career/life-at-altama` },
    { name: "News", url: `/${locale}/media-center` },
  ];
  const productLinks = [
    { name: "Tekiro", url: "https://tekiro.com/" },
    { name: "Rexco", url: "https://rexco-solution.com/" },
    { name: "Ryu", url: "https://ryupowertools.com/" },
  ];
  const contactLinks = [
    { name: "Location", url: "https://maps.app.goo.gl/mvHzG5m7WgFD714H7" },
    { name: "Help", url: "mailto:customercare@altama.co.id" },
    { name: "Alva", url: "https://wa.me/6287777000966" },
  ];
  const overviewLinks = [
    { name: "Media Center", url: `/${locale}/media-center` },
    { name: "Gallery", url: `/${locale}/profile/gallery` },
    { name: "Career", url: `/${locale}/career/life-at-altama` },
    { name: "Privacy Policy", url: `/${locale}/Privacy` },
  ];

  return (
    <div className="relative w-full bg-[#353185] py-12 lg:py-20 overflow-hidden h-screen">
      {/* Decorative Element - Top Left - Hidden on mobile */}
      <div className="hidden lg:block absolute -left-[80px] -top-[150px] w-[500px] h-[500px] pointer-events-none">
        <Image
          fill
          sizes="500px"
          src="/images/ea8c5194ccd76102a358ded8c16351846216362c.webp"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Background Decorative Gradients - Hidden on mobile */}
      <div className="hidden lg:block absolute -left-[100px] -top-[120px] w-[490px] h-[505px] rotate-[16.435deg] opacity-50">
        <svg className="w-full h-full" fill="none" viewBox="0 0 666 691">
          <defs>
            <filter id="blur1" x="0" y="0" width="665.142" height="690.277">
              <feGaussianBlur stdDeviation="50" />
            </filter>
            <linearGradient
              id="grad1"
              x1="574.164"
              y1="16.9522"
              x2="127.672"
              y2="367.74"
            >
              <stop stopColor="#413CA4" />
              <stop offset="1" stopColor="#433EA8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M511.239 100L100 406.764L110.296 590.277L565.142 100H511.239Z"
            fill="url(#grad1)"
            filter="url(#blur1)"
          />
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px]">
        {/* Top Section: Logo and Navigation */}
        <div className="flex lg:flex-row flex-col items-start lg:justify-between gap-8 lg:gap-0 mb-10 lg:mb-16">
          {/* Logo */}
          <div>
            <Image
              width={350}
              height={150}
              alt="PT Altama Surya Anugerah"
              sizes="350px"
              className="h-[120px] lg:h-[100px] xl:h-[150px] w-auto"
              src="/images/footer.webp"
            />
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row gap-x-6 gap-y-8 lg:gap-[80px] lg:mr-[40px] w-full lg:w-auto">
            {/* Company */}
            <div>
              <h3 className="text-white text-[16px] lg:text-[24px] font-['League_Spartan'] font-bold tracking-tight lg:tracking-[-0.96px] mb-3 lg:mb-6">
                Company
              </h3>
              <div className="flex flex-col gap-2 lg:gap-3">
                {companyLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="text-white text-[14px] lg:text-[18px] font-['Inter'] font-medium lg:font-semibold tracking-tight lg:tracking-[-0.72px] hover:underline transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white text-[16px] lg:text-[24px] font-['League_Spartan'] font-bold tracking-tight lg:tracking-[-0.96px] mb-3 lg:mb-6">
                Product
              </h3>
              <div className="flex flex-col gap-2 lg:gap-3">
                {productLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[14px] lg:text-[18px] font-['Inter'] font-medium lg:font-semibold tracking-tight lg:tracking-[-0.72px] hover:underline transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-white text-[16px] lg:text-[24px] font-['League_Spartan'] font-bold tracking-tight lg:tracking-[-0.96px] mb-3 lg:mb-6">
                Contact Us
              </h3>
              <div className="flex flex-col gap-2 lg:gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[14px] lg:text-[18px] font-['Inter'] font-medium lg:font-semibold tracking-tight lg:tracking-[-0.72px] hover:underline transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Overview */}
            <div>
              <h3 className="text-white text-[16px] lg:text-[24px] font-['League_Spartan'] font-bold tracking-tight lg:tracking-[-0.96px] mb-3 lg:mb-6">
                Overview
              </h3>
              <div className="flex flex-col gap-2 lg:gap-3">
                {overviewLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="text-white text-[14px] lg:text-[18px] font-['Inter'] font-medium lg:font-semibold tracking-tight lg:tracking-[-0.72px] hover:underline transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <SocialIcons />

        {/* Copyright and Certifications */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-5">
          <p className="text-white text-[12px] lg:text-[18px] font-['League_Spartan'] font-medium tracking-tight lg:tracking-[-0.72px] text-center">
            Copyright 2025 PT. Altama Surya Anugerah. All Right Reserved
          </p>
        </div>
      </div>

      {/* Background Text - Hidden on mobile */}
      <div className="hidden lg:block absolute left-1/2 top-[400px] -translate-x-1/2 pointer-events-none w-full">
        <p
          className="text-[160px] font-['League_Spartan'] font-bold line-clamp-1 text-center bg-gradient-to-b from-[#413ca4] to-[#353185] to-[80%] bg-clip-text blur-[1px] select-none "
          style={{ WebkitTextFillColor: "transparent" }}
        >
          SPIRIT OF ALTAMA
        </p>
      </div>
    </div>
  );
}
