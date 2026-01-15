import Image from "next/image"

export default function Devices() {
  return (
    <section id="dispositivos" className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold text-white mb-10">
          Assista em seus dispositivos favoritos
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <Image
              src="/logos/devices-logos.png"
              alt="Dispositivos compatíveis: Google Play, App Store, Web, Android TV, Smart TV, Apple TV"
              width={1600}
              height={240}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

