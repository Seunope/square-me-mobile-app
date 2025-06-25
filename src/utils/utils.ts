import AppStorage from "./services/AppStorage";
import { format, subDays, formatDistance, differenceInDays } from "date-fns";
export default class Utility {
  constructor() {}

  static normalizePhoneNumber = (phoneNumber: string) => {
    const phone = phoneNumber.replace(/ /g, "");
    let newVal = phone;
    if (phone?.includes("+234")) {
      const temp = phone?.split("+234");
      newVal = `0${temp[1]}`;
    }
    if (phone?.includes("234")) {
      const temp = phone?.split("234");
      newVal = `0${temp[1]}`;
    }
    return newVal;
  };

  static truncateText(text: string, textLength = 80) {
    return text.length > textLength
      ? `${text.substring(0, textLength)}...`
      : text;
  }

  static formatAmount = (
    num: number,
    withDecimal: boolean = true,
    decimalPlace: number = 2,
    hide: boolean = false,
    hideSymbol = false
  ) => {
    if (isNaN(num)) {
      return "____";
    }
    if (hide) {
      return "--,---";
    }

    let newValue = null;
    if (withDecimal) {
      newValue = num.toLocaleString("en-US", {
        minimumFractionDigits: decimalPlace,
        maximumFractionDigits: decimalPlace,
      });
    } else {
      newValue = num.toLocaleString("en-US");
    }

    if (hideSymbol) {
      return newValue;
    }
    return `₦${newValue}`;
  };

  static inputWithComma(value: any) {
    if (!value) {
      return "0";
    }
    var number = value.replace(/,/g, "");
    if (isNaN(number)) {
      return "NaN";
    }
    let formattedNumber = Number(number).toLocaleString("en-GB");
    return formattedNumber;
  }

  static upperCaseFirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // static formatDaysAgo(datetime) {
  //   if (datetime != null) {
  //     let dateAdjusted = datetime.replace(' ', 'T');
  //     let theDate = new Date(dateAdjusted);
  //     return Moment(theDate, 'YYYYMMDD').fromNow();
  //   }
  //   return datetime;
  // }

  // static FormatDate(dateTime) {
  //   if (dateTime != null) {
  //     let theDate = Moment(new Date(dateTime));
  //     return theDate.format('Do MMM Y');
  //   }
  //   return dateTime;
  // }

  static formatDaysAgo(dateTime: string) {
    formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });
    let k = differenceInDays(new Date(), new Date("2020-07-12T15:59:31.357Z"));
    console.log("Days", k);
    return k;
  }

  static formatDate(dateTime: string, type: number = 1) {
    if (dateTime != null) {
      if (type === 1) {
        return format(new Date(dateTime), "d MMM y hh:mm:aaaaa'm'");
      } else if (type === 2) {
        return format(new Date(dateTime), "d MMM y");
      } else {
        return format(new Date(dateTime), "d/MM/y");
      }
    }

    return dateTime;
  }

  static replaceText(myString: string) {
    const arr = myString.split(""); // myString.length;
    const stringLength = arr.length;

    if (stringLength < 4) {
      return myString;
    }
    arr.splice(stringLength - 1, 1, "x");
    arr.splice(stringLength - 2, 1, "x");
    arr.splice(stringLength - 3, 1, "x");
    arr.splice(stringLength - 4, 1, "x");
    return arr.join("");
  }

  static sessionManager = async () => {
    const data = {} as { code: number; route: string; message: string };
    const now = new Date();
    const sessionTime = await AppStorage.getData("expireAt");
    const token = await AppStorage.getToken();

    let timeNow = now.getTime();

    if (timeNow > sessionTime || token === null) {
      await AppStorage.deleteToken();
      await AppStorage.deleteData("expireAt");
      if (sessionTime) {
        data.code = 1;
        data.route = "AuthStack";
        data.message = "Your session expired!";
        return data;
      } else {
        data.code = 2;
        data.route = "OnBoard";
        data.message = "Session expired!";
        return data;
      }
    } else {
      data.code = 3;
      data.route = "DashboardTab";
      return data;
    }
  };

  static repaymentType = (text: string) => {
    let result = "";
    switch (text) {
      case "in-app-card":
        result = "card";
        break;
      case "in-app-wallet":
        result = "wallet";
        break;
      case "auto-debit-card":
        result = "auto debit";
        break;
      case "in-app-transfer":
        result = "bank transfer";
        break;
      case "auto-debit-wallet":
        result = "admin debit";
        break;
      case "recovery-agent-debit":
        result = "agent debit";
        break;
      default:
        break;
    }
    return result;
  };

  static transactionType = (text: string) => {
    let result = "Other transaction";

    switch (text) {
      case "refund":
        result = "Transaction refund";
        break;
      case "card-addition":
      case "tokenization":
        result = "Add card transaction";
        break;
      case "bill-airtime":
      case "bill-data-bundle":
      case "bill-electricity":
      case "bill-cable-tv":
        result = "Bills payment";
        break;
      case "card-funding":
        result = "Fund wallet with card";
        break;
      case "admin-debit":
        result = "Admin debit";
        break;
      case "wallet-funding":
        result = "Wallet funding";
        break;
      case "loan-repayment":
        result = "Loan repayment";
        break;
      case "transfer-debit":
        result = "Bank transfer debit";
        break;
      case "transfer-credit":
        result = "Bank transfer credit";
        break;
      case "loan-disbursement":
        result = "Loan disbursement";
        break;
      case "loan-disbursement":
        result = "Loan disbursement";
        break;
      case "fund-loan-lien":
        result = "Fund loan lien wallet";
        break;
      case "wallet-refund":
        result = "Wallet refund";
        break;
      case "send-money":
        result = "Send money";
        break;
      case "send-money-fee":
        result = "Send money charge";
        break;
      case "transaction-fee":
        result = "Fund wallet fee";
        break;
      case "promo":
        result = "Promo bonus";
        break;
      case "referral":
        result = "Referral bonus";
        break;
      case "bonanza":
        result = "Biller bonus";
        break;
      case "commission-payout":
        result = "Commission payout";
        break;
      default:
        break;
    }
    return result;
  };

  static billerType = (text: string) => {
    let result = "Biller transaction";
    switch (text) {
      case "bill-airtime":
        result = "Airtime purchase";
        break;
      case "bill-data-bundle":
        result = "Data bundle refill";
        break;
      case "bill-electricity":
        result = "Electricity purchase";
        break;
      case "bill-data-bundle-pin":
        result = "Data bundle pin refill";
        break;
      case "bill-airtime-pin":
        result = "Airtime pin purchase";
        break;
      case "bill-cable-tv":
        result = "Cable Tv purchase";
        break;
      case "payout":
        result = "Commission payout";
        break;
      default:
        break;
    }
    return result;
  };

  static networkDelay = async (max = 5) => {
    const ranValue = Math.floor(Math.random() * max);
    return new Promise((res) => setTimeout(res, ranValue));
  };
}
