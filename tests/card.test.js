import { describe, test, it, expect } from "vitest";
import { cardInfo } from "../payment";
describe('signUp', () => {
    it('should return Payment is Succesful', () => {
        expect(cardInfo('1111 2222 3333 4444', '04/2026', '619', 'Muziwenhlanhla Myeza')).toBe(true)
    });
    it('should return Payment is Unsuccesful, card expired', () => {
        expect(cardInfo('1111 2222 3333 4444', '04/2010', '619', 'Muziwenhlanhla Myeza')).toBe(false)
    });
    it('should return Payment is Unsuccesful, incorrect card number format', () => {
        expect(cardInfo('1111 2222 3333', '04/2026', '619', 'Muziwenhlanhla Myeza')).toBe(false)
    })
})