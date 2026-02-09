// State management
let currentCrawl = null;
let map = null;
let selectedCity = 'all';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderCityFilters();
    renderRoutes();
    setupEventListeners();
    handleUrlHash();
});

// Handle browser back/forward
window.addEventListener('hashchange', handleUrlHash);

function handleUrlHash() {
    const hash = window.location.hash.slice(1);
    if (hash.startsWith('crawl/')) {
        const crawlId = hash.split('/')[1];
        const crawl = crawlRoutes.find(r => r.id === crawlId);
        if (crawl) {
            showCrawl(crawl);
        }
    } else {
        showHome();
    }
}

function setupEventListeners() {
    document.getElementById('back-btn').addEventListener('click', () => {
        window.location.hash = '';
    });
}

function renderCityFilters() {
    const cities = ['all', ...new Set(crawlRoutes.map(r => r.city))];
    const filtersDiv = document.getElementById('city-filters');
    
    filtersDiv.innerHTML = `
        <div class="city-filters">
            ${cities.map(city => `
                <button 
                    class="city-filter-btn ${selectedCity === city ? 'active' : ''}" 
                    onclick="filterByCity('${city}')"
                >
                    ${city === 'all' ? '🌍 All Cities' : city}
                </button>
            `).join('')}
        </div>
    `;
}

function filterByCity(city) {
    selectedCity = city;
    renderCityFilters();
    renderRoutes();
}

function renderRoutes() {
    const grid = document.getElementById('routes-grid');
    const filteredRoutes = selectedCity === 'all' 
        ? crawlRoutes 
        : crawlRoutes.filter(r => r.city === selectedCity);
    
    grid.innerHTML = filteredRoutes.map(route => `
        <div class="route-card" onclick="navigateToCrawl('${route.id}')">
            <div class="route-location">📍 ${route.city}, ${route.country}</div>
            <h3>${route.name}</h3>
            <p>${route.description}</p>
            <div class="route-meta">
                <span>${route.pubs.length} pubs</span>
                <span>⏱️ ${route.duration}</span>
            </div>
        </div>
    `).join('');
}

function navigateToCrawl(crawlId) {
    window.location.hash = `crawl/${crawlId}`;
}

function showHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('crawl-view').style.display = 'none';
    currentCrawl = null;
}

function showCrawl(crawl) {
    currentCrawl = crawl;
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('crawl-view').style.display = 'block';
    renderCrawl(crawl);
}

function renderCrawl(crawl) {
    const content = document.getElementById('crawl-content');
    
    content.innerHTML = `
        <div class="crawl-header">
            <h2>${crawl.name}</h2>
            <p>${crawl.description}</p>
            <div class="crawl-meta">
                <div class="crawl-info">
                    <span>📍 ${crawl.pubs.length} pubs</span>
                    <span>⏱️ ${crawl.duration}</span>
                </div>
                <button class="share-btn" onclick="shareCrawl()">🔗 Share Route</button>
            </div>
        </div>

        <div class="crawl-content-grid">
            <div class="pubs-list">
                <h3>Route Stops</h3>
                ${crawl.pubs.map((pub, index) => `
                    <div class="pub-card">
                        <div class="pub-header">
                            <div class="pub-number">${index + 1}</div>
                            <div class="pub-info">
                                <h4>${pub.name}</h4>
                            </div>
                        </div>
                        <p class="pub-address">${pub.address}</p>
                        <p class="pub-description">${pub.description}</p>
                        ${pub.specialty ? `<p class="pub-specialty">🍺 ${pub.specialty}</p>` : ''}
                    </div>
                `).join('')}
            </div>

            <div class="map-container">
                <h3>Map</h3>
                <div id="map"></div>
            </div>
        </div>
    `;

    // Initialize map after content is rendered
    setTimeout(() => initMap(crawl.pubs), 100);
}

function initMap(pubs) {
    // Remove existing map if any
    if (map) {
        map.remove();
    }

    const center = [pubs[0].lat, pubs[0].lng];
    
    map = L.map('map').setView(center, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Custom orange marker icon
    const orangeIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // Add markers
    pubs.forEach((pub, index) => {
        L.marker([pub.lat, pub.lng], { icon: orangeIcon })
            .addTo(map)
            .bindPopup(`<strong>${index + 1}. ${pub.name}</strong><br>${pub.address}`);
    });

    // Draw route line
    const coordinates = pubs.map(pub => [pub.lat, pub.lng]);
    L.polyline(coordinates, {
        color: 'orange',
        weight: 3,
        opacity: 0.7
    }).addTo(map);

    // Fit bounds to show all markers
    const bounds = L.latLngBounds(coordinates);
    map.fitBounds(bounds, { padding: [50, 50] });
}

function shareCrawl() {
    const url = window.location.href;
    const crawl = currentCrawl;
    
    if (navigator.share) {
        navigator.share({
            title: crawl.name,
            text: `Check out this pub crawl route in Stockholm: ${crawl.name}`,
            url: url
        }).catch(() => {
            // User cancelled or error
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
            const btn = document.querySelector('.share-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '✓ Copied!';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        });
    }
}
