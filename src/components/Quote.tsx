// src/components/Quote.tsx



const Quote = () => {
  return (
    <section className="my-16 md:my-24">
      <div className="max-w-3xl mx-auto text-center relative border border-gray-700 p-8 rounded-lg">
        <div className="absolute -top-8 -left-4 text-8xl text-green-400/30 font-serif opacity-50">
          “
        </div>
        <blockquote className="text-2xl md:text-3xl italic text-gray-200 z-10 relative">
          Syntax errors keep me humble.
        </blockquote>
        <div className="absolute -bottom-12 -right-4 text-8xl text-green-400/30 font-serif opacity-50">
          ”
        </div>
      </div>
    </section>
  );
};

export default Quote;
