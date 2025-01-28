// Define social media URLs with MerazAlveeDev username
const socialMediaUrls = {
    'facebook': 'https://www.facebook.com/MerazAlveeDev',
    'youtube': 'https://www.youtube.com/MerazAlveeDev',
    'telegram': 'https://t.me/MerazAlveeDev',
    'twitter': 'https://twitter.com/MerazAlveeDev',
    'instagram': 'https://www.instagram.com/MerazAlveeDev',
    'linkedin': 'https://www.linkedin.com/in/MerazAlveeDev',
    'github': 'https://github.com/MerazAlveeDev'
};

// Get the current URL path (e.g., /facebook, /youtube)
const path = window.location.pathname.split('/')[1];

// Redirect based on the path
if (socialMediaUrls[path]) {
    window.location.href = socialMediaUrls[path];
} else {
    // If no valid path, just show "Redirecting" on the homepage
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('redirect-message');
        container.textContent = 'Redirecting...';
    });
}
