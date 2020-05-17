const { v4: uuidv4 } = require('uuid');

let items = [
		{
			id		: uuidv4(),
			name	: 'Elsu',
			level	: 0
		},		
		{
			id		: uuidv4(),			
			name	: 'Arum',
			level	: 1
		},		
		{
			id		: uuidv4(),
			name	: 'Lubu',
			level	: 2
		},
		{
			id		: uuidv4(),
			name	: 'Qi',
			level	: 1
		}
	];

export default items;