import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/ui/primitives";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of use for the Rajasthan Pickleball Association website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title={
          <>
            Terms &amp; <span className="text-gold">Conditions.</span>
          </>
        }
        intro="The terms that govern the use of this website."
        image="/images/hero.jpg"
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            By using this website you agree to these terms. The Rajasthan Pickleball
            Association (&ldquo;RPA&rdquo;) is the official state governing body for
            pickleball in Rajasthan, affiliated with the Indian Pickleball
            Association (IPA).
          </p>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Use of content</h2>
            <p className="mt-2">
              Content on this site is provided for information about RPA and its
              activities. Registrations, sanctioning and rankings are administered
              through the IPA and its official portals, and are subject to IPA rules
              and eligibility.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Accuracy</h2>
            <p className="mt-2">
              Venue, tournament and membership details are kept as current as
              possible but may change. Always confirm through the linked official
              forms and the IPA before relying on any information.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
            <p className="mt-2">
              Questions about these terms? Email{" "}
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
