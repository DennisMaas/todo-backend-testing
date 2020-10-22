import shoutit from "./shoutit";

describe("unit test :: shoutit", () => {
    it("make words uppercase and adds !!", () => {
        //GIVEN
        const strArray = ["foo", "bar", "butts"]

        //WHEN
        const actual = shoutit(strArray)

        //THEN
        expect(actual).toStrictEqual(["FOO!!", "BAR!!", "BUTTS!!"])
    })
})
