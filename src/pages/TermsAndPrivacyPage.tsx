const TermsAndPrivacyPage = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#172554] mb-8">
          Terms & Conditions and Privacy Policy
        </h1>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#172554] mb-4">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to FissieE-J Helping Hands Foundation. By accessing our
              website or participating in our programs, you agree to comply
              with and be bound by the following terms and conditions.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-[#172554] mb-4">
              2. Use of Site
            </h2>
            <p className="leading-relaxed">
              You agree to use this site for lawful purposes only and in a way
              that does not infringe the rights of, restrict, or inhibit anyone
              else's use and enjoyment of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#172554] mb-4">
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
            <h2 className="text-2xl font-bold text-[#172554] mb-4">
              4. Donations
            </h2>
            <p className="leading-relaxed">
              All donations are voluntary and non-refundable unless a clear
              error in processing has occurred. We use secure third-party
              payment processors to ensure your financial data is protected.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPrivacyPage;
