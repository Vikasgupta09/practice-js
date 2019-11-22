import minimumTimeToGrade from './gradePapers';

describe('GradePapers', () => {
    it('should return min time(32) to grade [10,13,12,18,10], 2 graders', () => {
        expect(minimumTimeToGrade([10,13,12,18,10],2)).toBe(32);
    });
    it('should return min time(23) to grade [10,13,12,18,10], 3 graders', () => {
        expect(minimumTimeToGrade([10,13,12,18,10],3)).toBe(23);
    });
    it('should return min time(20) to grade [10,13,12,18,10], 4 graders', () => {
        expect(minimumTimeToGrade([10,13,12,18,10],4)).toBe(20);
    });
    it('should return min time(18) to grade [10,13,12,18,10], 5 graders', () => {
        expect(minimumTimeToGrade([10,13,12,18,10],5)).toBe(18);
    });
    it('Edge case(extra grader): should return min time(18) to grade [10,13,12,18,10], 6 graders', () => {
        expect(minimumTimeToGrade([10,13,12,18,10],6)).toBe(18);
    });
    it('Edge case(no grader): should return -1 to grade [10,13,12,18,10], 0 graders', () => {
        expect(minimumTimeToGrade([10,13,12,18,10],0)).toBe(-1);
    });
    it('Edge case(no papers): should return -1 to grade [], 2 graders', () => {
        expect(minimumTimeToGrade([],2)).toBe(-1);
    });
});