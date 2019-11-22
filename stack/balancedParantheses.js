/**
 * Balanced Parantheses
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.
- Note that an empty string is also considered valid.
 */

/**
 * Function to check if a given string of parantheses is balanced or not
 * Time Complexity - O(n) where n is the length of given string
 * Space Complexity - O(n)
 * @param string 
 * @returns boolean
 */
export default function isBalancedParenthesesString(str) {
    // validation on input string
    if (!str || !str.length) {
        return false;
    }
    const CLOSED_PARENTHESES_MAP = new Map([
        ['}', '{'],
        [')', '('],
        [']', '[']
    ]);
    let stack = [];
    for (let i = str.length-1; i >= 0; i--) {
        if(CLOSED_PARENTHESES_MAP.has(str[i])) {
            stack.push(CLOSED_PARENTHESES_MAP.get(str[i]));
        } else {
            if(stack.pop() != str[i]) {
                return false;
            }
        }
    }
    return stack.length == 0;
}