conversion = {
    prefix_To_Infix : function prefix_To_Infix (_prefix) {
	
		if(typeof _prefix === 'undefined') {
			return "PLEASE GIVE INPUT";
		}
	  /* variable declaration */
	  var operandStack = [];
	  var oprand1=null, operand2=null , newValue=null;

	  /* pattern defination for validating correct input */
	  var patt = /^[a-z+-/*//]+$/;
	  
	  /* validating input against pattern */
	  if(patt.test(_prefix)) {
		for(var counter = _prefix.length-1; counter >= 0; counter--) {
		  if(!this.is_Operator(_prefix[counter])){
			operandStack.push(_prefix[counter]);
		  }else{
			operand1 = operandStack.pop();
			operand2 = operandStack.pop();
			
			if(typeof operand1 === 'undefined' || typeof operand2 === 'undefined'){
				return "WRONG EXPRESION";
			}
			/* handling * and / operator and puting () if required */
			
			if( (["*","/"].indexOf(_prefix[counter]) !== -1) && (operand1.length > 1 || operand2.length > 1)) {
			  if(operand1.length > 1 && ( operand1.search("\\+") || operand1.search("-"))) {
			   newValue = '('+ operand1 + ')' + _prefix[counter];
			  }else {
				newValue = operand1 + _prefix[counter];
			  }	
			  if(operand2.length > 1 && ( operand2.search("\\+") || operand2.search("-") )) {
			   newValue += '('+ operand2 + ')';
			  }else {
				newValue += operand2;
			  }
			}
			else
				newValue = operand1 + _prefix[counter] + operand2;
			operandStack.push(newValue);
		  }
		}
		if(operandStack.length === 1){
		   return operandStack[0];
		}else {
		   return "WRONG EXPRESION";
		}
	  }else{
		 return "WRONG INPUT <br/> PLEASE GIVE INPUT FORMAT LIKE : *+a-bc/-de+-fgh";
	  }
	},
	is_Operator : function is_Operator(_val) {
	   var operators = ['+','-','*','/'];
	   return operators.indexOf(_val) !== -1 ? true : false;
	}
};

//module.exports = conversion;