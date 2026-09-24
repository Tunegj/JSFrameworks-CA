import { useState } from "react";

export function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [subjectError, setSubjectError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validateFullName(): boolean {
    if (fullName.trim().length < 3) {
      setFullNameError("Name must be at least 3 characters long.");
      return false;
    }
    setFullNameError(null);
    return true;
  }

  function validateSubject(): boolean {
    if (subject.trim().length < 3) {
      setSubjectError("Subject must be at least 3 characters long.");
      return false;
    }
    setSubjectError(null);
    return true;
  }

  function validateMessage(): boolean {
    if (message.trim().length < 10) {
      setMessageError("Message must be at least 10 characters long.");
      return false;
    }
    setMessageError(null);
    return true;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateEmail(): boolean {
    if (!emailPattern.test(email.trim())) {
      setEmailError("Invalid email address, please try again.");
      return false;
    }
    setEmailError(null);
    return true;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (isFullNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      setIsSubmitted(true);
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }

  function clearSubmittedStatus() {
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-gray-600">
            Have a question? Send us a message and we'll get back to you.
          </p>
        </div>

        {isSubmitted && (
          <p
            role="status"
            className="mb-6 rounded-md border border-green-200 bg-green-50 p-4 font-medium text-green-800"
          >
            Thank you! Your message has been submitted successfully.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
          noValidate
        >
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block font-medium text-gray-900"
            >
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              autoComplete="name"
              id="fullName"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (fullNameError) {
                  setFullNameError(null);
                }

                clearSubmittedStatus();
              }}
              aria-invalid={fullNameError ? "true" : "false"}
              aria-describedby={fullNameError ? "fullName-error" : undefined}
              className={`w-full rounded-md border px-4 py-3 text-gray-900 outline-none transition focus:ring-2  ${
                fullNameError
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                  : "border-gray-300 focus:border-green-600 focus:ring-green-600"
              }`}
            />
            {fullNameError && (
              <p id="fullName-error" className="mt-1 text-sm text-red-700">
                {fullNameError}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) {
                  setEmailError(null);
                }

                clearSubmittedStatus();
              }}
              aria-invalid={emailError ? "true" : "false"}
              aria-describedby={emailError ? "email-error" : undefined}
              className={`w-full rounded-md border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 ${
                emailError
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                  : "border-gray-300 focus:border-green-600 focus:ring-green-600"
              }`}
            />
            {emailError && (
              <p id="email-error" className="mt-1 text-sm text-red-700">
                {emailError}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                if (subjectError) {
                  setSubjectError(null);
                }
                clearSubmittedStatus();
              }}
              aria-invalid={subjectError ? "true" : "false"}
              aria-describedby={subjectError ? "subject-error" : undefined}
              className={`w-full rounded-md border px-4 py-3 text-gray-900 outline-none transition focus:ring-2  ${
                subjectError
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                  : "border-gray-300 focus:border-green-600 focus:ring-green-600"
              }`}
            />
            {subjectError && (
              <p id="subject-error" className="mt-1 text-sm text-red-700">
                {subjectError}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (messageError) {
                  setMessageError(null);
                }
                clearSubmittedStatus();
              }}
              aria-invalid={messageError ? "true" : "false"}
              aria-describedby={messageError ? "message-error" : undefined}
              className={`w-full rounded-md border px-4 py-3 text-gray-900 outline-none transition focus:ring-2 ${
                messageError
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                  : "border-gray-300 focus:border-green-600 focus:ring-green-600"
              }`}
            ></textarea>
            {messageError && (
              <p id="message-error" className="mt-1 text-sm text-red-700">
                {messageError}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 sm:w-auto"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
