import React from "react";

const Accessibility = () => {
  return (
    <div className="bg-gray-100 py-4 px-4">
      <h4 className="text-gray-600 text-3xl mb-2">Accessibility Statement</h4>
      <p className="text-gray-500 text-lg mb-4">
        At Bravo Bank, we strive to make our website accessible to everyone,
        including people with disabilities. Here are some of the measures we
        take to ensure accessibility:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          We follow WCAG 2.1 Level AA guidelines to ensure our website is fully
          accessible to people with disabilities.
        </li>
        <li>
          We provide alternative text for images and other non-text content to
          make them accessible to screen readers and other assistive
          technologies.
        </li>
        <li>
          We use high-contrast color schemes and clear, easy-to-read fonts to
          make our website more readable for people with visual impairments.
        </li>
        <li>
          We provide keyboard shortcuts and other alternative navigation methods
          to make our website more usable for people who cannot use a mouse or
          touchpad.
        </li>
        <li>
          We regularly test our website for accessibility using automated tools
          as well as manual testing by people with disabilities.
        </li>
      </ul>
      <p className="text-gray-500 text-lg">
        If you encounter any accessibility issues while using our website,
        please let us know by contacting our customer support team. We are
        committed to ensuring that all of our customers can access and use our
        services to their fullest potential.
      </p>
    </div>
  );
};

export default Accessibility;
