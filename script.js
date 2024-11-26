document.addEventListener('DOMContentLoaded', () => {
  const username = 'avpaul527'; 

  
  fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
          document.getElementById('profile-picture').src = data.avatar_url;
          document.getElementById('name').textContent = data.name || 'No Name Provided';
          document.getElementById('username').textContent = `@${data.login}`;
          document.getElementById('repo-count').textContent = `Repositories: ${data.public_repos}`;
          document.getElementById('bio').textContent = `Bio: ${data.bio || 'No bio available'}`;
      })
      .catch(error => {
          console.error('Error fetching GitHub profile:', error);
          document.getElementById('name').textContent = 'Error loading profile';
      });
});