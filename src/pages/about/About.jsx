import React from "react";
import BannerSection from "../../components/BannerSection";
import HeadingSection from "../../components/HeadingSection";

const About = () => {
  return (
    <>
      <BannerSection name="About Us" />

      <div className="section-container">
        <HeadingSection
          heading="Our Story"
          description="Discover the journey that led us to where we are today."
        />

        <div className="flex flex-col gap-8 px-8 sm:px-20 lg:px-48">
          <div className="space-y-4">
            <h2 className="font-bold text-xl">Who We Are</h2>
            <p className="text-sm">
              We are a dedicated team of professionals committed to providing the best services in our industry. Our passion for excellence drives us to innovate and exceed expectations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-xl">Our Mission</h2>
            <p className="text-sm">
              Our mission is to empower our clients through innovative solutions and exceptional service, ensuring that their needs are met with professionalism and care.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-xl">Our Values</h2>
            <ul className="list-disc list-inside text-sm">
              <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
              <li>Customer Commitment: We develop relationships that make a positive difference in our customers' lives.</li>
              <li>Quality: We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
              <li>Teamwork: We work together, across boundaries, to meet the needs of our customers and to help the company win.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-xl">Meet Our Team</h2>
            <p className="text-sm">
              Our team consists of highly skilled individuals from diverse backgrounds, all working together to create value and drive success. Together, we bring a wealth of experience and a shared commitment to excellence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm">CEO</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="text-sm">CTO</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold">Emily Johnson</h3>
                <p className="text-sm">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
