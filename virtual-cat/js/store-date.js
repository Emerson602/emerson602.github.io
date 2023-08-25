function storeDate() {
	
	localStorage.setItem('name', name);
	localStorage.setItem('age', age);
	localStorage.setItem('months', months);

	localStorage.setItem('health', health);
	localStorage.setItem('happy', happy);
	localStorage.setItem('alimentation', alimentation);
	localStorage.setItem('hydration', hydration);
	localStorage.setItem('vitality', vitality);
	localStorage.setItem('cleaning', cleaning);
	localStorage.setItem('bathroom', bathroom);  
};

const storeDateInterval = setInterval(storeDate, 60000);