// Gaming products data
const products = [
  {
    id: "gc-2023",
    name: "Quantum Gaming Mouse",
    averagerating: 4.7
  },
  {
    id: "gk-pro",
    name: "Mechanical Pro Keyboard",
    averagerating: 4.5
  },
  {
    id: "hs-360",
    name: "Surround Sound Headset",
    averagerating: 4.2
  },
  {
    id: "gc-ultra",
    name: "Ultra Graphics Card",
    averagerating: 4.9
  },
  {
    id: "rm-4k",
    name: "4K Gaming Monitor",
    averagerating: 4.8
  }
];

// Initialize form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const productSelect = document.getElementById('productName');
  
  // Add gaming products to dropdown
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
  // Add subtle animations to form elements
  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach((group, index) => {
    group.style.opacity = 0;
    group.style.transform = 'translateY(20px)';
    group.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Staggered appearance
    setTimeout(() => {
      group.style.opacity = 1;
      group.style.transform = 'translateY(0)';
    }, 300 + (index * 100));
  });
});