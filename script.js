fetch('/assets/data/netflix_kategorier.json')
  .then(res => res.json())
  .then(data => {
    const categoryList = document.getElementById('categoryList');
    const subListContainer = document.getElementById('subListContainer');
    const mainTitle = document.getElementById('mainTitle');

    Object.entries(data).forEach(([category, items]) => {
      const btn = document.createElement('button');
      btn.className = 'category-btn';
      btn.textContent = `${category}`;
      btn.onclick = () => {
        mainTitle.textContent = category;
        subListContainer.innerHTML = '';
        items.forEach(item => {
          const div = document.createElement('div');
          div.className = 'sublist-item';
          div.innerHTML = `
            <strong>${item.name}</strong><br>
            <code>${item.code}</code><br>
            <a href="https://www.netflix.com/browse/genre/${item.code}" target="_blank">Åpne på Netflix</a>
          `;
          subListContainer.appendChild(div);
        });
      };
      categoryList.appendChild(btn);
    });
  });
