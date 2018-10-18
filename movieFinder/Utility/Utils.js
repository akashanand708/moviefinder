import Constants from "../../App/Constants/Constants";
import Country from "../../App/Constants/Country";

export default Utils = {
    ConcatArrayString: function (stringArray) {
        let str = '';
        if (_.isArray(stringArray) && stringArray.length > 0) {
            stringArray.forEach((item, index) => {
                str += (item.name + ' | ');
            })
        }
        return str.substring(0, (str.length - 2));
    },
    convertDate: function (date) {
        let dateString = '';
        if (!_.isEmpty(date)) {
            let dateNumber = new Date(date);
            dateString += Constants.MONTH_NAME[dateNumber.getMonth()] + " " + dateNumber.getDate() + ", " + dateNumber.getFullYear();
        }
        return dateString;
    },
    getProductionCountryString: function (CountryArray) {
        let productionCountryString = '';
        if (_.isArray(CountryArray) && CountryArray.length > 0) {
            CountryArray.forEach((country, index) => {
                let tempCountry = _.filter(Country.COUNTRY,{"iso_3166_1":(country.iso_3166_1 || country)});
                productionCountryString += (tempCountry[0].english_name+ ' | ');
            })
        }
        return productionCountryString.substring(0, (productionCountryString.length - 2));
    },
    getRuntime: function (runtime) {
        let runtimeStr = '';
        if (runtime !== null && runtime !== undefined) {
            let runtimeNumber = parseInt(runtime, 10);
            let hours = Math.floor(runtimeNumber / 60);
            let min = runtimeNumber % 60;
            runtimeStr = hours + "h " + min + "m";
        }
        return runtimeStr;
    },
    formatDoller: function (amount) {
        let amountStr = '';
        if (amount !== null && amount !== undefined) {
            amountStr = '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return amountStr;
    },
    getImportantPeople: function (crew) {
        let directorArray = [],
            producerArray = [];
        let director = '',
            producer = '';
        if (_.isArray(crew) && crew.length > 0) {
            directorArray = _.filter(crew, { job: "Director" });
            producerArray = _.filter(crew, { job: "Producer" })
        }
        if (directorArray.length > 0) {
            director = this.ConcatArrayString(directorArray);
        }

        if (producerArray.length > 0) {
            producer = this.ConcatArrayString(producerArray);
        }
        return { director, producer };
    }
}