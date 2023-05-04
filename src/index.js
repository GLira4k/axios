import axios from "axios";

axios
  .get("https://api.github.com/users/GLira4k")
  .then((res) => {
    const user = res.data;

    axios.get(user.repos_url).then((repos) => {
      console.log(repos.data);
    });
  })
  .catch((err) => {
    console.log(err);
  });
