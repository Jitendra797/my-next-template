import ExampleCard from "./example-card";

export default function CardSectionExample() {
  return (
    <>
      {
        [1, 2, 3, 4, 5].map((i) => (
          <ExampleCard key={i} />
        ))
      }
    </>
  );
}