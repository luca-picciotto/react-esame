export interface Result {
    id:                   string;
    name:                 string;
    address:              string;
    a_number:             string;
    city:                 string;
    province:             string;
    t_number:             string;
    CommissionPensions:   number;
    CommissionNaspi:      number;
    CommissionDSAgricole: number;
    user:                 User;
}

export interface User {
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