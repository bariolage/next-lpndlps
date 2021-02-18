import matter from "gray-matter";

export async function getGlobalData() {
  const infos = await import(`../content/infos.md`);
  const data = matter(infos.default);
  const result = {
    ...data.data,
    body: data.content,
  };
  return result;
}
