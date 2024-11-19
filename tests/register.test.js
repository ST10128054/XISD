import { describe, test, it, expect } from "vitest";
import { signUp } from "../register";


describe('signUp', () => {
    it('should return Register is Succesful', () => {
        expect(signUp('myezamuzi4@gmail.com', 'Password1!', 'Password1!')).toBe(true)
    });

    it('should return Register is Unsuccesful, password do not match', () => {
        expect(signUp('myezamuzi.gmail.com', 'Password1!', 'password1')).toBe(false)
    });

    it('should return Register is Unsuccesful, incorrect email format', () => {
        expect(signUp('myezamuzi4gmail.com', 'Password1!', 'Password1!')).toBe(false)
    })
})