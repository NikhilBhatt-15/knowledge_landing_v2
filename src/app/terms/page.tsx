import type { Metadata } from "next";
import Link from "next/link";
import { ActiveTOC } from "@/components/ActiveTOC";

export const metadata: Metadata = {
  title: "Terms of Use | Know[ledge] by SocialShift",
  description:
    "Read the Terms of Use for Know[ledge] by SocialShift. Understand your rights and responsibilities when accessing our mobile application and services.",
  robots: "index, follow",
  openGraph: {
    title: "Terms of Use | Know[ledge] by SocialShift",
    description:
      "Read the Terms of Use for using Know[ledge] by SocialShift.",
    url: "https://knowhistory.xyz/terms",
    siteName: "Know[ledge]",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | Know[ledge] by SocialShift",
    description:
      "Review the Terms of Use for using Know[ledge] by SocialShift.",
  },
};

const sections = [
  "Acceptance of the Terms",
  "Eligibility",
  "Description of the Service",
  "User Accounts",
  "Acceptable Use",
  "Intellectual Property",
  "User-Generated Content",
  "Subscriptions, Payments, and Refunds",
  "Third-Party Services",
  "Suspension and Termination",
  "Data Protection and Privacy (GDPR Compliance)",
  "Disclaimers",
  "Limitation of Liability",
  "Indemnification",
  "Governing Law and Jurisdiction",
  "Dispute Resolution",
  "Apple App Store Provisions",
  "General Provisions",
  "Contact Information",
];

