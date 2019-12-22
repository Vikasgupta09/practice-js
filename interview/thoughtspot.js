// Mock Server Start
// =================
var FAILURE_COEFF = 0;
var MAX_SERVER_LATENCY = 200;

function getRandomBool(n) {
  var maxRandomCoeff = 1000;
  if (n > maxRandomCoeff) n = maxRandomCoeff;
  return Math.floor(Math.random() * maxRandomCoeff) % n === 0;
}

function getSuggestions(text) {
  var pre = 'pre';
  var post = 'post';
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    var randomTimeout = Math.random() * MAX_SERVER_LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COEFF)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}
// Mock Server End
// =================

// Debounce Utility Function
const debounce = (fn, delay) => {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), delay);
  };
};

// Client SearchInput React Component
// ==================================
class SearchInput extends React.Component {
	// create state for variables that can cause rerendering
  state = {
    userInput: '',
    activeIndex: 0,
    suggestionList: [],
    showSuggestionList: false
  };
  
  // asynchronously fetch suggestions from api
  fetchSuggestions = debounce(async input => {
  	try {
      let suggestions = await getSuggestions(input);
      this.setState({
        suggestionList: suggestions
      });
    } catch(err) {
    	console.log('Error fetching suggestion', err);
    }
  }, 200);
  
  // handle onChange event on input field
  onChange = (e) => {
  	const userInput = e.currentTarget.value;
    if (userInput.length === 0) {
			// Empty string case    
      this.setState({
        userInput,
        suggestionList:[]
      });
    } else {
      this.setState({
        userInput,
        suggestionList:[]
      });
      this.fetchSuggestions(userInput);
    }
  };
  
  // handle onClick event on input field
  onClick = (e) => {
  	// to prevent onBlur event on input field
    e.preventDefault();
  	this.setState({
    	userInput: e.currentTarget.innerText + ' ',
    	activeIndex: 0,
    	suggestionList: []
    });
  };
  
  // handle standard key navigations on input field
  onKeyDown = (e) => {
  	const { activeIndex, suggestionList } = this.state;
  	switch(e.keyCode) {
    	case 13:	// Enter key
      	this.setState({
          activeIndex: 0,
          suggestionList: [],
          userInput: suggestionList[activeIndex] + ' '
        });
      	break;
      case 38:	// Up Arrow
				// preventDefault so that cursor position is not impacted
				e.preventDefault();
      	if (activeIndex === 0) {
          return;
        }

        this.setState({ activeIndex: activeIndex - 1 });
        break;
      case 40:	// Down Arrow
      	if (activeIndex + 1 === suggestionList.length) {
          return;
        }

        this.setState({ activeIndex: activeIndex + 1 });
        break;
      default:
      	break;
    }
  };
  
  // stop showing suggestions on focus out
  onFocusOut = () => {
  	this.setState({
    	showSuggestionList: false
    });
  };
  
  // show suggestions again on focus
  onFocus = () => {
  	this.setState({
    	showSuggestionList: true
    });
  };
  
  // render suggestion list as jsx
  renderSuggestionList = () => {
  	const { suggestionList, showSuggestionList } = this.state;
    const { onClick } = this;
  	if(suggestionList.length > 0) {
    	return (
      	<div className={"results transition "+ (showSuggestionList ? "visible":"")}>
          {suggestionList.map((suggestion, index) => {
            let className = "result";
            // add active class on the activeIndex to highlight suggestion
            if (index === this.state.activeIndex) {
              className += " active";
            }
            // To highlight text in the suggestion that matches the current word being typed in the input box
						let currentWord = this.state.userInput;
    				let parts = suggestion.split(new RegExp(`(${currentWord})`, 'gi'));
            let contentJSX = (
            		<span>
                  { parts.map((part,i) => 
                  <span key={i} style={part.toLowerCase() === currentWord.toLowerCase() ? { fontWeight: 'bold' } : {} }>
                    { part }
                  </span>)
                  }
                </span>);

            return (
              <div 
                className={className}
                key={suggestion}
                onMouseDown={onClick}
              >
                <div className="content">{contentJSX}</div>
              </div>
            );
           })}
        </div>
      );
    }
  }
  
  // render jsx
  render() {
    return (
    	<div className="ui search focus">
        <div className="ui icon input">
          <input
            type="text" 
            onChange={this.onChange}
            onKeyDown={this.onKeyDown} 
            value={this.state.userInput}
            onBlur={this.onFocusOut}
            onFocus={this.onFocus}
            placeholder="Search..."
          />
          <i aria-hidden="true" className="search icon"></i>
        </div>
        {this.renderSuggestionList()}
      </div>
    );
  }
}

ReactDOM.render(<SearchInput />, document.querySelector("#app"))
