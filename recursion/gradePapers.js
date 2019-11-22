/**
 * GradePapers
 * Given p papers of varying lengths, each of which take a proportionate time to process and given k graders. Distribute papers among the graders to minimize total time to grade all papers.
 */

/**
 * This function will compute minimum time to grade all papers give a list of paper and number of graders
 * Time Complexity - O(k^n)
 * Space Complexity - O(k*n)
 * @param {*} papers - array of positive integers
 * @param {*} k - positive integer
 * @returns Number - minimum time to grade all papers
 */
export default function minimumTimeToGrade(papers, k) {
	// validation on input
	if(!papers || !papers.length || !k) {
		return -1;
	}
	let graders = new Array(k).fill().map(() => []);
	return recursiveAssignPapers(papers, graders, 0);
}

function findMaxGradingTime(graders) {
	let maxTime = 0;
	for(let i = 0; i < graders.length; i++) {
		if(graders[i].length > 0) {
			let currentTime = graders[i].reduce((a, b) => a + b);
			maxTime = Math.max(currentTime, maxTime);
		}
	}
	return maxTime;
}

function recursiveAssignPapers(papers, graders, index) {
	let self = recursiveAssignPapers;
	if(index == papers.length) {
		self.minGradingTime = self.minGradingTime ? Math.min(findMaxGradingTime(graders), self.minGradingTime) : findMaxGradingTime(graders);
		return self.minGradingTime;
	}
	for(let i = 0; i < graders.length; i++) {
		graders[i].push(papers[index]);
		recursiveAssignPapers(papers, graders, index + 1);
		graders[i].pop();
	}
	return self.minGradingTime;
}