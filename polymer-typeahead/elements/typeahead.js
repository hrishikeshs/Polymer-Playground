    Polymer({
      observe: {
        searchterm: 'request',
      },
      request: function() {
       //make an ajax call here;
       var resultsList = this.shadowRoot.getElementById('#autocomplete-list');
       if(this.searchterm === "") {
          this.clearSuggestions(resultsList);
          return;
        }
        var results = ['one', 'two', 'three'];
        var suggestions = results.map(function(result) {
           var suggestion = document.createElement('li');
           suggestion.textContent = result;
           suggestion.className = "list-item autocomplete-suggestion";
           return suggestion;
        });
        this.clearSuggestions(resultsList);
        suggestions.forEach(function(suggestion) {
          resultsList.appendChild(suggestion);
       });
       var resultsContainer = this.shadowRoot.querySelector('.results-listing-container');
       resultsContainer.style.display = "block";
       resultsContainer.querySelector('ul').firstChild.focus();
      },
      clearSuggestions: function(node) {
        while (node.firstChild) {
           node.removeChild(node.firstChild);
        }
      },
    ready: function() {
     var input = this.shadowRoot.querySelector('input');
     input.addEventListener('keydown', function(keyevent) {
      // debugger;
       if(keyevent.keyIdentifier === "Down") {
         var resultsList = this.shadowRoot.querySelector('.results-listing-container');
         resultsList.style.display = "block";
         var results = resultsList.querySelector('ul').firstChild;
         results.style.background = "blue";
         resultsList.querySelector('ul').addEventListener('keydown', function() {
           console.log("ha!");
         });
       }
      }.bind(this));
    }
   });
