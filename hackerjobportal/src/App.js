import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [stories, setStories] = useState([]);
  const [storiesIds, setStoriesIds] = useState([]);
  const [visible, setVisible] = useState(6); //here i am putting 6 values becasue it will takes 6 data from the api, its an additonal
  // point i know but i have made this assignment for the cureskin so i thought putting it here wont effect the assignment submission.
  const showmoreItems = () => {
    setVisible((prev) => prev + 6);
  };

  const HN_HOST = "https://hacker-news.firebaseio.com/v0/jobstories.json";
  useEffect(() => {
    try {
      const FetchStoriesID = async () => {
        const response = await fetch(`${HN_HOST}`);
        const storiesIds = await response.json();
        setStoriesIds([...storiesIds]);
        return storiesIds;
      };
      FetchStoriesID();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const FetchStroy = async (id) => {
    const response = await fetch(
      ` https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const StoryData = await response.json();

    const story = {
      id: StoryData.id,
      by: StoryData.by,
      title: StoryData.title,
      url: StoryData.url,
    };
    return story;
  };
  useEffect(() => {
    try {
      const FetchStories = async (id) => {
        const store = await Promise.all(id.map(FetchStroy));

        setStories([...store]);
      };

      FetchStories([...storiesIds]);
    } catch (error) {
      console.log(error);
    }
  }, [storiesIds]);

  return (
    <>
      <div class="body">
        <h1 class="header"> Hacker News Jobs Board</h1>
        {stories.slice(0, visible).map((items) => {
          return (
            <div class="card-body" key={items.id}>
              <h1 class="card-h1">{items.title}</h1>
              <span class="card-span">
                <p>{items.by}</p>
                <p>Id:{items.id}</p>
                <a href={items.url}>Link</a>
              </span>
            </div>
          );
        })}
        <div class="button-div">
          <button onClick={showmoreItems} class="button">
            Load More Jobs
          </button>
        </div>
      </div>
    </>
  );
}
