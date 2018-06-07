var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		const newArray = [];
		arr.forEach(function(num) {
			newArray.push(num * num);
		})
		return newArray;
	},

	sum: function (arr) {
		var total = 0;
		arr.forEach(function(num) {
			total += num;
		})
		return total;
	},


	findDuplicates: function (arr) {
		let duplicates = [];
		arr.forEach(function(num, index) {
			if(arr.indexOf(num, index + 1) > -1) {
				if (duplicates.indexOf(num) === - 1) {
					duplicates.push(num);
				}
			}
		});
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		let cloneArray = [];
		arr.forEach(function(num) {
			if(num !== valueToRemove) {
				cloneArray.push(num);
			}
			arr = cloneArray;
		})
		return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		results = [];
		arr.forEach(function(num, index) {
			if(num == itemToFind) {
				results.push(index);
			}
		})
		return results;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		total = 0;
		arr.forEach(function(num) {
			if(num % 2 === 0) {
				total += num * num;
			}
		});
		return total;
	}

}

module.exports = arrayTasks
