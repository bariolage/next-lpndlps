import fetch from "isomorphic-fetch";

const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.NEXT_DATOCMS_API_TOKEN;

export async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? "/preview" : ""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
 // console.log(json.data)
  return json.data;
}

// export const getHomeData = async () => {
//   const data = await fetchAPI(`
//   query HomeQuery {
//     pageHome {
//       title
//       cover {
//         url
//       }
//       body
//     }
//   }`);
//   return {
//     ...data.pageHome,
//     excerpt: excerpt(data.pageHome.body),
//   };
// };

// export const getBeerData = async () => {
//   const data = await fetchAPI(`
//   query BeerQuery {
//     pageBeer {
//       title
//       cover {
//         url
//       }
//       body
//     }
//     allBeers {
//       name
//       description
//       illustration {
//         url
//       }
//       abv
//       ibu
//       bgColor {
//         hex
//       }
//       fontColor {
//         hex
//       }
//     }
//   }`);
//   return {
//     ...data.pageBeer,
//     excerpt: excerpt(data.pageBeer.body),
//     beers: data.allBeers,
//   };
// };

// export const getShopData = async () => {
//   const data = await fetchAPI(`
//     query ShopQuery {
//       pageShop {
//         title
//         body
//       }
//       allShops(first: "100") {
//         name
//         link
//         geo {
//           latitude
//           longitude
//         }
//         city
//         address
//       }
//     }`);
//   return {
//     ...data.pageShop,
//     excerpt: excerpt(data.pageShop.body),
//     shops: data.allShops,
//   };
// };

// export const getGlobalData = async () => {
//   const data = await fetchAPI(`
//     query GlobalQuery {
//       _site {
//         globalSeo {
//           fallbackSeo {
//             description
//             image {
//               url
//             }
//             title
//           }
//         }
//       }
//       infoContact {
//         telephone
//         socials {
//           name
//           url
//         }
//         body
//         mail
//         founder
//         siret
//         addresses {
//             addressLocality
//             addressCountry
//             streetAddress
//             postalCode
//             name
//             id
//         }
//       }
//       post {
//         _createdAt
//         body
//         title
//         slug
//         cover {
//           url
//         }
//       }
//     }
//   `);
//   return {
//     ...data._site.globalSeo.fallbackSeo,
//     ...data.infoContact,
//     lastPost: {
//       slug: data.post.slug,
//       title: data.post.title,
//       date: date(data.post.updatedAt),
//     },
//   };
// };

// export const getLegalData = async () => {
//   const data = await fetchAPI(`
//     query LegaQuery {
//       pageLegal {
//         title
//         body
//       }
//     }`);
//   return {
//     ...data.pageLegal,
//   };
// };

// export const getBlogData = async () => {
//   const data = await fetchAPI(`
//     query BlogQuery {
//       pageBlog {
//         title
//         cover {
//           url
//         }
//         body
//       }
//       allPosts {
//         _createdAt
//         body
//         title
//         slug
//         cover {
//           url
//         }
//       }
//     }`);
//   return {
//     ...data.pageBlog,
//     excerpt: excerpt(data.pageBlog.body),
//     posts: data.allPosts,
//   };
// };

// export const getPostData = async (slug) => {
//   const data = await fetchAPI(
//     `
//       query postQuery($slug: String) {
//         post(filter: {slug: {eq: $slug}}) {
//           _createdAt
//           body
//           title
//           slug
//           cover {
//             url
//           }
//         }
//       }`,
//     { variables: { slug: slug } }
//   );
//   return {
//     ...data.post,
//     excerpt: excerpt(data.post.body),
//   };
// };

// const excerpt = (e) =>
//   e.replace(/([*_]{1,2}|~~)((.|\n)*?)\1/g, "$2").substring(0, 140) + "...";

// const date = (item) => {
//   return moment(item).locale("fr").format("Do MMMM YYYY");
// };
