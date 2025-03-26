import React from "react";

export default function Page() {
  return (
    <>
      <section className="my-28">
        <h1 className="text-4xl md:text-7xl font-bold text-center mt-12 mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hell naw!
        </h1>
        <div className="flex justify-center mx-5">
          <img
            className="rounded-xl"
            width={600}
            height={600}
            src="/dog.png"
            alt="heli naw!"
          />
        </div>
      </section>
    </>
  );
}
