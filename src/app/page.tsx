import SubscriptionForm from "@/components/SubscriptionForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
        >
          <span aria-hidden>←</span> Back to plans
        </a>
        <h1 className="mt-3 mb-8 text-3xl font-semibold tracking-tight">
          Complete Your Subscription
        </h1>
        <SubscriptionForm />
      </main>
      <Footer />
    </>
  );
}
