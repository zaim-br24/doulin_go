import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function SpecialOffers() {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">
            Special Offers
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Deals You Can't Resist
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  20% Off First Order
                </h3>
                <p className="mt-2 text-gray-500">Use code: WELCOME20</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Free Delivery
                </h3>
                <p className="mt-2 text-gray-500">On orders over $50</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
