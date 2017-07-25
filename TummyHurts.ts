class Hurt{
    title:string;
    postive:boolean;//decides which question to choose, negative or positive
    fact:string; // the chossen one out of below 2
    positiveFact:string;
    negativeFact:string;
    questions:string[]=[];
}

class Question{
    question:string;
    thumbsup:boolean;
}

class MasterData{
    entries:Hurt[];

}

class UserHurts{
    user:User;
    hurt:Hurt;//todo: need to choose negative or positive while creating Hurt
    randomOrderOfQuestion:number[]=[];
    userAnswer:boolean[]=[];

    getScore():number{
        return null;
    }

}

class User{
    email:string;

}
