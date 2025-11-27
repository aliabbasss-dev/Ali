"use client"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Creative Director",
      content: "Artshaft transformed our creative process. The results were absolutely phenomenal.",
      image: "/professional-headshot.png",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Lead",
      content: "Working with Artshaft has been a game-changer for our development workflow.",
      image: "/professional-headshot.png",
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Product Manager",
      content: "The quality and attention to detail is unmatched. Highly recommended for any project.",
      image: "/professional-headshot.png",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-400">Trusted by creative professionals worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{`"${testimonial.content}"`}</p>
              <div className="flex mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
