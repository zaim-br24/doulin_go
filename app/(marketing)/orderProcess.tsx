import React from "react";

export default function OrderProcess() {
  return (
    <section id="process" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            How It Works
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Easy Online Ordering
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🍽️",
                title: "Browse Menu",
                description: "Choose from our delicious options",
              },
              {
                icon: "🛒",
                title: "Add to Cart",
                description: "Select your favorite dishes",
              },
              {
                icon: "💳",
                title: "Checkout",
                description: "Securely pay for your order",
              },
              {
                icon: "🚚",
                title: "Enjoy!",
                description: "We'll deliver it fresh to you",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
