const add = require("../component/string")

test("return 0 when string is empty", () => {
    expect(add("")).toBe(0);
})

test("return single no if single no is provided", () => {
    expect(add("1")).toBe(1)
})

test("return expected sum of multi numbers", () => {
    expect(add("1,2,3")).toBe(6)
})

test("handle new line when \n is there", () => {
    expect(add("1\n2,3")).toBe(6)
})

test("handle new delimiter" , () => {
    expect(add("//;\n1;2")).toBe(3)
}) 

test("handle negative number", () => {
    expect(() => add("-5,2,-10,9")).toThrow();
})