import Image from "next/image";
import { EllipseLink, PillButton } from "./ui/Buttons";
import { ASSETS } from "./ui/assets";

/*
  Section 2 — Overview  (Figma 1:65, y 775-1728, bg #fffdfb, py-56)
    1:69  content-stack : eyebrow + 44x1.8 rule + "Eldeco terra&sol",
                          then three 1160px centred paragraphs (gap 16)
    1:77  metric row    : "G+30  Floors" chip, then three labels separated by
                          1x61 #f2e5c0 rules, gap 43
    1:86  two 616x345 plates, gap 41
    1:89  button row    : 334px wide, space-between
*/

const PARAGRAPHS = [
  "Premium residential property in Gurugram from Eldeco Group. It is an exceptional fusion of luxurious comfort and unparalleled connectivity and modern metropolitan living. An over 2.7 acre property with 200 well-appointed homes and 40+ international standard lifestyle features.",
  "Only 4 apartments per core, this residential project, consisting of 3 BHK and 3.5 BHK luxury apartments at Sector 80, has been conceptualized for the select few, offering absolute privacy and exclusivity. All the apartments have been designed to provide maximum refreshing airflow and abundant natural light and cross-ventilation, built more than 30 feet above the ground level.",
  "An array of thoughtfully planned and meticulously curated amenities add the touch of rejuvenation and recreation to your lifestyle at Eldeco Terra & Sol.",
];

const METRICS = ["Only 2 Towers", "224 Total units", "2.7 Acres Land Parcel"];

export default function Section2() {
  return (
    <section id="overview" className="w-full bg-eld-page py-10 lg:py-[56px]">
      <div className="mx-auto flex w-full max-w-frame flex-col items-center gap-[47px] px-4 sm:px-8 xl:px-0">
        <div className="flex w-full flex-col items-center gap-[50px]">
          {/* ── 1:69 content-stack ────────────────────────────────── */}
          <div className="flex w-full flex-col items-center gap-[16px]">
            {/* 1:70 eyebrow + rule + headline */}
            <div className="flex flex-col items-center justify-center gap-[10px] sm:flex-row">
              <p className="text-[13px] leading-[normal] font-semibold whitespace-nowrap text-eld-bronze uppercase">
                Overview
              </p>
              <span aria-hidden="true" className="h-[1.8px] w-[44px] shrink-0 bg-eld-bronze" />
              <h2 className="font-playfair text-[26px] leading-[1.25] font-medium whitespace-nowrap text-eld-bronze lg:text-[32px]">
                Eldeco terra&amp;sol
              </h2>
            </div>

            {PARAGRAPHS.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="w-full max-w-[1160px] text-center text-[15px] leading-[1.6] font-normal text-black/60 lg:text-[16px]"
              >
                {p}
              </p>
            ))}
          </div>

          {/* ── 1:77 metric row ───────────────────────────────────── */}
          <div className="flex w-full flex-wrap items-center justify-center gap-[20px] lg:gap-[43px]">
            <button
              type="button"
              data-open-popup
              className="group flex shrink-0 cursor-pointer items-center justify-center bg-transparent px-[44px] py-[10px] transition-colors duration-300 hover:bg-eld-bronze"
            >
              <span className="font-playfair-display text-[20px] leading-[normal] font-normal whitespace-pre text-black transition-colors duration-300 group-hover:text-eld-cream lg:text-[24px]">
                {`G+30  Floors`}
              </span>
            </button>
            {METRICS.map((metric) => (
              <button
                type="button"
                data-open-popup
                key={metric}
                className="group relative flex shrink-0 cursor-pointer items-center justify-center bg-transparent px-[44px] py-[10px] transition-colors duration-300 hover:bg-eld-bronze"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 left-[-22px] hidden h-[61px] w-px -translate-y-1/2 bg-eld-cream transition-opacity duration-300 group-hover:opacity-0 lg:block"
                />
                <span className="font-playfair-display text-[20px] leading-[normal] font-normal whitespace-nowrap text-black transition-colors duration-300 group-hover:text-eld-cream lg:text-[24px]">
                  {metric}
                </span>
              </button>
            ))}
          </div>

          {/* ── 1:86 two 616x345 plates ───────────────────────────── */}
          <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row lg:gap-[41px] lg:px-[41px]">
            {[ASSETS.overview1, ASSETS.overview2].map((asset) => (
              <div
                key={asset.src}
                className="relative aspect-[616/345] w-full overflow-hidden md:min-w-0 md:max-w-[616px] md:flex-1"
              >
                <Image
                  src={asset.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 616px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── 1:89 button row ─────────────────────────────────────── */}
        <div className="flex w-full max-w-[390px] flex-nowrap items-start justify-between gap-4">
          <a
            href="/brochure.pdf"
            data-open-popup
            aria-label="Download Brochure"
            className="group/morph relative block h-[44px] min-w-0 flex-1 hover:z-10 sm:w-[187px] sm:flex-none"
          >
            <PillButton
              as="span"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 w-full transition-[opacity,transform] duration-300 group-hover/morph:scale-95 group-hover/morph:opacity-0"
            >
              Download Brochure
            </PillButton>
            <EllipseLink
              as="span"
              tone="bronze"
              aria-hidden="true"
              className="pointer-events-none absolute top-[1px] left-0 w-full scale-95 opacity-0 transition-[opacity,transform] duration-300 group-hover/morph:scale-100 group-hover/morph:opacity-100"
            >
              Download Brochure
            </EllipseLink>
          </a>
          <a
            href="#callback"
            data-open-popup
            aria-label="Book a Site Visit"
            className="group/morph relative block h-[44px] min-w-0 flex-1 hover:z-10 sm:w-[187px] sm:flex-none"
          >
            <PillButton
              as="span"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 w-full transition-[opacity,transform] duration-300 group-hover/morph:scale-95 group-hover/morph:opacity-0"
            >
              Book a Site Visit
            </PillButton>
            <EllipseLink
              as="span"
              tone="bronze"
              aria-hidden="true"
              className="pointer-events-none absolute top-[1px] left-0 w-full scale-95 opacity-0 transition-[opacity,transform] duration-300 group-hover/morph:scale-100 group-hover/morph:opacity-100"
            >
              Book a Site Visit
            </EllipseLink>
          </a>
        </div>
      </div>
    </section>
  );
}
