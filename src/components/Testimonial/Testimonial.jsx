import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import SchoolImage from "./About.jpg"
import Image from "next/image";
export function Testimonial() {
  return (
    <>
      <main className="w-full" style={{background:'linear-gradient(90deg, rgba(5,205,255,.15) 0%, rgba(0,149,181,.1) 80%)'}}>
        <section
          className="grid w-full container grid-cols-1 gap-8 py-12 md:grid-cols-2 md:gap-12 lg:py-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="text-gray-500 md:text-lg">
              Hear from our satisfied Customers about their experience with our service.
            </p>
            <div className="w-full max-w-md">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className="bg-[#F5F5F5] overflow-hidden">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
                        <blockquote className="text-lg font-medium leading-relaxed">
                        Stress Free Logistics truly lives up to its name! The team was professional, ensuring everything arrived at my new home in perfect condition. Highly recommended!
                        </blockquote>
                        <div>
                          <div className="font-medium">Ali Khan</div>
                          <div className="text-sm text-gray-500">IT Manager</div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="bg-[#F5F5F5] overflow-hidden">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
                        <blockquote className="text-lg font-medium leading-relaxed">
                        The team was professional, efficient, and careful with all my possessions. The entire process was seamless. Moving has never been this easy and stress-free!
                        </blockquote>
                        <div>
                          <div className="font-medium">Bilal Mirza</div>
                          <div className="text-sm text-gray-500">Engineer</div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="bg-[#F5F5F5] overflow-hidden">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
                        <blockquote className="text-lg font-medium leading-relaxed">
                        From the initial consultation to the final delivery, Stress Free Logistics exceeded my expectations. Their staff was friendly and attentive. Thank you for a stress-free move!
                        </blockquote>
                        <div>
                          <div className="font-medium">Hassan Raza</div>
                          <div className="text-sm text-gray-500">Entrepreneur</div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="bg-[#F5F5F5] overflow-hidden">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
                        <blockquote className="text-lg font-medium leading-relaxed">
                        Their team was well-organized and efficient. The move was completed ahead of schedule. Highly recommend them for a stress-free moving experience!
                        </blockquote>
                        <div>
                          <div className="font-medium">Ayesha Tariq</div>
                          <div className="text-sm text-gray-500">Architect</div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className={`absolute top-3/4 right-8 -translate-y-1/2`}>
                  <ChevronLeftIcon className="h-6 w-6" />
                  </CarouselPrevious>
                  <CarouselNext className="absolute top-3/4 right-12 -translate-y-1/2">
                  <ChevronRightIcon className="h-6 w-6" />
                  </CarouselNext>
              </Carousel>
            </div>
          </div>
          <div className="flex items-center justify-center">
          <Image
              alt="Courses"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="550"
              src={SchoolImage}
              width="550" />
          </div>
        </section>
      </main>
    </>
  );
}

function ChevronLeftIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>)
  );
}


function ChevronRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}
