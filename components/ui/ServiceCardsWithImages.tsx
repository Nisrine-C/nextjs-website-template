import ServiceCardWithImage from "@/components/ui/ServiceCardWithImage";
import FadeInOnScroll from "./FadeInOnScroll";
import "@/styles/shadow-effect.css";

interface CardData {
  imageSrc: string;
  title: string;
  description: string;
  highlight?: string;
}

interface ProcessedCard extends CardData {
  orientation: "horizontal" | "vertical";
  direction: number;
}

export default function ServiceCardsWithImages({
  services,
}: {
  services: CardData[];
}) {
  // Process cards with automatic orientation and direction
  const processedCards = services.map((card, index) => {
    const isEvenRow = Math.floor(index / 3) % 2 === 0;
    const positionInRow = index % 3;

    return {
      ...card,
      orientation: isEvenRow
        ? positionInRow < 2
          ? "horizontal"
          : "vertical"
        : positionInRow === 0
        ? "vertical"
        : "horizontal",
      direction: positionInRow % 2,
    };
  });

  // Group into sets of 3 cards per row
  const cardRows = [];
  for (let i = 0; i < processedCards.length; i += 3) {
    cardRows.push(processedCards.slice(i, i + 3));
  }

  return (
    <div className="container mt-12 sm:px-6 px-0 md:px-8 sm:mx-auto max-w-6xl mx-0">
      <div className="space-y-4 md:space-y-0 shadow-effect-services ">
        {cardRows.map((row, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;

          return (
            <div
              key={`row-${rowIndex}`}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0"
            >
              {isEvenRow ? (
                /* Even row: 2 horizontal + 1 vertical */
                <>
                  <div className="md:col-span-2 grid grid-rows-2 gap-4 md:gap-0">
                    <div className="md:h-[250px] md:h-full">
                      <FadeInOnScroll delay={0.2}>
                        <ServiceCardWithImage {...row[0]} />
                      </FadeInOnScroll>
                    </div>
                    {row[1] && (
                      <div className="md:h-[250px] md:h-full">
                        <FadeInOnScroll delay={0.2}>
                          <ServiceCardWithImage {...row[1]} />
                        </FadeInOnScroll>
                      </div>
                    )}
                  </div>
                  {row[2] && (
                    <div className="md:col-start-3 md:row-span-2 md:h-[250px] md:h-full">
                      <FadeInOnScroll delay={0.2}>
                        <ServiceCardWithImage {...row[2]} />
                      </FadeInOnScroll>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {row[0] && (
                    <div className="md:col-start-1 md:row-span-2 md:h-[250px] md:h-full">
                      <FadeInOnScroll delay={0.2}>
                        <ServiceCardWithImage {...row[0]} />
                      </FadeInOnScroll>
                    </div>
                  )}
                  <div className="md:col-span-2 grid grid-rows-2 gap-4 md:gap-0">
                    {row[1] && (
                      <div className="md:h-[250px] md:h-full">
                        <FadeInOnScroll delay={0.2}>
                          <ServiceCardWithImage {...row[1]} />
                        </FadeInOnScroll>
                      </div>
                    )}
                    {row[2] && (
                      <div className="md:h-[250px] md:h-full">
                        <FadeInOnScroll delay={0.2}>
                          <ServiceCardWithImage {...row[2]} />
                        </FadeInOnScroll>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
