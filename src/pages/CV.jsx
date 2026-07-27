import React from "react";

const CV = () => {
  return (
    <section className="py-20 text-center bg-slate-900">
      <h2 className="text-4xl text-white font-bold mb-8">
        My CV
      </h2>

      {/* img CV */}
      <img
        src="/cv.png"
        alt="My CV"
        className="mx-auto w-full max-w-3xl rounded-lg shadow-lg"
      />

      {/* download PDF */}
      <a
        href="/cv.pdf"
        download
        className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Download CV
      </a>
    </section>
  );
};

export default CV;