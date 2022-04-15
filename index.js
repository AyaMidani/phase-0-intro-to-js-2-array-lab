const cats=["Milo", "Otis", "Garfield"];
function beforeEach(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}
function destructivelyAppendCat(name)
{
    cats.push(name)
}
function destructivelyPrependCat(name)
{
    cats.unshift(name);
}
function destructivelyRemoveLastCat()
{
    cats.pop()
}
function destructivelyRemoveFirstCat()
{
    cats.shift()
}
function appendCat(name)
{
    const NewCats = [...cats, name];
    return NewCats
}
function prependCat(name)
{
    const NewCats = [name,...cats];
    return NewCats
}
function removeLastCat()
{
    const NewCats = [...cats];
    NewCats.pop()
    return NewCats
}
function removeFirstCat()
{
    const NewCats = [...cats];
    NewCats.shift()
    return NewCats
}
destructivelyAppendCat("Ralph")
beforeEach();
destructivelyPrependCat("Bob")
beforeEach();
destructivelyRemoveLastCat()
beforeEach();
destructivelyRemoveFirstCat()
beforeEach();
appendCat("Simba")
beforeEach();
prependCat("Simba");
beforeEach();
removeLastCat();
beforeEach();
removeFirstCat();
beforeEach();
console.log(cats)

