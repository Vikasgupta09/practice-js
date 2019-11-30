/**
 * Event bubbling (down to up)
 * --------------
 * - way to propagate event in DOM tree
 * div #grandParent , onClickGrandParent
 * div #parent , onClickParent
 * div #child , onClickChild
 *
 * In event bubbling, clicking #child will trigger
 * onClickChild -> then onClickParent -> then onClickGrandParent
 *
 * Limitations:
 * - Not all events are bubbled up in hierarchy like blur/focus
 * - stopPropagation will stop bubbling
 *
 * Event Capturing/Trickling (up to down)
 * --------------------------
 * - Another way to propagate event in DOM tree
 * In above example, clicking #child will trigger
 * onClickGrandParent -> then onClickParent -> then onClickChild
 */

// addEventListener('click', () => {}, useCapture)
// For event capturing - useCapture as true
// For event bubbling - useCapture as false

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  false // Event Bubbling
);
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  true // Event Capturing
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  true // Event Capturing
);

/**
 * Event Delegation
 * ----------------
 * - Attach event handler to parent of the elements instead of attaching to each elements individually
 *
 */
