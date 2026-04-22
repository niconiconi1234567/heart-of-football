(function () {
  function setupMenu() {
    const toggle = document.querySelector('[data-menu-toggle]');
    const panel = document.querySelector('[data-menu-panel]');
    if (!toggle || !panel) return;
    toggle.addEventListener('click', function () {
      panel.classList.toggle('is-open');
      toggle.classList.toggle('is-open');
    });
  }

  function setupSearch() {
    const root = document.querySelector('[data-search-root]');
    const input = document.querySelector('[data-search-input]');
    const results = document.querySelector('[data-search-results]');
    if (!root || !input || !results) return;

    let searchData = [];

    const searchUrl = root.getAttribute('data-search-url') || '/search.json';
    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        searchData = data;
      })
      .catch(() => {
        searchData = [];
      });

    function render(items) {
      if (!items.length) {
        results.innerHTML = '<div class="search-empty">No results found.</div>';
        results.hidden = false;
        return;
      }
      results.innerHTML = items.map(function (item) {
        const desc = item.description ? '<div class="search-result-desc">' + item.description + '</div>' : '';
        return '<a class="search-result-item" href="' + item.url + '">' +
          '<div class="search-result-type">' + item.type + '</div>' +
          '<div class="search-result-title">' + item.title + '</div>' +
          desc +
        '</a>';
      }).join('');
      results.hidden = false;
    }

    input.addEventListener('input', function (event) {
      const query = event.target.value.trim().toLowerCase();
      if (!query) {
        results.hidden = true;
        results.innerHTML = '';
        return;
      }
      const items = searchData.filter(function (item) {
        const hay = [item.title, item.description, (item.tags || []).join(' '), item.type].join(' ').toLowerCase();
        return hay.indexOf(query) !== -1;
      }).slice(0, 8);
      render(items);
    });

    document.addEventListener('click', function (event) {
      if (!root.contains(event.target)) {
        results.hidden = true;
      }
    });
  }

  function setupToc() {
    const source = document.querySelector('[data-toc-source]');
    const toc = document.querySelector('[data-generated-toc]');
    if (!source || !toc) return;

    const headings = source.querySelectorAll('h2, h3');
    if (!headings.length) {
      toc.innerHTML = '<div class="toc-empty">No section headings yet.</div>';
      return;
    }

    const list = document.createElement('ul');
    list.className = 'toc-list';

    headings.forEach(function (heading, index) {
      if (!heading.id) {
        heading.id = 'section-' + (index + 1);
      }
      const item = document.createElement('li');
      item.className = 'toc-item toc-' + heading.tagName.toLowerCase();
      const link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      item.appendChild(link);
      list.appendChild(item);
    });

    toc.innerHTML = '';
    toc.appendChild(list);
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupMenu();
    setupSearch();
    setupToc();
  });
})();
