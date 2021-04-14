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
        alt
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
      annonceDate
      annonceTitle
      annonceVisible
    }
  }
  `);
 const date = new Date(data.info.annonceDate);
 var options = { year: "numeric", month: "long" };
 return {
  global: {
   url: data.info.siteUrl,
   title: data.info.siteTitle,
   description: data.info.siteDescription,
   cover: data.info.cover.url,
   coverAlt: data.info.cover.alt,
   address: {
    streetAddress: data.info.streetAddress,
    addressLocality: data.info.addressLocality,
    postalCode: data.info.postalCode,
    addressCountry: data.info.addressCountry,
   },
   navigation: data.info.navigation,
   annonce: {
    date: date.toLocaleDateString("fr-FR", options),
    title: data.info.annonceTitle,
    body: data.info.annonce,
    visible: data.info.annonceVisible,
   },
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
