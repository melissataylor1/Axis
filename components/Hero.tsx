export default function Hero() {
  return (
    <section className="hero relative">
      <div className="overlay">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex h-screen">
          {/* Hero content */}
          <div className=" my-auto md:pt-32">
            {/* Section header */}
            <div className="text-left pb-12 md:pb-16 self-center">
              <p
                id="hero-sub"
                className=" text-lg text-gray-600 mb-8 text-white ml-2"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Servicing Southern Ontario + more!{" "}
              </p>
              <h1
                id="title"
                className="text-white uppercase text-5xl font-bold md:text-8xl lg:text-7xl leading-tight tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Axis<br></br>{" "}
                <span className="text-amber-400">
                  Contracting <br></br>& Locating
                </span>{" "}
                <br></br>Services
              </h1>
              <button
                className="md:mt-8 uppercase relative text-center px-7 py-5 md:px-10 transition-all duration-500
            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-amber-400 before:transition-all
            before:duration-300 before:opacity-90 before:hover:opacity-0 before:hover:scale-50
            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
            after:border after:border-amber/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                <span className="relative text-white uppercase" id="hero-btn">
                  Get a Free Quote
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
