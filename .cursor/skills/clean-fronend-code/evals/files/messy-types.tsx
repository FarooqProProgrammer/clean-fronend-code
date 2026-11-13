import React from "react";

interface FeatureItem {
  title: string;
  body: string;
}

type FeaturesRowProps = {
  items: FeatureItem[];
  heading?: string;
};

enum FeatureTone {
  Default = "default",
  Accent = "accent",
}

export function FeaturesRow({ items, heading = "Features" }: FeaturesRowProps) {
  return (
    <section>
      <h2>{heading}</h2>
      <ul>
        {items.map((item: FeatureItem) => (
          <li key={item.title} data-tone={FeatureTone.Default}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PricingCard() {
  interface Price {
    amount: number;
    currency: string;
  }

  type PricingCardProps = {
    name: string;
    price: Price;
  };

  const props: PricingCardProps = {
    name: "Pro",
    price: { amount: 29, currency: "USD" },
  };

  return (
    <div>
      <h3>{props.name}</h3>
      <p>
        {props.price.currency} {props.price.amount}
      </p>
    </div>
  );
}
