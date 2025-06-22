
const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Project Build, your privacy is important to us. This policy explains
        how we collect, use, and protect your personal information when you use
        our platform.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>User profile details such as name, email, and role</li>
        <li>Team communication and chat history</li>
        <li>Project activity and task metadata</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Data</h2>
      <p className="mb-4">
        We use the information to improve collaboration features, enhance your
        team experience, and provide secure access to your projects and Kanban
        boards.
      </p>
      <p>
        For more detailed inquiries, please contact us at{" "}
        <strong>support@projectbuild.com</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
