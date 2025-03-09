const getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    return response.json();
  };
  
  const render = (users) => {
    return users.map(({ name, email }) => `<li>${name} (${email})</li>`).join('');
  };
  
  (async () => {
    const users = await getUsers();
    document.querySelector('#content').innerHTML = `<ul>${render(users)}</ul>`;
  })();