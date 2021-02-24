import Head from "next/head";
import ContactButton from "../components/ContactButton";
import DomainVerifiedBadge from "../components/DomainVerifedBadge";
import ThemeSwitcher from "../components/ThemeSwitcher";

// EDIT STARTS HERE:
const domainName = "ohmydomain.vercel.app";
const domainPrice = "$120";

const whoislink = "https://www.iana.org/whois?q=vercel.com";
const domainRegisterName = "Vercel";
const domainRegisterLink = "https://vercel.com";

const domainOwner = "Indiealistic";
const ownerlink = "https://indiealistic.studio";
const contactlink = "mailto:hey@indiealistic.studio?subject=DOMAIN%20ASKING";
// END

export default function Home() {
  return (
    <div className="flex-col space-y-1 justify-between items-center max-w-4xl w-full px-8 py-2 mt-10 my-0 md:my-8 mx-auto">
      <Head>
        <title>{domainName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full pt-5 mb-7 pb-3 md:py-2 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60 z-100">
          <ThemeSwitcher />
        </nav>
        <div className="relative inline-flex pr-7">
          <h1 className="text-3xl md:text-5xl font-domainet text-black dark:text-white">
            {domainName}
          </h1>
          <div className="text-black dark:text-white absolute top-0 right-0 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-full cursor-pointer">
            <a href={whoislink} target="_blank" className="cursor-pointer">
              <div className=" animate-spin-slow">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="mt-2">
            <h2 className="text-4xl text-gray-300 dark:text-gray-600 font-black ">
              <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate-gradient-x text-transparent bg-clip-text">
                {domainPrice}
              </span>
            </h2>
          </div>
          <div className="mt-4">
            <p className="text-black dark:text-white typing-text">
              is ready for sale
            </p>
          </div>
          <div className="grid grid-cols-1">
            <DomainVerifiedBadge
              whoislink={ownerlink}
              domainowner={domainOwner}
            />
            <ContactButton contactlink={contactlink} />
          </div>

          <footer className="absolute bottom-0 mb-16 text-sm text-black dark:text-white">
            <div>
              This domain is registered at{" "}
              <span className="hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md -ml-1 -mr-1">
                <a href={domainRegisterLink}>
                  <strong>{domainRegisterName}</strong>
                </a>
              </span>
              <br />
              Placeholder by{" "}
              <span className="hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md -ml-1 -mr-1">
                <a href="https://github.com/indiealistic/oh-my-domain">
                  <strong>oh my domain 🍺</strong>
                </a>
              </span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
