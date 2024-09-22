import Image from 'next/image';
import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            2bros: Fresh Flavors, Delivered to You{" "}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At 2bros, we're passionate about serving delicious meals made with
            the freshest ingredients. our dedication to quality and flavor is
            unwavering, bringing you the best dining experience right to your
            door.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Image
              src=""
              alt="Restaurant interior"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <Image
              src=""
              alt="Chef cooking"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
