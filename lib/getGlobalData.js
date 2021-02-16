import matter from "gray-matter";

export async function getGlobalData() {
  const infos = await import(`../content/pages/infos.md`);
  const data = matter(infos.default);
  const result = {
    name: data.data.name,
    banner: {
      image: data.data.banner.image,
      alt: data.data.banner.alt,
      width: data.data.banner.width,
      height: data.data.banner.height,
    },
    mail: data.data.mail,
    telephone: data.data.telephone,
    address: data.data.address,
    body: data.content,
    contactTitle: data.data.contactTitle,
    contactMessage: data.data.contactMessage,
    navigation: data.data.navigation,
    cover: data.data.cover,
  };
  return result;
}
