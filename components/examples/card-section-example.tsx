import CardsViewSection from "../sections/cards-view-section";
import ExampleCard from "./example-card";

export default function CardSectionExample() {
  return (
    <CardsViewSection sectionName="Card Section Example">
      {[1, 2, 3, 4, 5].map((i) => (
        <ExampleCard key={i} />
      ))}
    </CardsViewSection>
  );
}