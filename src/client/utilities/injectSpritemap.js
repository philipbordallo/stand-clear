const CONFIG = window.__config; // eslint-disable-line no-underscore-dangle

if (CONFIG && CONFIG.spritemap) {
  window.fetch(CONFIG.spritemap)
    .then((response) => {
      if (response.ok) {
        return response.text();
      }

      return null;
    })
    .then((data) => {
      const spriteElement = document.getElementById('spritemap');

      if (spriteElement && data) {
        const parser = new DOMParser();
        const SVG = parser.parseFromString(data, 'image/svg+xml');

        spriteElement.append(SVG.documentElement);
      }
    });
}
