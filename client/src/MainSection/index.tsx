import React from "react";

interface MainSectionProps {
  children: JSX.Element[];
}

const MainSection = (props: MainSectionProps): JSX.Element => {
  const children = props.children;

  return (
    <section id="main-section">
      {React.Children.map(children, (child, i) => {
        return <div id={`child-${i}`}>{child}</div>;
      })}
    </section>
  );
};

export default MainSection;