export default function TermsPage() {
  return (
    <main className="bg-[#242B7A] min-h-screen py-16 px-4 sm:px-8 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sidebar Table of Contents */}
        <ActiveTOC sections={sections} />

        {/* Main Content */}
        <article className="flex-1 prose prose-invert max-w-none">
          <h1 className="text-4xl font-extrabold mb-2 text-[#D4E333]">
            Terms of Use
          </h1>
          <p className="mb-8 text-lg text-[#CFABFA]">
            Effective Date: January 2026
          </p>

          <div className="space-y-4 text-sm sm:text-base lg:text-lg mb-8">
            <p>
              These Terms of Use (&quot;Terms&quot;) govern your access to and
              use of the Know[ledge] mobile application and related services
              (collectively, the &quot;Service&quot;).
            </p>
            <p>
              The Service is operated by SocialShift, Corp, a Delaware entity
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;).
            </p>
            <p>
              By accessing or using the Service, you agree to these Terms and
              our Privacy Policy, which is incorporated by reference.
            </p>
            <p className="font-bold text-[#D4E333]">
              IMPORTANT NOTICE REGARDING ARBITRATION AND CLASS ACTION WAIVER FOR
              U.S. USERS: SECTION 16 CONTAINS A BINDING ARBITRATION AGREEMENT
              AND CLASS ACTION WAIVER. IT AFFECTS YOUR LEGAL RIGHTS. PLEASE READ
              IT CAREFULLY.
            </p>
          </div>

          <Section id="acceptance-of-the-terms" title="1. Acceptance of the Terms">
            <p className="text-sm sm:text-base lg:text-lg">
              By downloading, accessing, or using the Service, you confirm that
              you have read, understood, and agree to be bound by these Terms.
              If you are using the Service on behalf of an organization, you
              represent that you are authorized to bind that organization to
              these Terms. Your access to the Service via the Apple App Store is
              also subject to the Apple Media Services Terms and Conditions.
            </p>
          </Section>

          <Section id="eligibility" title="2. Eligibility">
            <p className="text-sm sm:text-base lg:text-lg">
              You must be at least 18 years old to use the Service. By using the
              Service, you represent that: (a) you meet this age requirement;
              (b) you are legally capable of entering into a binding contract;
              and (c) your use complies with all applicable laws and
              regulations. The Service is intended solely for users aged 18 and
              older. We do not knowingly collect personal data from children.
            </p>
          </Section>

          <Section id="description-of-the-service" title="3. Description of the Service">
            <p className="text-sm sm:text-base lg:text-lg">
              Know[ledge] is a mobile application that provides educational and
              informational content. The Service is for general informational
              purposes only and does not constitute professional advice. We may
              modify, suspend, or discontinue any part of the Service at any
              time.
            </p>
          </Section>

          <Section id="user-accounts" title="4. User Accounts">
            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  4.1 Account Creation
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  Some features require account registration. You agree to
                  provide accurate and current information and to keep your
                  login credentials secure.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  4.2 Account Responsibility
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  You are responsible for all activity under your account.
                  Notify us immediately of any unauthorized use. We are not
                  responsible for losses caused by unauthorized access resulting
                  from your failure to secure your account.
                </p>
              </div>
            </div>
          </Section>

          <Section id="acceptable-use" title="5. Acceptable Use">
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-xs sm:text-sm lg:text-base">
              <li>Use the Service for unlawful or harmful purposes</li>
              <li>Harass, threaten, or abuse others</li>
              <li>
                Upload or share hateful, discriminatory, defamatory, or obscene
                content
              </li>
              <li>Intentionally spread misinformation</li>
              <li>
                Interfere with the security or operation of the Service
              </li>
              <li>
                Reverse engineer, scrape, or exploit the Service without
                authorization
              </li>
            </ul>
            <p className="text-sm sm:text-base lg:text-lg mt-4">
              We may take action, including suspension or termination, if these
              rules are violated.
            </p>
          </Section>

          <Section id="intellectual-property" title="6. Intellectual Property">
            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  6.1 Our Content
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  All content, software, designs, and trademarks within the
                  Service are owned by or licensed to the Company and protected
                  by law. Subject to your compliance with these Terms, we grant
                  you a limited, non-exclusive, non-transferable, revocable
                  license to access and use the Service for personal,
                  non-commercial purposes. This license is limited to use on
                  Apple-branded products you own or control, in accordance with
                  Apple&apos;s Usage Rules.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  6.2 Restrictions
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  You may not copy, distribute, modify, sell, or create
                  derivative works from the Service without prior written
                  permission.
                </p>
              </div>
            </div>
          </Section>

          <Section id="user-generated-content" title="7. User-Generated Content">
            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  7.1 Your Content
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  You retain ownership of content you submit (&quot;User
                  Content&quot;). By submitting User Content, you grant us a
                  worldwide, non-exclusive, royalty-free license to host, store,
                  display, reproduce, and distribute that content solely to
                  operate and improve the Service.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  7.2 Moderation and Removal
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  We may moderate, restrict, or remove User Content that
                  violates these Terms or applicable law. Where required by EU
                  law, users will be informed of significant content moderation
                  decisions and may request review or clarification. Users may
                  contact us at{" "}
                  <a
                    href="mailto:info@knowhistory.xyz"
                    className="text-[#CFABFA]"
                  >
                    info@knowhistory.xyz
                  </a>{" "}
                  to contest or request review of a moderation decision.
                </p>
              </div>
            </div>
          </Section>

          <Section
            id="subscriptions-payments-and-refunds"
            title="8. Subscriptions, Payments, and Refunds"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  8.1 In-App Purchases
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  All payments are processed through Apple&apos;s In-App
                  Purchase system. We do not collect payment information. Any
                  subscription or purchase is subject to Apple&apos;s Media
                  Services Terms and Conditions.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  8.2 Renewals
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  Subscriptions renew automatically unless canceled at least 24
                  hours before the billing period ends. Manage subscriptions via
                  your Apple Account Settings.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  8.3 Refunds and EU Withdrawal Rights
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  Refunds are handled by Apple in accordance with its policies.
                  If you are an EU consumer, you may have a statutory 14-day
                  right of withdrawal for digital services, subject to
                  Apple&apos;s execution of the purchase. By purchasing and
                  accessing paid features immediately, you expressly consent to
                  immediate performance of the digital service and acknowledge
                  that this may affect your statutory withdrawal rights, in
                  accordance with applicable law.
                </p>
              </div>
            </div>
          </Section>

          <Section id="third-party-services" title="9. Third-Party Services">
            <p className="text-sm sm:text-base lg:text-lg">
              The Service may link to or integrate third-party services. We are
              not responsible for third-party content, practices, or policies.
              Your use of third-party services is governed by their own terms.
            </p>
          </Section>

          <Section id="suspension-and-termination" title="10. Suspension and Termination">
            <p className="text-sm sm:text-base lg:text-lg">
              We may suspend or terminate your access if you violate these
              Terms, pose a risk to the platform, or if required by law.
              Termination does not affect rights or obligations accrued before
              termination. You may stop using the Service at any time.
            </p>
          </Section>

          <Section
            id="data-protection-and-privacy-gdpr-compliance"
            title="11. Data Protection and Privacy (GDPR Compliance)"
          >
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              We process personal data in accordance with the EU General Data
              Protection Regulation (GDPR) and other applicable data protection
              laws. SocialShift, Corp is the data controller for purposes of the
              GDPR unless otherwise stated in the Privacy Policy.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-xs sm:text-sm lg:text-base mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
              <li>
                Lodge a complaint with your local data protection authority
              </li>
            </ul>
            <p className="text-sm sm:text-base lg:text-lg">
              Details about how we process personal data and how to exercise
              your rights are available in our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#CFABFA] hover:text-[#D4E333]"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </Section>

          <Section id="disclaimers" title="12. Disclaimers">
            <p className="text-sm sm:text-base lg:text-lg uppercase">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE.&quot; TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE
              DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. NOTHING IN THESE TERMS AFFECTS NON-WAIVABLE
              CONSUMER RIGHTS.
            </p>
          </Section>

          <Section id="limitation-of-liability" title="13. Limitation of Liability">
            <p className="text-sm sm:text-base lg:text-lg mb-4 uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR ANY
              INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES,
              INCLUDING LOSS OF DATA OR PROFITS.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              WHERE EU CONSUMER LAW APPLIES, LIABILITY LIMITATIONS DO NOT APPLY
              TO: (A) DEATH OR PERSONAL INJURY CAUSED BY OUR NEGLIGENCE; (B)
              FRAUD OR WILLFUL MISCONDUCT; OR (C) ANY OTHER LIABILITY THAT
              CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </p>
            <p className="text-sm sm:text-base lg:text-lg uppercase">
              SUBJECT TO APPLICABLE LAW, IN NO EVENT SHALL OUR TOTAL LIABILITY
              TO YOU FOR ALL CLAIMS EXCEED THE GREATER OF (I) THE AMOUNT YOU
              PAID TO US IN THE PAST SIX MONTHS, OR (II) ONE HUNDRED U.S.
              DOLLARS (USD $100).
            </p>
          </Section>

          <Section id="indemnification" title="14. Indemnification">
            <p className="text-sm sm:text-base lg:text-lg">
              You agree to indemnify and hold harmless Company and its officers,
              directors, employees, and agents from and against any claims,
              damages, losses, liabilities, and expenses arising from: (a) your
              use of the Service; (b) your violation of these Terms; or (c) your
              violation of any rights of a third party. This indemnity does not
              apply to the extent prohibited by applicable consumer law, or to
              claims arising from our gross negligence or willful misconduct.
            </p>
          </Section>

          <Section id="governing-law-and-jurisdiction" title="15. Governing Law and Jurisdiction">
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              These Terms are governed by the laws of the State of Delaware,
              United States, without regard to its conflict of law principles.
              The United Nations Convention on Contracts for the International
              Sale of Goods does not apply.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              If you are an EU consumer, you benefit from mandatory protections
              under the laws of your country of residence. Nothing in these
              Terms limits your right to bring claims in the courts of your
              habitual residence where required by law.
            </p>
          </Section>

          <Section id="dispute-resolution" title="16. Dispute Resolution">
            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  A. Binding Arbitration for U.S. Users
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  For users located in the United States, any dispute arising
                  from these Terms or the Service shall be resolved by final,
                  binding arbitration administered by JAMS under its
                  Comprehensive Arbitration Rules, rather than in court. The
                  arbitration shall take place in Wilmington, Delaware. THERE IS
                  NO JUDGE OR JURY IN ARBITRATION, AND COURT REVIEW IS LIMITED.
                  YOU AGREE TO WAIVE YOUR RIGHT TO A JURY TRIAL AND TO
                  PARTICIPATE IN A CLASS ACTION OR REPRESENTATIVE PROCEEDING.
                  You may opt out of this arbitration agreement within 30 days
                  of first accepting these Terms by sending written notice to{" "}
                  <a
                    href="mailto:info@knowhistory.xyz"
                    className="text-[#CFABFA]"
                  >
                    info@knowhistory.xyz
                  </a>{" "}
                  with the subject line &quot;Arbitration Opt-Out.&quot;
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  B. EU Consumers
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  For consumers habitually resident in the European Union, this
                  Section 16(A) does not apply. You retain the right to bring
                  claims in your local courts. You may also use the European
                  Commission&apos;s Online Dispute Resolution platform.
                </p>
              </div>
            </div>
          </Section>

          <Section id="apple-app-store-provisions" title="17. Apple App Store Provisions">
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-xs sm:text-sm lg:text-base">
              <li>
                These Terms are concluded between you and Company, not Apple.
              </li>
              <li>
                Apple is not responsible for the App or its content.
              </li>
              <li>
                Apple has no obligation to furnish any maintenance or support
                services.
              </li>
              <li>
                In the event of any third-party claim that the App or your
                possession and use infringes that party&apos;s intellectual
                property rights, Company, not Apple, will be solely responsible
                for the investigation, defense, settlement, and discharge of
                such claim.
              </li>
              <li>
                Apple and its subsidiaries are third-party beneficiaries of
                these Terms and will have the right to enforce them against you.
              </li>
            </ul>
          </Section>

          <Section id="general-provisions" title="18. General Provisions">
            <div className="space-y-3">
              <p className="text-sm sm:text-base lg:text-lg">
                <strong className="text-[#CFABFA]">Severability.</strong> If any
                provision is found unenforceable, the remaining provisions
                remain in full force.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                <strong className="text-[#CFABFA]">Assignment.</strong> You may
                not assign your rights under these Terms. We may assign our
                rights without restriction.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                <strong className="text-[#CFABFA]">Entire Agreement.</strong>{" "}
                These Terms, with our Privacy Policy, constitute the entire
                agreement between you and Company regarding the Service.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                <strong className="text-[#CFABFA]">Force Majeure.</strong> We
                are not liable for delays or failures due to circumstances
                beyond our reasonable control.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                <strong className="text-[#CFABFA]">No Waiver.</strong> Failure
                to enforce a provision is not a waiver of our right to do so
                later.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                <strong className="text-[#CFABFA]">Notices.</strong> We may
                provide notice via the Service or by email to the address
                associated with your account.
              </p>
            </div>
          </Section>

          <Section id="contact-information" title="19. Contact Information">
            <address className="not-italic text-[#CFABFA]">
              <strong className="text-white">SocialShift, Corp</strong>
              <br />
              1420 Terry Ave
              <br />
              Seattle, Washington, 98101
              <br />
              United States
              <br />
              <br />
              Email:{" "}
              <a href="mailto:info@knowhistory.xyz" className="text-[#D4E333]">
                info@knowhistory.xyz
              </a>
            </address>
          </Section>
        </article>
      </div>
    </main>
  );
}

// Section component for structure and anchor links
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold text-[#CFABFA] mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
