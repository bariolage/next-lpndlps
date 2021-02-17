import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO({ globalData, title }) {
  const canURL = globalData.url + useRouter().pathname;

  const seo = {
    title: globalData.name + " - " + title || globalData.name,
    image: globalData.banner.image,
    description: globalData.description,
    url: canURL,
  };

  const schema = [
    {
      "@context": "http://schema.org/",
      "@type": "Bakery",
      name: globalData.name,
      description: globalData.description,
      image: globalData.banner.image,
      url: globalData.url,
      telephone: globalData.telephone[0],
      address: {
        "@type": "PostalAddress",
        streetAddress: globalData.address.streetAddress,
        addressLocality: globalData.address.addressLocality,
        postalCode: globalData.address.postalCode,
        addressCountry: globalData.address.addressCountry,
      },
    },
  ];

  const jsonSchema = JSON.stringify(schema);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
        />
        {/* <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        /> */}
        <meta name="description" content={globalData.description} />
        <title>{seo.title}</title>
        <link rel="canonical" href={canURL} />
        <meta name="image" content={seo.image} />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/icon-96x96.png"></link>
        <meta name="theme-color" content="#b00a00" />

        {/* OpenGraph tags */}
        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <script type="application/ld+json">{jsonSchema}</script>
      </Head>
    </>
  );
}
