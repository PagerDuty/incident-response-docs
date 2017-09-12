pegasus('https://api.github.com/repos/' + repo_id).then(
  /* Request successful, we got the stars */
  function(data, xhr)
  {
    var count = data.forks_count;
    if (count > 10000)
      count = (count / 1000).toFixed(0) + 'k';
    else if (count > 1000)
      count = (count / 1000).toFixed(1) + 'k';

    /* Set number of forks */
    var forks = document.querySelector('.repo-forks .count');
    forks.innerHTML = count;
  },

  /* Handle error */
  function(data, xhr)
  {
    console.error(data, xhr.status);
  }
);
