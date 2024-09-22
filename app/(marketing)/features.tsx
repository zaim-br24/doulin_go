import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
}

const featuredDishes: Dish[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil",
    image: "",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description: "Creamy pasta with pancetta and Pecorino Romano cheese",
    image: "",
  },
  {
    id: 3,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers",
    image: "",
  },
];
export default function Features() {
  return (
    <section id="menu" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Our Menu
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Dishes
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.map((dish) => (
              <Card key={dish.id}>
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={400}
                  height={300}
                  className="rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{dish.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg">View Full Menu</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
