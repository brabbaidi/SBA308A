export const updatePaletteUI = (colors) => {
  const paletteContainer = document.getElementById("palette-container");
  paletteContainer.innerHTML = ""; // Clear previous palette
  console.log(colors); //
  const body = document.getElementById("body")
  body.style.backgroundColor = colors.hex;
  Object.keys(colors).forEach((color) => {
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color.hex;
    console.log(color);
    //colorDiv.innerHTML = `<p>${color.hex}</p>`;
    //paletteContainer.appendChild(colorDiv);
  });
};
