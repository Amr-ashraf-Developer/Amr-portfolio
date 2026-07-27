import React from "react";

const CV = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 py-20">
      <div className="text-center">
        {/* CV Image */}
        <img
          src="/images/cv-preview.png"
          alt="CV Preview"
          className="max-w-4xl w-full rounded-xl shadow-2xl border border-gray-700"
        />

        {/* Download Button */}
        <a
          href="/cv/Amr-Ashraf-CV.pdf"
          download
          className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default CV;