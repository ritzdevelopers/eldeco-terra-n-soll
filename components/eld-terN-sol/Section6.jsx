import Image from "next/image";
import { PillButton } from "./ui/Buttons";
import { ASSETS } from "./ui/assets";

/*
  Section 6 — Gallery  (Figma 1:289, y 3928-4686, 1352 wide, py-56, gap 50)
    1:291 header : "Your Gateway To Luxury Living" Playfair SemiBold 36px over
                   a 756px 18px sub, with the "View All Photos" pill right
    1:299 plates : 1097x494 + 226x494, gap 29
    1:302 Group 1: the 102x102 Figma circle vector, at left-14 / top-367
*/

export default function Section6() {
  return (
    <section id="gallery" className="w-full bg-white py-10 lg:py-[56px]">
      <div className="mx-auto flex w-full max-w-frame flex-col items-start px-4 sm:px-8 min-[1400px]:px-[44px]">
        <div className="flex w-full flex-col items-center gap-[40px] lg:gap-[50px]">
          {/* ── 1:291 header ──────────────────────────────────────── */}
          <div className="flex w-full flex-wrap items-center justify-between gap-6 md:flex-nowrap">
            <div className="flex min-w-0 flex-col items-start gap-[15px] leading-[normal] md:flex-1 min-[1400px]:w-[756px] min-[1400px]:flex-none">
              <h2 className="font-playfair text-[28px] font-semibold text-black lg:text-[36px] lg:whitespace-nowrap">
                Your Gateway To Luxury Living
              </h2>
              <p className="w-full text-[16px] font-normal text-black/60 lg:text-[18px]">
                {`Discover luxury apartments in Sector 80 Gurgaon with premium amenities, modern living, & seamless connectivity.`}
              </p>
            </div>
            <PillButton as="a" href="#gallery">
              View All Photos
            </PillButton>
          </div>

          {/* ── 1:299 plates ──────────────────────────────────────── */}
          <div className="relative flex w-full flex-col items-center gap-[29px] md:flex-row md:items-stretch">
            <div className="relative aspect-[1097/494] w-full shrink-0 overflow-hidden md:min-w-0 md:flex-[1097] md:shrink min-[1400px]:h-[494px] min-[1400px]:w-[1097px] min-[1400px]:flex-none">
              <Image
                src={ASSETS.galleryMain.src}
                alt="Eldeco Terra & Sol elevation"
                fill
                sizes="(max-width: 1024px) 100vw, 1097px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden md:aspect-auto md:min-w-[140px] md:flex-[226] md:shrink min-[1400px]:h-[494px] min-[1400px]:w-[226px] min-[1400px]:flex-none">
              <Image
                src={ASSETS.gallerySide.src}
                alt="Interior detail"
                fill
                sizes="(max-width: 1024px) 100vw, 226px"
                className="object-cover"
              />
            </div>

            {/* 1:302 Group 1 */}
            <a
              href="#gallery"
              aria-label="Open the full gallery"
              className="absolute top-[calc(100%-80px)] left-[14px] block size-[64px] transition-transform hover:scale-105 md:top-auto md:bottom-[14px] lg:size-[82px] min-[1400px]:top-[367px] min-[1400px]:bottom-auto min-[1400px]:size-[102px]"
            >
              <Image
                src={ASSETS.galleryCircle.src}
                alt=""
                width={ASSETS.galleryCircle.width}
                height={ASSETS.galleryCircle.height}
                className="block size-full"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
