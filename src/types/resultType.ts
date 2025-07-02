export interface Result {
    id:           string;
    email:        string;
    password:     string;
    dateInit:     Date;
    dateModified: Date;
    firstAccess:  boolean;
    permissions:  Permission[];
}

export interface Permission {
    id:         string;
    name:       string;
    roleNumber: null;
}