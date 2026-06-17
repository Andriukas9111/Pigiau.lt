import { PageBanner } from "@/components/sections/Banners";
import { BookingFlow } from "@/components/sections/BookingFlow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Wash",
  description:
    "Book a laundry pickup in five quick steps. Choose your service, pick a time, and our crew collects, cleans and delivers across Lithuania — free pickup.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <div className="nw-fade">
      <PageBanner
        image="hero_booking"
        title="Book Your Wash"
        alt="Book your wash — five quick steps to a cosmic-clean pickup"
      />
      <BookingFlow />
    </div>
  );
}
