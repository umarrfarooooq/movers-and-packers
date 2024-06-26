import Image from "next/image";
import image1 from "@public/gallery/gallery1.jpeg"
import image2 from "@public/gallery/gallery2.jpeg"
import image3 from "@public/gallery/gallery3.jpeg"
import Link from "next/link";
export function HomeGalleryComponent() {
  return (
    (<section className="w-full pb-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative group overflow-hidden rounded shadow-xl cursor-pointer">
            <Image
              alt="Packing"
              className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
              height="300"
              src={image1}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400" />
            <div
              className="absolute inset-0 bg-black/50 flex items-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Packing</h3>
                <p className="text-sm">Our expert packers ensure your belongings are safely secured.</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded shadow-xl cursor-pointer">
            <Image
              alt="Transporting"
              className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
              height="300"
              src={image2}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400" />
            <div
              className="absolute inset-0 bg-black/50 flex items-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Transporting</h3>
                <p className="text-sm">We transport your belongings safely to your new location.</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded shadow-xl cursor-pointer">
            <Image
              alt="Unloading"
              className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
              height="300"
              src={image3}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400" />
            <div
              className="absolute inset-0 bg-black/50 flex items-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Unloading</h3>
                <p className="text-sm">Our team carefully unloads your belongings at your new home.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center my-16">
        <button>
          <Link className="bg-[#05CDFF] hover:bg-[#38bfe0] transition-all text-gray-100 font-bold rounded-lg px-8 py-4" href="/gallery">
            See All
          </Link>
        </button>
      </div>
      </div>
    </section>)
  );
}
