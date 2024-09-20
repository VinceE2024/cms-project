export default function Question5() {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Question 5</h2>
          <p className="text-gray-600">
            A customer is just getting started with Vercel and has questions about
            recommended options for third-party integrations for Monitoring or
            Logging. How would you respond to the customer?
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Email Response</h3>
          <div className="space-y-4 text-gray-700">
            <p>Hi Customer,</p>
            <p>
              First and foremost, welcome to Vercel! We're super excited to be a part of your development journey.
            </p>
            <p>
              To answer your questions about 3rd party integrations for Logging and Monitoring, you'd be greatly enabled by our Vercel Marketplace: 
              <a href="https://vercel.com/marketplace" className="text-blue-600 hover:underline">https://vercel.com/marketplace</a>. 
              Here you can have a direct place to browse our 3rd Party integrations for your needs such as Axiom or Baselime for Logging and Checkly or DeBugBear for Monitoring, for example.
            </p>
            <p>For additional best practices on selecting and using Logging and Monitoring, please refer to these two documentation sources:</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>
                Logging: <a href="https://vercel.com/docs/observability/log-drains" className="text-blue-600 hover:underline">https://vercel.com/docs/observability/log-drains</a>
              </li>
              <li>
                Monitoring: <a href="https://vercel.com/docs/observability/monitoring/monitoring-reference" className="text-blue-600 hover:underline">https://vercel.com/docs/observability/monitoring/monitoring-reference</a>
              </li>
            </ul>
            <p>Please feel free to continue to reach out if you have specific questions.</p>
            <p>Cheers and Happy Shipping!</p>
          </div>
        </div>
      </div>
    )
  }