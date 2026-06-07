import { ASSETS } from "@/lib/assets";

export default function GallerySection() {
  return (
    <section className="bg-bg-light py-24 px-6 lg:px-10" id="gallery">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-primary text-3xl font-bold text-center mb-12">Hình Ảnh Thực Tế</h2>

        {/* Asymmetric grid matching Figma layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[200px_200px] gap-4">
          {/* Big left image — spans 2 cols × 2 rows */}
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
            <img
              src={ASSETS.galleryBig}
              alt="Sân tập lái xe Hoàng Việt"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Top right 1 */}
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
            <img
              src={ASSETS.galleryTopRight1}
              alt="Học viên thực hành lái xe"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Top right 2 */}
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
            <img
              src={ASSETS.galleryTopRight2}
              alt="Mô phỏng lái xe"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom right — spans 2 cols */}
          <div className="col-span-2 row-span-1 rounded-xl overflow-hidden">
            <img
              src={ASSETS.galleryBottomRight}
              alt="Xe tập lái Hoàng Việt"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
