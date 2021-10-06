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