import React from "react";

const WhatsNew = () => {
  return (
    <section className="bg-gray-100 mb-20 text-gray-800">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
              <h3 className="text-3xl font-semibold">Whats New!</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                in Bravo Bank
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
                <h3 className="text-xl font-semibold tracking-wide">
                  Virtual Financial Assistant
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Jan 2023
                </time>
                <p className="mt-3">
                  A virtual financial assistant is a chatbot that uses
                  artificial intelligence to help customers manage their
                  finances. Customers can ask questions and receive answers
                  about their account balances, transactions, and other
                  banking services. This feature can provide customers with
                  convenient, 24/7 access to banking services without the need
                  to visit a branch or call customer service.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
                <h3 className="text-xl font-semibold tracking-wide">
                  Real-time Fraud Alerts
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Feb 2023
                </time>
                <p className="mt-3">
                  This feature alerts customers immediately when suspicious
                  activity occurs on their account, such as unauthorized
                  charges or large withdrawals. Customers can receive alerts
                  via text message or email and take quick action to prevent
                  any further fraudulent activity. This feature can help
                  customers stay on top of their account security and prevent
                  financial losses due to fraud.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
                <h3 className="text-xl font-semibold tracking-wide">
                  Personalized Financial Recommendations
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Feb 2023
                </time>
                <p className="mt-3">
                  This feature uses customer data and artificial intelligence
                  to provide personalized financial recommendations to
                  customers. The recommendations can include savings goals,
                  investment strategies, and debt reduction plans tailored to
                  the customer's financial situation and goals. This feature
                  can help customers make informed decisions about their
                  finances and improve their overall financial health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
