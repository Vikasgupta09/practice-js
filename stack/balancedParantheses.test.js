import isBalancedParenthesesString from './balancedParantheses';

describe('BalancedParantheses', () => {
    // success cases
    it('should return true for simple open ended case (){}[]', () => {
        expect(isBalancedParenthesesString('(){}[]')).toBe(true);
    });
    it('should return true for simple nested case [{()}]', () => {
        expect(isBalancedParenthesesString('[{()}]')).toBe(true);
    });
    it('should return true for same bracket nested case ((()))', () => {
        expect(isBalancedParenthesesString('((()))')).toBe(true);
    });
    // failure cases
    it('should return false for extra open brackets (([{]})', () => {
        expect(isBalancedParenthesesString('(([{]})')).toBe(false);
    });
    it('should return false for extra closed brackets ([{]}))', () => {
        expect(isBalancedParenthesesString('([{]}))')).toBe(false);
    });
    it('should return false for bracket closed in diff order ([{]})', () => {
        expect(isBalancedParenthesesString('([{]})')).toBe(false);
    });
});