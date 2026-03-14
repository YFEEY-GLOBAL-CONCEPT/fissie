import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const images = [
  { src: gallery1, caption: "Community outreach event" },
  { src: gallery2, caption: "Volunteers helping out" },
  { src: gallery3, caption: "Distribution of supplies" },
  { src: gallery4, caption: "Happy children" },
  { src: gallery5, caption: "Educational session" },
  { src: gallery6, caption: "Foundation activities" },
  { src: gallery7, caption: "Community support" },
  { src: gallery8, caption: "Empowerment program" },
  { src: gallery9, caption: "Health awareness" },
  { src: gallery10, caption: "Field work" },
];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="section-label mb-4">Our Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            A glimpse into our journey of restoring dignity and hope.
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
                <img src={img.src} alt={img.caption} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
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
          <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightbox].src} alt={images[lightbox].caption} className="w-full max-h-[80vh] object-contain rounded-lg" />
            <p className="text-primary-foreground text-center mt-4 text-lg">{images[lightbox].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
