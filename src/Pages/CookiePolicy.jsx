
const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="mb-4">
        Project Build uses cookies to enhance your experience, remember your
        login, and help us improve productivity analytics across your projects.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Types of Cookies We Use
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Essential cookies:</strong> Required for login and
          authentication
        </li>
        <li>
          <strong>Analytics cookies:</strong> Help us analyze usage of tasks and
          boards
        </li>
        <li>
          <strong>Functional cookies:</strong> Remember your preferences and
          dark mode
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Managing Cookies</h2>
      <p>
        You can control cookie settings in your browser at any time. By using
        Project Build, you consent to our use of cookies in accordance with this
        policy.
      </p>
    </div>
  );
};

export default CookiePolicy;
