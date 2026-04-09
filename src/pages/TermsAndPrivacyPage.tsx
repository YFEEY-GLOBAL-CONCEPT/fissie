const TermsAndPrivacyPage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-hero-bg py-24 text-hero-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Terms & Conditions and Privacy Policy
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl py-16">
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to FissieE-J Helping Hands Foundation. By accessing our
              website or participating in our programs, you agree to comply
              with and be bound by the following terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              2. Use of Site
            </h2>
            <p className="leading-relaxed">
              You agree to use this site for lawful purposes only and in a way
              that does not infringe the rights of, restrict, or inhibit anyone
              else's use and enjoyment of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              3. Privacy Policy
            </h2>
            <p className="leading-relaxed">
              We are committed to protecting your privacy. Any personal
              information collected through this website will be used solely for
              the purpose of our foundation's activities and will not be
              shared with third parties without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              4. Donations
            </h2>
            <p className="leading-relaxed">
              All donations are voluntary and non-refundable unless a clear
              error in processing has occurred. We use secure third-party
              payment processors to ensure your financial data is protected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              5. Cookie Policy
            </h2>
            <p className="leading-relaxed">
              We use cookies to enhance your browsing experience. By continuing
              to use our website, you consent to our use of cookies as described
              in this policy. You can manage your cookie preferences through the
              cookie consent banner that appears on your first visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              6. Contact Information
            </h2>
            <p className="leading-relaxed">
              For any questions regarding these terms or our privacy policy,
              please contact us at hello@fissieej.com or call +234 703 686 9240.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPrivacyPage;
