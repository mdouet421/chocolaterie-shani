import { createFileRoute } from "@tanstack/react-router";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// NOTE: the local Button has no `outline` variant, so the carousel arrows use
// the `secondary` variant instead of the shadcn default `outline`.

function CarouselShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <div className="px-12">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="secondary" />
            <CarouselNext variant="secondary" />
          </Carousel>
        </div>
      </SubSection>

      <SubSection title="Multiple slides per view">
        <div className="px-12">
          <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="secondary" />
            <CarouselNext variant="secondary" />
          </Carousel>
        </div>
      </SubSection>

      <SubSection title="Vertical orientation">
        <div className="py-12">
          <Carousel
            opts={{ align: "start" }}
            orientation="vertical"
            className="w-full max-w-xs"
          >
            <CarouselContent className="-mt-1 h-[270px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2 pt-1">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="secondary" />
            <CarouselNext variant="secondary" />
          </Carousel>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/carousel")({
  component: CarouselShowcase,
});
