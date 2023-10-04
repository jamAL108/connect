import axios from "axios";
async function fetchAndStoreDataFromGitHubFolder(url) {
  try {
    const response = await axios.get(url);
    const markdownContent = response.data;
    console.log(markdownContent)
    return markdownContent;
  } catch (error) {
    console.error('Error fetching data from GitHub:', error.message);
  }
}
export default fetchAndStoreDataFromGitHubFolder;

