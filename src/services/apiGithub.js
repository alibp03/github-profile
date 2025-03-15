export async function getGithubProfile(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const profileData = await res.json();

    return profileData;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getGithubRipo(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const repoData = await res.json();

    return repoData;
  } catch (err) {
    console.log(err.message);
  }
}
