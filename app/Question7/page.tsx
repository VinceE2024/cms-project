export default function Question7() {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Question 7</h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Background:</h3>
            <p className="text-gray-700">
              I am a CISO for a firm that just signed on for Enterprise with
              Vercel Secure Compute. I am looking forward to meeting you for an
              onboarding session to talk about the security products Vercel offers as well
              as go over the state of our customer journey.
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Question:</h3>
            <p className="text-gray-700">
              What resources would you want to prepare to make sure that the
              CISO has everything they need to succeed as they migrate to the Enterprise
              version of the platform? Feel free to use documentation from <a href="http://vercel.com" className="text-blue-600 hover:underline">vercel.com</a>,
              and our YouTube channel to find assets to help.
            </p>
          </div>
        </div>
        <div className="space-y-4 text-gray-700">
          <h3 className="text-xl font-semibold text-gray-800">Resources I would use to prepare for this chat:</h3>
          <ol className="list-decimal list-inside space-y-4 pl-4">
            <li>
              To get a high level overview, I would use Prompts in Glean such as, What are Vercels Security Products? How does Vercels Security Products affect business outcomes? I find this to be a better option due to Gleans use of internal documentation.
            </li>
            <li>
              Next, I would set up a quick 15 to 20 min with Ty Sbano, Vercels CISO. There I would pick his brain on things that would be important to him about Vercel if he was onboarding.
            </li>
            <li>
              Next, I would use Gong Calls from the AE that fostered the deal, and other CSMs and compile and list of questions and even duplicate slides that are relevant to IS in general, CISO in particular.
            </li>
            <li>
              Next, I would collaborate with a TC or SE to make sure all the information I have collected is sisynced and accurate so I can speak to the CISO needs directly.
            </li>
            <li>
              Finally, I would take all this information and create a custom deck to communicate this information, hopefully making the CISOs experience informed and smooth.
            </li>
          </ol>
        </div>
      </div>
    )
  }