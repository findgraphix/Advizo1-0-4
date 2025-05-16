
import React from 'react';
import SmoothFadeIn from './SmoothFadeIn';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    quote: "Thanks to Consult Advizo, Shehri turned challenges into wins—harnessing resourcefulness and strategic alliances to create a profitable fashion brand in no time. Exceptional results!",
    name: "Shubham Shungloo",
    role: "Founder & CEO",
    company: "Shehri"
  },
  {
    id: 2,
    quote: "PMF Fitness broke through its ceiling with Consult Advizo’s strategic guidance—leveraging data, alliances, and creative service design to achieve explosive growth. Their expertise turns ambition into reality!",
    name: "Mukul Nagpaul",
    role: "Founder & CEO",
    company: "PMF"
  },
  {
    id: 3,
    quote: "Consult Advizo slashed our operational costs while boosting profit margins—delivering real results where it matters most. Their strategic insights transformed our bottom line!",
    name: "Jazib Samsi",
    role: "CEO",
    company: "FAS"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 bg-advizo-darkgray text-white">
      <div className="container mx-auto px-4">
        <SmoothFadeIn>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-white">Client Testimonials</h2>
            <p className="text-lg mt-2 text-gray-300">
              Hear what our clients have to say about us
            </p>
          </div>
        </SmoothFadeIn>

        <SmoothFadeIn delay={120}>
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-full pl-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg text-white relative flex flex-col md:flex-row gap-6">
                      <div className="text-7xl font-serif text-advizo-gold opacity-30 absolute top-2 left-4">"</div>
                      <div className="md:w-3/4 pt-6 relative z-10">
                        <p className="text-lg">{testimonial.quote}</p>
                      </div>
                      <div className="md:w-1/4 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-700 md:pl-6 pt-4 md:pt-0">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-advizo-gold">{testimonial.role}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-4">
                <CarouselPrevious className="static bg-transparent border-white hover:bg-white/20 text-white" />
                <CarouselNext className="static bg-transparent border-white hover:bg-white/20 text-white" />
              </div>
            </Carousel>
          </div>
        </SmoothFadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
