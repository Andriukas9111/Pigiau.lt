import { PageBanner } from "@/components/sections/Banners";
import { BookingFlow } from "@/components/sections/BookingFlow";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Book Your Wash" };

export default function BookingPage() {
  return (
    <div className="nw-fade">
      <PageBanner image="hero_booking" alt="Book your wash — five quick steps to a cosmic-clean pickup" />
      <BookingFlow />
    </div>
  );
}
