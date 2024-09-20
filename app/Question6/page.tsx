export default function Component() {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Question 6</h2>
          <p className="text-gray-600">
            A customer, new to Next.js and Vercel, asks about a high usage bill
            regarding fast origin transfer and fast data transfer. What would be the best
            way to help mitigate this? Feel free to use AI to help supplement your
            answer, but only use AI to help guide your answer and put it into your own
            words. You can help the customer by providing Vercel or Next.js resources
            if necessary.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Email Response</h3>
          <div className="space-y-4 text-gray-700">
            <p>Hi Customer,</p>
            <p>
              Totally understand the frustration and excitement this can be and we can provide some possible solutions for you.
            </p>
            <p>
              To help mitigate high usage bills related to Fast Origin Transfer and Fast Data Transfer, you can execute on the following suggestions:
            </p>
            <ol className="list-decimal list-inside pl-4 space-y-2">
              <li>
                <span className="font-semibold">Optimize Caching Strategy</span>: If you can implement effective caching strategies for your Vercel Function requests, future requests can be served from the Edge Network cache rather than calling the function again. This can reduce your FOT usage. More information can be found <a href="https://vercel.com/docs/pricing/networking#fast-origin-transfer" className="text-blue-600 hover:underline">here</a>.
              </li>
              <li>
                <span className="font-semibold">Monitor and Analyze Usage</span>: Regularly monitor your usage metrics to identify any unusual patterns or spikes in FOT and FDT. Vercel's usage dashboard will give you detailed insights into your data transfer metrics.
              </li>
              <li>
                <span className="font-semibold">Review Documentation</span>: Vercel provides detailed documents that can be reviewed to help reduce FOT and FDT. Feel free to take a look at these:
                <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                  <li>
                    <a href="https://vercel.com/docs/pricing/networking#fast-origin-transfer" className="text-blue-600 hover:underline">
                      https://vercel.com/docs/pricing/networking#fast-origin-transfer
                    </a>
                  </li>
                  <li>
                    <a href="https://vercel.com/docs/pricing/networking#fast-data-transfer" className="text-blue-600 hover:underline">
                      https://vercel.com/docs/pricing/networking#fast-data-transfer
                    </a>
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              By understanding and implementing these suggestions and what you find in the documentation, you should be able to better manage your data transfer and lower costs.
            </p>
            <p>
              Please continue to reach out if this persists.
            </p>
            <p>Cheers,</p>
          </div>
        </div>
      </div>
    )
  }