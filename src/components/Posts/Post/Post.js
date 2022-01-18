import moment from "moment";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import useStyles from "./styles";
import { setSelectedPostId } from "../../../features/Posts/editPostSlice";
import { remove } from "../../../features/Posts/deletePostSlice";
import { updateLikePost } from "../../../features/Posts/editPostSlice";
import { useDispatch } from "react-redux";

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleEditClick = () => {
    console.log("post id ", post._id);
    dispatch(setSelectedPostId(post._id));
  };

  const handleDeleteClick = () => {
    dispatch(remove(post._id));
  };

  const handleLikeClick = () => {
    dispatch(updateLikePost(post._id));
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "#FFFFFF" }}
          size="small"
          onClick={handleEditClick}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={handleLikeClick}>
          <ThumbUpAltIcon fontSize="small" />
          Like &nbsp;
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={handleDeleteClick}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
