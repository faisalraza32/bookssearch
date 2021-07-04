import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Link,
} from "@material-ui/core";
import OpenIcon from "@material-ui/icons/OpenInNew";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import ScrollDialog from "../ScrollDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minHeight: "320px",
  },
  header: {
    alignItems: "flex-start",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    BackgroundColor: red[500],
  },
  image: {
    height: "100px",
  },
  cardContent: {
    marginTop: 0,
    paddingTop: 0,
  },
}));

const BookCard = ({ book }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const trimDescription = (value) => {
    if (!value) return null;

    if (value.length < 250) {
      return (
        <span
          dangerouslySetInnerHTML={{
            __html: value.replace(/\n/g, "<br />"),
          }}
        />
      );
    }

    return (
      <div>
        <span>{value.substr(0, 250)}</span>
        <IconButton
          className={classes.expand}
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="show more"
          size="small"
        >
          <OpenIcon />
        </IconButton>
      </div>
    );
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title={
          <Link href={book.trackViewUrl} target="new">
            {book.trackName}
          </Link>
        }
        subheader={
          <>
            <Link href={book.artistViewUrl} target="new">
              {book.artistName}
            </Link>
            {<br />}
            <span>{`Price : ${book.formattedPrice}`}</span>
          </>
        }
        avatar={
          <img
            alt={book.trackname}
            src={book.artworkUrl100}
            className={classes.image}
          />
        }
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1" component="span">
          {trimDescription(book.description)}
        </Typography>
      </CardContent>
      {open && (
        <ScrollDialog
          Title="Publisher Description"
          open={open}
          handleClose={() => setOpen(false)}
        >
          <Typography variant="body1" component="span">
            <span
              dangerouslySetInnerHTML={{
                __html: book.description.replace(/\n/g, "<br />"),
              }}
            />
          </Typography>
        </ScrollDialog>
      )}
    </Card>
  );
};

export default BookCard;
