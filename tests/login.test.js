import { describe, test, it, expect } from "vitest";
import { signIn } from "../login";

describe('signIn', () => {
    it('should return Login is Succesful', () => {
        expect(signIn('myezamuzi4@gmail.com', 'Password1!')).toBe(true)
    });

    it('should return Login is Unsuccesful', () => {
        expect(signIn('myezamuzi.gmail.com', 'pass')).toBe(false)
    })
})