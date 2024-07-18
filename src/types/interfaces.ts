export interface navItem {
    name: string,
    path: string,
    icon: JSX.Element
}

export interface officerData {
    firstName: string;
    lastName: string;
    gender: string;
    forceNo: string;
    currentRank: string;
    NIN: string;
    PPA: {station: string};
    contact: {email:string, phoneNumber: string}
}