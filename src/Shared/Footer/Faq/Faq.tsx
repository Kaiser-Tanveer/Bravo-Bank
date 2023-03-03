import React from "react";

const Faq = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>

      <div className="py-2">
        <h2 className="text-lg font-bold mb-2">
          How do I open a bank account?
        </h2>
        <p className="text-gray-700">
          You can open a bank account online by visiting our website and filling
          out the account opening form. Alternatively, you can visit one of our
          branches and speak to one of our customer service representatives to
          open an account in person.
        </p>
      </div>

      <div className="py-2">
        <h2 className="text-lg font-bold mb-2">
          What documents do I need to open a bank account?
        </h2>
        <p className="text-gray-700">
          You will need to provide a valid government-issued ID, such as a
          passport or driver's license, and proof of address, such as a utility
          bill or bank statement. Additional documentation may be required
          depending on the type of account you are opening.
        </p>
      </div>

      <div className="py-2">
        <h2 className="text-lg font-bold mb-2">How do I make a deposit?</h2>
        <p className="text-gray-700">
          You can make a deposit by visiting one of our branches and depositing
          cash or a check with one of our customer service representatives.
          Alternatively, you can make a deposit using our online banking system
          or mobile app.
        </p>
      </div>

      <div className="py-2">
        <h2 className="text-lg font-bold mb-2">What fees do you charge?</h2>
        <p className="text-gray-700">
          Our fee structure varies depending on the type of account and services
          you use. Please refer to our fee schedule for more information, which
          can be found on our website or by contacting one of our customer
          service representatives.
        </p>
      </div>

      <div className="py-2">
        <h2 className="text-lg font-bold mb-2">
          How do I report a lost or stolen card?
        </h2>
        <p className="text-gray-700">
          If your debit or credit card is lost or stolen, please contact us
          immediately by calling our 24-hour customer service hotline at [Your
          phone number]. We will cancel your card and issue you a new one as
          soon as possible.
        </p>
      </div>

      <div className="py-2">
        <h2 className="text-lg font-bold mb-2">
          How do I contact customer service?
        </h2>
        <p className="text-gray-700">
          You can contact our customer service team by calling [Your phone
          number], sending an email to [Your email address], or visiting one of
          our branches. Our customer service representatives are available 24/7
          to assist you with any questions or concerns you may have.
        </p>
      </div>
    </div>
  );
};

export default Faq;
