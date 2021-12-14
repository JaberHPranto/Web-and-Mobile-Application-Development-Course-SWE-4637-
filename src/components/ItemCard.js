import EjectIcon from "@mui/icons-material/Eject";
import { Avatar, Grid } from "@mui/material";
import React from "react";
import defaultImage from "../images/defaultImage.png";

function ItemCard({ item, incrementVote }) {
  const handleUpVote = () => {
    incrementVote(item.id);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={2} className="card_img">
          <img src={defaultImage} alt="default" />
        </Grid>
        <Grid item lg={10}>
          <div className="card_info">
            <div className="vote">
              <div className="vote_icon">
                <EjectIcon onClick={handleUpVote} />
              </div>
              <h3>{item.votes}</h3>
            </div>
            <div className="card_desc">
              <div className="card_name">{item.name}</div>
              <div className="card_text">{item.text}</div>
            </div>
            <div className="card_submission">
              <div className="card_submitter">Submitted by:</div>
              <Avatar
                alt="Remy Sharp"
                src={item.avatar_url}
                sx={{ width: 35, height: 35 }}
                className="card_avatar"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ItemCard;
