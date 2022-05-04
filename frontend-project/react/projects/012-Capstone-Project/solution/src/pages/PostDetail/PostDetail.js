import { Fragment, useState, useCallback, useContext, useEffect } from "react";
import { appContext } from "../../context/AppContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "../../components/card/mediaCard";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import placeholder from "../../assets/placeholder.png";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  root: {
    width: "60%",
    margin: "20px auto",
  },
  media: {
    height: 140,
  },
  module: {},
  image: {
    padding: 3,
  },
  avatar: {
    marginBottom: "0.35em",
  },
});

export const PostDetail = () => {
  const { test } = useContext(appContext);
  const [postDetail, setPostDetail] = useState([]);
  const [comment, setComment] = useState("");
  let { slug } = useParams();
  const classes = useStyles();
  const history = useHistory();

  const getPostDetail = async (
    url = `https://clarusway-blogapp.herokuapp.com/api/${slug}`
  ) => {
    try {
      const result = await axios.get(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      });
      setPostDetail(result?.data);
    } catch ({ response }) {
      if (response) {
        console.log(response?.data?.detail);
      } else {
        console.log("Something went wrong!");
      }
    }
  };

  const {
    author,
    content,
    detail_url,
    get_comment_count,
    get_like_count,
    get_view_count,
    image,
    published_date,
    owner,
    title,
    has_liked,
    like_url,
    comments,
  } = postDetail;

  useEffect(() => {
    getPostDetail();
  }, []);

  const handleLikeClick = async () => {
    try {
      const result = await axios.post(like_url, null, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      });
      getPostDetail();
    } catch ({ response }) {
      if (response) {
        console.log(response?.data?.detail);
      } else {
        console.log("Something went wrong!");
      }
    }
  };

  const handleDeleteClick = async () => {
    try {
      const result = await axios.delete(
        `https://clarusway-blogapp.herokuapp.com/api/delete/${slug}/`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Token " + localStorage.getItem("token"),
          },
        }
      );
      history.push(`/`);
    } catch ({ response }) {
      if (response) {
        console.log(response?.data?.detail);
      } else {
        console.log("Something went wrong!");
      }
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSend = async (key) => {
    if (key?.charCode === 13) {
      try {
        const result = await axios.post(
          `https://clarusway-blogapp.herokuapp.com/api/comment/${slug}/`,
          { content: comment },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Token " + localStorage.getItem("token"),
            },
          }
        );
        getPostDetail();
      } catch ({ response }) {
        if (response) {
          console.log(response?.data?.detail);
        } else {
          console.log("Something went wrong!");
        }
      }
    }
  };

  if (!postDetail) return "Loading...";

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image || placeholder}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {published_date}
            </Typography>
            <p className={classes.module}>{content}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <AccountCircle className={classes.avatar} />
          <Typography gutterBottom variant="h6" component="h2">
            {author}
          </Typography>
        </CardActions>
        <CardActions>
          <IconButton
            aria-label="add to favorites"
            className={classes.image}
            onClick={handleLikeClick}
          >
            <FavoriteIcon color={has_liked ? "secondary" : "primary"} />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            {get_like_count}
          </Typography>
          <IconButton aria-label="view count" className={classes.image}>
            <VisibilityIcon />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            {get_view_count}
          </Typography>
          <IconButton aria-label="comment count" className={classes.image}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            {get_comment_count}
          </Typography>
        </CardActions>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Comments
          </Typography>
          {comments?.length
            ? comments.map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    <hr />
                    <Typography variant="h6">{item?.user}:</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item?.content}:
                    </Typography>
                  </Fragment>
                );
              })
            : "No comments"}
          <TextField
            fullWidth
            margin="normal"
            id="comment"
            name="comment"
            label="Add comment"
            value={comment}
            onChange={handleCommentChange}
            onKeyPress={handleCommentSend}
          />
        </CardContent>
      </Card>
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        bgcolor="background.paper"
      >
        {owner && (
          <>
            <Box p={1}>
              <Button
                onClick={handleDeleteClick}
                variant="contained"
                color="primary"
              >
                Delete post
              </Button>
            </Box>
            <Box p={1}>
              <Button
                onClick={() => history.push(`/edit/${slug}`)}
                variant="contained"
                color="primary"
              >
                Edit post
              </Button>
            </Box>
          </>
        )}
        <Box p={1}>
          <Button
            onClick={() => history.push("/create")}
            variant="contained"
            color="primary"
          >
            Create new post
          </Button>
        </Box>
      </Box>
    </div>
  );
};
