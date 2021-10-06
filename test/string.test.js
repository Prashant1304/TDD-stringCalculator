const add = require("../component/string")

test("return 0 when string is empty", () => {
    expect(add("")).toBe(0);
})

