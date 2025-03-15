import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGithubProfile, getGithubRipo } from "../services/apiGithub";

const initialState = {
  githubProfile: {
    name: "",
    bio: "",
    avatar: "",
    followers: 0,
    following: 0,
    location: "",
  },

  githubRepo: [],
  query: "",
  status: "idle",
};

export const fetchGithubProfile = createAsyncThunk(
  "github/fetchGithubProfile",
  async function (username) {
    if (!username) return;
    const profileData = await getGithubProfile(username);

    const repoData = await getGithubRipo(username);

    return { profileData, repoData };
  },
);

const githubSlice = createSlice({
  initialState,
  name: "github",
  reducers: {
    addQuery(state, action) {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchGithubProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGithubProfile.fulfilled, (state, action) => {
        state.status = "idle";
        state.githubProfile.avatar = action.payload?.profileData?.avatar_url;
        state.githubProfile.name = action.payload?.profileData?.name;
        state.githubProfile.bio = action.payload?.profileData?.bio;
        state.githubProfile.location = action.payload?.profileData?.location;
        state.githubProfile.followers = action.payload?.profileData?.followers;
        state.githubProfile.following = action.payload?.profileData?.following;
        state.githubRepo = action.payload?.repoData;
      })
      .addCase(fetchGithubProfile.rejected, (state) => {
        state.status = "error";
      }),
});

export const { addQuery } = githubSlice.actions;

export default githubSlice.reducer;

export const getProfile = (state) => state.github.githubProfile;

export const getStatus = (state) => state.github.status;

export const getRepo = (state) => state.github.githubRepo;

export const getQuery = (state) => state.github.query;
