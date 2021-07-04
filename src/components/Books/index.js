import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Card, CardHeader, Badge, LinearProgress } from "@material-ui/core";
import { BooksContext } from "./context/BooksContext";
import BookCard from "./BookCard";

const useStyles = makeStyles((theme) => ({
  image: {
    paddingRight: theme.spacing(1),
  },
  badge: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(2),
  },
  grid: {
    flexGrow: 1,
  },
  termCard: {
    margin: theme.spacing(1),
  },
  error: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(3),
    color: red[500],
  },
}));

const Books = () => {
  const classes = useStyles();
  const { SearchTerm, Books, booksIsLoading, booksIsError, booksError } =
    useContext(BooksContext);

  const showMessage = () => {
    if (booksIsError) {
      return (
        <Grid item xs={12} sm={6} lg={3}>
          <Typography variant="body1" className={classes.error}>
            {booksError.message}
          </Typography>
        </Grid>
      );
    }
    if (!booksIsLoading && !booksIsError && Books.results.length <= 0) {
      return (
        <Grid item xs={12} sm={6} lg={3}>
          <Typography variant="body1" className={classes.error}>
            No result for the search!
          </Typography>
        </Grid>
      );
    }
    return null;
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} lg={4}>
          <Card className={classes.termCard}>
            <CardHeader
              title={<Typography>Term : {SearchTerm}</Typography>}
              action={
                <Badge
                  className={classes.badge}
                  badgeContent={Books.resultCount}
                  color="primary"
                />
              }
            />
            {booksIsLoading && <LinearProgress />}
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        {showMessage()}
        {Books.results.map((book) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={book.trackId}>
              <BookCard book={book} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Books;
