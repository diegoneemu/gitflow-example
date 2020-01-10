import React, { FunctionComponent } from "react";

type MainSectionProps = {};

const MainSection: FunctionComponent<MainSectionProps> = ({
  children
}): JSX.Element => {
  return (
    <section id="main-section">
      {React.Children.map(children, (child, i) => {
        return <div id={`child-${i}`}>{child}</div>;
      })}
    </section>
  );
};

export default MainSection;
