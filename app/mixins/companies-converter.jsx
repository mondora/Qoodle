var R         = require("ramda");
var React     = require("react");
var Immutable = require('immutable');

var CompaniesConverter = {
    propTypes: {
        companies: React.PropTypes.instanceOf(Immutable.Iterable)
    },
    getCompanyIdFromName: function (companyName) {
        var selectedCompany = this.getCompanyFromName(companyName);
        if (selectedCompany) {
            return selectedCompany.get("_id");
        }
    },
    getCompanyFromName: function (companyName) {
        return R.find(function (company) {
            return company.getIn(["latest", "mainInfo", "name"]) === companyName;
        })(this.props.companies.toArray());
    },
    getCompanyNameFromId: function (companyId) {
        var selectedCompany = this.getCompanyFromId(companyId);
        if (selectedCompany) {
            return selectedCompany.getIn(["latest", "mainInfo", "name"]);
        }
    },
    getCompanyFromId: function (companyId) {
        return R.find(function (company) {
            return company.get("_id") === companyId;
        })(this.props.companies.toArray());
    }
};

module.exports = CompaniesConverter;
