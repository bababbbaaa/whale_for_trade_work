# ERD: Whale4Trading

## Storage

    # ERD: Whale4trading


    ### Schema:

    We'll need at least the following entities to implement the service:

### **Users**:

    | Column | Type |
    |--------|------|
    | ID | STRING/UUID |
    | Username | STRING |
    | Email | STRING |
    | Password | STRING |
    | number | NUMBER |
    | imgProfile | STRING |
    | balance | number |
    | URL | STRING |
    | statusAccess | STRING |
    | idNF | STRING |
    | idNB | STRING |
    | dateCreate | STRING |

### **Bundle**:

    | Column | Type |
    |--------|------|
    | ID | STRING/UUID |
    | name | STRING |
    | price | NUMBER |
    | win | NUMBER |
    | timeCreated | TimeStamp |
    | ImgBundle | STRING |
    | category | STRING |

### **orders**:

    | Column | Type |
    |--------|------|
    | ID | STRING/UUID |
    | BundleId | STRING |
    | UserId | STRING/UUID |
    | price | STRING |
    | timeBuy | Timestamp |
    | timeEnd | Timestamp |

### **Server**:

    | Column | Type |
    |--------|------|
    | price  | STRING |
    | timeCreated | TimeStamp |

### **Transaction**:

    | Column | Type |
    |--------|------|
    | id  | STRING/UUID  |
    |userId | STRING/UUID|
    | category  | STRING |
    | timeJoin | TimeStamp |

### **tree**:

    | Column | Type |
    |--------|------|
    | id  | STRING/UUID  |
    | userId  | STRING |
    | Bundle | STRING |
    | timeJoin | TimeStamp |
