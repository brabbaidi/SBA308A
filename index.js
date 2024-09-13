import { fetchColors } from './api.js';
import { updatePaletteUI } from './ui.js';

document.getElementById('fetch-colors').addEventListener('click', async () => {
  const colors = await fetchColors();
  updatePaletteUI(colors);
});
