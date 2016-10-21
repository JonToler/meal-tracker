

  export interface IMeal {
      name: string;
      details: string;
      calories: number;

    }

    export class Meal implements IMeal {
      done: boolean = false;
      constructor(public name: string, public details: string, public calories: number){}

    }
