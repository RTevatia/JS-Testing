import { vi, it, expect, describe } from "vitest";

describe('test suite', () => {
    it('test case', () => {
        const greet = vi.fn();
        greet.mockImplementation(name => 'Hello ' + name);

        const result = greet('Mosh');
        
        expect(greet).toHaveBeenCalledOnce();
    })
})