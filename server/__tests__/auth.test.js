/*
метод тестирование
2 параметра
- название теста
- метод expect, в который помещается 
функция.... которую тестируем
*/

function sum(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new TypeError();
    }
    return (a+b);
}

test('Sum 2+2 equal 4', () => {
    expect(sum(2,2)).toBe(4);
});

test('Sum "2":string + "2":string equal 4:number', () => {
    expect( () => sum('2','2')).toThrow(TypeError);
});

/*
test('Sum NaN + some value equal NaN', () => {
    expect(sum(NaN, 1)).toBe(NaN);
    expect(sum(NaN, '1')).toBe(NaN);
    expect(sum(NaN, 'hello')).toBe(NaN);
    expect(sum(NaN, true)).toBe(NaN);
    expect(sum(NaN, false)).toBe(NaN);
    expect(sum(NaN, {})).toBe(NaN);
    expect(sum(NaN, {name: 'Vasya', age: 20})).toBe(NaN);
    expect(sum(NaN, [1,2,3])).toBe(NaN);
});
*/