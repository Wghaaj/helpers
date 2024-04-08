console.log('It works!')

class User {
    _forename;
    _surname;
    _year;

    constructor(forename, surname, year) {
        this._forename = forename
        this._surname = surname
        this._year = year
    };

    get forename() {
        return this._forename
    };

    get surname() {
        return this._surname
    };

    get year() {
        return this._year
    };

    get age() {
        return (new Date).getFullYear() - this._year
    };

    get fullName() {
        return this._forename + " " + this._surname
    };
};

class Student extends User {
    _mark;
    _presence;

    constructor(forename, surname, year) {
        super(forename, surname, year);
        this._mark = new Array(30);
        this._presence = new Array(30).fill(null);
    };

    present() {
        const index = this._presence.findIndex(value => value === null)

        if(index !== -1){
            this._presence[index] = true;
            return true 
        };

        return false 
    };

    absent() {
        const index = this._presence.findIndex(value => value === null)

        if(index !== -1){
            this._presence[index] = false;
            return false
        };
    };

    setMark(mark) {
        if (typeof mark === "number" && mark >= 0 && mark <= 10) {
            const index = this._mark.findIndex(value => typeof value !== "number");
            if (index !== -1) {
                this._mark[index] = mark;
                return mark;
            } else {
                console.log("Mark" + mark + " is invalid. It should be between 0 and 10");
            }
        }
    };

    mediumMark() {
        let marks = this._mark.filter(mark => typeof mark === "number");
        let sum = marks.reduce((acc, el) => acc + el, 0);
        let medium = Math.round(sum / marks.length)

        return medium
    };

    mediumVisit() {
        let visits = this._presence.filter(presence => presence === true).length;
        let totalVisits = this._presence.length;
        let medium = Math.round((visits / totalVisits) * 100) / 10
        
        return medium
    }  ;
    
    summary () {
        if(this.mediumMark() >= 9 && this.mediumVisit() >= 0.9){
            console.log("Medium mark: " + this.mediumMark() + " Medium visit: " + this.mediumVisit() + " Well done!")
        } else if (this.mediumMark() >= 9 || this.mediumMark() < 9 && this.mediumVisit() >= 0.9 || this.mediumVisit() <= 0.9 ){
            console.log("Medium mark: " + this.mediumMark() + " Medium visit: " + this.mediumVisit() + " Good, but you could do better")
        } else {
            console.log("Medium mark: " + this.mediumMark() + " Medium visit: " + this.mediumVisit() + " Bad, you will learn nothing this way")
        };
    };
};

class Teacher extends Student {
    _groups;

    constructor(forename, surname, year) {
        super(forename, surname, year);
        this._groups = [];
    }

    get groups() {
        return this._groups;
    }

    addGroups(group) {
        this._groups.push(group);
    }

    changeStatus(group) {
        const index = this._groups.findIndex(value => value.name === group.name);
        if (index !== -1) {
            this._groups[index].active = !this._groups[index].active;
        }
    }

    get activeGroups() {
        return this._groups.filter(group => group.active);
    }
};