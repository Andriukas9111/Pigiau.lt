import { PageBanner } from "@/components/sections/Banners";
import { BookingFlow } from "@/components/sections/BookingFlow";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Book Your Wash" };

export default function BookingPage() {
  return (
    <div className="nw-fade">
      <PageBanner
        eyebrow="BOOK A PICKUP"
        title="Book Your Wash"
        subtitle="Five quick steps and our crew beams in to collect your laundry. Free pickup & delivery included."
        illustrations={["pickup", "van"]}
      />
      <BookingFlow />
    </div>
  );
}
