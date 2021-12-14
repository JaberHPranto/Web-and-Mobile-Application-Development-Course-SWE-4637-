import React, { useState } from "react";
import { data } from "../seedData";
import ItemCard from "./ItemCard";

function ItemList() {
  const [post, setPost] = useState(data);

  const incrementVote = (id) => {
    const newPostList = post.map((item) => {
      if (item.id === id) {
        const updatedPost = {
          ...item,
          votes: item.votes + 1,
        };
        return updatedPost;
      }
      return item;
    });

    setPost(newPostList);
  };

  const sortPostByVotes = (posts) => {
    const sortByVote = posts.slice(0);
    sortByVote.sort(function (a, b) {
      return b.votes - a.votes;
    });

    return sortByVote;
  };

  return (
    <div className="card_list">
      {sortPostByVotes(post).map((item) => (
        <ItemCard key={item.id} item={item} incrementVote={incrementVote} />
      ))}
    </div>
  );
}

export default ItemList;
