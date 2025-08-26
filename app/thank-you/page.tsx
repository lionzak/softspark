// ===== THANK YOU PAGE (Server Component) =====
import ThankYouClient from "./ThankYouClient";

export const metadata = {
  title: "Thank You - Message Received | SoftSpark",
  description:
    "Thank you for contacting SoftSpark. We have received your message and will get back to you shortly.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
