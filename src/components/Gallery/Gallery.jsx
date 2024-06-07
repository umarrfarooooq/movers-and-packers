import Image from "next/image";

export function GalleryComponent() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative group overflow-hidden rounded shadow-xl cursor-pointer">
            <Image
              alt="Packing"
              className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
              height="300"
              src="/placeholder.svg"
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
            <img
              alt="Loading"
              className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400" />
            <div
              className="absolute inset-0 bg-black/50 flex items-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Loading</h3>
                <p className="text-sm">Our team carefully loads your belongings onto the truck.</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded shadow-xl cursor-pointer">
            <Image
              alt="Transporting"
              className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
              height="300"
              src="/placeholder.svg"
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
              src="/placeholder.svg"
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
          <div className="relative group overflow-hidden rounded shadow-xl cursor-pointer">
            <Image
              alt="Storage"
              className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400" />
            <div
              className="absolute inset-0 bg-black/50 flex items-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Storage</h3>
                <p className="text-sm">We offer secure storage solutions for your belongings.</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded shadow-xl cursor-pointer">
            <Image
              alt="Insurance"
              className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400" />
            <div
              className="absolute inset-0 bg-black/50 flex items-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Insurance</h3>
                <p className="text-sm">We provide comprehensive insurance coverage for your move.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}
