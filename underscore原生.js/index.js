var what = [
	
	{
		name:'郭嘉',
		age:1400,
		address:'幽州'
	},
	{
		name:'程昱',
		age:1500,
		address:'荆州'
	},
	{
		name:'孙玲珑',
		age:1350,
		address:'蜀地'
	}

];

var obj = {
	name:'程昱',
	age:1500,
	address:'荆州'
};

var arr = [1,2,3,6,7,6,2];
var arr2= [1.2,1.3,1.6,2.1,2.8,3.2,3.9]
var len = what.length,i;
var len2 = arr2.length;


// groupBy的方法！！！！！
/*var x = _.groupBy(arr2,function(num){
	return Math.round(num)
})
console.log(x)*/



// sortBy的方法！！！！！！
// var x = _.sortBy(what,'age')
// console.log(x)

/*var x = what.sort(function(obj1,obj2) {
	return obj1.age-obj2.age;
})
console.log(x)
*/


// max的方法！！！！
/*var x = _.max(what,function(key){return key.age;})
console.log(x)*/

/*var kong,age = 0;
for(i=0; i<len; i++) {
	if(what[i].age>age) {
		age = what[i].age;
		kong = what[i];
	}
}
console.log(kong)*/


// pluck的方法！！！！！！
// var x = _.pluck(what,'age');
// console.log(x)

/*for(var i=0; i<len; i++) {
	console.log(what[i].name)
}
*/
/*var x= _.some(arr,function(val) {return val==7})
console.log(x)*/


// contains方法！！！！！！！
/*var conta = _.contains(arr, 6);
console.log(conta);*/
/*function test(x) {
	var i, len = arr.length;

	for (i=0; i<len; i++) {

		if (arr[i] == x) {
			
			return true;
		}                  
	}
	return false;
}

var z=test(6);
console.log(z);*/

/*_.each(obj, function(val, key) {
	console.log(key, val);
})

for (var t in obj) {
	console.log(obj[t]);
};*/


// var r = _.map(arr,function(num) {return num *3});
// console.log(r)
/*var arr2=[];
for(var i=0;i<arr.length;i++) {
    arr2.push(arr[i])
};
console.log(arr2);*/


// var r = _.reduce(arr,function(a,b) {return a+b})
// console.log(r);
/*var total = 0;
for(var i=0;i<arr.length;i++) {
    total += arr[i]
};
console.log(total);*/


// var r = _.find(arr,function(num) {return num%2 == 0});
// console.log(r)

/*!function() {
    for(var i=0;i<arr.length;i++) {
        if(arr[i]%2==0) {
            console.log(arr[i]);
            return;
        }
    }
}();*/


// var r = _.filter(arr,function(num) {return num%2 == 0});
// console.log(r)

/*var arr2 = [];
for(var i=0;i<arr.length;i++) {
    if(arr[i]%2==0) {
        arr2.push(arr[i]);
    }
};
console.log(arr2)*/


// var r = _.where(what,{age:1400});
// console.log(r)
/*var arr2 = [];
for(var i=0;i<what.length;i++) {
    if(what[i].age == 1400) {
        arr2.push(what[i]);
    }
};
console.log(arr2);*/


// var r = _.findWhere(what,{age:1400});
/*!function () {
    for(var i=0;i<what.length;i++) {
        if(what[i].age == 1400) {
            console.log(what[i]);
            return ;
        }
    }
}();*/


// var x = _.every(arr,function(val) {return val>0});
// console.log(x)

/*function test(m) {
	var i, len = what.length;
	for (i=0; i<len; i++) {
		if(what[i].age > m){
			return true;
		}
	}
	return false;
}
console.log(test(250));*/






