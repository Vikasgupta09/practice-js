/**
 * Elevator has two buttons Up and Down , By pressing up elevator goes up by p floors and by pressing down it goes down by q floors. A building has n floors. Given a starting floor s, Can you explain if it's possible to go to floor e.
 * e.g. p = 2, q = 1, n =7, e = 5, s = 1,0
 * Approach :
 * while(s != e && s <= n) {
 *  if(e - s > p) {
 *      s+= p;
 *  } else {
 *      s-= q;
 *  }
 * }
 */