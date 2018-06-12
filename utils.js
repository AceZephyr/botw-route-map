function get(object, defaultObject) {
	return typeof object !== "undefined" ? object : defaultObject;
}

function getBySpecialId(id) {
	if (id.startsWith("-")) {
		id = id.substr(1).trim();
		var type = "";
		if (id.length === 3 && id.search(/[a-zA-Z][0-9][0-9]/) !== -1) {
			var koroksArr = DATA["Korok Seeds"].locations;
			for (var i = 0; i < koroksArr.length; i++) {
				if (koroksArr[i].id === id) {
					var iStr = i + "";
					var zeroes = "0".repeat(Math.ceil(Math.log10(koroksArr.length)));
					var realid = "Korok Seeds@" + (zeroes.substr(0, zeroes.length - iStr.length) + iStr);
				}
			}
		} else if (id.endsWith("Shrine")) {
			var shrinesArr = DATA.Shrines.locations;
			for (var i = 0; i < shrinesArr.length; i++) {
				if (shrinesArr[i].id === id) {
					var iStr = i + "";
					var zeroes = "0".repeat(Math.ceil(Math.log10(koroksArr.length)));
					var realid = "Shrines@" + (zeroes.substr(0, zeroes.length - iStr.length) + iStr);
				}
			}
			var dlcShrinesArr = DATA["Champion`s Ballad Shrines"].locations;
			for (var i = 0; i < dlcShrinesArr.length; i++) {
				if (shrinesArr[i].id === id) {
					var iStr = i + "";
					var zeroes = "0".repeat(Math.ceil(Math.log10(koroksArr.length)));
					var realid = "Champion`s Ballad Shrines@" + (zeroes.substr(0, zeroes.length - iStr.length) + iStr);
				}
			}
		}
	}
}
