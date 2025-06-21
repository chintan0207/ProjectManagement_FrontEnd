import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Build, Manage, and Collaborate with{" "}
          <span className="text-violet-600">ProjectBuild</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          A platform to manage projects, assign tasks, collaborate with your
          team, and chat — all in one place.
        </p>
        <Link
          to="/signup"
          className="bg-violet-600 text-white px-6 py-3 rounded hover:bg-violet-700 transition"
        >
          Get Started Free
        </Link>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-violet-50 py-20 px-6 text-center scroll-mt-20"
      >
        <h2 className="text-4xl font-bold mb-12">
          All-in-One Project Management
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="Projects & Boards"
            desc="Organize tasks using flexible Kanban-style boards."
          />
          <FeatureCard
            title="Tasks & Subtasks"
            desc="Create and manage nested tasks with due dates."
          />
          <FeatureCard
            title="Team Collaboration"
            desc="Invite team members and assign specific roles."
          />
          <FeatureCard
            title="Real-Time Chat"
            desc="Chat with project members in real time."
          />
          <FeatureCard
            title="Role-Based Access"
            desc="Control access levels for better security and clarity."
          />
          <FeatureCard
            title="Activity Logs"
            desc="Track updates, changes, and team activities."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="bg-white py-20 px-6 text-center scroll-mt-20"
      >
        <h2 className="text-4xl font-bold mb-8">Flexible Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Free"
            price="$0/mo"
            description="Perfect for individuals"
            features={["Up to 3 Projects", "Basic Boards", "Team Chat"]}
            cta="Start Free"
            ctaLink="/signup"
          />
          <PricingCard
            title="Pro"
            price="$9/mo"
            description="For growing teams"
            features={[
              "Unlimited Projects",
              "Advanced Permissions",
              "Priority Support",
            ]}
            highlight
            cta="Upgrade Now"
            ctaLink="/signup"
          />
          <PricingCard
            title="Enterprise"
            price="Let's Talk"
            description="Custom solution"
            features={["SSO", "Custom Roles", "Dedicated Manager"]}
            cta="Contact Us"
            ctaLink="#contact"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-violet-50 py-20 px-6 text-center scroll-mt-20"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Have questions? Want a custom demo?
        </p>
        <a
          href="mailto:support@projectbuild.com"
          className="bg-violet-600 text-white px-6 py-3 rounded hover:bg-violet-700"
        >
          support@projectbuild.com
        </a>
      </section>

      <section
        id="faq"
        className="bg-white py-20 px-6 text-center scroll-mt-20"
      >
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          <FAQItem
            question="What is ProjectBuild?"
            answer="ProjectBuild is a complete project management platform that helps teams organize work, manage tasks, and communicate in real time."
          />
          <FAQItem
            question="Can I use ProjectBuild for free?"
            answer="Yes, we offer a free plan with essential features for individuals and small teams. You can upgrade anytime."
          />
          <FAQItem
            question="Do you support Kanban boards?"
            answer="Absolutely! Every project can be organized into Kanban boards for better task visualization."
          />
          <FAQItem
            question="Is there a team chat feature?"
            answer="Yes, ProjectBuild includes built-in chat for each project so teams can collaborate without switching tools."
          />
          <FAQItem
            question="How can I invite team members?"
            answer="You can invite members via email and assign them specific roles such as admin, manager, or member."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

// 🔹 Reusable components below

const FeatureCard = ({ title, desc }) => (
  <div className="bg-white shadow p-6 rounded">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const PricingCard = ({
  title,
  price,
  description,
  features,
  highlight,
  cta,
  ctaLink,
}) => (
  <div
    className={`border border-gray-200 p-6 rounded shadow-sm ${
      highlight ? "bg-violet-50 border-violet-300" : "bg-white"
    }`}
  >
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-500 mb-4">{description}</p>
    <p className="text-3xl font-bold mb-6">{price}</p>
    <ul className="text-sm text-gray-600 space-y-2 mb-6">
      {features.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
    {ctaLink.startsWith("/") ? (
      <Link
        to={ctaLink}
        className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700"
      >
        {cta}
      </Link>
    ) : (
      <a
        href={ctaLink}
        className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700"
      >
        {cta}
      </a>
    )}
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded p-4">
      <button
        className="w-full text-left flex justify-between items-center font-medium text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="ml-4 text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="mt-3 text-gray-600">{answer}</p>}
    </div>
  );
};
