function isTokenInvalid(data, dbToken) {
	return !data || !dbToken || data._id !== dbToken?.user?.toString();
}

module.exports = {
	isTokenInvalid,
};
