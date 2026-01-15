export default function VSL() {
  return (
    <section className="relative z-20 py-20 bg-black">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="relative w-full max-w-4xl">
          {/* Glow */}
          <div className="absolute -inset-8 bg-primary/30 blur-3xl rounded-[32px]" />

          {/* Video box */}
          <div className="relative bg-black/70 border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/sIAON_fEgmM"
                title="Starcine Play - Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
