import Head from 'next/head';

function PagesMetaHead() {
  return (
    <Head>
      {/* General SEO */}
      <title>FC Software | Soluciones Digitales</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Consultora de software especializada en soluciones digitales a medida: sitios web, apps móviles, sistemas internos y consultoría técnica."
      />
      <meta
        name="keywords"
        content="software a medida, desarrollo web, aplicaciones móviles, sistemas empresariales, bases de datos, consultoría técnica, soluciones digitales, Node.js, React, Next.js, MySQL, AWS"
      />
      <meta name="author" content="FC Software" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph (Facebook / LinkedIn) */}
      <meta property="og:title" content="FC Software | Soluciones Digitales" />
      <meta
        property="og:description"
        content="Transformamos ideas en soluciones digitales. Desarrollo de software a medida, web, mobile, escritorio y más."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.fcsoftware.com" />
      <meta property="og:image" content="/images/og-image-fc.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="FC Software | Soluciones Digitales" />
      <meta
        name="twitter:description"
        content="Consultora tecnológica que crea software eficiente y adaptado a cada cliente."
      />
      <meta name="twitter:image" content="/images/og-image-fc.jpg" />
    </Head>
  );
}

export default PagesMetaHead;
