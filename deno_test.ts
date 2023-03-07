import {grep} from "./grep.ts";
import {assertEquals} from "https://deno.land/std@0.165.0/testing/asserts.ts";

Deno.test({
    name: "test grep",
    fn: async () => {
        const want = [{
            fileName: "testdir/hoge/foobaa.txt",
            line: 2,
            text: "baa"
        }, {
            fileName: "testdir/baa.txt",
            line: 1,
            text: "baa"
        }, {
            fileName: "testdir/baa.txt",
            line: 2,
            text: "baahs" 
        }, {
            fileName: "testdir/baa.txt",
            line: 3,
            text: "baa"
        }];

        const got = await grep("testdir", "baa");
        assertEquals(want, got);
    }
})