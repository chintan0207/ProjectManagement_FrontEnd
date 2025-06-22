const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to Project Build. These terms govern your access and use of our
        services, including projects, tasks, team chats, and Kanban tools.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>You agree to use the platform responsibly and professionally.</li>
        <li>You will not misuse chat, team invites, or project access.</li>
        <li>Admins can remove or restrict users violating team policies.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Account Suspension</h2>
      <p className="mb-4">
        Project Build reserves the right to suspend or terminate accounts that
        abuse our system or violate these terms.
      </p>
      <p>
        For questions, contact <strong>legal@projectbuild.com</strong>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
