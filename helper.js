function sum(a, b) {
    return a + b;
}

// Default Export 
// export default sum;

class Item{
    showItem(){
        return 'This is items of class';
    }
}

export let mobileModel = 'I Phone x';// Named Export

export {sum, Item};
