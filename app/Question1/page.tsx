export default function Question1() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Next.js and React Comparison</h1>
    
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Please compare the similarities and differences between Next.js and React.</h2>
        <p className="text-gray-600 italic">A high-level overview is sufficient (up to a couple of paragraphs). No need to write an essay!</p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Similarities:</h3>
        <p className="text-gray-600">
          Next.js and React both utilize JavaScript for building web applications in a modular and reusable manner. They both have strong communities with extensive documentation and resources available to learn more about how to code and build.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Differences:</h3>
        <p className="text-gray-600">
          Next.js is a full-fledged framework built on top of React, making it much easier to build full-stack applications. Next.js offers built-in features such as server-side rendering (amazing for SEO and site performance), static site generation, and API routes. Because of the preconfigured setup and sensible defaults, Next.js simplifies the development process overall. Adversely React is a library that focuses on UI components and requires additional tools and setup for a complete application. React provides a lot of flexibility and control over the entire application setup but requires manual configuration of build tools, bundlers, and other needed tools. React has a wider ecosystem with a lot of libraries and tools. Next.js has its own ecosystem specifically designed for Next.js development.
        </p>
      </section>
    </div>
  </div>
  );
}
