"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "./ui/Icons";
import { PillButton } from "./ui/Buttons";
import { ASSETS } from "./ui/assets";

/*
  Section 4 — Modern Amenities  (Figma 1:180, y 2472-3346, bg white, h 874)
    1:181 wrapper (1264 wide, top 74, gap 66)
    1:182 header  : "Modern Amenities" Playfair SemiBold 36px + 18px sub,
                    "View All Amenities" pill on the right
    1:190 accordion-track : h580, 1px #dcdad4 border, overflow-clip.
          collapsed panel : w72, pt-24 pb-32 px-12, 28px rgba(184,144,71,.14)
                            plus chip, rotated 15px title, 36px #5c574d numeral
          active panel    : flex-1, p-32, 280px rounded-8 photo, Playfair
                            Display 28px title, 14px/1.5 #706963 copy,
                            underlined "Enquire For Access" + 48px numeral
*/

const AMENITIES = [
  { title: "All Weather Infinity Pool" },
  { title: "Lawn Tennis Court" },
  { title: "Yoga & Aerobics" },
  {
    title: "Jogging and Fitness Tracks",
    description:
      "Meticulously paved, tree-shaded woodlands engineered for morning runs and quiet evening walks, completely isolated from vehicular movement.",
  },
  { title: "Landscaped Podium Greens" },
  { title: "Badminton, Cricket, & Squash Court" },
  { title: "3 High-Speed Lift Per Tower" },
  { title: "Exclusive GQ Club" },
];

// 1:196 / 1:204 / ... — height of the rotated label box per collapsed panel.
const LABEL_HEIGHTS = [175, 134, 116, 220, 202, 258, 202, 131];

export default function Section4() {
  const [active, setActive] = useState(3); // 1:215 panel-active-4

  return (
    <section id="amenities" className="w-full bg-white py-10 lg:py-[74px]">
      <div className="mx-auto flex w-full max-w-frame flex-col items-start gap-[40px] px-4 sm:px-8 lg:gap-[66px] lg:px-[88px]">
        {/* ── 1:182 header ──────────────────────────────────────── */}
        <div className="flex w-full flex-wrap items-center justify-between gap-6">
          <div className="flex flex-col items-start gap-[15px] leading-[normal] lg:w-[324px]">
            <h2 className="font-playfair w-full text-[28px] font-semibold text-black lg:text-[36px]">
              Modern Amenities
            </h2>
            <p className="w-full text-[16px] font-normal text-black/60 lg:text-[18px]">
              Best Amenities In Gurgaon Residences
            </p>
          </div>
          <PillButton as="a" href="#callback">
            View All Amenities
          </PillButton>
        </div>

        {/* ── 1:190 accordion-track (desktop) ───────────────────── */}
        <div className="hidden h-[580px] w-full overflow-clip border border-eld-line-3 bg-white xl:flex">
          {AMENITIES.map((item, i) => {
            const isActive = i === active;

            return (
              <div
                key={item.title}
                className={`relative h-full min-w-0 shrink-0 overflow-hidden transition-[flex-grow] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === 0 ? "border-0" : "border-l border-eld-line-3"
                }`}
                style={{
                  flexBasis: "72px",
                  flexGrow: isActive ? 1 : 0,
                }}
              >
                <div
                  aria-hidden={!isActive}
                  className={`absolute inset-0 flex h-full min-w-[420px] flex-col items-start justify-between p-[32px] transition-[opacity,transform] duration-500 ease-out ${
                    isActive
                      ? "pointer-events-auto translate-x-0 opacity-100 delay-200"
                      : "pointer-events-none -translate-x-3 opacity-0"
                  }`}
                >
                  <div className="flex w-full flex-col items-start gap-[24px]">
                    <div className="relative h-[280px] w-full overflow-hidden rounded-[8px]">
                      <Image
                        src={ASSETS.amenityActive.src}
                        alt=""
                        fill
                        sizes="(max-width: 1440px) 50vw, 696px"
                        className="rounded-[8px] object-cover"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-[12px]">
                      <h3 className="font-playfair-display w-full text-[28px] leading-[normal] font-semibold text-eld-ink-2">
                        {item.title}
                      </h3>
                      <p className="w-full text-[14px] leading-[1.5] font-normal text-eld-muted-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between leading-[normal] whitespace-nowrap">
                    <a
                      href="#callback"
                      className="text-[13px] font-bold text-eld-ink-2 underline decoration-solid"
                    >
                      Enquire For Access
                    </a>
                    <p className="text-[48px] font-normal text-eld-numeral">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  className={`absolute inset-y-0 left-0 flex w-[72px] flex-col items-center justify-between px-[12px] pt-[24px] pb-[32px] transition-[background-color,opacity] duration-300 hover:bg-eld-surface ${
                    isActive
                      ? "pointer-events-none opacity-0"
                      : "pointer-events-auto opacity-100 delay-300"
                  }`}
                >
                  <span className="flex h-[460px] flex-col items-center justify-between">
                    <span className="flex size-[28px] flex-col items-center justify-center rounded-[14px] bg-[rgba(184,144,71,0.14)]">
                      <Plus className="size-[12px] text-eld-ink-2" />
                    </span>
                    <span
                      className="flex w-[19px] items-center justify-center overflow-visible"
                      style={{ height: `${LABEL_HEIGHTS[i]}px` }}
                    >
                      <span className="block -rotate-90 text-[15px] leading-[normal] font-semibold whitespace-nowrap text-eld-ink-2">
                        {item.title}
                      </span>
                    </span>
                  </span>
                  <span className="text-center text-[36px] leading-[normal] font-normal whitespace-nowrap text-eld-numeral">
                    {i + 1}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* tablet / mobile — same content, stacked */}
        <div className="flex w-full flex-col border border-eld-line-3 xl:hidden">
          {AMENITIES.map((item, i) => {
            const isActive = i === active;
            return (
              <div key={item.title} className="border-b border-eld-line-3 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  aria-expanded={isActive}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left"
                >
                  <span className="text-[24px] font-normal text-eld-numeral">{i + 1}</span>
                  <span className="flex-1 text-[15px] font-semibold text-eld-ink-2">
                    {item.title}
                  </span>
                  <span className="flex size-[28px] shrink-0 flex-col items-center justify-center rounded-[14px] bg-[rgba(184,144,71,0.14)]">
                    <Plus
                      className={`size-[12px] text-eld-ink-2 transition-transform ${
                        isActive ? "rotate-45" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-4 pb-5">
                      <div className="relative aspect-[696/280] w-full overflow-hidden rounded-[8px]">
                        <Image
                          src={ASSETS.amenityActive.src}
                          alt=""
                          fill
                          sizes="100vw"
                          className="rounded-[8px] object-cover"
                        />
                      </div>
                      {item.description && (
                        <p className="mt-3 text-[14px] leading-[1.5] text-eld-muted-2">
                          {item.description}
                        </p>
                      )}
                      <a
                        href="#callback"
                        className="mt-3 inline-block text-[13px] font-bold text-eld-ink-2 underline"
                      >
                        Enquire For Access
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
