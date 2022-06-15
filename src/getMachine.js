// hi there!
// just wanted to say that this took 3+ hours to figure out.
// please don't steal it without giving credit? :D
const fs = require("fs")
const si = require("systeminformation");
const fetch = require("node-fetch");
const chalk = require('chalk');
const { dataDirectory } = require("./setup");
async function getInfo(sAccessToken) {
	var temp = await si.osInfo()
	const systemInfo = {
		version: await si.version(),
		system: await si.system(),
		cpu: await si.cpu(),
		graphics: await si.graphics(),
		memLayout: await si.memLayout(),
		os: temp,
		platform: temp.platform,
		uuid: await si.uuid()
	}
	let poo;
	await fetch("https://app-api.salad.io/api/v2/machines", {
		"headers": {
			"content-type": "application/json;charset=UTF-8",
			"rid": "session",
			"cookie": `sAccessToken=${sAccessToken};sIdRefreshToken=notrequiredforthisbecausewedontkeepitlol`
		},
		"body": `{\"systemInfo\":{\"version\":\"${systemInfo.version}\",\"system\":${JSON.stringify(systemInfo.system)},\"cpu\":${JSON.stringify(systemInfo.cpu)},\"memLayout\":${JSON.stringify(systemInfo.memLayout)},\"graphics\":${JSON.stringify(systemInfo.graphics)},\"os\":${JSON.stringify(systemInfo.os)},\"platform\":${JSON.stringify(systemInfo.platform)},\"uuid\":${JSON.stringify(systemInfo.uuid)}}}`,
		"method": "POST"
	}).then(res => {
		if (res.status == 201) {
			poo = res.json()
		} else {
			throw res;
		}
	});
	return poo;
};



async function updateCache() {
	var temp = await si.osInfo()
	const systemInfo = {
		version: await si.version(),
		system: await si.system(),
		cpu: await si.cpu(),
		graphics: await si.graphics(),
		memLayout: await si.memLayout(),
		os: temp,
		platform: temp.platform,
		uuid: await si.uuid()
	}
	fs.writeFileSync(`${dataDirectory}/cache.json`, JSON.stringify({ "uuid": systemInfo.uuid, "os": systemInfo.os, "platform": systemInfo.platform, "version": systemInfo.version, "system": systemInfo.system, "cpu": systemInfo.cpu, "graphics": systemInfo.graphics, "memLayout": systemInfo.memLayout }))

}

module.exports = {
	getInfo,
	updateCache
};
