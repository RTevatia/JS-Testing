import { it, expect, describe } from 'vitest';

describe('test suite', () => {
    it('test case', () => {
        const result = { name: 'Mosh', age: 30 };
        // Better assertion
        expect(typeof result.name).toBe('string');
    });
});