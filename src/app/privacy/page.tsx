import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/ui/primitives";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Rajasthan Pickleball Association handles your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title={
          <>
            Privacy <span className="text-gold">Policy.</span>
          </>
        }
        intro="How we collect, use and protect your information."
        image="/images/community.jpg"
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            The Rajasthan Pickleball Association (&ldquo;RPA&rdquo;) respects your
            privacy. This policy explains what information we collect and how it is
            used when you interact with this website.
          </p>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Information we collect</h2>
            <p className="mt-2">
              Player, club and tournament registrations are handled through the
              official Indian Pickleball Association (IPA) portal and forms. Any
              information you submit there is governed by the IPA&apos;s own privacy
              terms. This website itself does not store personal data beyond basic,
              anonymised analytics.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">How we use it</h2>
            <p className="mt-2">
              We use registration information solely to administer memberships,
              rankings, sanctioned events and communications relating to pickleball
              in Rajasthan. We do not sell your data.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
            <p className="mt-2">
              For any privacy questions, email{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-teal hover:text-teal-deep">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
