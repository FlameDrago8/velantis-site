import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service">
      {/* TODO: replace with the final terms of service copy (Shiv is providing it). */}
      <p>
        The Velantis terms of service are being finalized and will be
        published here.
      </p>
    </LegalShell>
  );
}
