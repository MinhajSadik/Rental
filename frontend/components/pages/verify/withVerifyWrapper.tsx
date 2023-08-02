import React from "react";

const withVerifyWrapper = (WrappedComponent: React.ComponentType) => {
  const VerifyWrapper: React.FC = () => {
    return (
      <section className="bg-transparent">
        <div className="max-w-[1024px] mx-auto w-full lg:px-8 md:px-6 px-4 lg:py-16 py-14">
          <WrappedComponent/>
        </div>
      </section>
    )
  }
  return VerifyWrapper;
};

export default withVerifyWrapper;