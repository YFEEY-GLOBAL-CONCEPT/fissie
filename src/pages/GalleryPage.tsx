import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-main.png";
import gallery2 from "@/assets/excursion-img.png";
import gallery3 from "@/assets/awareness-img.png";
import gallery4 from "@/assets/group-img.png";
import gallery5 from "@/assets/outreach-img.png";
import gallery6 from "@/assets/team-img.png";
import gallery7 from "@/assets/cta-bg-img.png";
import gallery8 from "@/assets/gallery-7.png";
import gallery9 from "@/assets/gallery-8.png";
import CTABanner from "@/components/CTABanner";

const images = [
  { src: gallery1, caption: "Our Activities" },
  { src: gallery2, caption: "Foundation Outreach" },
  { src: gallery3, caption: "Community Support" },
  { src: gallery4, caption: "Special Moments" },
  { src: gallery5, caption: "Daily Impact" },
  { src: gallery6, caption: "Care and Love" },
  { src: gallery7, caption: "Nurturing Growth" },
  { src: gallery8, caption: "Empowering Lives" },
  { src: gallery9, caption: "Building Futures" },
];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="section-label mb-4">Our Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Moments of Impact
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative group cursor-pointer rounded-xl overflow-hidden"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                  <p className="text-primary-foreground text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-primary-foreground text-center mt-4 text-lg">
              {images[lightbox].caption}
            </p>
          </div>
        </div>
      )}
      <CTABanner />
    </div>
  );
};

export default GalleryPage;
