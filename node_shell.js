const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'8f992c74-824c-4fd7-946b-2844313687e0'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
