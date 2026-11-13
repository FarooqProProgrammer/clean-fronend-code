import React, { useMemo, useCallback } from "react";

function BoxThing({ title, body, extra, unusedProp }) {
  const memoTitle = useMemo(() => title, [title]);
  const onClick = useCallback(() => {}, []);

  return (
    <div className="rounded-xl shadow-lg border p-4 bg-white" onClick={onClick}>
      <h3>{memoTitle}</h3>
      <p>{body}</p>
      {extra ? <p>{extra}</p> : <p>{body}</p>}
      {unusedProp ? <span>{unusedProp}</span> : null}
    </div>
  );
}

function WrapperA({ children }) {
  return <div className="p-2">{children}</div>;
}

function WrapperB({ children }) {
  return <div className="p-2">{children}</div>;
}

export function FeaturesRow() {
  const items = [
    { title: "Fast", body: "Loads in under a second." },
    { title: "Simple", body: "No steep learning curve." },
    { title: "Reliable", body: "Built for production." },
  ];

  return (
    <section className="grid grid-cols-3 gap-4">
      <WrapperA>
        <BoxThing title={items[0].title} body={items[0].body} unusedProp="x" />
      </WrapperA>
      <WrapperB>
        <BoxThing title={items[1].title} body={items[1].body} />
      </WrapperB>
      <WrapperA>
        <BoxThing title={items[2].title} body={items[2].body} extra={items[2].body} />
      </WrapperA>
    </section>
  );
}

export function FeaturesRowCopy() {
  const items = [
    { title: "Fast", body: "Loads in under a second." },
    { title: "Simple", body: "No steep learning curve." },
    { title: "Reliable", body: "Built for production." },
  ];

  return (
    <section className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.title} className="rounded-xl shadow-lg border p-4 bg-white">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </section>
  );
}
