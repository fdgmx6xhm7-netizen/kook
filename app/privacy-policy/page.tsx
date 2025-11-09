import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kook",
  description: "Our privacy policy and how we handle data.",
  openGraph: {
    title: "Privacy Policy | Kook",
    description: "Our privacy policy and how we handle data.",
    images: ["/privacy-og.jpg"],
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Effective Date: November 9, 2025</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to Kook. We value your privacy. Currently, our site does not
          collect any personal data from users, as features like login and
          registration are under preparation. This Privacy Policy explains our
          practices regarding any potential future data handling and
          non-personal information we may process.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p>
          At present, we do not collect any personal information from users. We
          may use cookies or similar technologies for basic analytics and site
          functionality, such as tracking site usage anonymously. No
          identifiable data is stored.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How We Use Information</h2>
        <p>
          Since we do not collect personal data, there is no usage of such
          information. Any anonymous data collected (e.g., via cookies) is used
          solely to improve site performance and user experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Data Sharing and Disclosure
        </h2>
        <p>
          We do not share any personal data, as none is collected. Anonymous
          analytics data may be shared with service providers for site
          maintenance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p>
          As we do not collect personal data, there are no personal records to
          access, update, or delete. If future features involve data collection,
          we will update this policy accordingly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Security</h2>
        <p>
          We implement reasonable measures to protect our site, even though no
          personal data is collected.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
        <p>
          We may update this policy as our site evolves. Changes will be posted
          on this page.
        </p>
      </section>

      <p className="mt-8">
        If you have any questions, please contact us at privacy@kook.com.
      </p>
    </div>
  );
}
