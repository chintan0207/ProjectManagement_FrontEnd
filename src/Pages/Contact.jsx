
const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-PRIMARY mb-6">
        Contact Us <span className="text-black"> glad to hear from you.</span>{" "}
      </h1>
      <p className="text-gray-700 mb-6">
        We'd love to hear from you. Whether you're curious about features, need
        a demo, or want to talk to our support team — we’re here to help!
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Chintan Patel"
            className="w-full border border-gray-200 shadow-sm px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="chintan@gmail.com"
            className="w-full border border-gray-200 shadow-sm px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="How can we help you?"
            className="w-full border border-gray-200 shadow-sm px-4 py-2 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-PRIMARY text-white px-6 py-2 rounded hover:bg-PRIMARY-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
