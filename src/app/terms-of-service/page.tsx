import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-[#242B7A] min-h-screen py-16 px-4 sm:px-8 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sidebar Table of Contents */}
        <aside className="hidden md:block w-64 flex-shrink-0 sticky top-24 self-start max-h-[80vh] overflow-y-auto pr-2">
          <nav className="bg-[#23205a]/70 rounded-xl p-6 border border-[#CFABFA]/10">
            <h2 className="text-lg font-bold mb-4 text-[#D4E333]">
              Table of Contents
            </h2>
            <ul className="space-y-2 text-sm">
              {[
                "OUR SERVICES",
                "INTELLECTUAL PROPERTY RIGHTS",
                "USER REPRESENTATIONS",
                "USER REGISTRATION",
                "PURCHASES AND PAYMENT",
                "SUBSCRIPTIONS",
                "POLICY",
                "PROHIBITED ACTIVITIES",
                "USER GENERATED CONTRIBUTIONS",
                "CONTRIBUTION LICENSE",
                "MOBILE APPLICATION LICENSE",
                "SOCIAL MEDIA",
                "THIRD-PARTY WEBSITES AND CONTENT",
                "ADVERTISERS",
                "SERVICES MANAGEMENT",
                "PRIVACY POLICY",
                "DMCA NOTICE AND POLICY",
                "TERM AND TERMINATION",
                "MODIFICATIONS AND INTERRUPTIONS",
                "GOVERNING LAW",
                "DISPUTE RESOLUTION",
                "CORRECTIONS",
                "DISCLAIMER",
                "LIMITATIONS OF LIABILITY",
                "INDEMNIFICATION",
                "USER DATA",
                "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
                "CALIFORNIA USERS AND RESIDENTS",
                "MISCELLANEOUS",
                "CONTACT US",
              ].map((item, i) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="hover:text-[#CFABFA] transition-colors"
                  >
                    {i + 1}. {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <article className="flex-1 prose prose-invert max-w-none">
          <h1 className="text-4xl font-extrabold mb-2 text-[#D4E333]">
            Terms and Conditions
          </h1>
          <p className="mb-8 text-lg text-[#CFABFA]">Last updated: June 2025</p>
          <p className="text-sm sm:text-base lg:text-lg">
            We are <strong>SocialShift Corp</strong> (&quot;Company,&quot;
            &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a company
            registered in Delaware, United States, with its registered office at
            251 Falls Drive, Wilmington, New Castle County, Delaware 19808.
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            We operate the mobile application <strong>Know[ledge]</strong> (the
            &quot;App&quot;), along with any related products and services that
            reference or link to these legal terms (the &quot;Legal Terms&quot;)
            (collectively, the &quot;Services&quot;).
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            You can contact us by:
            <br />
            <span className="block ml-4">
              Phone:{" "}
              <a href="tel:4049389214" className="text-[#CFABFA]">
                404-938-9214
              </a>
              <br />
              Email:{" "}
              <a href="mailto:info@knowhistory.xyz" className="text-[#CFABFA]">
                info@knowhistory.xyz
              </a>
              <br />
              Mail: 251 Falls Drive, Wilmington, New Castle County, Delaware
              19808, United States
            </span>
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            These Legal Terms constitute a legally binding agreement between
            you, whether personally or on behalf of an entity (&quot;you&quot;),
            and SocialShift Corp, regarding your access to and use of the
            Services. By accessing the Services, you agree that you have read,
            understood, and accepted these Legal Terms.{" "}
            <span className="font-bold text-[#D4E333]">
              IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, YOU MUST
              DISCONTINUE USE IMMEDIATELY.
            </span>
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            We will provide prior notice of any scheduled changes to the
            Services. The modified Legal Terms will become effective upon
            posting or notification via info@knowhistory.xyz. By continuing to
            use the Services after the effective date of any changes, you agree
            to be bound by the modified terms.
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            Minors under the age of 18 must have parental or guardian permission
            to use the Services. Parents or guardians must read and agree to
            these Legal Terms before allowing a minor to use the Services.
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            We recommend that you print a copy of these Legal Terms for your
            records.
          </p>

          {/* --- Sections --- */}
          <Section id="our-services" title="1. OUR SERVICES">
            <p className="text-sm sm:text-base lg:text-lg mb-3">
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Services from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              The Services are not tailored to comply with industry-specific
              regulations (Health Insurance Portability and Accountability Act
              (HIPAA), Federal Information Security Management Act (FISMA),
              etc.), so if your interactions would be subjected to such laws,
              you may not use the Services. You may not use the Services in a
              way that would violate the Gramm-Leach-Bliley Act (GLBA).
            </p>
          </Section>

          <Section
            id="intellectual-property-rights"
            title="2. INTELLECTUAL PROPERTY RIGHTS"
          >
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  Our intellectual property
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  We are the owner or the licensee of all intellectual property
                  rights in our Services, including all source code, databases,
                  functionality, software, website designs, audio, video, text,
                  photographs, and graphics in the Services (collectively, the
                  &quot;Content&quot;), as well as the trademarks, service
                  marks, and logos contained therein (the &quot;Marks&quot;).
                </p>
                <p className="text-sm sm:text-base lg:text-lg mt-4">
                  Our Content and Marks are protected by copyright and trademark
                  laws (and various other intellectual property rights and
                  unfair competition laws) and treaties in the United States and
                  around the world.
                </p>
                <p className="text-sm sm:text-base lg:text-lg mt-4">
                  The Content and Marks are provided in or through the Services
                  &quot;AS IS&quot; for your personal, non-commercial use only.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  Your use of our Services
                </h3>
                <p className="text-sm sm:text-base lg:text-lg mb-4">
                  Subject to your compliance with these Legal Terms, including
                  the &quot;PROHIBITED ACTIVITIES&quot; section below, we grant
                  you a non-exclusive, non-transferable, revocable license to:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
                  <li>access the Services; and</li>
                  <li>
                    download or print a copy of any portion of the Content to
                    which you have properly gained access,
                  </li>
                  <li>solely for your personal, non-commercial use.</li>
                </ul>
                <p className="text-sm sm:text-base lg:text-lg mt-4">
                  Except as set out in this section or elsewhere in our Legal
                  Terms, no part of the Services and no Content or Marks may be
                  copied, reproduced, aggregated, republished, uploaded, posted,
                  publicly displayed, encoded, translated, transmitted,
                  distributed, sold, licensed, or otherwise exploited for any
                  commercial purpose whatsoever, without our express prior
                  written permission.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  Your submissions and contributions
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  Please review this section and the &quot;PROHIBITED
                  ACTIVITIES&quot; section carefully prior to using our Services
                  to understand the (a) rights you give us and (b) obligations
                  you have when you post or upload any content through the
                  Services.
                </p>
                <p className="text-sm sm:text-base lg:text-lg mt-4">
                  Submissions: By directly sending us any question, comment,
                  suggestion, idea, feedback, or other information about the
                  Services (&quot;Submissions&quot;), you agree to assign to us
                  all intellectual property rights in such Submission. You agree
                  that we shall own this Submission and be entitled to its
                  unrestricted use and dissemination for any lawful purpose,
                  commercial or otherwise, without acknowledgment or
                  compensation to you.
                </p>
              </div>
            </div>
          </Section>

          {/* Repeat for each section, using the Section component for structure */}
          {/* ... (for brevity, only a few sections are shown here, but you can continue for all) ... */}
          <Section id="user-representations" title="3. USER REPRESENTATIONS">
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              By using the Services, you represent and warrant that:
            </p>
            <ol className="list-decimal pl-4 sm:pl-6 space-y-2 text-xs sm:text-sm lg:text-base">
              <li>
                all registration information you submit will be true, accurate,
                current, and complete;
              </li>
              <li>
                you will maintain the accuracy of such information and promptly
                update such registration information as necessary;
              </li>
              <li>
                you have the legal capacity and you agree to comply with these
                Legal Terms;
              </li>
              <li>
                you are not a minor in the jurisdiction in which you reside, or
                if a minor, you have received parental permission to use the
                Services;
              </li>
              <li>
                you will not access the Services through automated or non-human
                means, whether through a bot, script or otherwise;
              </li>
              <li>
                you will not use the Services for any illegal or unauthorized
                purpose;
              </li>
              <li>
                your use of the Services will not violate any applicable law or
                regulation.
              </li>
            </ol>
            <p className="text-sm sm:text-base lg:text-lg mt-4">
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Services (or any portion thereof).
            </p>
          </Section>
          <Section id="user-registration" title="4. USER REGISTRATION">
            <p className="text-sm sm:text-base lg:text-lg">
              You may be required to register to use the Services. You agree to
              keep your password confidential and will be responsible for all
              use of your account and password. We reserve the right to remove,
              reclaim, or change a username you select if we determine, in our
              sole discretion, that such username is inappropriate, obscene, or
              otherwise objectionable.
            </p>
          </Section>
          <Section id="purchases-and-payment" title="5. PURCHASES AND PAYMENT">
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              We accept the following forms of payment:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-xs sm:text-sm lg:text-base mb-4">
              <li>Visa</li>
              <li>Mastercard</li>
              <li>American Express</li>
              <li>Discover</li>
            </ul>
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              You agree to provide current, complete, and accurate purchase and
              account information for all purchases made via the Services. You
              further agree to promptly update account and payment information,
              including email address, payment method, and payment card
              expiration date, so that we can complete your transactions and
              contact you as needed. Sales tax will be added to the price of
              purchases as deemed required by us. We may change prices at any
              time. All payments shall be in US dollars.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              You agree to pay all charges at the prices then in effect for your
              purchases and any applicable shipping fees, and you authorize us
              to charge your chosen payment provider for any such amounts upon
              placing your order.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              We reserve the right to correct any errors or mistakes in pricing,
              even if we have already requested or received payment.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              We reserve the right to refuse any order placed through the
              Services. We may, in our sole discretion, limit or cancel
              quantities purchased per person, per household, or per order.
              These restrictions may include orders placed by or under the same
              customer account, the same payment method, and/or orders that use
              the same billing or shipping address. We reserve the right to
              limit or prohibit orders that, in our sole judgment, appear to be
              placed by dealers, resellers, or distributors.
            </p>
          </Section>
          <Section id="subscriptions" title="6. SUBSCRIPTIONS">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold not-italic text-[#CFABFA] mb-2 sm:mb-3">
                  Billing & Auto-Renewal
                </h3>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-xs sm:text-sm lg:text-base">
                  <li>
                    Your subscription automatically renews unless canceled at
                    least 24 hours before the end of the current billing period.
                  </li>
                  <li>
                    Your payment method will be charged at the start of each new
                    billing cycle at the listed price.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold not-italic text-[#CFABFA] mb-2 sm:mb-3">
                  Free Trial & Charges
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  If you sign up for a free trial, your account will be charged
                  automatically at the end of the trial unless canceled
                  beforehand.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold not-italic text-[#CFABFA] mb-2 sm:mb-3">
                  Cancellation & Refunds
                </h3>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-xs sm:text-sm lg:text-base">
                  <li>
                    Apple App Store Users: Subscriptions purchased via the App
                    Store must be managed and canceled through your Apple
                    account settings. Apple does not allow developers to issue
                    refunds. For refund requests, visit Apple Support:
                    https://support.apple.com/billing
                  </li>
                  <li>
                    Google Play Store Users: Subscriptions purchased via Google
                    Play must be managed through your Google account settings.
                    Google may issue refunds under specific conditions. For more
                    details, visit:
                    https://support.google.com/googleplay/answer/2479637
                  </li>
                  <li>
                    Direct Purchases: If you purchased a subscription through
                    our website, you may contact us at info@knowhistory.xyz for
                    refund requests subject to our refund policy.
                  </li>
                </ul>
              </div>
            </div>
          </Section>
          <Section id="policy" title="7. POLICY">
            <p className="text-sm sm:text-base lg:text-lg">
              All sales are final and no refund will be issued.
            </p>
          </Section>
          <Section id="prohibited-activities" title="8. PROHIBITED ACTIVITIES">
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              You may not access or use the Services for any purpose other than
              that for which we make the Services available. The Services may
              not be used in connection with any commercial endeavors except
              those that are specifically endorsed or approved by us.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              As a user of the Services, you agree not to:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-xs sm:text-sm lg:text-base">
              <li>
                Systematically retrieve data or other content from the Services
                to create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with
                security-related features of the Services.
              </li>
              <li>
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Services.
              </li>
              <li>
                Use any information obtained from the Services in order to
                harass, abuse, or harm another person.
              </li>
              <li>
                Make improper use of our support services or submit false
                reports of abuse or misconduct.
              </li>
              <li>
                Use the Services in a manner inconsistent with any applicable
                laws or regulations.
              </li>
              <li>
                Engage in unauthorized framing of or linking to the Services.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material that interferes with
                any party&apos;s uninterrupted use and enjoyment of the
                Services.
              </li>
              <li>
                Engage in any automated use of the system, such as using scripts
                to send comments or messages.
              </li>
              <li>
                Delete the copyright or other proprietary rights notice from any
                Content.
              </li>
              <li>
                Attempt to impersonate another user or person or use the
                username of another user.
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the
                Services or the networks or services connected to the Services.
              </li>
            </ul>
          </Section>
          <Section
            id="user-generated-contributions"
            title="9. USER GENERATED CONTRIBUTIONS"
          >
            <p className="text-sm sm:text-base lg:text-lg">
              The Services may invite you to chat, contribute to, or participate
              in blogs, message boards, online forums, and other functionality
              during which you may create, submit, post, display, transmit,
              publish, distribute, or broadcast content and materials to us or
              through the Services, including but not limited to text, writings,
              video, audio, photographs, music, graphics, comments, reviews,
              rating suggestions, personal information, or other material
              (&quot;Contributions&quot;). Any Submission that is publicly
              posted shall also be treated as a Contribution.
            </p>
          </Section>
          <Section id="contribution-license" title="10. CONTRIBUTION LICENSE">
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              When you post Contributions, you grant us a license (including use
              of your name, trademarks, and logos): By posting any
              Contributions, you grant us an unrestricted, unlimited,
              irrevocable, perpetual, non-exclusive, transferable, royalty-free,
              fully-paid, worldwide right, and license to: use, copy, reproduce,
              distribute, sell, resell, publish, broadcast, retitle, store,
              publicly perform, publicly display, reformat, translate, excerpt
              (in whole or in part), and exploit your Contributions (including,
              without limitation, your image, name, and voice) for any purpose,
              commercial, advertising, or otherwise, to prepare derivative works
              of, or incorporate into other works, your contributions, and to
              sublicense the licenses granted in this section.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              This license includes our use of your name, company name, and
              franchise name, as applicable, and any of the trademarks, service
              marks, trade names, logos, and personal and commercial images you
              provide.
            </p>
          </Section>

          <Section
            id="mobile-application-license"
            title="11. MOBILE APPLICATION LICENSE"
          >
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  Use License
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  If you access the Services via a mobile application, then we
                  grant you a revocable, non-exclusive, non-transferable,
                  limited right to install and use the mobile application on
                  wireless electronic devices owned or controlled by you, and to
                  access and use the mobile application on such devices strictly
                  in accordance with the terms and conditions of this mobile
                  application license contained in these Legal Terms.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  Apple and Android Devices
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  The following terms apply when you use a mobile application
                  obtained from either the Apple Store or Google Play to access
                  the Services. You acknowledge that these Legal Terms are
                  between you and us only, and not with Apple Inc. or Google,
                  Inc., and they are not responsible for the App and its
                  content.
                </p>
              </div>
            </div>
          </Section>
          <Section id="social-media" title="12. SOCIAL MEDIA">
            <p className="text-sm sm:text-base lg:text-lg">
              As part of the functionality of the Services, you may link your
              account with online accounts you have with third-party service
              providers (each such account, a &quot;Third-Party Account&quot;)
              by either: (1) providing your Third-Party Account login
              information through the Services; or (2) allowing us to access
              your Third-Party Account, as is permitted under the applicable
              terms and conditions that govern your use of each Third-Party
              Account.
            </p>
          </Section>
          <Section
            id="third-party-websites-and-content"
            title="13. THIRD-PARTY WEBSITES AND CONTENT"
          >
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              The Services may contain (or you may be sent via the Site) links
              to other websites (&quot;Third-Party Websites&quot;) as well as
              articles, photographs, text, graphics, pictures, designs, music,
              sound, video, information, applications, software, and other
              content or items belonging to or originating from third parties
              (&quot;Third-Party Content&quot;).
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              Such Third-Party Websites and Third-Party Content are not
              investigated, monitored, or checked for accuracy, appropriateness,
              or completeness by us, and we are not responsible for any
              Third-Party Websites accessed through the Services or any
              Third-Party Content posted on, available through, or installed
              from the Services, including the content, accuracy, offensiveness,
              opinions, reliability, privacy practices, or other policies of or
              contained in the Third-Party Websites or the Third-Party Content.
            </p>
          </Section>
          <Section id="advertisers" title="14. ADVERTISERS">
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              We allow advertisers to display their advertisements and other
              information in certain areas of the Services, such as sidebar
              advertisements or banner advertisements. We simply provide the
              space to place such advertisements, and we have no other
              relationship with advertisers.
            </p>
          </Section>
          <Section id="services-management" title="15. SERVICES MANAGEMENT">
            <p className="text-sm sm:text-base lg:text-lg mb-4">
              We reserve the right, but not the obligation, to:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-xs sm:text-sm lg:text-base">
              <li>Monitor the Services for violations of these Legal Terms;</li>
              <li>
                Take appropriate legal action against anyone who, in our sole
                discretion, violates the law or these Legal Terms, including
                without limitation, reporting such user to law enforcement
                authorities;
              </li>
              <li>
                In our sole discretion and without limitation, refuse, restrict
                access to, limit the availability of, or disable (to the extent
                technologically feasible) any of your Contributions or any
                portion thereof;
              </li>
              <li>
                In our sole discretion and without limitation, notice, or
                liability, to remove from the Services or otherwise disable all
                files and content that are excessive in size or are in any way
                burdensome to our systems;
              </li>
              <li>
                Otherwise manage the Services in a manner designed to protect
                our rights and property and to facilitate the proper functioning
                of the Services.
              </li>
            </ul>
          </Section>
          <Section id="privacy-policy" title="16. PRIVACY POLICY">
            <p className="text-sm sm:text-base lg:text-lg">
              We care about data privacy and security. Please review our Privacy
              Policy:{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-600 hover:text-blue-800"
              >
                Privacy Policy
              </Link>
              . By using the Services, you agree to be bound by our Privacy
              Policy, which is incorporated into these Legal Terms.
            </p>
          </Section>
          <Section
            id="dmca-notice-and-policy"
            title="17. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY"
          >
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  Notifications
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  If you believe that content available on or through our
                  Services infringes one or more of your copyrights, please
                  immediately notify our Designated Copyright Agent by mail,
                  email or fax and provide the information described below.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  Counter Notification
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  If you believe your own copyrighted material has been removed
                  from the Services as a result of a mistake or
                  misidentification, you may submit a written counter
                  notification to our Designated Copyright Agent using the
                  contact information provided below.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  Designated Copyright Agent
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  Rafael Williams
                  <br />
                  Attn: Copyright Agent
                  <br />
                  info@knowhistory.xyz
                </p>
              </div>
            </div>
          </Section>
          <Section id="term-and-termination" title="18. TERM AND TERMINATION">
            <p className="text-sm sm:text-base lg:text-lg">
              These Legal Terms shall remain in full force and effect while you
              use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
              LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
              SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON
              FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR
              BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN
              THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION.
            </p>
          </Section>
          <Section
            id="modifications-and-interruptions"
            title="19. MODIFICATIONS AND INTERRUPTIONS"
          >
            <p className="text-sm sm:text-base lg:text-lg">
              We reserve the right to change, modify, or remove the contents of
              the Services at any time or for any reason at our sole discretion
              without notice. We will not be liable to you or any third party
              for any modification, price change, suspension, or discontinuance
              of the Services.
            </p>
          </Section>
          <Section id="governing-law" title="20. GOVERNING LAW">
            <p className="text-sm sm:text-base lg:text-lg">
              These Legal Terms and your use of the Services are governed by and
              construed in accordance with the laws of the State of Delaware
              applicable to agreements made and to be entirely performed within
              the State of Delaware, without regard to its conflict of law
              principles.
            </p>
          </Section>
          <Section id="dispute-resolution" title="21. DISPUTE RESOLUTION">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  Informal Negotiations
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  To expedite resolution and control the cost of any dispute,
                  controversy, or claim related to these Legal Terms, you and we
                  agree to first attempt to negotiate any dispute informally for
                  at least thirty (30) days before initiating arbitration.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CFABFA] mb-2 sm:mb-3">
                  Binding Arbitration
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  If informal negotiations fail, all disputes arising out of or
                  relating to these Legal Terms shall be resolved through
                  binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS
                  PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A
                  JURY TRIAL.
                </p>
              </div>
            </div>
          </Section>
          <Section id="corrections" title="22. CORRECTION OF ERRORS">
            <p className="text-sm sm:text-base lg:text-lg">
              There may be information on the Services that contains
              typographical errors, inaccuracies, or omissions. We reserve the
              right to correct any errors, inaccuracies, or omissions and to
              change or update the information on the Services at any time,
              without prior notice.
            </p>
          </Section>
          <Section id="disclaimer" title="23. DISCLAIMER">
            <p className="text-sm sm:text-base lg:text-lg uppercase">
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
              AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK.
            </p>
          </Section>
          <Section
            id="limitations-of-liability"
            title="24. LIMITATION OF LIABILITY"
          >
            <p className="text-sm sm:text-base lg:text-lg">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES.
            </p>
          </Section>
          <Section id="indemnification" title="25. INDEMNIFICATION">
            <p className="text-sm sm:text-base lg:text-lg">
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand.
            </p>
          </Section>
          <Section id="user-data" title="26. USER DATA">
            <p className="text-sm sm:text-base lg:text-lg">
              We will maintain certain data that you transmit to the Services
              for the purpose of managing the performance of the Services, as
              well as data relating to your use of the Services. Although we
              perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any
              activity you have undertaken using the Services.
            </p>
          </Section>
          <Section
            id="electronic-communications-transactions-and-signatures"
            title="27. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES"
          >
            <p className="text-sm sm:text-base lg:text-lg">
              Visiting the Services, sending us emails, and completing online
              forms constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically satisfy any legal requirement that such
              communication be in writing.
            </p>
          </Section>
          <Section
            id="california-users-and-residents"
            title="28. CALIFORNIA USERS AND RESIDENTS"
          >
            <p className="text-sm sm:text-base lg:text-lg">
              If any complaint with us is not satisfactorily resolved, you can
              contact the Complaint Assistance Unit of the Division of Consumer
              Services of the California Department of Consumer Affairs in
              writing at 1625 North Market Blvd., Suite N 112, Sacramento,
              California 95834 or by telephone at (800) 952-5210 or (916)
              445-1254.
            </p>
          </Section>
          <Section id="miscellaneous" title="29. MISCELLANEOUS">
            <p className="text-sm sm:text-base lg:text-lg">
              These Legal Terms and any policies or operating rules posted by us
              on the Services or in respect to the Services constitute the
              entire agreement and understanding between you and us. Our failure
              to exercise or enforce any right or provision of these Legal Terms
              shall not operate as a waiver of such right or provision.
            </p>
          </Section>
          <Section id="contact-us" title="30. CONTACT US">
            <p>
              In order to resolve a complaint regarding the Services or to
              receive further information regarding use of the Services, please
              contact us at:
            </p>
            <address className="not-italic text-[#CFABFA]">
              SocialShift Corp
              <br />
              251 Little Falls Drive
              <br />
              Wilmington, New Castle County, Delaware 19808
              <br />
              United States
              <br />
              Phone:{" "}
              <a href="tel:4049389214" className="text-[#D4E333]">
                404-938-9214
              </a>
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
