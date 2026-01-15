import Image from "next/image"

export default function StreamingLogos() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-6xl">
          <Image
            src="/logos/streaming-logos.png"
            alt="Plataformas disponíveis no Starcine Play"
            width={1600}
            height={300}
            className="w-full h-auto object-contain opacity-90"
            priority
          />
        </div>
      </div>
    </section>
  )
}

