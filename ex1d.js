// includes. Investiga el método 'includes'. que va a aparecer en cada línea? true o false?

console.log("Manzana".includes("az")); // ?
//Aqui aparecera false ya que no hay la silaba az en esta palabra 

console.log("Manzana".includes("Ma")); // ?
//Aqui aparecera true ya que esta la silaba MA 

console.log(("Manzana" + "s").includes("as")); //?
//Aqui aparecera true ya que estamos añadiendo la S a la palabra manzana para obterner manzanas
//de esa forma la silaba as esta en esta palabra.

console.log("En un lugar de la Mancha...".includes("lugar", 6)); // ?


// BONUS: Modifica el '7' de la sentencia anterior para que se muestre TRUE en vez de FALSE.