import { fetchAPI } from "../datocms";

export const getGlobalData = async () => {
  const data = await fetchAPI(`
  query GlobalQuery {
    info {
      siteTitle
      siteDescription
      banner {
        url
        width
        height
      }
      cover {
        url
      }
      siteUrl
      streetAddress
      addressLocality
      postalCode
      addressCountry
      telephone {
        number
      }
      mail
      title
      description
      navigation {
        name
        slug
      }
      annonce
    }
  }
  `);
  return {
    global: {
      url: data.info.siteUrl,
      title: data.info.siteTitle,
      description: data.info.siteDescription,
      cover: data.info.cover.url,
      address: {
        streetAddress: data.info.streetAddress,
        addressLocality: data.info.addressLocality,
        postalCode: data.info.postalCode,
        addressCountry: data.info.addressCountry,
      },
      navigation: data.info.navigation,
      annonce: data.info.annonce,
    },
    contact: {
      title: data.info.title,
      body: data.info.description,
      banner: data.info.banner,
      mail: data.info.mail,
      telephone: data.info.telephone,
      address: {
        streetAddress: data.info.streetAddress,
        addressLocality: data.info.addressLocality,
        postalCode: data.info.postalCode,
        addressCountry: data.info.addressCountry,
      },
    },
  };
};
