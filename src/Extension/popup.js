import {components} from "./Data/Components.js"

let currentCategory = 'All';
let searchTerm = '';

const categoryList = ['All', ...new Set(components.map(c => c.groupName))];

function renderCategories() {
    const container = document.getElementById('categories');
    container.innerHTML = categoryList.map(category =>
        `<button class="category-btn ${category === currentCategory ? 'active' : ''}" data-category="${category}">
      ${category}
    </button>`
    ).join('');

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.getAttribute('data-category');
            renderCategories();
            renderComponents();
        });
    });
}

function renderComponents() {
    const container = document.getElementById('components-list');
    const filtered = components.filter(component => {
        const matchesCategory = currentCategory === 'All' || component.groupName === currentCategory;
        const matchesSearch = searchTerm === '' ||
            component.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            component.groupName.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div style="text-align: center; padding: 32px; color: #6b7280;">No components found</div>`;
        return;
    }

    container.innerHTML = filtered.map(component => `
    <div class="component-item" data-url="${component.url}" data-title="${component.title}">
      <img src="${component.image}" alt="${component.title}" class="component-image">
      <h4 class="component-name">${component.title}</h4>
      <p class="component-category">${component.description}</p>
    </div>
  `).join('');

    document.querySelectorAll('.component-item').forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-url');
            window.open(`https://zenui.net${url}`, '_blank');
        });
    });
}

function copyComponent(url, title) {
    const text = `<!-- ${title} -->\n<!-- Visit: https://zenui.net${url} -->`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(showNotification);
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification();
    }
}

function showNotification() {
    const notification = document.getElementById('copy-notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search').addEventListener('input', e => {
        searchTerm = e.target.value;
        renderComponents();
    });

    renderCategories();
    renderComponents();
});
