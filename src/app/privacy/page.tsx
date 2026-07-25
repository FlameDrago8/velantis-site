import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      {/* TODO: replace with the final privacy policy copy (Shiv is providing it). */}
      <p>
        The Velantis privacy policy is being finalized and will be published
        here.
      </p>
    </LegalShell>
  );
}
