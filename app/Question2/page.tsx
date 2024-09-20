export default function Question2() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Question 2</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">A customer has reached out asking, “When should I choose to use Edge
Functions, Serverless Functions, or Edge Middleware with Vercel?” Write a
reply to the customer.</h2>
            <p className="text-gray-600 italic">If you use documentation or AI as a guide, please
only use it to guide your answer. Put it in your own words, please! Feel free
to reference documentation in your answer though.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Hi Customer</h3>
            <p className="text-gray-600">
              Thanks for reaching out!
            </p>
          </section>
          
          <section>

            <p className="text-gray-600">
              When considering using Edge Functions, Serverless Functions, or Edge Middleware, ask yourself these 3 questions:
              </p> 
              </section>

              <section>

<p className="text-gray-600">
1. What are my needs around performance?
    A. If you need to avoid cold boots, reduce cost of overall execution, or need faster response times, Edge Functions will be ideal.
    </p>
    </section>

    <section>  
    <p className="text-gray-600">   
2. What are my needs around functionality?
    B. If you need flexible backend logic, auto scaling, and handling high traffic, Serverless Functions is what you are looking for.
    </p>
    </section>

    <section>  
    <p className="text-gray-600">
3. What are my needs around execution context?
    C. If you want to run business logic before your requests, geolocation personalization needs, want dynamic routing, efficient A/B Testing, and, early response handling, and header manipulation, Edge Middleware is the solution for you.
    </p>
    </section>
    
    <section>

            <p className="text-gray-600">

Ultimately, choose the best approach that answers these question most efficiently and that meet overall developer and business need. 

<section>
<p className="text-gray-600">
*I used a combination of information from Vercel’s AI SDK playground. Claude 3 and Gemini 1.5. I also had a crash course in coding in order to understand these concepts with Garrett (Vercel Sales Engineer.)
</p>
          </section>
            </p>
          </section>
        </div>
      </div>
      );
    }
    