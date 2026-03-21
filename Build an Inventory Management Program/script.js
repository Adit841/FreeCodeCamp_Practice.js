let inventory = [];

function findProductIndex(name){
  name = name.toLowerCase();

  for(let i = 0; i < inventory.length; i++){
    if(inventory[i].name === name){
      return i;
    }
  }
  return -1;
}

function addProduct(pro){
  const name = pro.name.toLowerCase();
  let index = findProductIndex(name);

  if(index !== -1){
    inventory[index].quantity += pro.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({
      name: name,
      quantity: pro.quantity
    });
    console.log(`${name} added to inventory`);
  }
}

function removeProduct(name, quan){
  name = name.toLowerCase();
  const index = findProductIndex(name);

  if(index === -1){
    console.log(`${name} not found`);
    return;
  }

  const product = inventory[index];

  if(product.quantity < quan){
    console.log(`Not enough ${name} available, remaining pieces: ${product.quantity}`);
  } else {
    product.quantity -= quan;

    if(product.quantity === 0){
      inventory.splice(index, 1);
    }

    console.log(`Remaining ${name} pieces: ${product.quantity}`);
  }
}