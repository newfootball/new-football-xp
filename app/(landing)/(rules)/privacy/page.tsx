import { Container } from "@/components/container";

export default function PrivacyPage() {
  return (
    <Container>
      <h1 className="text-5xl">Privacy Policy</h1>
      <div className="text-sm text-muted-foreground">
        {new Date("2024-03-18").toLocaleDateString()}
      </div>
      <p className="mt-2">
        Your privacy is important to us. It is our policy to respect your
        privacy regarding any information we may collect from you across our
        website, <a href="https://www.example.com">https://www.example.com</a>,
        and other sites we own and operate.
      </p>

      <h2 className="mt-4 text-3xl">1. Information we collect</h2>
      <p className="mt-2">
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent. We also let you know why we’re collecting it and
        how it will be used. We only retain collected information for as long as
        6 months.
      </p>

      <h2 className="mt-4 text-3xl">2. Information we share</h2>
      <p className="mt-2">
        We don't share your personal information with third-parties, except
        where required by law. We will only retain personal information for as
        long as necessary to provide you with a service.
      </p>

      <h2 className="mt-4 text-3xl">3. Log data</h2>
      <p className="mt-2">
        We collect information that your browser sends whenever you visit our
        website. This log data may include information such as your computer's
        Internet Protocol ("IP") address, browser type, browser version, the
        pages of our site that you visit, the time and date of your visit, the
        time spent on those pages, and other statistics.
      </p>

      <h2 className="mt-4 text-3xl">4. Cookies</h2>
      <p className="mt-2">
        We use "cookies" to collect information and improve our services. You
        have the option to either accept or refuse these cookies and know when a
        cookie is being sent to your computer. If you choose to refuse our
        cookies, you may not be able to use some portions of our service.
      </p>

      <h2 className="mt-4 text-3xl">5. Service providers</h2>
      <p className="mt-2">
        We employ third-party companies and individuals due to the following
        reasons:
      </p>
      <ul className="mt-2 list-inside list-disc">
        <li>To facilitate our service</li>
        <li>To provide the service on our behalf</li>
        <li>To perform service-related services</li>
        <li>To assist us in analyzing how our service is used</li>
      </ul>
      <p className="mt-2">
        We want to inform our service users that these third parties have access
        to your personal information. The reason is to perform the tasks
        assigned to them on our behalf. However, they are obligated not to
        disclose or use the information for any other purpose.
      </p>

      <h2 className="mt-4 text-3xl">6. Security</h2>
      <p className="mt-2">
        security of your personal information is important to us, but remember
        no method of transmission over the internet, or method of electronic
        storage is 100% secure. While we strive to use commercially acceptable
        means to protect your personal information, we cannot guarantee its
        absolute security.
      </p>

      <h2 className="mt-4 text-3xl">7. Links to other sites</h2>
      <p className="mt-2"></p>
    </Container>
  );
}
