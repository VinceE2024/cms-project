import React from 'react'

export default function Question3() {
  return (
    <div className="font-sans text-gray-800 bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Hi Customer,</h2>
            <p className="mb-4">Thanks for reaching out!</p>
            <p className="mb-4">When thinking about best practices for redirects, here are a few things to consider:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong className="font-semibold">Be mindful of Redirect Limits</strong>: Vercel supports a maximum of 1,024 redirects in the array, and the string length for source and destination is limited to 4,096 characters. Going over these may require the use of Edge Middleware and Edge Config or any other Redis like solution to dynamically read redirect values.
              </li>
              <li>
                <strong className="font-semibold">Permanent vs. Temporary Redirects</strong>: If you use permanent redirects for permanent URL changes, keep in mind this may affect SEO and are cached by clients. Temporary redirects are for temporary changes and does not affect SEO.
              </li>
            </ul>
            <p className="mb-4">
              For more information on best practices, take a look at our documentation on Redirects{' '}
              <a href="https://vercel.com/docs/edge-network/redirects" className="text-blue-600 hover:underline">
                here
              </a>
              .
            </p>
            <p className="mb-4">If you have a specific question to a particular situation, please let me know.</p>
            <p>Cheers and Happy Shipping!</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-6">
          This email was sent by Vercel Support. If you have any questions, please contact us at{' '}
          <a href="mailto:support@vercel.com" className="text-blue-600 hover:underline">
            support@vercel.com
          </a>
        </p>
      </div>
    </div>
  )
}