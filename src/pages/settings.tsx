import Layout from "../components/template/Layout";
import PageSection from "../components/template/PageSection";
import ThemeToggle from "../components/template/ThemeToggle";

export default function Settings() {
  return (
    <Layout title="Settings" subtitle="Here you can adjust the system settings">
      <main>
        <PageSection title="Theme Settings">
          <h5>Select the color theme for the application:</h5>
          <ThemeToggle />
        </PageSection>
        <PageSection title="Want a custom version to your business?">
          <p>
            Contact me directly, so we can set all the specific goals for your
            business-customized application.
          </p>
          <button>
            <a href="http://joaolavelino.netlify.app" target="_blank">
              Contact-me
            </a>
          </button>
        </PageSection>
        <PageSection title="Copywright">
          <p>
            This generic application is has a creative commons licence. It was
            created by João Avelino for educational purposes. Althought the
            business-specific versions, with customized parameters and functions
            has exclusive licences only conceded to the business themselves.
          </p>
        </PageSection>
      </main>
    </Layout>
  );
}
