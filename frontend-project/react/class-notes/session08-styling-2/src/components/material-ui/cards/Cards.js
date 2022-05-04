import { Container, Grid, Paper } from '@mui/material';

const Cards = () => {
  return (
    <Container>
      <Grid container justify="center" spacing={2}>
        {[0, 1, 2].map((value) => (
          <Grid key={value} item xs={4} sm={6}>
            <Paper style={{ height: 90, marginBottom: 10 }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
