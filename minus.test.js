const minus = require('./minus');
test('1 - 0.5 เท่่ากับ 0.5', ()=>{
    expect(minus(1 , 0.5)).toBe(0.5);
});
test('10 - 9.5 เท่ากับ 0.5', ()=>{
    expect(minus(10,9.5)).toBe(0.5);
});
test('20 - 25 เท่ากับ -5', ()=>{
    expect( minus(20,25)).toBe(-5);
});
test('20 - 20 เท่ากับ 0', ()=>{
    expect(minus(20,20)).toBe(0)
});
test('23 - 3 เท่ากับ 20', ()=>{
    expect(minus(23,3)).toBe(20)
});