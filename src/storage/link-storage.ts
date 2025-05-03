import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "link-storage";

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
}

async function getLinks(){
  try {
    const links = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
    return links ? JSON.parse(links) : [];
  } catch (error) {
    console.log(error);
  }
}

async function createLink(newLink: LinkStorage){
  try {
    const links = await getLinks();
    const newLinks = [...links, newLink];
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(newLinks));
  } catch (error) {
    console.log(error);
  }
}

async function updateLink(link: LinkStorage){
  try {
    const links = await getLinks();
    const newLinks = links.map((item: LinkStorage) => item.id === link.id ? link : item);
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(newLinks));
  } catch (error) {
    console.log(error);
  }
}

async function deleteLink(link: LinkStorage){
  try {
    const links = await getLinks();
    const newLinks = links.filter((item: LinkStorage) => item.id !== link.id);
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(newLinks));
  } catch (error) {
    console.log(error);
  }
}

async function deleteMultipleLinks(linkIds: string[]){
  try {
    const links = await getLinks();
    const newLinks = links.filter((item: LinkStorage) => !linkIds.includes(item.id));
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(newLinks));
  } catch (error) {
    console.log(error);
  }
}

export const linkStorage = {
  getLinks,
  createLink,
  updateLink,
  deleteLink,
  deleteMultipleLinks,
}