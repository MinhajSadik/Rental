import app from './app/app'
const port = process.env.PORT || 5001;


app.listen(port, () => {
  console.log(`⚡️[server]: Server running at http://localhost:${port}`);
});
