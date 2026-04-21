export default function MaccasCabinetryWebsite() {
  const services = [
    {
      title: 'Custom Kitchens',
      description: 'Modern, functional kitchens built to suit your style, space, and budget.'
    },
    {
      title: 'Wardrobes & Storage',
      description: 'Built-in wardrobes, shelving, and smart storage solutions for every room.'
    },
    {
      title: 'Bathroom Vanities',
      description: 'Custom bathroom cabinetry designed for durability and a clean finish.'
    },
    {
      title: 'Laundry Fit-Outs',
      description: 'Practical and stylish laundry cabinetry to maximise space and storage.'
    }
  ];

  const projects = [
    {
      title: 'Luxury Kitchen Renovation',
      image: 'https://via.placeholder.com/1200x800?text=Kitchen+Project'
    },
    {
      title: 'Modern Walk-In Wardrobe',
      image: 'https://via.placeholder.com/1200x800?text=Wardrobe+Project'
    },
    {
      title: 'Custom Entertainment Unit',
      image: 'https://via.placeholder.com/1200x800?text=Entertainment+Unit'
    },
    {
      title: 'Laundry Storage Upgrade',
      image: 'https://via.placeholder.com/1200x800?text=Laundry+Project'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-black/90 backdrop-blur-md text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-[0.2em] uppercase">Maccas Cabinetry</h1>
          <nav className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]"></div>
        <div className="max-w-7xl relative mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4">Custom Cabinetry & Joinery</p>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Luxury Cabinetry Designed For Modern Living.
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Maccas Cabinetry creates high-quality custom kitchens, wardrobes, vanities, laundries, and storage solutions across Melbourne.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition shadow-lg"
              >
                Get a Free Quote
              </a>
              <a
                href="#projects"
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] p-10 shadow-2xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-2xl p-4">
                <h4 className="font-semibold">High Quality Workmanship</h4>
                <p className="text-sm text-gray-300 mt-1">Attention to detail in every cabinet and finish.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-4">
                <h4 className="font-semibold">Affordable Pricing</h4>
                <p className="text-sm text-gray-300 mt-1">Quality cabinetry without the premium price tag.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-4">
                <h4 className="font-semibold">Custom Designs</h4>
                <p className="text-sm text-gray-300 mt-1">Every project is built around your style and needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Our Services</p>
          <h2 className="text-4xl font-bold mt-3">What We Build</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-[2rem] shadow-xl p-8 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-gradient-to-b from-white to-gray-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Recent Projects</p>
            <h2 className="text-4xl font-bold mt-3">Work We’re Proud Of</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 transition duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-black">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Add your project photos and a short description here.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">About Us</p>
        <h2 className="text-4xl font-bold mt-3 mb-6">Premium Craftsmanship With A Luxury Finish</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At Maccas Cabinetry, we specialise in creating custom cabinetry that is functional, stylish, and built to last. Whether you need a full kitchen renovation or extra storage solutions, we work closely with you from start to finish to bring your vision to life.
        </p>
      </section>

      <section id="contact" className="bg-gradient-to-r from-black via-zinc-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Get In Touch</p>
          <h2 className="text-4xl font-bold mt-3 mb-6">Ready To Start Your Project?</h2>
          <p className="text-gray-300 mb-8">
            Contact Maccas Cabinetry today for a free quote and let’s build something amazing.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 border border-white/10">
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">0448221128</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 border border-white/10">
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">maccascabinetry@gmail.com.au</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 border border-white/10">
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Ballarat, Victoria</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
