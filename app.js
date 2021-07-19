const logo = document.querySelectorAll('#logo path');

for (var i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);  
}

