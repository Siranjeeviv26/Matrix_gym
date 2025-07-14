export default function FeaturedBootcamps() {
  const bootcamps = [
    {
      title: "Strength & Sculpt Bootcamp",
      description: "Crush your limits with heavy lifts, resistance training, and functional moves. This bootcamp builds lean muscle, boosts strength, and sculpts your body from head to toe. Perfect for those who love to lift and sweat.",
      duration: "45 min"
    },
    {
      title: "HIIT & Burn Bootcamp",
      description: "Torch calories fast with this high-intensity interval training session. Quick bursts of effort, minimal rest, and heart-pumping circuits keep your metabolism fired up long after the workout ends.",
      duration: "60 min"
    },
    {
      title: "Core Crusher Bootcamp",
      description: "Ready to level up your core? This bootcamp targets abs, obliques, and lower back with stability drills, planks, crunches, and dynamic movements. Strengthen your center and improve your posture and balance.",
      duration: "30 min"
    },
    {
      title: "Power & Performance Bootcamp",
      description: "Unleash athletic potential with explosive movements, agility drills, and endurance rounds. Designed for speed, power, and stamina—great for athletes or anyone wanting to train like one.",
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
              Level up your fitness with our featured bootcamps—dynamic group sessions designed to challenge, motivate, and transform. 
              From strength training to fat-burning circuits, each bootcamp delivers results. 
              Train hard, stay strong, and crush your goals!
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
