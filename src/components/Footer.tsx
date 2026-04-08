export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-100">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-yellow-400 font-bold text-purple-700">
              S
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-purple-700">Saksham</div>
              <div className="font-semibold text-purple-700">Senior</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-neutral-600">
            Our mission is to help seniors become digitally independent and
            have a wholesome and safe online experience. Join our community on
            WhatsApp and YouTube and follow us on Instagram, Facebook and X.
          </p>
        </div>
        <div>
          <div className="mb-3 font-semibold">Website</div>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>Home</li>
            <li>About us</li>
            <li>Plan</li>
            <li>Services</li>
            <li>Learn</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="mb-3 font-semibold">Help</div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-semibold">Legal</div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-100 py-4 text-center text-xs text-neutral-500">
        © 2026 Saksham Senior. All rights reserved.
      </div>
    </footer>
  );
}
