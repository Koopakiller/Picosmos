import { PersonViewModel, UserViewModel, CurrencyAccountViewModel, TransactionViewModel, TransactionOverviewViewModel, UserGroupViewModel } from "../ViewModels/FinancesViewModels";
import { KeyValuePair } from "../../Shared/KeyValuePair";

export class PersonServerModel implements IViewModelConvert<PersonViewModel>{

    toViewModel(): PersonViewModel {
        return new PersonViewModel(this.id, this.name);
    }

    public id: number;
    public name: string;
}

export class UserServerModel implements IViewModelConvert<UserViewModel>{

    toViewModel(): UserViewModel {
        return new UserViewModel(this.id, this.name);
    }

    public id: number;
    public name: string;
}

export class UserGroupServerModel implements IViewModelConvert<UserGroupViewModel>{

    toViewModel(): UserGroupViewModel{
        return new UserGroupViewModel(this.id, this.name);
    }

    public id: number;
    public name: number;
}

export class CurrencyAccountServerModel implements IViewModelConvert<CurrencyAccountViewModel>{

    toViewModel(): CurrencyAccountViewModel {
        let currencyNames = this.currencyNames.map(x => x.symbol).join(", ");
        let cavm = new CurrencyAccountViewModel(this.currencyAccountId, this.accountName + " (" + currencyNames + ")");
        cavm.currencySymbols = this.currencyNames.map(x => x.symbol);
        cavm.accountName = this.accountName;
        return cavm;
    }

    public accountId: number;
    public accountName: string;
    public currencyAccountId: number;
    public currencyId: number;
    public currencyNames: CurrencySymbolServerModel[];
}

export class CurrencySymbolServerModel {
    public id: number;
    public symbol: string;
}

export class TransactionServerModel implements IViewModelConvert<TransactionViewModel>{
    toViewModel(): TransactionViewModel {
        let tvm = new TransactionViewModel();
        tvm.currencyAccountId = this.currencyAccountId;
        tvm.id = this.id;
        tvm.note = this.note;
        tvm.personId = this.personId;
        tvm.rawData = this.rawData;
        tvm.timeStampDate = this.timeStampDate;
        tvm.timeStampTime = new Date(this.timeStampTime);
        tvm.userId = this.userId;
        tvm.value = this.value;
        return tvm;
    }

    id: number;
    note: string;
    timeStampDate: Date;
    timeStampTime: string;
    includeTimeStampTime: boolean;
    userId: number;
    personId: number;
    currencyAccountId: number;
    value: number;

    rawData: KeyValuePair<string, string>[] = [];
}

export class TransactionOverviewServerModel implements IViewModelConvert<TransactionOverviewViewModel>{
    toViewModel() {
        let tovm = new TransactionOverviewViewModel();
        tovm.accountName = this.accountName;
        tovm.currencyId = this.currencyId;
        tovm.currencyAccountId = this.currencyAccountId;
        tovm.value = this.value;
        return tovm;
    }
    accountName: string;
    currencyId: number;
    currencyAccountId: number;
    value: number;
}