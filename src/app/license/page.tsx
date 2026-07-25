import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "License",
};

export default function LicensePage() {
  return (
    <LegalShell title="License">
      {/* TODO: replace with the final license copy (Shiv is providing it). */}
      <p>
        Velantis license information is being finalized and will be published
        here.
      </p>
    </LegalShell>
  );
}
