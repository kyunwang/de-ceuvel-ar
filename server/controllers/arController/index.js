exports.tourView = (req, res) => {
	res.render('arViews/tourView', { message: 'tourView for AR' });
};

exports.d3Tests = (req, res) => {
	res.render('arViews/d3', { message: 'd3 test page' });
};

exports.apiTest = (req, res) => {
	res.render('arViews/api', { message: 'd3 test page' });
};
