import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Visit Us or Order Online
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1616562308246!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                <p>123 Pasta Street, New York, NY 10001</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-2" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-2" />
                <p>info@bellaitalia.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-primary mr-2" />
                <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
