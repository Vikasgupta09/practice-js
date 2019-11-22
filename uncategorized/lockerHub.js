/**
 * LockerHub
 * Write a code so that driver can come and put the appropriate package in prooper size box.
Restriction Lockerhub comes with limited number of Small, Medium and large box.
 * leetcode link: https://leetcode.com/discuss/interview-question/434099/Amazon-or-Phone-Screen-or-Locker-Hub
 */

// Requirement clarification (To be asked from interviewer)
// 1. What will the code return if all lockers are full ? or given package cannot be put ?
// return -1
// 2. What should be the format for locker number ?
// consider s1,s2, m1,m2...
// 3. Is there any priority between same size locker indexes ?
// consider no

// first fit algo based on sizes s > m > l
// if s size box arrived, first check all s sizes, then m then l
// adding package will take O(n), removal will take O(1)
// optimized addingPackage will take O(1)

class LockerHub {
    constructor(n1, n2, n3) {
        this.LOCKERS = new Map([
            ['s',new Array(n1).fill(0)],
            ['m',new Array(n2).fill(0)],
            ['l',new Array(n3).fill(0)]
        ]);
        this.LOCKERS_SIZE_MAP = new Map([
            ['s', ['s','m','l']],
            ['m', ['m','l']],
            ['l', ['l']]
        ]);
        this.availableLockersKey = new Map([
            ['s',[...Array(n1).keys()]],
            ['m',[...Array(n2).keys()]],
            ['l',[...Array(n3).keys()]]
        ]);
    }
    // O(n) - with commented code
    // O(1) - with optimized code
    addPackage(size, content) {
        // First come first fit
        if(this.LOCKERS_SIZE_MAP.has(size)) {
            for(const altSize of this.LOCKERS_SIZE_MAP.get(size)) {
                let lockerKey = this.availableLockersKey.get(altSize).shift();
                if(lockerKey != undefined || lockerKey != null) {
                    this.LOCKERS.get(altSize)[lockerKey] = content;
                    return altSize + ',' + lockerKey;
                }

                // let lockerIdx = this.LOCKERS.get(altSize).indexOf(0);
                // if(lockerIdx > -1) {
                //     this.LOCKERS.get(altSize)[lockerIdx] = content;
                //     return altSize + ',' + lockerIdx;
                // }
            }
        } else {
            // Case: invalid size 
            return -1;
        }
        return -1;
    }
    // O(1)
    removePackage(lockerHash) {
        lockerHash = lockerHash.split(',');
        if(this.LOCKERS.has(lockerHash[0])) {
            let content = this.LOCKERS.get(lockerHash[0])[lockerHash[1]];
            // free locker
            this.LOCKERS.get(lockerHash[0])[lockerHash[1]] = 0;
            // add locker key
            this.availableLockersKey.get(lockerHash[0]).unshift(lockerHash[1]);
            return content;
        } else {
            return -1;
        }
    }
    // O(k) - where k is the no. of available lockers 
    availableLockers() {
        let lockers = [];
        for(const size of this.availableLockersKey.keys()) {
            this.availableLockersKey.get(size).forEach((content) => {
                lockers.push(size + ',' + content);    
            });
        }
        // O(n)
        // for(const size of this.LOCKERS.keys()) {
        //     this.LOCKERS.get(size).forEach((content, index) => {
        //         if(content === 0) {
        //             lockers.push(size + ',' + index);
        //         }    
        //     });
        // }
        return lockers;
    }
}
let lockr = new LockerHub(2,3,4);
console.log(lockr.addPackage('s','small1'));
console.log(lockr.addPackage('s','small2'));
console.log(lockr.addPackage('s','small3'));
console.log(lockr.addPackage('m','med1'));
console.log(lockr.addPackage('l','large1'));

