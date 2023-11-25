/**
 * the function renders an object to a tagged string and performs token substitution
 * @param {object} input - a javascript object representing a hierachycal structure  
 * @param {object} values - a list of key value pairs where the key is a token to be replaced with the value in strings present in input
 */




function render(input, values){
    if(input instanceof Object && values instanceof Object)
    {
    function toHtmlFormat(initInput) {
        let htmlString = '';
      
        for (let key in initInput) {
          if (initInput.hasOwnProperty(key)) 
          {
            if (initInput[key] instanceof Object)
            {
                htmlString += `<${key}>${toHtmlFormat(initInput[key])}</${key}>`;
            }
            else
            {
                htmlString += `<${key}>${initInput[key]}</${key}>`;
            }
          }
        }
        return htmlString;
      }
      
      let result = toHtmlFormat(input);

      for (let key in values)
      {
        let regex = new RegExp('\\${' + key + '}', 'g');
        result = result.replace(regex,values[key]);
      }
        
    return result;
    }
    else
    {throw new Error('InvalidType');
    
    }
}

module.exports = {
    render
}