// Create Color Input
const addButton = document.getElementById("add-color");
const colorsContainer = document.querySelector(".colors-container");

let colorsArray = [];

function createColorInput() {
  const newColorInput = document.createElement("input");
  newColorInput.type = "color";
  colorsContainer.appendChild(newColorInput);
  newColorInput.className = "colors-input";

  newColorInput.addEventListener("change", () => {
    let newColorValue = newColorInput.value;
    colorsArray.push(newColorValue);
    // console.log(colorsArray);
  });

  newColorInput.addEventListener('input', ()=>{
    setInterval(() => {
      newColorInput.disabled = true;
    }, 5000);
  })

  return newColorInput;
}

// Generating palette
const colorPreview = document.getElementById("color-preview");
const direction = document.getElementById("direction");

function generatePalette() {
  const gradientColors = colorsArray.join(", ");
  const selectedDirection = direction.value;

  colorPreview.style.backgroundImage = `linear-gradient(${selectedDirection}, ${gradientColors})`;
}
const generateBtn = document.getElementById("generate-palette");

generateBtn.addEventListener("click", () => {
    if(colorsArray.length <= 1) {
        colorsArray.unshift('#ffffff');
        generatePalette();
    } else {
        generatePalette();
    }
});

// Refresh Palette
const refreshBtn = document.getElementById('refresh-palette');

refreshBtn.addEventListener('click', () => {
  colorsArray = [];
  colorPreview.style.backgroundImage = 'none';
  const colorInputs = colorsContainer.querySelectorAll('.colors-input');
  colorInputs.forEach(input => {
    input.remove();
  });
  direction.value = '';
})
