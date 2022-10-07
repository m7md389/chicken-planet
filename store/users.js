import usersJSON from "../moc-data/users";

function Users() {
  const users = usersJSON.users;
  let currentUser = null;

  function auth(email, password) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return { msg: "User not found." };
    }

    currentUser = user;
    return { mag: "Correct info.", name: user.name, type: user.type };
  }

  function addUser(name, email, password, phone, city, country, status) {
    const user = {
      name,
      email,
      password,
      phone,
      city,
      country,
      status,
      type: "user"
    };

    users.push(user);
  }

  function logout() {
    currentUser = null;
  }

  function isUserLoggedIn() {
    return !!currentUser;
  }

  return { auth, addUser, logout ,isUserLoggedIn};
}

export default Users();
