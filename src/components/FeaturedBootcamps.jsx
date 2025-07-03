export default function FeaturedBootcamps() {
  const bootcamps = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel elit egestas bibendum lorem ipsum dolor sit amet consectetur.",
      duration: "45 min"
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel elit egestas bibendum lorem ipsum dolor sit amet consectetur.",
      duration: "60 min"
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel elit egestas bibendum lorem ipsum dolor sit amet consectetur.",
      duration: "30 min"
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel elit egestas bibendum lorem ipsum dolor sit amet consectetur.",
      duration: "50 min"
    }
  ];

  return (
    <section id="featuredbootcamps" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">FEATURED BOOTCAMPS</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur 
              adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit. 
              Consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="space-y-6">
            {bootcamps.map((bootcamp, index) => (
              <div
                key={`${bootcamp.title}-${bootcamp.duration}-${index}`}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-semibold text-lg">{bootcamp.title}</h3>
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    {bootcamp.duration}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{bootcamp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
