import Head from "next/head";
import { Navbar } from "../ui";

type DashboardLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const Layout = ({ children, title }: DashboardLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Damián Martinez" />
        <meta
          name="description"
          content={`App con información sobre Pokemon ${title}`}
        />
        <meta name="keywords" content={`pokemon, pokedex, pikachu, ${title}`} />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
