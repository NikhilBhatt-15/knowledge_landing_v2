import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Know[ledge] by SocialShift",
  description:
    "Read the Privacy Policy for Know[ledge] by SocialShift. Learn how we collect, use, and protect your personal information when you use our app and services.",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | Know[ledge] by SocialShift",
    description:
      "Learn how Know[ledge] by SocialShift collects, uses, and protects your data.",
    url: "https://knowhistory.xyz/privacy-policy",
    siteName: "Know[ledge]",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Know[ledge] by SocialShift",
    description:
      "Read how Know[ledge] by SocialShift handles your privacy and data.",
  },
};
export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#242B7A] min-h-screen py-16 px-4 sm:px-8 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-[#D4E333]">
          Privacy Policy
        </h1>
        <p className="mb-8 text-lg text-[#CFABFA]">Last updated: January 2026</p>

        <p className="mb-6">
          SocialShift Corp. operates the Know[ledge] mobile application and related services. This Privacy Policy explains how we collect, use, share, and protect personal information when you use our Services.
        </p>
        <p className="mb-6">
          By accessing or using Know[ledge], you acknowledge that you have read and understood this Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          Information We Collect
        </h2>
        
        <h3 className="text-xl font-semibold mb-2">Information You Provide</h3>
        <p className="mb-4">
          We collect information you choose to provide, including:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-1 text-[#CFABFA]">
          <li>Name and email address</li>
          <li>Account login credentials</li>
          <li>Profile details and content you submit within the app</li>
          <li>Messages and communications you send to us</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Information Collected Automatically</h3>
        <p className="mb-4">
          When you use the services, we collect certain technical and usage information, including:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-1 text-[#CFABFA]">
          <li>Device identifiers and mobile operating system information</li>
          <li>IP address and general location derived from it</li>
          <li>App usage data such as features used, pages viewed, and time spent</li>
          <li>Diagnostic, crash, and performance data</li>
        </ul>
        <p className="mb-6">
          We may collect this information through technologies such as software development kits, log files, and similar tools used to operate and improve mobile applications.
        </p>

        <h3 className="text-xl font-semibold mb-2">Third-Party Account Information</h3>
        <p className="mb-6">
          If you sign in through a third-party service such as Google, Apple, or Facebook, we receive the information you authorize that provider to share, typically your name, email address, and profile image.
        </p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          How We Use Information
        </h2>
        <p className="mb-4">We use personal information to:</p>
        <ul className="mb-6 list-disc list-inside space-y-1 text-[#CFABFA]">
          <li>Provide, maintain, and operate the services</li>
          <li>Create and manage user accounts</li>
          <li>Personalize educational content and experiences</li>
          <li>Communicate with users about updates, features, and support</li>
          <li>Process subscriptions and payments</li>
          <li>Monitor performance, security, and platform integrity</li>
          <li>Detect fraud, abuse, or violations of our policies</li>
          <li>Meet legal and regulatory obligations</li>
        </ul>
        <p className="mb-6 font-semibold text-[#D4E333]">We do not sell personal information.</p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          Legal Bases for Processing (EEA and UK Users)
        </h2>
        <p className="mb-4">Where applicable, we process personal data based on:</p>
        <ul className="mb-6 list-disc list-inside space-y-1 text-[#CFABFA]">
          <li>Your consent</li>
          <li>Performance of a contract when providing the services</li>
          <li>Legitimate interests, including improving, securing, and maintaining the platform</li>
          <li>Compliance with legal obligations</li>
          <li>Vital interests where safety or security is involved</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          Payments
        </h2>
        <p className="mb-6">
          Payments and subscriptions are processed by third-party payment providers. We do not store full payment card numbers or financial account details on our servers. Payment providers handle your information under their own privacy policies.
        </p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          Data Retention
        </h2>
        <p className="mb-4">We retain personal information only for as long as necessary to:</p>
        <ul className="mb-6 list-disc list-inside space-y-1 text-[#CFABFA]">
          <li>Provide the services</li>
          <li>Comply with legal and regulatory requirements</li>
          <li>Resolve disputes</li>
          <li>Enforce our agreements</li>
        </ul>
        <p className="mb-6">
          Usage and analytics data may be retained in aggregated or anonymized form for product improvement and research.
        </p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          Sharing of Information
        </h2>
        <p className="mb-4">We may share personal information with:</p>
        <ul className="mb-6 list-disc list-inside space-y-1 text-[#CFABFA]">
          <li>Service providers that support app operations and infrastructure</li>
          <li>Payment processors</li>
          <li>Analytics and security providers</li>
          <li>Affiliates under common ownership</li>
          <li>Public authorities where required by law</li>
          <li>Other users when you choose to share content publicly within the app</li>
        </ul>
        <p className="mb-6">
          Service providers are required to protect personal data and use it only for authorized purposes.
        </p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          International Data Transfers
        </h2>
        <p className="mb-6">
          Your information may be processed in countries outside your place of residence. Where required, we use recognized legal safeguards to ensure personal data is protected in accordance with applicable law.
        </p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          Your Rights
        </h2>
        <p className="mb-4">Depending on your location, you may have the right to:</p>
        <ul className="mb-6 list-disc list-inside space-y-1 text-[#CFABFA]">
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of personal data</li>
          <li>Restrict or object to processing</li>
          <li>Withdraw consent</li>
          <li>Request data portability</li>
        </ul>
        <p className="mb-6">
          Requests can be made by contacting info@knowhistory.xyz. We may verify identity before responding.
        </p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          California Privacy Rights
        </h2>
        <p className="mb-6">
          California residents have rights under applicable privacy laws, including the right to request access to, correction of, or deletion of personal information. We do not sell personal information or share it for cross-context behavioral advertising.
          Requests may be submitted by contacting info@knowhistory.xyz.
        </p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          Security
        </h2>
        <p className="mb-6">
          We implement reasonable administrative, technical, and organizational measures to protect personal information. No system is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          Children&apos;s Privacy
        </h2>
        <p className="mb-6">
          Know[ledge] is intended for users aged 18 and older. We do not knowingly collect personal information from individuals under 18. If we become aware that such information has been collected, we will take steps to delete it.
        </p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          Changes to This Policy
        </h2>
        <p className="mb-6">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the Last updated date.
        </p>

        <h2 className="text-2xl font-bold text-[#CFABFA] mt-10 mb-4">
          Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, you can contact us:
        </p>
        <div className="space-y-2 ml-4">
          <p>
            By email:{" "}
            <a href="mailto:info@knowhistory.xyz" className="text-[#D4E333]">
              info@knowhistory.xyz
            </a>
          </p>
          <p>
            By mail: SocialShift Corp., 251 Falls Drive, Wilmington, New Castle County, Delaware 19808, United States.
          </p>
        </div>
        <p className="mt-8 text-[#CFABFA]">
          SocialShift Corp. is the data controller responsible for personal information processed under this Privacy Policy.
        </p>
      </div>
    </main>
  );
}
